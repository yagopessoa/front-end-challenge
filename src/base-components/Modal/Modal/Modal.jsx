import React, { Component } from 'react';
import ReactDOM from 'react-dom'; // eslint-disable-line
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import { Card, CardHeader, CloseButton, CloseIcon } from './styles';
import { DialogContainer, Bg, Global } from '../DialogStyles';
import { getBgTransitionStyle, defaultDuration, hideScrollBar, showScrollBar } from '../utils';

const isClosed = (open, transition) => !open && !transition;

const isOpen = (open, transition) => open && !transition;

const isOpenning = (open, transition) => open && transition;

class Modal extends Component {
  constructor(props) {
    super();
    if (props.show) {
      this.pos = hideScrollBar(document.body);
    }
    this.state = {
      lastShow: props.show,
      open: props.show, // either open or closed
      transition: false, // oppening or closing
    };
  }

  static getDerivedStateFromProps(props, state) {
    /* Fechado */
    if (isClosed(state.open, state.transition)) {
      if (props.show && props.show !== state.lastShow) {
        return { open: true, transition: true, lastShow: props.show };
      }
    }
    /* Aberto */
    if (isOpen(state.open, state.transition)) {
      if (!props.show && props.show !== state.lastShow) {
        return { open: false, transition: true, lastShow: props.show };
      }
    }
    return { lastShow: props.show };
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentDidUpdate() {
    const { transition, open } = this.state;
    if (transition === true && open === false) {
      this.handleTransitionEnd(this.mounted)();
    }
  }

  componentWillUnmount() {
    this.mounted = false;
    clearTimeout(this.openCloseTimeout);
    showScrollBar(document.body, this.pos);
  }

  handleTransitionEnd = (check = true) => () => {
    this.openCloseTimeout = setTimeout(() => {
      if (check) {
        this.setState({ transition: false });
      }
    }, 2 * this.props.duration);
  };

  getCardTransitionStyle = (duration, position, animation, animateFrom) => {
    const positioning = position
      ? {
          position: 'absolute',
          [position.fromY || 'top']: `${position.y}px`,
          [position.fromX || 'left']: `${position.x}px`,
        }
      : {};

    return {
      entering: {
        opacity: 0,
        transform: `translateY(${animateFrom})`,
        ...positioning,
      },
      entered: {
        opacity: 1,
        transform: 'translateY(0px)',
        transition: `all ${duration}ms ${animation.in}`,
        ...positioning,
      },
      exiting: {
        opacity: 0,
        transform: `translateY(${animateFrom})`,
        transition: `all ${duration}ms ${animation.out}`,
        ...positioning,
      },
      exited: {
        opacity: 0,
        ...positioning,
      },
    };
  };

  handleEnterModal = () => {
    const { onAppearStart } = this.props;
    onAppearStart();
    this.pos = hideScrollBar(document.body);
  };

  handleLeaveModal = () => {
    const { onLeaved } = this.props;
    onLeaved();
    showScrollBar(document.body, this.pos);
  };

  close = () => {
    this.setState({ open: false, transition: true }, this.handleTransitionEnd());
  };

  bgTransition = state => {
    const { closable, duration } = this.props;
    if (closable) {
      return <Bg onClick={this.close} style={getBgTransitionStyle(duration)[state]} />;
    }
    return <Bg style={getBgTransitionStyle(duration)[state]} />;
  };

  parseAnimation = animation => {
    if (!animation.in || !animation.out) {
      return {
        in: animation,
        out: animation,
      };
    }
    return animation;
  };

  cardTransition = state => {
    const {
      duration,
      children,
      closeButton,
      label,
      labelAlign,
      overflow,
      closeButtonPadding,
      position,
      animation,
      animateFrom,
      cardRef,
      fullscreen,
    } = this.props;
    return (
      <Card
        fullscreen={fullscreen}
        ref={cardRef}
        style={
          this.getCardTransitionStyle(
            duration,
            position,
            this.parseAnimation(animation),
            animateFrom,
          )[state]
        }
        overflow={overflow}
      >
        {label ? <CardHeader labelAlign={labelAlign}>{label}</CardHeader> : null}
        {closeButton ? (
          <CloseButton closeButtonPadding={closeButtonPadding} onClick={this.close}>
            <CloseIcon />
          </CloseButton>
        ) : null}
        {children}
      </Card>
    );
  };

  handleEntered = () => {
    const { onAppeared } = this.props;
    this.setState(state => {
      if (isOpenning(state.open, state.transition) && !state.lastShow) {
        return { open: false };
      }
      return { transition: false };
    }, onAppeared);
  };

  render() {
    const { duration, onLeaveStart, elementId, insertComponent } = this.props;
    const { open, transition } = this.state;
    const transitionSharedProps = {
      mountOnEnter: true,
      unmountOnExit: true,
      in: open,
    };
    return ReactDOM.createPortal(
      <>
        <DialogContainer show={open || transition}>
          <Transition {...transitionSharedProps} timeout={{ enter: duration, exit: 2 * duration }}>
            {this.bgTransition}
          </Transition>
          {insertComponent}
          <Transition
            {...transitionSharedProps}
            onEnter={this.handleEnterModal}
            onEntered={this.handleEntered}
            onExit={onLeaveStart}
            onExited={this.handleLeaveModal}
            timeout={{ enter: 2 * duration, exit: duration }}
          >
            {this.cardTransition}
          </Transition>
        </DialogContainer>
        <Global />
      </>,
      document.getElementById(elementId),
    );
  }
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.element),
  ]),
  duration: PropTypes.number,
  label: PropTypes.string,
  labelAlign: PropTypes.string,
  closable: PropTypes.bool,
  closeButton: PropTypes.bool,
  closeButtonPadding: PropTypes.string,
  show: PropTypes.bool,
  onAppearStart: PropTypes.func,
  onAppeared: PropTypes.func,
  onLeaveStart: PropTypes.func,
  onLeaved: PropTypes.func,
  overflow: PropTypes.string,
  elementId: PropTypes.string,
  animation: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      in: PropTypes.string,
      out: PropTypes.string,
    }),
  ]),
  animateFrom: PropTypes.string,
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    fromX: PropTypes.string,
    fromY: PropTypes.string,
  }),
  // eslint-disable-next-line react/forbid-prop-types
  cardRef: PropTypes.any,
  insertComponent: PropTypes.element,
  fullscreen: PropTypes.bool,
};

Modal.defaultProps = {
  children: null,
  duration: defaultDuration,
  label: '',
  labelAlign: 'left',
  closable: true,
  closeButton: false,
  closeButtonPadding: '10px 14px',
  show: false,
  onAppearStart: () => {},
  onAppeared: () => {},
  onLeaveStart: () => {},
  onLeaved: () => {},
  overflow: '',
  elementId: 'modal',
  position: null,
  animation: {
    in: 'cubic-bezier(.17,1.92,.3,.71)',
    out: 'cubic-bezier(1,.23,.76,-1.11)',
  },
  animateFrom: '-150px',
  cardRef: undefined,
  insertComponent: null,
  fullscreen: false,
};

export default Modal;

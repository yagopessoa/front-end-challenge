export const getBgTransitionStyle = duration => ({
  entering: {
    opacity: 0,
  },
  entered: {
    opacity: 0.15,
    transition: `opacity ${duration}ms cubic-bezier(0.47, 0, 0.745, 0.715)`,
  },
  exiting: {
    opacity: 0,
    transition: `opacity ${duration}ms cubic-bezier(0.39, 0.575, 0.565, 1)`,
    transitionDelay: `${duration}ms`,
  },
  exited: {
    opacity: 0,
  },
});

export const defaultDuration = 270;

export const hideScrollBar = target => {
  const body = target;
  const pos = window.scrollY;
  body.classList.add('modal-open');
  body.style.top = `-${pos}px`;
  return pos;
};

export const showScrollBar = (target, pos) => {
  const body = target;
  body.classList.remove('modal-open');
  body.style.top = '';
  window.scrollTo(0, pos);
};

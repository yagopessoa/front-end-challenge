import { useMemo } from 'react';
import PropTypes from 'prop-types';

import EditButton from '../../base-components/EditButton';
import RemoveButton from '../../base-components/RemoveButton';
import Card from '../../base-components/Card';

import {
  ButtonsContainer,
  CheckBox,
  Container,
  Spacer,
  TodoTitle,
} from './styles';

function Todo({ id, title, checked, onCheck, onEdit, onRemove }) {
  const handleChange = event => {
    onCheck(event.target.checked);
  };

  const todo = useMemo(() => ({ id, title, checked }), [id, title, checked]);

  const handleEdit = () => {
    onEdit(todo);
  };

  const handleRemove = () => {
    onRemove(todo);
  };

  return (
    <Card>
      <Container>
        <CheckBox
          id={`todo-check-${id}`}
          checked={checked}
          onChange={handleChange}
        />
        <TodoTitle htmlFor={`todo-check-${id}`} checked={checked}>
          {title}
        </TodoTitle>
        <Spacer />
        <ButtonsContainer>
          {checked ? null : <EditButton onClick={handleEdit} />}
          <RemoveButton onClick={handleRemove} />
        </ButtonsContainer>
      </Container>
    </Card>
  );
}

Todo.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  checked: PropTypes.bool,
  onCheck: PropTypes.func,
  onEdit: PropTypes.func,
  onRemove: PropTypes.func,
};

Todo.defaultProps = {
  id: 'lorem',
  title: 'ToDo',
  checked: false,
  onCheck: () => {},
  onEdit: () => {},
  onRemove: () => {},
};

export default Todo;

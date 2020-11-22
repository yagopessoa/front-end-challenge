import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';

import Title from './base-components/Title';
import Button from './base-components/Button';
import AddButton from './base-components/AddButton';
import TextInputDialog from './base-components/TextInputDialog';

import Todo from './components/Todo';

const Container = styled.div`
  padding: 24px;
`;

function App() {
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState('');
  const [todoChecked, setTodoChecked] = useState(false);
  const [todoId] = useState(uuid());

  return (
    <Container>
      <Title>Hello World!</Title>
      <br />
      <br />

      <AddButton />
      <br />
      <br />

      <Todo
        id={todoId}
        title="Some Todo here"
        checked={todoChecked}
        onCheck={setTodoChecked}
        onEdit={todo => console.log('Clicked on Edit!', todo)}
        onRemove={todo => console.log('Clicked on Remove!', todo)}
      />
      <br />

      <Button onClick={() => setShowModal(true)}>Open text dialog</Button>
      <TextInputDialog
        title="Title"
        show={showModal}
        textValue={value}
        onTextChange={setValue}
        onCancel={() => setShowModal(false)}
        onConfirm={() => setShowModal(false)}
      />
    </Container>
  );
}

export default App;

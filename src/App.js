import { useState } from 'react';
import styled from 'styled-components';

import Title from './components/Title';
import Button from './components/Button';
import AddButton from './components/AddButton';
import EditButton from './components/EditButton';
import RemoveButton from './components/RemoveButton';
import Card from './components/Card';
import TextInputDialog from './components/TextInputDialog';

const Container = styled.div`
  padding: 24px;
`;

function App() {
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState('');

  return (
    <Container>
      <Title>Hello World!</Title>
      <br />
      <br />
      <Button>I'm a button</Button>
      <br />
      <br />
      <AddButton />
      <br />
      <br />
      <EditButton />
      <br />
      <br />
      <RemoveButton />
      <br />
      <br />
      <Card>Some content</Card>
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

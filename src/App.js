import { useState } from 'react';
import styled from 'styled-components';

import Title from './base-components/Title';
import Button from './base-components/Button';
import AddButton from './base-components/AddButton';
import EditButton from './base-components/EditButton';
import RemoveButton from './base-components/RemoveButton';
import Card from './base-components/Card';
import TextInputDialog from './base-components/TextInputDialog';

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

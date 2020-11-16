import Title from './components/Title';
import Button from './components/Button';
import AddButton from './components/AddButton';
import EditButton from './components/EditButton';
import RemoveButton from './components/RemoveButton';
import Card from './components/Card';

function App() {
  return (
    <div style={{ padding: 32 }}>
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
    </div>
  );
}

export default App;

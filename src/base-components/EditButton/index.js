import Icon from '@mdi/react';
import { mdiPencil } from '@mdi/js';

import Button from '../Button';

function EditButton(props) {
  return (
    <Button circle {...props}>
      <Icon path={mdiPencil} />
    </Button>
  );
}

export default EditButton;

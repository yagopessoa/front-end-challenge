import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';

import Button from '../Button';

function AddButton(props) {
  return (
    <Button large circle {...props}>
      <Icon path={mdiPlus} />
    </Button>
  );
}

export default AddButton;

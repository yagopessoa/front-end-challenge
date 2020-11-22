import Icon from '@mdi/react';
import { mdiTrashCan } from '@mdi/js';

import Button from '../Button';

function RemoveButton(props) {
  return (
    <Button circle {...props}>
      <Icon path={mdiTrashCan} />
    </Button>
  );
}

export default RemoveButton;

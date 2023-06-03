import { FC } from 'react';

import ToggleButton from 'react-bootstrap/ToggleButton';

//@ts-ignore
export const Button: FC = ({ checked, onChange, id }) => {
  // const [checked, setChecked] = useState(false);
  return (
    <ToggleButton
      className="mb-2"
      id={id}
      type="checkbox"
      variant="outline-primary"
      checked={checked}
      value="1"
      onChange={onChange}>
      Комментарии
    </ToggleButton>
  );
};

export default Button;

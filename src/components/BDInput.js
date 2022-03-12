import { FormControl } from 'react-bootstrap';
import '../assets/scss/BDInput.scss';

export default function BDInput ({ className, ...rest }) {
  return (
    <FormControl
      {...rest}
      placeholder={rest.placeholder}
      className={`bd-input py-3 ps-3 border-primary ${className}`}
      aria-label="Example text with button addon"
      aria-describedby="basic-addon1"
    />
  );
}

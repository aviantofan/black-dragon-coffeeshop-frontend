import { ToggleButton } from 'react-bootstrap';
import '../assets/scss/BDCheckbox.scss';

export default function BDCheckbox ({ id, value, label, type, className, variant }) {
  const isCircle = variant === 'circle';

  return (
    <ToggleButton
      className={`bd-checkbox btn-checkbox ${isCircle ? '' : 'rounded btn-secondary text-cream'} ${className}`}
      id={id}
      value={value}
      type={type}>
      {label}
    </ToggleButton>
  );
}

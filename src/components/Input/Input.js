import Proptypes from "prop-types";
import cn from 'classnames';
import style from './Input.module.scss';

const Input = ({
  id,
  label,
  onChange,
  theme,
  className,
  ...restInputProps
}) => {

  const handleChange = (e) => {
    onChange && onChange(e);
  };

  return (
    <div
      className={
        cn(style.root, style[theme], className)
      }
    >
      <input
        className={cn(className)}
        onChange={handleChange}
        id={id}
        {...restInputProps}
      />
      <label htmlFor={id}>{label}</label>
      <div className={style.bar}/>
    </div>
  )
};

Input.propTypes = {
  id: Proptypes.string,
  label: Proptypes.string,
  onChange: Proptypes.func,
  className: Proptypes.string,
  theme: Proptypes.oneOf(['black', 'white']),
};

Input.defaultProps = {
  theme: 'black',
};

export default Input;
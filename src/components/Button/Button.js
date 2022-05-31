import Proptypes from "prop-types";
import cn from 'classnames';
import style from './Button.module.scss';

const Button = ({
  children,
  theme,
  className,
  onClick,
  type,
  ...rest
}) => {
  return (
    <button
      className={cn(
        style.root,
        style[theme],
        className,
      )}
      onClick={onClick}
      {...rest}
    >
      <span>
        {children}
      </span>
    </button>
  )
};

Button.propTypes = {
  children: Proptypes.node,
  theme: Proptypes.oneOf(['dark', 'white', 'reversePink', 'pink']),
  className: Proptypes.string,
  onClick: Proptypes.func,
  type: Proptypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  theme: 'white',
  type: 'button',
};

export default Button;
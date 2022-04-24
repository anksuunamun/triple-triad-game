import Proptypes from "prop-types";
import cn from 'classnames';
import style from './Button.module.scss';

const Button = ({
  children,
  theme,
  className,
  onClick,
  ...rest
}) => {
  return (
    <button
      {...{
        className: cn(
          style.root,
          style[theme],
          className,
        ),
        onClick,
        ...rest,
      }}>
      {children}
    </button>
  )
};

Button.propTypes = {
  children: Proptypes.node,
  theme: Proptypes.oneOf(['dark', 'white']),
  className: Proptypes.string,
  onClick: Proptypes.func.isRequired,
};

Button.defaultProps = {
  theme: 'white',
};

export default Button;
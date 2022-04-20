import React from "react";
import Proptypes from "prop-types";
import cn from 'classnames';
import style from './Text.module.css';

const Text = ({element, children, className, strong, italic, disabled}) => {
  return React.createElement(element,
    {
      className: cn(
        className,
        style.root,
        {
          [style.strong]: strong,
          [style.italic]: italic,
          [style.disabled]: disabled,
        }
      ),
    },
    children);
};

Text.propTypes = {
  element: Proptypes.oneOf(['div', 'p', 'span']),
  children: Proptypes.node,
  className: Proptypes.string,
  strong: Proptypes.bool,
  italic: Proptypes.bool,
  disabled: Proptypes.bool,
};

Text.defaultProps = {
  element: 'div',
  strong: false,
  italic: false,
  disabled: false,
}

export default Text;
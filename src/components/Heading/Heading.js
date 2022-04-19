import React from "react";
import cn from 'classnames';
import Proptypes from "prop-types";
import style from './Heading.module.scss';

const Heading = ({level, children, className, backLine}) => {
  return React.createElement(
    `h${level}`,
    {
      className: cn(
        style.root,
        style[`level${level}`],
        className,
        {
          [style.backLine]: backLine,
        }
      )
    },
    children);
};

Heading.propTypes = {
  level: Proptypes.oneOf([1, 2, 3, 4, 5]),
  children: Proptypes.node,
  className: Proptypes.string,
  backLine: Proptypes.bool,
};

Heading.defaultProps = {
  level: 1,
  backLine: false,
};

export default Heading;
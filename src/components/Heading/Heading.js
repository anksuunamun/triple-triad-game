import React from "react";
import cn from 'classnames';
import Proptypes from "prop-types";
import style from './Heading.module.css';

const Heading = ({level, children, className}) => {
  return React.createElement(`h${level}`,
    {
      className: cn(style.root, style[`level${level}`], className)
    },
    children);
};

Heading.propTypes = {
  level: Proptypes.oneOf([1, 2, 3, 4, 5]),
  children: Proptypes.node,
  className: Proptypes.string,
};

Heading.defaultProps = {
  level: 1,
};

export default Heading;
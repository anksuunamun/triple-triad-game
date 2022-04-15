import cn from 'classnames';
import Proptypes from 'prop-types';
import style from './Container.module.css';

const Container = ({className, children}) => {
  return (
    <div className={cn(style.root, className)}>
      {children}
    </div>
  )
};

Container.propTypes = {
  className: Proptypes.string,
  children: Proptypes.node,
};

export default Container;
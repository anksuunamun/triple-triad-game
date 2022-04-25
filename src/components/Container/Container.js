import cn from 'classnames';
import Proptypes from 'prop-types';
import style from './Container.module.scss';

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
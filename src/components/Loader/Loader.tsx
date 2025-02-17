import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <RotatingLines width="96" strokeWidth="3" />
    </div>
  );
};

export default Loader;

import { FC } from 'react';
import css from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  handleLoadMore: () => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ handleLoadMore }) => {
  return (
    <div className={css.thumb}>
      <button onClick={handleLoadMore} className={css.button} type="button">
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;

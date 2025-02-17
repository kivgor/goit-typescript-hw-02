import { FC } from 'react';
import css from './ImageCard.module.css';
import { Image, Urls, User } from '../App/App.types';

interface ImageCardProps {
  urls: Urls;
  alt_description: string;
  likes: number;
  user: User;
  openModal: (regular: string, alt_description: string) => void;
}

const ImageCard: FC<ImageCardProps> = ({
  urls,
  alt_description,
  likes,
  user,
  openModal,
}) => {
  return (
    <>
      <div className={css.text}>
        <span className={css.bold}>Autor: </span> {user.name}
      </div>
      <div>
        <img
          className={css.img}
          src={urls.small}
          alt={alt_description}
          onClick={() => openModal(urls.regular, alt_description)}
        />
      </div>
      <div className={css.text}>
        <span className={css.bold}>Likes: </span> {likes}
      </div>
    </>
  );
};

export default ImageCard;

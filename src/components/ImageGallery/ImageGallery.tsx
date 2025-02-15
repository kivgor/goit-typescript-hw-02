import { FC } from 'react';
import ImageCard from '../ImageCard/ImageCard.js';
import css from './ImageGallery.module.css';
import { Image } from '../App/App.types.js';

interface ImageGalleryProps {
  imageList: Image[];
  openModal: { regular: string; alt_description: string };
}

const ImageGallery: FC<ImageGalleryProps> = ({ imageList, openModal }) => {
  return (
    <ul className={css.list}>
      {imageList.map(image => (
        <li key={image.id} className={css.item}>
          <ImageCard {...image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

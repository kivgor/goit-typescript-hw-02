import 'modern-normalize';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Loader from '../Loader/Loader.js';
import ImageModal from '../ImageModal/ImageModal.js';
import SearchBar from '../SearchBar/SearchBar.js';
import ImageGallery from '../ImageGallery/ImageGallery.js';
import ErrorMessage from '../ErrorMessage/ErrorMessage.js';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.js';
import { fetchImagesByQuery } from '../../services/api.js';
import { Image } from './App.types.js';

function App() {
  const [imageList, setImageList] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const [totalPages, setTotalPages] = useState<number>(0);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [urlForModal, setUrlForModal] = useState<string>('');
  const [altForModal, setAltForModal] = useState<string>('');

  useEffect(() => {
    if (!query) {
      return;
    }

    const getImagesData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results, total_pages } = await fetchImagesByQuery(query, page);
        console.log(results);

        setImageList(prev => [...prev, ...results]);
        setTotalPages(total_pages);
        if (total_pages === 0) {
          toast.error('No images by query: ' + query);
          return;
        }
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getImagesData();
  }, [query, page]);

  const handleChangeQuery = (newQuery: string): void => {
    if (newQuery === query) {
      toast.error('Please change query!');
      return;
    }
    setQuery(newQuery);
    setImageList([]);
    setPage(1);
  };

  const handleLoadMore = (): void => {
    setPage(prev => prev + 1);
  };

  function openModal(url: string, alt: string): void {
    setUrlForModal(url);
    setAltForModal(alt);
    setIsOpen(true);
  }

  function closeModal(): void {
    setIsOpen(false);
  }

  return (
    <>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      {imageList.length > 0 && (
        <ImageGallery imageList={imageList} openModal={openModal} />
      )}
      {imageList.length > 0 && page < totalPages && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        urlForModal={urlForModal}
        altForModal={altForModal}
      />
    </>
  );
}

export default App;

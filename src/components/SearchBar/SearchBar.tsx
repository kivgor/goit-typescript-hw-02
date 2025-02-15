import { useState, FormEvent, FC } from 'react';
import css from './SearchBar.module.css';
import toast from 'react-hot-toast';

interface SearchBarProps {
  handleChangeQuery: (value: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ handleChangeQuery }) => {
  const [value, setValue] = useState<string>('');
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (evt.target.search.value === '') {
      toast.error('Please enter query!');
      return;
    }

    handleChangeQuery(value);
    evt.target.reset();
  };

  return (
    <header>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
          onChange={evt => setValue(evt.target.value.trim())}
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};
export default SearchBar;

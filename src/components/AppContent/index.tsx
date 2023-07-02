import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../store';
import SearchHero from '../SearchHero';
import Header from '../Header';
import HeroList from '../HeroList';
import { fetchAllHeroes } from '../../store/actions/fetchAllHeroes';
import { AnyAction } from 'redux';

const AppContent = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    dispatch(fetchAllHeroes() as unknown as AnyAction);
  }, []);

  return (
    <>
      <Header
        page={page}
        setPage={setPage}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      {page === 1 ? <SearchHero /> : <HeroList />}
    </>
  );
}

export default AppContent;

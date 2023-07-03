import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../store';
import SearchHero from '../SearchHero';
import Header from '../Header';
import HeroList from '../HeroList';
import { fetchAllHeroes } from '../../store/actions/fetchAllHeroes';
import { AnyAction } from 'redux';
import { AppContentContainer } from './style';

const AppContent = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(fetchAllHeroes() as unknown as AnyAction);
  }, []);

  return (
    <AppContentContainer>
      <Header
        page={page}
        setPage={setPage}
      />
      {
        page === 1 ? (
          <SearchHero
            asModal={false}
          />
        ) : (
          <HeroList />
        )
      }
    </AppContentContainer>
  );
}

export default AppContent;
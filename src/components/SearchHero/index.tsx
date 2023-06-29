import { useState } from "react";
import { RootState, useAppDispatch } from "../../store";
import { fetchHero } from "../../store/actions/fetchHero";
import { AnyAction } from "redux";
import { useSelector } from "react-redux";


const SearchHero = () => {
  const dispatch = useAppDispatch();
  const [hero, setHero] = useState('');

  const heroData = useSelector((state: RootState) => state.hero.hero);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHero(event.target.value);
  };

  const handleSearch = () => {
    dispatch(fetchHero(hero) as unknown as AnyAction);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search for a hero"
        value={hero}
        onChange={handleInputChange}
        onSubmit={handleSearch}
      />
      <div>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <h1>{heroData?.name}</h1>
        <p>{heroData?.description}</p>
        <img src={`${heroData?.thumbnail.path}.${heroData?.thumbnail.extension}`} alt={heroData?.name} />
        <p>Comics: {heroData?.comics}</p>
        <p>Series: {heroData?.series}</p>
        <p>Stories: {heroData?.stories}</p>
        <p>Events: {heroData?.events}</p>
      </div>
    </>
  )
};

export default SearchHero;

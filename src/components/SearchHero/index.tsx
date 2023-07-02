import { RootState } from "../../store";
import { useSelector } from "react-redux";

const SearchHero = () => {

  const heroData = useSelector((state: RootState) => state.hero.hero);

  return (
    <>
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

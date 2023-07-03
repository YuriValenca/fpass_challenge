import { RootState } from "../../store";
import { useSelector } from "react-redux";
import {
  SearchHeroContainer,
  HeroTextContainer,
  HeroTitle,
  HeroDescription,
  HeroImageContainer,
} from './style';
import { heroDescriptionText } from "../../helpers/heroDescriptionText";
import heroNotFound from "../../assets/images/notFound.gif";

const SearchHero = () => {
  const heroData = useSelector((state: RootState) => state.hero.hero);

  return (
    <SearchHeroContainer>
      {!heroData.id && (
        <HeroImageContainer>
          <img
            src={heroNotFound}
            alt="Hero not found GIF"
          />
        </HeroImageContainer>
      )}
      <HeroImageContainer>
        <img
          src={`${heroData?.thumbnail.path}.${heroData?.thumbnail.extension}`}
          alt={heroData?.name}
        />
      </HeroImageContainer>
      <HeroTextContainer>
        <HeroTitle>{heroData?.name.toUpperCase()}</HeroTitle>
        <HeroDescription>{heroDescriptionText(heroData)}</HeroDescription>
      </HeroTextContainer>
    </SearchHeroContainer>
  )
};

export default SearchHero;

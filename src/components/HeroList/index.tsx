import { RootState } from "../../store";
import { useSelector } from "react-redux";

const HeroList = () => {
  const heroListData = useSelector((state: RootState) => state.heroList.heroes);
  return (
    <div>
      <h1>Hero List</h1>
      <ul>
        {
          heroListData.map((hero) => (
            <>
              <li>
                {hero.name}
              </li>
              <li>
                <img src={`${hero?.thumbnail.path}.${hero?.thumbnail.extension}`} alt={hero?.name} />
              </li>
            </>
          ))
        }
      </ul>
    </div>
  );
};

export default HeroList;

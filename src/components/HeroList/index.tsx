import { RootState, useAppDispatch } from "../../store";
import { fetchAllHeroes } from "../../store/actions/fetchAllHeroes";
import { AnyAction } from "redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const HeroList = () => {
  const dispatch = useAppDispatch();
  const heroListData = useSelector((state: RootState) => state.heroList.heroes);

  useEffect(() => {
    dispatch(fetchAllHeroes() as unknown as AnyAction);
  }, []);
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

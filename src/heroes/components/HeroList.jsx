import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"
import { HeroCard } from "./HeroCard";

export const HeroList = ({publisher}) => {

    const heroes = useMemo(() => {
        return getHeroesByPublisher(publisher)
    }, [publisher]); 

  return (
    <>
    <div className="row rows-cols-1 row-cols-md-3 g-3">
        {
            heroes.map(hero => (
                <HeroCard key={hero.id} {...hero}/> //Le paso el ID y todo el hero
            ))
        }
    </div>
    </>
  )
}

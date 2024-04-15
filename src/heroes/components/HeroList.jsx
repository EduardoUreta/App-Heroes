import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"
import { HeroCard } from "./HeroCard";

export const HeroList = ({publisher}) => {

    const heroes = useMemo(() => {
        return getHeroesByPublisher(publisher)
    }, [publisher]); 

  return (
    <>
    <div className="row g-2">
        {
            heroes.map(hero => (
                <HeroCard key={hero.id} {...hero}/> //Le paso el ID y todo el hero
            ))
        }
    </div>
    </>
  )
}

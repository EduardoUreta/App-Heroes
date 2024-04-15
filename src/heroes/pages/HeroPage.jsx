import { Navigate, redirect, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById";
import { useMemo } from "react";

export const HeroPage = () => {

  const params = useParams();
  // const {heroId} = useParams();
  const hero = useMemo(() => {
    return getHeroById(params.heroId)
  },[params.heroId]);

  const navigate = useNavigate();
  const onNavigateBack = () => {
    if(hero.publisher === "Marvel Comics"){
      navigate("/marvel"),{
        redirect: true
      };
    } else if (hero.publisher === "DC Comics"){
      navigate("/dc"),{
        redirect: true
      };
    }
  };

  if(!hero) {
    // Si no existe el heroe, lo manda a esta redirección
    return <Navigate to="/marvel"/>
  }  

  const formatCharacters = (characters, alter_ego) => {
    const separarCharacters = characters.split(',');
    const filtrarCharacters = separarCharacters.filter(character => character !== alter_ego);
    return filtrarCharacters.join(', ');
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={`/assets/heroes/${hero.id}.jpg`} alt={hero.superhero} className="img-fluid img-thumbnail "/>
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush ">
          <li className="list-group-item"><b>Alter Ego: </b>{hero.superhero}</li>
          <li className="list-group-item"><b>Publicado por: </b>{hero.publisher}</li>
          <li className="list-group-item"><b>Primera Aparición: </b>{hero.first_appearance}</li>
          <li className="list-group-item"><b>Alter Ego: </b>{hero.alter_ego}</li>
        </ul>
        {
          (hero.alter_ego !== hero.characters) 
          && 
          (<p className="card-text mt-2">Otros que han sido {hero.superhero}: <br></br> {formatCharacters(hero.characters, hero.alter_ego)}</p>)
        }

        <button 
          className="btn btn-outline-danger"
          onClick={onNavigateBack}
        >
          Regresar Atrás
        </button>
      </div>
    </div>
  )
}


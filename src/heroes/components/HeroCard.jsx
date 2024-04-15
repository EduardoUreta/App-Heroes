import { Link } from "react-router-dom"

export const HeroCard = ({...hero}) => {

    const formatCharacters = (characters, alter_ego) => {
        const separarCharacters = characters.split(',');
        const filtrarCharacters = separarCharacters.filter(character => character !== alter_ego);
        return filtrarCharacters.join(', ');
    }

  return (
    <>
    <div className="col-md-3">
        <div className="card" key={hero.id}>
            <div className="row">
                <div>
                    <img src={`/assets/heroes/${hero.id}.jpg`} className="img-thumbnail img-fluid w-100" alt={hero.superhero}/>
                </div>
            </div>
            <div className="card-body">
                <h6 className="card-title">Nombre: {hero.superhero}</h6>
                <p className="card-text">Publicado por: {hero.publisher}</p>
                <p className="card-text">Alter Ego: {hero.alter_ego}</p>
                {
                    (hero.alter_ego !== hero.characters) 
                    && 
                    (<p className="card-text">Otros que han sido {hero.superhero}: {formatCharacters(hero.characters, hero.alter_ego)}</p>)
                }
                <p className="text-muted">Primera aparición: {hero.first_appearance}</p>
            </div>

            <Link 
                to={`/hero/${hero.id}`}
            >
                Ver Más...
            </Link>

        </div>
    </div>
    </>
  )
}

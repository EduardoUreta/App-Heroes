import { Link } from "react-router-dom"

export const HeroCard = ({...hero}) => {

    const formatCharacters = (characters, alter_ego) => {
        const separarCharacters = characters.split(',');
        const filtrarCharacters = separarCharacters.filter(character => character !== alter_ego);
        return filtrarCharacters.join(', ');
    }

  return (
    <>
    <div className="col">
        <div className="card" key={hero.id}>
            <div className="row no-gutters">
                <div className="col-6">  
                    <img src={`/assets/heroes/${hero.id}.jpg`} className="img-thumbnail img-fluid animate__animated animate__fadeInBottomLeft" alt={hero.superhero}/>
                </div>
                <div className="col-6">
                    <div className="card-body">
                        <h6 className="card-title animate__animated animate__headShake">Nombre: {hero.superhero}</h6>
                        <p className="card-text">Publicado por: {hero.publisher}</p>
                        <p className="card-text">Alter Ego: {hero.alter_ego}</p>
                        {
                            (hero.alter_ego !== hero.characters) 
                            && 
                            (<p className="card-text">Otros que han sido {hero.superhero}: {formatCharacters(hero.characters, hero.alter_ego)}</p>)
                        }
                        <p className="text-muted">Primera aparición: {hero.first_appearance}</p>
                    </div>

                    <div className="d-flex justify-content-end ">
                        <Link 
                            to={`/hero/${hero.id}`}
                        >
                            <button className="btn btn-outline-primary m-1">Ver Más...</button>
                        </Link>
                    </div>
                </div>
                    
            </div>

        </div>
    </div>
    </>
  )
}

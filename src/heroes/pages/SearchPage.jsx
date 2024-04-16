import { useLocation, useNavigate } from "react-router-dom";
import { HeroCard } from "../components/HeroCard"
import { useForm } from '../hooks/useForm'
import queryString from 'query-string'
import { getHeroByName } from "../helpers/getHeroByName";

export const SearchPage = () => {

  const navigate = useNavigate();
  //Aqui viene una key, pathname, search
  const location = useLocation(); 
  // Con el paquete queryString lo hago más facil de obtener lo que hay en la ruta
  // La q, vendria siendo lo que se puso en el buscador
  const {q = ''} = queryString.parse(location.search); 

  const {buscador, onInputChange, onResetForm} = useForm({
    buscador: q
  });

  // Buscar por nombre
  const heroes = getHeroByName(q);

  // Para alertas
  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && (heroes.length === 0);

  const onSearchSubmit = (e) => {
    e.preventDefault();
    // console.log({buscador});
    if(buscador.trim().length <= 1) return;

    navigate(`?q=${buscador}`);
  }


  return (
    <div className="container">
     <h1>Buscador de Heroes</h1> 
     <hr/>

      <div className="row ">   
        <div className="col-5">
          <h4>Buscando</h4>
          <hr/>
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Busca un heroe"
              className="form-control"
              name="buscador"
              value={buscador}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">
              Buscar
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr/>
          
          
          <div className="alert alert-primary" style={{display: showSearch ? '' : 'none'}}>
            Busca un Heroe
          </div>

          <div className="alert alert-danger" style={{display: showError ? '' : 'none'}}>
            Sin Resultados con <b>{q}</b>
          </div>

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero}/>
            ))
          }

        </div>
      </div>
    </div>
  )
}


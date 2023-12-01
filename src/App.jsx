import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import PracticaBs from './componentes/PracticaBs/PracticaBs';
import './style.scss';


const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting = "Mis Productos"/>

      {
        //Acá estuvimos practicando con React - Bootstrap
      }

      <PracticaBs/>

    </div>
  )
}

export default App
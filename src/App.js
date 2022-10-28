import './App.css';
// import ClassComponent from './components/ClassComponent/ClassComponent';
// import { FunctionalComponent } from './components/FunctionalComponent/FunctionalComponent';
// import Subtitulo from './components/Subtitulo/Subtitulo';
// import Formulario from './components/Formulario/Formulario';
import Padre from './components/Padre/Padre';

// const objetoClase = {
//   name: 'Ignacio',
//   lastName: 'Fernández',
// };
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Padre saludo="Hola, buenas tardes">
          <div>
            <h3>Te invito a comer</h3>
          </div>
          <div>
            <h3>Te invito a comer</h3>
          </div>
        </Padre>
        {/* <Formulario /> */}
        {/* <Subtitulo text="Primer subtitulo" />
        <ClassComponent />
        <Subtitulo text="segundo subtitulo" />
        <FunctionalComponent nombre="Diego" apellido="Rojas" edad={25} />
        <Subtitulo text="tercer subtitulo" /> */}
      </header>
    </div>
  );
}

export default App;

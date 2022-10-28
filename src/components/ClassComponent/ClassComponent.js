import { Component } from 'react';

class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h2>Hola soy un componente de clase</h2>
        {/* <h1>
          Hola soy {this.props.nombre} {this.props.apellido} y tengo{' '}
          {this.props.edad} años de edad
        </h1> */}
      </div>
    );
  }
}

export default ClassComponent;

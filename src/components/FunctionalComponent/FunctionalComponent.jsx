export const FunctionalComponent = ({ nombre, apellido, edad }) => {
  return (
    <div>
      <h2>Hola soy un componente de función</h2>
      <h1>
        Hola soy {nombre} {apellido} y tengo {edad} años de edad
      </h1>
    </div>
  );
};

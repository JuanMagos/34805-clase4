import Input from '../Input/Input';

const Formulario = () => {
  return (
    <form style={{ display: 'flex', flexDirection: 'column' }}>
      <Input valorRequerido="nombre" />
      <Input valorRequerido="apellido" />
      <Input valorRequerido="correo" />
      <Input valorRequerido="password" />
    </form>
  );
};

export default Formulario;

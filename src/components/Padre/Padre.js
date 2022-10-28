const Padre = ({ saludo, children }) => {
  console.log(children);
  return (
    <div>
      {saludo}
      {children}
    </div>
  );
};

export default Padre;

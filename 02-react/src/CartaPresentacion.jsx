import fotoPerfil from "./assets/foto.jpg";

const CartaPresentacion = () => {
  const nombre = "alfredo";

  return (
    <>
      <img src={fotoPerfil} alt="perro" />
      <h1>Hola me llamo {nombre} y soy dueño de este perro</h1>
    </>
  );
};

export default CartaPresentacion;

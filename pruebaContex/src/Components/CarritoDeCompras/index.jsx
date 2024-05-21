import { useState } from "react";

const productos = [
  "leche",
  "pan",
  "pate",
  "cafe",
  "harina",
  "mantequilla",
  "agua",
];

export default function CarritoDeCompras() {

  const [miCarritoDeCompras, setMiCarritoDeCompras] =
    useState([]);

  function agregarProductoAlCarrito(producto) {
    setMiCarritoDeCompras([...miCarritoDeCompras, producto]);
    console.log('carritoDeCompras :>> ', miCarritoDeCompras);
  }

  function quitarProductoAlCarrito(index) {
    const nuevoCarrito = miCarritoDeCompras.filter((producto, i)=> i !== index)
    console.log(nuevoCarrito.length );
    setMiCarritoDeCompras(nuevoCarrito);
  }

  return (
    <div className="contenedor-principal">
      <h2>Carrito de compras</h2>
      <div className="contenedor-productos-lista">
        <div className="contenedor-productos">
          <ul>
            {productos.map((producto, i) => (
              <li key={i} className="producto">
                <p>{producto}</p>
                <button onClick={() => agregarProductoAlCarrito(producto)}>
                  agregar
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="contenedor-lista">
          <h3>Mi Carrito</h3>
          <ul>
            {miCarritoDeCompras.map((producto, i) => (
              <li key={i} className="producto">
                {producto}
                <button onClick={() => quitarProductoAlCarrito(i)}>
                    Quitar
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

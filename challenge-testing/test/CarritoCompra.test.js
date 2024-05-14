// Importa la clase CarritoCompra
const CarritoCompra = require("../index");

// Describe el conjunto de pruebas para la clase CarritoCompra
describe("CarritoCompra", () => {
  let carrito;

  // Antes de cada prueba, crea una nueva instancia de CarritoCompra
  beforeEach(() => {
    carrito = new CarritoCompra();
  });

  // Prueba para comprobar que se inicializa correctamente como un array vacío
  it("Se inicializa como un array vacío", () => {
    expect(carrito.productos).toEqual([]);
  });

  // Prueba para agregar un producto al carrito
  it("Agregar producto al carrito", () => {
    const producto = { nombre: "Producto 1", precio: 50 };
    carrito.agregarProducto(producto);
    expect(carrito.productos).toContainEqual(producto);
  });

  // Prueba para calcular el total de la compra sin descuento
  it("Calcular total de la compra sin descuento", () => {
    carrito.agregarProducto({ nombre: "Producto 1", precio: 50 });
    carrito.agregarProducto({ nombre: "Producto 2", precio: 30 });
    carrito.agregarProducto({ nombre: "Producto 3", precio: 20 });
    expect(carrito.calcularTotal()).toBe(100);
  });

  // Prueba para aplicar un descuento al total de la compra
  it("Aplicar descuento al total de la compra", () => {
    carrito.agregarProducto({ nombre: "Producto 1", precio: 50 });
    carrito.agregarProducto({ nombre: "Producto 2", precio: 30 });
    carrito.agregarProducto({ nombre: "Producto 3", precio: 20 });
    expect(carrito.aplicarDescuento(10)).toBe(90);
  });
});

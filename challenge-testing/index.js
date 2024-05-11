class CarritoCompra {
  constructor() {
    this.productos = []; // Inicializa el carrito como un array vacío.
  }

  // Recibe un objeto representando un producto y lo agrega al carrito.
  agregarProducto(producto) {
    this.productos.push(producto); // Agrega el producto al carrito
  }

  // Calcula el total de la compra sumando los precios de todos los productos en el carrito.
  calcularTotal() {
    let total = 0; // Inicializa la variable total en 0
    // Suma los precios de todos los productos en el carrito
    this.productos.forEach((producto) => {
      total += producto.precio; // Suma el precio del producto al total
    });
    return total;
  }
  aplicarDescuento(porcentaje) {
    const descuento = this.calcularTotal() * (porcentaje / 100); // Calcula el descuento
    return this.calcularTotal() - descuento; // Aplica el descuento al total de la compra
  }
}

module.exports = CarritoCompra;

document.addEventListener("DOMContentLoaded", () => {
  const galeriaProductos = document.getElementById("galeriaProductos");
  const buscador = document.getElementById("buscador");

  // Datos de productos ingresados manualmente con imágenes referenciadas desde la carpeta 'images'
  const productos = [
    /* {
      nombre: "Watch Onn Google TV 4k",
      descripcion: "https://example.com/ficha-tecnica-producto-1",
      costo: 35,
      imagen: "Assets/Watchonn4k.jpg", // Ruta de la imagen en la carpeta 'images'
    }, */
    {
      nombre: "Watch Onn Google TV 2k",
      descripcion:
        "https://www.amazon.com/-/es/Streaming-adaptador-corriente-Chromecast-incorporado/dp/B0B61V76X1",
      costo: 30,
      imagen: "Assets/Watchonn2k.jpg", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre: "Wireplus - Mini UPS 21w 2200Mahx4",
      descripcion:
        "https://www.grupo-plus.com/shop/wp-mini-21w-mini-dc-ups-21w-2200mahx4-120v-ac-input-output-usb-5v-dc-9v-o-12v-poe-15v-24v-30045#attr=6014",
      costo: 35,
      imagen:
        "Assets/Wireplus - Mini UPS 21w 2200Mahx4 120v-ac  input output USB 5v Dc 9V o 12v poe 15V-24V.jpg", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre: "Wireplus - Mini UPS 21w 2200Mahx4",
      descripcion:
        "https://www.grupo-plus.com/shop/wp-mini-21w-mini-dc-ups-21w-2200mahx4-120v-ac-input-output-usb-5v-dc-9v-o-12v-poe-15v-24v-30045#attr=6014",
      costo: 35,
      imagen:
        "Assets/Wireplus - Mini UPS 21w 2200Mahx4 120v-ac  input output USB 5v Dc 9V o 12v poe 15V-24V.jpg", // Ruta de la imagen en la carpeta 'images'
    },
    // Añade más productos según sea necesario
  ];

  const mostrarProductos = (filtro = "") => {
    galeriaProductos.innerHTML = "";
    const productosFiltrados = productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(filtro.toLowerCase())
    );

    productosFiltrados.forEach((producto, index) => {
      const productoHTML = `
                <div class="producto" data-index="${index}">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <h2>${producto.nombre}</h2>
                    <a href="${producto.descripcion}" class="descripcion" target="_blank">Ficha Técnica</a>
                    <p class="precio">$${producto.costo}</p>
                    <div class="acciones">
                        <button class="whatsapp" onclick="contactarWhatsApp('${producto.nombre}')">WhatsApp</button>
                    </div>
                </div>
            `;
      galeriaProductos.innerHTML += productoHTML;
    });
  };

  buscador.addEventListener("input", (event) => {
    mostrarProductos(event.target.value);
  });

  const contactarWhatsApp = (nombreProducto) => {
    const telefono = "+584143693311"; // Reemplaza con el número de WhatsApp de tu empresa
    const mensaje = encodeURIComponent(
      `Hola Rafael, estoy interesado en el producto: ${nombreProducto}`
    );
    const url = `https://wa.me/${telefono}?text=${mensaje}`;
    window.open(url, "_blank");
  };

  mostrarProductos();

  // Hacer funciones accesibles globalmente
  window.contactarWhatsApp = contactarWhatsApp;
});

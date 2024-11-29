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
      nombre: "DC-140USB Mini UPS portatil y power bank forza",
      descripcion:
        "https://www.forzaups.com/es/productos/interna/DC-140USB-esp/",
      costo: 48,
      imagen: "Assets/Mini UPS y Cargador Portátil de 14W.jpg", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre:
        "UPS WIREPLUS PANTALLA SMART 1500VA/900W BAT 2X12V-9AMP120VAC 50/60HZ - WP-1500VA",
      descripcion:
        "https://www.grupo-plus.com/shop/wp-1500va-ups-wireplus-pantalla-smart-1500va-900w-bat-2-x-12v-9amp-120vac-50-60hz-30398#attr=5895",
      costo: 150,
      imagen: "Assets/UPS WIREPLUS PANTALLA SMART 1500VA.jpg", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre:
        "UPS WIREPLUS PANTALLA SMART 2000VA/1200W BAT 2X12V-9AMP120VAC 50/60HZ - WP-2000VA",
      descripcion:
        "https://www.grupo-plus.com/shop/wp-2000va-ups-wireplus-pantalla-smart-2000va-1200w-bat-2x12v-9amp120vac-50-60hz-30399#attr=6015",
      costo: 215,
      imagen: "Assets/UPS WIREPLUS PANTALLA SMART 2000VA.jpg", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre:
        "UPS WIREPLUS PANTALLA SMART 3000VA/1800W BAT 2X12V-9Amp 120VAC 50/60HZ",
      descripcion:
        "https://www.grupo-plus.com/shop/wp-3000va-ups-wireplus-pantalla-smart-3000va-1800w-bat-2x12v-9amp-120vac-50-60hz-30400#attr=5896",
      costo: 270,
      imagen: "Assets/UPS WIREPLUS PANTALLA SMART 3000VA.jpg", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre:
        "UPS WIREPLUS PANTALLA SMART 750VA/380W BAT 1X12V-7AMP120VAC 50/60HZ WP-750VA",
      descripcion:
        "https://www.grupo-plus.com/shop/wp-750va-ups-wireplus-pantalla-smart-750va-380w-bat-1x12v-7amp-120vac-50-60hz-30401#attr=5897",
      costo: 215,
      imagen:
        "Assets/UPS Interactivo 750VA 380W con Pantalla LCD 120V [4] Tomas.jpg", // Ruta de la imagen en la carpeta 'images'
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

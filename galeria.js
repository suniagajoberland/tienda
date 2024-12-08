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
      costo: 78,
      imagen:
        "Assets/UPS Interactivo 750VA 380W con Pantalla LCD 120V [4] Tomas.jpg", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre: "CABLE UTP CAT5 305M 70/30 PARA EXTERIOR BEGPROD - UTP5EX",
      descripcion:
        "https://securitysolution.shop/products/bobina-cable-utp-cat5e-70-30-para-exterior-utp300ex?srsltid=AfmBOoo6FOHcad81V7NZYseg9he6WGatc691NJsrJDZbSoVBwTYhDPSo",
      costo: 54,
      imagen: "Assets/CABLE UTP CAT5 305M PARA EXTERIOR BEGPROD.webp", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre: " Reflector de 50w IP66 Littman",
      descripcion:
        " https://mundoferta.com/reflector-led/1368-reflector-led-50w-cet-ip66-littman.html ",
      costo: 12,
      imagen: "Assets/50w littman.jpg", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre: "Reflector de 100w IP66 Littman",
      descripcion:
        " https://mundoferta.com/reflector-led/1390-reflector-led-100w-cet-ip66-littman.html ",
      costo: 18,
      imagen: "Assets/100w littman.jpg", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre: " Reflector de 150w IP66 Littman",
      descripcion:
        "https://mundoferta.com/reflector-led/1499-reflector-led-150w-cet-ip66-littman.html ",
      costo: 22,
      imagen: "Assets/150w littman.jpg", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre: "Reflector de 200w IP66 Littman",
      descripcion:
        "https://mundoferta.com/reflector-led/1454-reflector-led-100w-cet-ip66-littman.html ",
      costo: 34,
      imagen: "Assets/200w littman.jpg", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre: " Reflector de 300w IP66 Littman",
      descripcion: "",
      costo: 42,
      imagen: "Assets/300w littman.jpg", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre: " Reflector de 400w IP66 Littman",
      descripcion: "",
      costo: 51,
      imagen: "Assets/400w littman.jpg", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre: " Reflector Tg09 2.0 200w Ip65 HAMMER",
      descripcion:
        "https://electronica.com.ve/200w/3568-reflector-led-200w-cob-tg09-6500k-ip65-h.html ",
      costo: 78,
      imagen: "Assets/200w hammer.jpg", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre: " Aceite Semisintetico Multigrado Sae 20w50 ",
      descripcion:
        "https://212global.com/product/aceite-semi-sintetico-multigrado-hammer-automotriz-sae-20w50-green-pro-0-946lts/?srsltid=AfmBOooyb3SpW1fuNIYLo26mcpqQ4WHsKBX7L_zdeWs5SzhiZWHPsT-R ",
      costo: 8,
      imagen: "Assets/Aceite Semisintetico .jpg", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre: " Reflector Led 400w Con Tecnologia Dob 6500k Ip65 Littman",
      descripcion: "",
      costo: 90,
      imagen: "Assets/400w littman full.jpg", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre: " Reflector Tg09 2.0 300w Ip65 / Hammer",
      descripcion:
        " https://212global.com/product/reflector-led-hammer-electronic-tg09-2-0-300w-85-277v-65k-100lxw-ip65/?srsltid=AfmBOoqzv3nu00mRQS-m8KRa8TVa4eIL9pV7MY67u53T6WRb8i4xcJSA ",
      costo: 100,
      imagen: "Assets/300w hammer.jpg", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre: "Router Dahua Ax1500 Wifi 6 Doble Banda Dh-ax15m",
      descripcion:
        " https://www.dahuasecurity.com/la/products/All-Products/Transmission/IT-Channel-Products/Wireless-Router/AX15M ",
      costo: 40,
      imagen: "Assets/router dahua.jpg", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre: " Access Point Tplink Eap 225-outdoor Ac1200",
      descripcion:
        " https://www.tp-link.com/es/business-networking/outdoor-ap/eap225-outdoor/ ",
      costo: 138,
      imagen: "Assets/eap225 outdoor.jpg", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre: " Etiquetadora Rhino Pro5200",
      descripcion:
        " https://www.impormel.com/producto/etiquetadora-dymo-rhino-industrial-5200-label-maker-5-lines-6-1-10w-x-11-2-9d-x-3-1-2h/?srsltid=AfmBOor5gsg1Npi6PUL3-TqhLHWbEghLdSL8o_6INj162SNzdjXXHI7u ",
      costo: 18,
      imagen: "Assets/Etiquetadora .jpg", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre: "Reflector Led 1000w Con Tecnologia Dob 6500k Ip65 Littman",
      descripcion:
        "https://electronica.com.ve/1000w/3773-reflector-led-1000w-led-cob-tg09-6500k-i.html ",
      costo: 295,
      imagen: "Assets/1000va littman.jpg", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre: "Cable Utp Cat 5 305 Mts Bobina begprod",
      descripcion:
        " https://ssdigital.com.ve/ve/redes-computacion-telecomunicaciones/139-cable-utp-begprod-cat-5e-exterior-305mts.html?srsltid=AfmBOorg8wxbgI5VmZTnqoEZYDiJXjT5IidAkufm6EkEwdFUhQQ6lqkh ",
      costo: 54,
      imagen: "Assets/utp5 begprod.jpg", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre: "Bombillo H4 Led Rally Hl6000k 40w 10.000 Lm Hammer",
      descripcion:
        " https://212global.com/product/bombillo-led-h4-hl-hammer-automotriz-scuderia-rally-10000lm-40w-6000k/?srsltid=AfmBOorv3uhs5Py_WLCCsOeYupX0ngmFyyDFxsk44ltM3NsXO02HzEJT ",
      costo: 42,
      imagen: "Assets/Bombillo H4 Led Rally .jpg", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre: " Aceite Semisintetico Multigrado Sae 15w40 Hammer",
      descripcion: "",
      costo: 8,
      imagen: "Assets/Aceite Semisintetico .jpg", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre: "Reflector Raptor 200w Ip66/ Aluminio + Glass Hammer",
      descripcion:
        " https://electronica.com.ve/200w/5966-reflector-led-raptor-200w-6500k-hammer.html ",
      costo: 72,
      imagen: "Assets/Raptor 200w .jpg", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre:
        " Luminaria Superficial Aurora/60w/60cm/cct Multitono Blanca Hammer",
      descripcion:
        "https://www.cabsagt.com/luminaria-circular-aurora-60w-acabado-blanco-kelvin-seleccionable-construlita-re8066bcca/?srsltid=AfmBOoqsawnzY17Vr2_MjzbT8fuMa9H7XUnueYH-D2YLTzIdcPIyAw7m ",
      costo: 85,
      imagen: "Assets/60w hammer.jpg", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre:
        "Luminaria Superficial Aurora/60w/60cm/cct Multitono Negra Hammer",
      descripcion:
        " https://212global.com/product/lampara-superficial-hammer-electronic-aurora-60w-60cm-multitono-3200k-4000k-6500k-85-277v-100lm/ ",
      costo: 85,
      imagen: "Assets/60w hammer negra.jpg", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre: "Lámpara Led Campana Ufo 200w",
      descripcion:
        "Link del fabricante: https://www.amazon.es/5700k-6500k-Industrial-Interior-Exterior-Luminosidad/dp/B079RVH54N ",
      costo: 50,
      imagen: "Assets/200w ufo.jpg", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre: "Bombillos Led H4 52.000 Lm Miami Escudería 6500k Hammer",
      descripcion: "",
      costo: 145,
      imagen: "Assets/Bombillos Led H4 52.000 Lm.jpg", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre: " Reflector Led 600w Con Tecnologia Dob 6500k Ip65 Littman",
      descripcion: "",
      costo: 130,
      imagen: "Assets/600w littman.jpg", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre: "Reflector Tg09 2.0 600w Ip65 / Hammer",
      descripcion:
        ":https://electronica.com.ve/600w/1251-reflector-led-600w-led-cob-tg09-6500k-ip.html ",
      costo: 185,
      imagen: "Assets/Reflector Tg09 2.0 600w .jpg", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre: "Reflector Truck 2.0 1000w Ip66 / Hammer",
      descripcion: " https://electrologia.com/product.php?productid=17707 ",
      costo: 499,
      imagen: "Assets/1000w.jpg", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre: "Reflector Raptor 300w Ip66/ Aluminio + Glass Hammer",
      descripcion: "",
      costo: 98,
      imagen: "Assets/300w alum.jpg", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre: "",
      descripcion: "",
      costo: 18,
      imagen: "", // Ruta de la imagen en la carpeta 'images'
    },
    {
      nombre: "",
      descripcion: "",
      costo: 18,
      imagen: "", // Ruta de la imagen en la carpeta 'images'
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

/* Propiedades en Venta */
const propiedades_venta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    baños: 4,
    costo: "5.000",
    smoke: false,
    pets: false,
  },

  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    baños: 1,
    costo: "4.200",
    smoke: true,
    pets: true,
  },

  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: "4.500",
    smoke: false,
    pets: true,
  },

  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: " 123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: "3.200",
    smoke: false,
    pets: false,
  },

  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: "3.000",
    smoke: false,
    pets: true,
  },

  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: "3.500",
    smoke: true,
    pets: true,
  },
];

/* Array Ventas */
const ventasSection = document.getElementById("ventas");
let cardsInRow = 0; // Inicializa el contador de tarjetas en la fila
let ventasHTML = ""; // Variable para almacenar el HTML generado

for (let venta of propiedades_venta) {
  // Si cardsInRow es 0, comienza una nueva fila
  if (cardsInRow === 0) {
    ventasHTML += "<h2>Propiedades en venta</h2>";
    ventasHTML += '<div class="row">';
  }

  ventasHTML += `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src="${
          venta.src
        }" class="card-img-top" alt="Imagen del departamento"/>
        <div class="card-body">
          <h5 class="card-title">${venta.nombre}</h5>
          <p>${venta.descripcion}</p>
          <p><i class="fas fa-map-marker-alt"></i> ${venta.ubicacion}</p>
          <p><i class="fas fa-bed"></i> ${
            venta.habitaciones
          } Habitaciones | <i class="fas fa-bath"></i> ${venta.baños} Baños</p>
          <p><i class="fas fa-dollar-sign"></i> ${venta.costo}</p>
          ${
            venta.smoke
              ? '<p class="smoking" style="color: #408558;"><i class="fas fa-smoking" style="color: #408558;"></i> Permitido Fumar</p>'
              : '<p class="noSmoking" style="color: #CB444A;"><i class="fas fa-smoking-ban" style="color: #CB444A;"></i> No se permite fumar</p>'
          }
          ${
            venta.pets
              ? '<p class="pets" style="color: #408558;"><i class="fas fa-paw" style="color: #408558;"></i> Mascotas Permitidas</p>'
              : '<p class="noPets" style="color: #CB444A;"></i><i class="fas fa-ban" style="color: #CB444A"></i> No se permiten Mascotas</p>'
          }
        </div>
      </div>
    </div>`;

  cardsInRow++; // Incrementa el contador de tarjetas en la fila

  // Si ya hay 3 tarjetas en la fila, cierra la fila y reinicia el contador
  if (cardsInRow === 6) {
    ventasHTML += "</div>"; // Cierra la fila
    cardsInRow = 0; // Reinicia el contador
  }
}

// Si el número total de tarjetas no es un múltiplo de 3, cierra la última fila
if (cardsInRow !== 0) {
  ventasHTML += "</div>";
}

// Agrega el enlace después de completar el ciclo
ventasHTML += `<a href="./index.html" class="btn btn-dark">Volver al inicio</a>`;

// Agrega el HTML generado al contenedor
ventasSection.innerHTML = ventasHTML;

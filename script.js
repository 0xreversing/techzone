let carrito = JSON.parse(localStorage.getItem('carrito')) || []; // Cargar carrito del localStorage


function agregarAlCarrito(nombre, precio, imagen) {
    const cantidadInput = document.getElementById('cantidad');
    const cantidad = parseInt(cantidadInput.value) || 0;


    if (cantidad > 0) {
        const productoExistente = carrito.find(item => item.nombre === nombre);
        if (productoExistente) {
            productoExistente.cantidad += cantidad;
            registrarVenta(nombre, precio, cantidad);
        } else {
            carrito.push({ nombre, precio, cantidad, imagen });
        }


        cantidadInput.value = "";
        actualizarCarrito();
        guardarCarrito();


        alert(`${nombre} agregado al carrito.`);
    } else {
        alert("Por favor, ingresa una cantidad válida.");
    }
}




function mostrarCarrito() {
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.classList.toggle('active');
}


function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = "";
    let total = 0;


    carrito.forEach(item => {
        const totalProducto = item.precio * item.cantidad;
        total += totalProducto;


        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}" style="width: 50px;">
            ${item.nombre} - Cantidad: ${item.cantidad} - Precio Total: $${totalProducto.toFixed(2)}
        `;
        listaCarrito.appendChild(itemDiv);
    });


    document.getElementById('total').innerText = `Total: $${total.toFixed(2)}`;
}


function pagar() {
    
    const venta = {
        fecha: new Date().toLocaleString(),
        productos: [...carrito]
    };
    

    let ventas = JSON.parse(localStorage.getItem('ventas')) || [];
    ventas.push(venta);
    localStorage.setItem('ventas', JSON.stringify(ventas));

    alert("Proceso de pago iniciado.");
    carrito = [];
    actualizarCarrito();
    mostrarCarrito();
    guardarCarrito();
}



function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}



document.addEventListener('DOMContentLoaded', () => {
    actualizarCarrito();
});



document.getElementById('icono-carrito').onclick = mostrarCarrito;



const productos = {
    celular: [
        { nombre: 'Celular IPHONE 16', precio: 300, imagen: "https://i.blogs.es/10e746/iphone-16/1366_2000.jpeg", descripcion: "TOMA LAS MEJORES FOTOS, SOLO NECESITAS PRESIONAR Y LISTO GAAAAA" },
        { nombre: 'Celular ABC', precio: 250, imagen: "https://promart.vteximg.com.br/arquivos/ids/7571980-1000-1000/image-3e2bd1319c5a4bbfab9949ca9cecef7c.jpg?v=638336972055870000", descripcion: "TOPE DE GAMA, LISTO PARA VER LOS PARTIDOS DE UNIVERSITARIO" },
    ],
    laptop: [
        { nombre: 'NOTEBOOK 2026', precio: 800, imagen: "https://www.apple.com/newsroom/images/tile-images/Apple_16-inch-MacBook-Pro_111319.jpg.og.jpg?202408191751", descripcion: "PERFECTO PARA SER STREAMER DE TWICHT O KICK" },
        { nombre: 'LAPTOP HP S20', precio: 1200, imagen: "https://rymportatiles.com.pe/cdn/shop/files/HP-240-G10-1.png?v=1721691675&width=1214", descripcion: "IDEAL PARA TRABAJOS UNIVERSITARIOS O EMPRESARIALES" },
    ],
    accesorios: [
        { nombre: 'AUDIFONO IPHONE ', precio: 50, imagen: "https://aynperu.com/cdn/shop/products/arpodsJACK_600x600.jpg?v=1586302986", descripcion: "SONIDO DE ALTA CALIDAD" },
        { nombre: 'AUDIFONO ANDROID ', precio: 104, imagen: "https://oechsle.vteximg.com.br/arquivos/ids/18537957-1000-1000/image-ffb14f8348a94ba6a199acdb3d69343d.jpg?v=638593855456230000", descripcion: "AUDIFONO DE MOTOTAXISTA CUMBIAMBERO" },
        { nombre: 'PORTAMOCHILA ', precio: 90, imagen: "https://ofertec.pe/cdn/shop/files/ImagendeWhatsApp2024-05-14alas14.09.41_0a1efd42.jpg?v=1715721246", descripcion: "2 EN 1, MOCHILA Y MALETA PARA LAPTOP" },
        { nombre: 'CARGADOR UNIVERSAL', precio: 20, imagen: "https://www.usams.com.pe/wp-content/uploads/2023/05/6958444902845_1-600x600.jpg", descripcion: "CARGA CUALQUIER TIPO DE CELULAR BARATO Y CARO" },
    ],
    impresora: [
        { nombre: 'IMPRESORA EPSON 20A2', precio: 150, imagen: "https://http2.mlstatic.com/D_NQ_NP_891725-MLU77931384208_082024-O.webp", descripcion: "IMPRIME CALIDAD 4K20HD" },
        { nombre: 'IMPRESORA HP 402S', precio: 100, imagen: "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/i/m/impresora-hp-deskjet-ink-advantage-all-in-one-2874-84424-default-1.jpg", descripcion: "USO EMPRESARIAL Y ADMINISTRATIVO" },
    ],
    tablet: [
        { nombre: 'Tablet XYZ', precio: 400, imagen: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c04357006.png", descripcion: "PARA QUE TUS WAWAS VEAN A PEPPA PIG " },
        { nombre: 'Tablet ABC', precio: 350, imagen: "https://i.blogs.es/225b6a/650_1000_slate7hd/650_1200.jpg", descripcion: "PA QUE LEAS TU WATTPAD" },
    ],
    television: [
        { nombre: 'Tv smart Samsung',precio: 2000,imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/sodimacPE/4166086_00/w=1500,h=1500,fit=pad",descripcion:"MIRA CAMPEONAR A UNIVERSITARIO EN 2024"}
    ],
    consola:[
        { nombre: 'Play Station 5',precio: 4200,imagen:"https://oechsle.vteximg.com.br/arquivos/ids/17424064-1000-1000/imageUrl_1.jpg?v=638505776884930000", descripcion:"JUEGA LAS 25/8"}
    ],
    camara: [
        { nombre: 'CANNON ', precio: 500, imagen: "https://i.blogs.es/f694b6/maxresdefault/1366_2000.jpg", descripcion: "TOMA FOTOS DE TUS GRANOS A KILOMETROS" },
        { nombre: 'SONNY', precio: 700, imagen: "https://www.sony.com.pe/image/275b9bf4aa1ebafbd282edab2cadc220?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320", descripcion: "CAMARA DE USO PROFESIONAL Y ESPECIAL" },
    ],
};


let modalNombre, modalPrecio, modalImagen;


function mostrarModal(nombre, precio, imagen, descripcion) {
    modalNombre = nombre;
    modalPrecio = precio;
    modalImagen = imagen;


    document.getElementById('modal-nombre').innerText = nombre;
    document.getElementById('modal-precio').innerText = `Precio: $${precio}`;
    document.getElementById('modal-imagen').src = imagen;
    document.getElementById('modal-descripcion').innerText = descripcion;


    document.getElementById('modal').style.display = 'block';
}




function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
}




function irAProductos(categoria) {
    const queryString = `?categoria=${categoria}`;
    window.location.href = 'productos.html' + queryString;
}


function irAProducto(nombre) {
    const queryString = `?nombre=${nombre}`;
    window.location.href = 'producto.html' + queryString;
}


function cargarProducto() {
    const urlParams = new URLSearchParams(window.location.search);
    const nombre = urlParams.get('nombre');
    const productosArray = Object.values(productos).flat();
    const producto = productosArray.find(p => p.nombre === nombre);


    if (producto) {
        const productoDiv = document.getElementById('producto-detalle');
        productoDiv.innerHTML = `
            <h1>${producto.nombre}</h1>
            <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 200px; height: auto;">
            <p>Precio: $${producto.precio}</p>
            <input type="number" min="1" placeholder="Cantidad">
            <button onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio}, '${producto.imagen}')">Añadir al Carrito</button>
        `;
    }
}



if (window.location.pathname.includes('producto.html')) {
    cargarProducto();
}


function cargarProductos() {
    const urlParams = new URLSearchParams(window.location.search);
    const categoria = urlParams.get('categoria');
    const productosDiv = document.getElementById('productos');


    if (categoria && productos[categoria]) {
        productos[categoria].forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.className = 'producto';
            productoDiv.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 100px; height: auto;" onclick="mostrarModal('${producto.nombre}', ${producto.precio}, '${producto.imagen}', '${producto.descripcion}')">
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio}</p>
                <button onclick="mostrarModal('${producto.nombre}', ${producto.precio}, '${producto.imagen}', '${producto.descripcion}')">Ver Detalles</button>
            `;
            productosDiv.appendChild(productoDiv);
        });
    } else {

        for (const [categoria, listaProductos] of Object.entries(productos)) {
            listaProductos.forEach(producto => {
                const productoDiv = document.createElement('div');
                productoDiv.className = 'producto';
                productoDiv.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 100px; height: auto;" onclick="mostrarModal('${producto.nombre}', ${producto.precio}, '${producto.imagen}', '${producto.descripcion}')">
                    <h3>${producto.nombre}</h3>
                    <p>Precio: $${producto.precio}</p>
                    <button onclick="mostrarModal('${producto.nombre}', ${producto.precio}, '${producto.imagen}', '${producto.descripcion}')">Ver Detalles</button>
                `;
                productosDiv.appendChild(productoDiv);
            });
        }
    }
}




if (window.location.pathname.includes('productos.html')) {
    cargarProductos();
}


function scrollCategorias(offset) {
    const categorias = document.getElementById('lista-categorias');
    categorias.scrollBy({
        top: 0,
        left: offset,
        behavior: 'smooth'
    });
}
//ACUMULADORES PARA LAS VENTAS
let ventas = [];
function registrarVenta(nombre, precio, cantidad) {
    const totalVenta = precio * cantidad;
    const venta = {
        nombre,
        cantidad,
        precio,
        total: totalVenta,
        fecha: new Date().toISOString(), 
    };
    ventas.push(venta);
    guardarVentas();
}


function guardarVentas() {
    localStorage.setItem('ventas', JSON.stringify(ventas)); 
}
//ME MUESTRA LAS VENTAS
function cargarVentas() {
    const ventasGuardadas = JSON.parse(localStorage.getItem('ventas')) || [];
    const listaVentas = document.getElementById('lista-ventas');
    listaVentas.innerHTML = "";


    let totalAcumulado = 0;


    ventasGuardadas.forEach(venta => {
        const ventaDiv = document.createElement('div');
        ventaDiv.innerHTML = `
            <p>${venta.fecha} - ${venta.nombre} - Cantidad: ${venta.cantidad} - Total: $${venta.total.toFixed(2)}</p>
        `;
        listaVentas.appendChild(ventaDiv);
        totalAcumulado += venta.total;
    });


    document.getElementById('total-acumulado').innerText = `Total Acumulado: $${totalAcumulado.toFixed(2)}`;
}



//esto es para darle funcionalidad al carrusel
const imagenes = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-0Rzn44mLiOy75cZzKyUiUuMIpTC11iaMA&s",
    "https://blog.latam.playstation.com/tachyon/sites/3/2023/10/e08941a3d4b8ac23d60cbf6304e829e2e7a775b7.png?resize=1088%2C612&crop_strategy=smart",
    "https://images.philips.com/is/image/philipsconsumer/48529870a9be415d8eeeafb7009e7b8d?$pnglarge$&wid=1250"
];

let indice = 0;

function cambiarImagen() {
    const imagenCarrusel = document.getElementById("imagenCarrusel");
    imagenCarrusel.style.opacity = 0;

    setTimeout(() => {
        indice = (indice + 1) % imagenes.length;
        imagenCarrusel.src = imagenes[indice];
        imagenCarrusel.style.opacity = 1;
    }, 1000);

}


setInterval(cambiarImagen, 5000);


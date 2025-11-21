// Aquí puedes agregar tus zapatos fácilmente
const zapatos = [
{
nombre: "Nike Air Max",
precio: "₡55.000",
imagen: "https://i.postimg.cc/28k4pXZz/Air-Max.webp"
},
{
 nombre: "Adidas Samba",
        precio: "₡45.000",
        imagen: "https://i.postimg.cc/jd2L4Vf2/samba.avif"
    },
{
nombre: "Messi Freestyle",
precio: "₡50.000",
imagen: "https://i.postimg.cc/G2jHqdzk/futsal-messi.avif"
},

{
nombre: "Crocs Batman",
precio: "₡45.000",
imagen: "https://i.postimg.cc/MKvpzD9R/Crocs-Batman.jpg"
}

];


const contenedor = document.getElementById("productos");


zapatos.forEach(z => {
    const mensaje = encodeURIComponent(`Hola! Me interesa el modelo: ${z.nombre}`);
    const linkWS = `https://wa.me/50687279121?text=${mensaje}`;

    contenedor.innerHTML += `
        <div class="card">
            <img src="${z.imagen}" alt="${z.nombre}">
            <h3>${z.nombre}</h3>

            <div class="price-row">
                <span class="price">${z.precio}</span>
                <span class="size-tag">${z.talla ?? ""}</span>
            </div>

            <p class="status">${z.estado ?? ""}</p>

            <a href="${linkWS}" target="_blank" class="btn-consultar">
                Consultar por WhatsApp
            </a>
        </div>
    `;
});
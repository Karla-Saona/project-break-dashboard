/*✔ Crear clave para leer y guardar en localStorage
✔ Cargar al iniciar la página
/✔ Guardar en localStorage
✔ Pintar/Mostrar los links
✔ Eliminar un link
✔ Añadir un link
✔ Validar la URL
*/

const KEY = "misLinks";  // Clave que usaremos para guardar y leer en localStorage

// Cargar links del localStorage o devolver [] , lee el item de "links" a traves de esta funcion.
const load = () => JSON.parse(localStorage.getItem(KEY) || "[]");

// Guardar links en localStorage
const save = (links) => localStorage.setItem(KEY, JSON.stringify(links));

// Pintar todos los links en el DOM
function pinter(links) {
  const container = document.getElementById("links-container");
  const listado = document.getElementById("listado");

  if (!container || !listado) return;

  // Si no hay links, ocultamos el bloque de listado
  if (!links.length) {
    listado.style.display = "none";
    container.innerHTML = "";
    return;
  }

  // Si hay links, mostramos el bloque
  listado.style.display = "block";

  // innerHTML mostrará el resultado de mapear cada link a un bloque HTML
container.innerHTML = links
  .map((link, i) => `
    <div class="pill">
        <span>${link.title}</span>
        <button class="close-btn" onclick="deleteLink(${i})">×</button>
    </div>
  `)
  .join("");

}

// Borrar un link
function deleteLink(i) {
  const links = load();
  links.splice(i, 1);
  save(links);
  pinter(links);
}

// Añadir un link
function addLink() {
  const titleInput = document.getElementById("title");
  const urlInput = document.getElementById("url");

  if (!titleInput || !urlInput) return;

  const title = titleInput.value.trim();
  let url = urlInput.value.trim();

  if (!title || !url) return alert("Rellena los campos");
  if (!/^https?:\/\//i.test(url)) {
    url = "https://" + url;
  }

  const links = load();
  links.push({ title, url });
  save(links);
  pinter(links);

  // Limpiamos los inputs del formulario
  titleInput.value = "";
  urlInput.value = "";
}

//Bloque para q el sistema funcione
document.addEventListener("DOMContentLoaded", () => {
  const links = load();
  pinter(links);

  // Asignamos la función addLink al botón con id "add-link"
  const btn = document.getElementById("add-link");
  if (btn) {
    btn.onclick = addLink;
  }
});

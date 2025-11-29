const inventario = [
  {
    id: 101,
    nombre: 'Monitor 27"',
    categoria: "Hardware",
    precio: 350,
    stock: 15,
  },
  {
    id: 102,
    nombre: "Teclado Mecánico",
    categoria: "Periférico",
    precio: 75,
    stock: 0,
  },
  {
    id: 103,
    nombre: "Licencia OS",
    categoria: "Software",
    precio: 150,
    stock: 99,
  },
  {
    id: 104,
    nombre: "Webcam HD",
    categoria: "Periférico",
    precio: 45,
    stock: 32,
  },
  {
    id: 105,
    nombre: "Mouse Ergonómico",
    categoria: "Periférico",
    precio: 25,
    stock: 0,
  },
];

const categoriasRepetidas = inventario.map(function (producto) {
  return producto.categoria;
});

const categorias = categoriasRepetidas.reduce(function (acc, categoria) {
  if (!acc.includes(categoria)) {
    acc.push(categoria);
    return acc;
  } else {
    return acc;
  }
}, []);

const categoriasAcumuladas = categoriasRepetidas.reduce((acc, categoria) => {
  const currentCategories = Object.keys(acc);

  if (!currentCategories.includes(categoria)) {
    acc[categoria] = 1;
    return acc;
  } else {
    acc[categoria] += 1;
    return acc;
  }
}, {});

const productSection = document.getElementById("products-section");
const categoriesNavbar = document.getElementById("categories-navbar");

function renderNavbar(categories) {
  categories.forEach((category) => {
    categoriesNavbar.innerHTML += `
        <li class="nav-item">
              <a class="nav-link" href="#">${category}</a>
        </li>
    `;
  });
}

function renderProducts(productsArray) {
  productsArray.forEach(function (product) {
    productSection.innerHTML += `
        <div class="col">
            <article class="card">
                <div class="card-header fw-bold">${product.nombre}</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Categoría: ${product.categoria}</li>
                    <li class="list-group-item">Stock: ${product.stock}</li>
                    <li class="list-group-item">Precio: $${product.precio}</li>
                </ul>
            </article>
        </div>
        `;
  });
}

renderProducts(inventario);
renderNavbar(categorias);

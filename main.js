const productListArray = [
  {
    name: "Chocolate",
    brand: "Vizzio",
    flavor: "Coco",
    weight: "120gr",
    image:
      "https://www.mercadocarozzi.cl/media/catalog/product/cache/10af09c11087c7047da4d5541bb15ed5/3/d/3d_vizzio_coco.jpg",
    ingredients: [
      "Crema de cacao",
      "Leche",
      "Almendras",
      "Manteca de palma",
      "leudantes muchos",
      "estabilizantes",
    ],
    description: "Un rico chocolate para no compartir con nadie.",
  },
  {
    name: "Hamburguesa",
    brand: "Not Co.",
    flavor: "Vacuno",
    weight: "95gr",
    image:
      "https://baufoods.cl/wp-content/uploads/2024/04/notburger2_0-95g-1024x1024.png",
    ingredients: [
      "Crema de cacao",
      "Leche",
      "Almendras",
      "Manteca de palma",
      "leudantes muchos",
      "estabilizantes",
    ],
    description: "Una rico hamburguesa para no compartir con nadie.",
  },
  {
    name: "Bebida",
    brand: "Coca-cola",
    flavor: "cola",
    weight: "1000cc",
    image:
      "https://i0.wp.com/almacenescorsa.com/wp-content/uploads/2021/07/Coca-Cola-Original-1L.jpg?fit=758%2C802&ssl=1",
    ingredients: [
      "Te falta coca-cola",
      "Leche",
      "Almendras",
      "Manteca de palma",
      "leudantes muchos",
      "estabilizantes",
    ],
    description: "Una rica Coca-Cola para no compartir con nadie.",
  },
  {
    name: "Chocolate Blanco con Almendras",
    brand: "Sahne Nuss",
    flavor: "chocolate blanco y almendras",
    weight: "100g",
    ingredients: [
      "Azúcar",
      "Manteca de cacao",
      "Leche entera en polvo",
      "Almendras (25%)",
      "Emulsionante (Lecitina de soya)",
      "Extracto de vainilla natural",
    ],
  },
  {
    name: "Barra de Cereal y Chocolate",
    brand: "Nestlé Fitness",
    flavor: "cacao y avena",
    weight: "23g",
    ingredients: [
      "Cereales integrales (50%)",
      "Jarabe de glucosa",
      "Chocolate con leche (12%)",
      "Aceites vegetales",
      "Leche condensada azucarada",
    ],
  },
  {
    name: "Caramelos Rellenos de Menta",
    brand: "Costa",
    flavor: "menta",
    weight: "180g",
    ingredients: [
      "Azúcar",
      "Jarabe de glucosa",
      "Agua",
      "Saborizante natural de menta",
      "Colorante artificial (E141)",
    ],
  },
];

const productListElement = document.getElementById("product-list");

productListArray.forEach((product) => {
  productListElement.innerHTML += `
    <div class="col">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${product.name} - ${product.brand}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${
                  product.flavor
                }</h6>
                ${
                  product.description
                    ? `<p class="card-text">
                        ${product.description}
                    </p>`
                    : ``
                }
                <button 
                    id=${product.name.replaceAll(
                      " ",
                      "_"
                    )}&${product.brand.replaceAll(" ", "_")}
                    class="btn btn-link p-0"
                >
                    Mostrar más
                </button>
            </div>
        </div>
    </div>
    `;
});

const productButtons = document.querySelectorAll(".card .btn-link");
const dialogElement = document.querySelector("dialog");

productButtons.forEach((button) => {
  const id = button.id;
  const [nameDirty, brandDirty] = id.split("&"); // bebida_rica&coca -> [bebida, coca]
  const name = nameDirty.replaceAll("_", " ");
  const brand = brandDirty.replaceAll("_", " ");

  button.addEventListener("click", () => {
    const modalInfoElement = dialogElement.querySelector("#modal-info");
    const foundProduct = productListArray.find((product) => {
      return product.name === name && product.brand === brand;
    }); // si no coincide devuelve undefined
    modalInfoElement.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${
                  foundProduct.image
                    ? foundProduct.image
                    : `https://media.gettyimages.com/id/500879062/es/vector/por-favor-respeten.jpg?s=612x612&w=gi&k=20&c=tCFEgsLdUlu9urxI_UAdsWIAC56cy-23IjqsYDDMmAU=`
                }" class="img-fluid rounded-start" alt="${foundProduct.name}">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${foundProduct.name}</h5>
                    <p class="card-text">Descripción: ${
                      foundProduct.description
                        ? foundProduct.description
                        : "Es un buen producto"
                    }</p>
                    <p class="card-text"><small class="text-body-secondary">${
                      foundProduct.weight
                    } - ${foundProduct.flavor}</small></p>
                </div>
                <div class="card-footer text-body-secondary">
                    <p class="d-inline-flex gap-1">
                        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#${foundProduct.name.replaceAll(
                          " ",
                          ""
                        )}" aria-expanded="false" aria-controls="collapseExample">
                            Ingredientes
                        </button>
                    </p>
                    <div class="collapse" id="${foundProduct.name.replaceAll(
                      " ",
                      ""
                    )}">
                        <ul class="card card-body list-unstyled">
                            ${foundProduct.ingredients
                              .map((el) => `<li>${el}</li>`)
                              .join("")}
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    `;
    dialogElement.showModal();
  });
});

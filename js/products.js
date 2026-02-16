const loadProduct = async (category, Id) => {
  manageSpinner(true);
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`,
  );

  const data = await res.json();

  removeCategoryBtnActiveStatus();

  const clickBtn = document.getElementById(`category-btn-${Id}`);
  if (clickBtn) {
    clickBtn.classList.add("bg-primary", "text-white");
  }

  displayProduct(data);
};

const loadAllProducts = async () => {
  manageSpinner(true);
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();

  removeCategoryBtnActiveStatus();

  const clickBtn = document.getElementById("category-btn-all");
  if (clickBtn) {
    clickBtn.classList.add("bg-primary", "text-white");
  }

  displayProduct(data);
};

const displayProduct = (products) => {
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("div");
    card.innerHTML = `
           <div class="card h-full bg-base-100 shadow-xl rounded-2xl">
  
  <!-- Product Image -->
  <figure class="px-6 pt-6 bg-gray-100 rounded-t-2xl">
    <img
      src=${product.image}
      alt="Mens Cotton Jacket"
      class="rounded-xl h-64 object-contain"
    />
  </figure>

  <div class="card-body">

    <!-- Category + Rating -->
    <div class="flex justify-between items-center">
      <span class="badge badge-primary badge-outline text-xs">
        ${product.category}
      </span>

      <div class="flex items-center gap-1 text-sm text-gray-600">
        <i class="fa-solid fa-star text-yellow-400"></i> <span class="font-medium">${product.rating.rate}</span>
        <span class="text-gray-400">(${product.rating.count})</span>
      </div>
    </div>

    <!-- Title -->
    <h2 class="card-title text-lg font-semibold">
      ${product.title}
    </h2>

    <!-- Price -->
    <p class="text-xl font-bold text-gray-900">$${product.price}</p>

    <!-- Buttons -->
    <div class="card-actions justify-between mt-4 flex">
      <button onclick="loadProductDetails('${product.id}')" class="btn btn-outline flex-1 w-full btn-sm shadow-lg border-gray-300 text-gray-500 font-semibold gap-2">
        <i class="fa-regular fa-eye"></i> Details
      </button>

      <button class="btn btn-primary flex-1 btn-sm gap-2 w-full">
        <i class="fa-solid fa-cart-plus"></i> Add
      </button>
    </div>

  </div>
</div>

        `;

    productContainer.append(card);
  });
  manageSpinner(false);
};

const loadProductDetails = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  displayProductDetails(data);
};

const displayProductDetails = (details) => {
  const detailsModalContainer = document.getElementById(
    "details-modal-container",
  );
  detailsModalContainer.innerHTML = `
    <div id="modal-content" class="space-y-4">
      <h2 id="modal-title" class="text-2xl font-bold">${details.title}</h2>
      <img id="modal-image" src=${details.image} alt="" class="w-full max-h-80 object-contain rounded-lg" />
      <p id="modal-description" class="text-gray-700">${details.description}</p>
      <div class="flex justify-between items-center">
        <p class="text-xl font-bold text-gray-900" id="modal-price">$ ${details.price}</p>
        <div class="flex items-center gap-1 text-sm text-gray-600">
          <i class="fa-solid fa-star text-yellow-400"></i> 
          <span id="modal-rating" class="font-medium">${details.rating.rate}</span>
        </div>
      </div>
      <div class="flex gap-4 mt-4">
        <button class="btn btn-primary flex-1" id="modal-add-to-cart">
          <i class="fa-solid fa-cart-plus"></i> Add to Cart
        </button>
        <button class="btn btn-secondary flex-1" id="modal-buy-now">
          Buy Now
        </button>
      </div>
    </div>
    `;
  document.getElementById("product_details_modal").showModal();

  document.getElementById("modal-add-to-cart").onclick = () => {
    alert(`Added "${details.title}" to cart!`);
  };

  document.getElementById("modal-buy-now").onclick = () => {
    alert(`Proceeding to buy "${details.title}"`);
  };
};

// Spinner

const manageSpinner = (status) => {
  if (status) {
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("product-container").classList.add("hidden");
  } else {
    document.getElementById("product-container").classList.remove("hidden");
    document.getElementById("spinner").classList.add("hidden");
  }
};

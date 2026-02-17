const loadCategory = async () => {
  manageSpinner(true);
  try {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const data = await res.json();
    displayCategory(data);
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};



const displayCategory = (categories) => {
  const categoryContainer = document.getElementById("category-container");
  categoryContainer.innerHTML = "";

  // "All" button
  const allBtn = document.createElement("button");
  allBtn.innerText = "All";
  allBtn.id = "category-btn-all";
  allBtn.className = "btn btn-outline btn-primary rounded-3xl category-btn";

  allBtn.addEventListener("click", loadAllProducts);
  categoryContainer.append(allBtn);

  for (let category of categories) {
    const button = document.createElement("button");

    // Clean ID (remove spaces & apostrophes)
    const Id = category
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/'/g, "");

    button.id = `category-btn-${Id}`;
    button.innerText = category;
    button.className = "btn btn-outline btn-primary rounded-3xl category-btn";

    button.addEventListener("click", () => {
      loadProduct(category, Id);
    });

    categoryContainer.append(button);
  }
  manageSpinner(false);
  loadAllProducts();
};

const removeCategoryBtnActiveStatus = () => {
  const categoryBtn = document.querySelectorAll(".category-btn");
  categoryBtn.forEach((btn) =>
    btn.classList.remove("bg-primary", "text-white"),
  );
};



const loadCategory = async () => {
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
  for (let category of categories) {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
           <button onclick="loadProduct('${category}')" class="btn btn-outline btn-primary rounded-3xl">${category}</button>
        `;
    categoryContainer.append(btnDiv);
  }
};

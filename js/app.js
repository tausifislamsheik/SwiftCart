// Load Navbar
fetch("components/navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  });

// Load Footer
fetch("components/footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });

// Load Page Content
function loadPage(page, element) {
  // Remove active styles from all nav links
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.remove("text-indigo-600", "font-bold");
    link.classList.add("text-gray-500");
  });

  // Add active styles to clicked link
  if (element) {
    element.classList.remove("text-gray-500");
    element.classList.add("text-indigo-600", "font-bold");
  }

  // Load the page content
  fetch(`pages/${page}.html`)
    .then(res => res.text())
    .then(data => {
      document.getElementById("content").innerHTML = data;
      if(page === 'products'){
        loadCategory();
      }
    });
}

// Default Page — activate first nav link (Home)
window.addEventListener("DOMContentLoaded", () => {
  const firstLink = document.querySelector(".nav-link");
  if (firstLink) {
    loadPage("home", firstLink);
  }
});


// Default Page
loadPage("home");

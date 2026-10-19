
document.querySelectorAll(".dropdown-toggle").forEach(function(button) {
  button.addEventListener("click", function(event) {
    event.stopPropagation();

    const dropdown = button.closest(".dropdown");
    const isOpen = dropdown.classList.contains("open");

    document.querySelectorAll(".dropdown.open").forEach(function(item) {
      item.classList.remove("open");
      const toggle = item.querySelector(".dropdown-toggle");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      dropdown.classList.add("open");
      button.setAttribute("aria-expanded", "true");
    }
  });
});

document.addEventListener("click", function() {
  document.querySelectorAll(".dropdown.open").forEach(function(item) {
    item.classList.remove("open");
    const toggle = item.querySelector(".dropdown-toggle");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    document.querySelectorAll(".dropdown.open").forEach(function(item) {
      item.classList.remove("open");
      const toggle = item.querySelector(".dropdown-toggle");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });
  }
});

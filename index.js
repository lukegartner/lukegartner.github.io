// Variables
const toggleBtn = document.querySelector(".toggle-btn");
const rootClassList = document.documentElement.classList;

// Recall preference from local storage
if (localStorage.getItem("theme")) {
  if (localStorage.getItem("theme") === "dark") {
    rootClassList.add("dark-theme");
  }
}

// Toggle Function
const toggleDarkMode = () => {
  rootClassList.toggle("dark-theme");

  if (rootClassList.contains("dark-theme")) {
    toggleBtn.textContent = "Light";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "Dark";
    localStorage.setItem("theme", "light");
  }
};

// Toggle Button Click Event Listner
toggleBtn.addEventListener("click", toggleDarkMode);

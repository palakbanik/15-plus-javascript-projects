const btn = document.querySelector("button");
const body = document.querySelector("body");

// load form local storage
const loadTheme = () => {
    const theme = localStorage.getItem("theme");
    body.style.backgroundColor = theme;
};

loadTheme();

// save in local storage
const saveTheme = (theme) => localStorage.setItem("theme", theme);

// change bg theme
const changeTheme = () => {
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white";
        saveTheme("white");

        btn.innerHTML = `<i class="ri-moon-line"></i>`;
    } else {
        body.style.backgroundColor = "black";
        saveTheme("black");

        btn.innerHTML = `<i class="ri-sun-line"></i>`;
    }
};

// btn click event
btn.addEventListener("click", changeTheme);

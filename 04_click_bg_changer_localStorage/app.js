const clrCode = document.querySelector("#clr-code");
const btn = document.querySelector("#btn");
const main = document.querySelector(".main");

// get color code from local storage
const loadClrCode = () => {
    const saveCode = JSON.parse(localStorage.getItem("color code"));

    const code = saveCode && saveCode.length > 0 ? saveCode : "#000000";

    clrCode.textContent = code;
    main.style.background = code;
};
loadClrCode();

// save color code in local storage
const saveClrCode = (clrCode) => localStorage.setItem("color code", clrCode);

// change bg color
const changeBG = () => {
    const hex = "0123456789ABCDEF";
    let genClrCode = "#";

    for (let i = 0; i < 6; i++) {
        const randomNum = Math.floor(Math.random() * hex.length);
        genClrCode += hex[randomNum];
    }

    main.style.background = genClrCode;
    clrCode.textContent = genClrCode;

    saveClrCode(genClrCode);
};

btn.addEventListener("click", changeBG);

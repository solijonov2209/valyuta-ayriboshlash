let elUserForm = document.querySelector(".js-form");
let elUserInput = document.querySelector(".js-input");
let elUserBtn = document.querySelector(".js-btn");
let elUserSelect = document.querySelector(".js-select");
let elResultText = document.querySelector(".js-text");


elUserForm.addEventListener("submit", function(evt) {

  evt.preventDefault();
    let userInput = elUserInput.value;
    let userSelect = elUserSelect.value;

    let result = userInput*userSelect;
     elResultText.textContent = `Siz tanlagan xorijiy valyutaning so'mdagi qiymati : ${result} so'm`;

})


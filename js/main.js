
const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");

const clearInputValue = (event) => {
    event.target.value = "";
};

inputDay.addEventListener("click", clearInputValue);
inputDay.addEventListener("touch", clearInputValue);

inputMonth.addEventListener("click", clearInputValue);
inputMonth.addEventListener("touch", clearInputValue);

inputYear.addEventListener("click", clearInputValue);
inputYear.addEventListener("touch", clearInputValue);

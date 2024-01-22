const inputErrorMessageDay = document.querySelector(".input-error-day");
const inputErrorMessageMonth = document.querySelector(".input-error-month");
const inputErrorMessageYear = document.querySelector(".input-error-year");
const inputDayDiv = document.querySelector(".input-day");
const inputMonthDiv = document.querySelector(".input-month");
const inputYearDiv = document.querySelector(".input-year");
const labelDay = document.querySelector(".label-day");
const labelMonth = document.querySelector(".label-month");
const labelYear = document.querySelector(".label-year");
const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");
const btn = document.querySelector(".button");
const showResultYears = document.querySelector(".show-result-years");
const showResultMonths = document.querySelector(".show-result-months");
const showResultDays = document.querySelector(".show-result-days");
const errorMessageInputBlank = "This field is required";

const calculateAge = () => {
  const currentDate = new Date();
  const birthDate = new Date(
    Number(inputYear.value),
    Number(inputMonth.value) - 1,
    Number(inputDay.value)
  );
  let years = currentDate.getFullYear() - birthDate.getFullYear();
  let months = currentDate.getMonth() - birthDate.getMonth();
  let days = currentDate.getDate() - birthDate.getDate();
  if (months < 0 || (months == 0 && days < 0)) {
    years--;
    months += 12;
  }

  if (days < 0) {
    months--;
    let tempDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    );
    days += tempDate.getDate();
  }

  showResultYears.textContent = years;
  showResultMonths.textContent = months;
  showResultDays.textContent = days;
  inputDay.value = "";
  inputMonth.value = "";
  inputYear.value = "";
};

const showResult = () => {
  if (
    inputDay.value !== "" &&
    inputMonth.value !== "" &&
    inputYear.value !== ""
  ) {
    calculateAge();
  } else {
    if (inputDay.value === "") {
      inputDay.classList.add("error");
      labelDay.classList.add("error");
      inputErrorMessageDay.innerText = errorMessageInputBlank;
    }
    if (inputMonth.value === "") {
      inputMonth.classList.add("error");
      labelMonth.classList.add("error");
      inputErrorMessageMonth.innerText = errorMessageInputBlank;
    }
    if (inputYear.value === "") {
      inputYear.classList.add("error");
      labelYear.classList.add("error");
      inputErrorMessageYear.innerText = errorMessageInputBlank;
    }
  }
};

btn.addEventListener("click", showResult);

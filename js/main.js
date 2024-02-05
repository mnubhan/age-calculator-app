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
  if (
    birthDate.getDate() !== Number(inputDay.value) ||
    Number(inputMonth.value) > 12 ||
    Number(inputMonth.value) < 1 ||
    Number(inputYear.value) >= currentDate.getFullYear()
  ) {
  if(birthDate.getDate()!==Number(inputDay.value)||Number(inputMonth.value)>12||Number(inputMonth.value)<1||Number(inputYear.value)>currentDate.getFullYear()){
    inputDay.classList.add("error");
    labelDay.classList.add("error");
    inputMonth.classList.add("error");
    labelMonth.classList.add("error");
    inputYear.classList.add("error");
    labelYear.classList.add("error");
    // inputErrorMessageDay.style.visibility = "hidden";
    // inputErrorMessageMonth.style.visibility ="hidden";
    // inputErrorMessageYear.sytle.visibility ="hidden";
    if (birthDate.getDate() !== Number(inputDay.value)) {
      inputErrorMessageDay.innerText = "Must be a valid day";
      inputErrorMessageDay.style.visibility = "visible";
    }else{
      inputErrorMessageDay.style.visibility = "hidden";
    }
    if (Number(inputMonth.value) > 12 || Number(inputMonth.value) < 1) {
      console.log("it run this code");
      inputErrorMessageMonth.innerText = "Must be a valid Month";
      inputErrorMessageMonth.style.visibility = "visible";
    }else{
      inputErrorMessageMonth.style.visibility ="hidden";
    }
    if (Number(inputYear.value) >= currentDate.getFullYear()) {
      inputErrorMessageYear.innerText = "Must be in the past";
      inputErrorMessageYear.style.visibility = "visible";
    }else{
      inputErrorMessageYear.style.visibility ="hidden";
    }
  } else {
    inputDay.classList.remove("error");
    labelDay.classList.remove("error");
    inputMonth.classList.remove("error");
    labelMonth.classList.remove("error");
    inputYear.classList.remove("error");
    labelYear.classList.remove("error");
    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();
    if (months < 0 || (months == 0 && days < 0)) {
      years--;
      months += 12;
    }
=======
    if(birthDate.getDate()!==Number(inputDay.value)){
      inputErrorMessageDay.innerText = "Must be a valid day";
      inputErrorMessageDay.style.visibility = "visible";
    }
    if(Number(inputMonth.value)>12||Number(inputMonth.value)<1){
      console.log("it run this code");
      inputErrorMessageMonth.innerText = "Must be a valid Month"
      inputErrorMessageMonth.style.visibility = "visible";
    }
    if(Number(inputYear.value)>=currentDate.getFullYear()){
      inputErrorMessageYear.innerText ="Must be in the past";
      inputErrorMessageYear.style.visibility = "visible"
    }
  }
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
    inputErrorMessageDay.style.visibility = "hidden";
    inputErrorMessageMonth.style.visibility ="hidden";
    inputErrorMessageYear.style.visibility ="hidden";
  }
};

const showResult = () => {
  if (
    inputDay.value !== "" &&
    inputMonth.value !== "" &&
    inputYear.value !== ""
  ) {
    calculateAge();
  } else {
    inputDay.classList.add("error");
    labelDay.classList.add("error");
    inputMonth.classList.add("error");
    labelMonth.classList.add("error");
    inputYear.classList.add("error");
    labelYear.classList.add("error");
    if (inputDay.value === "") {
      inputErrorMessageDay.innerText = errorMessageInputBlank;
      inputErrorMessageDay.style.visibility = "visible";
    } else {
      inputErrorMessageDay.style.visibility = "hidden";
    }
    if (inputMonth.value === "") {
      inputErrorMessageMonth.innerText = errorMessageInputBlank;
      inputErrorMessageMonth.style.visibility = "visible";
    } else {
      inputErrorMessageMonth.style.visibility = "hidden";
    }
    if (inputYear.value === "") {
      inputErrorMessageYear.innerText = errorMessageInputBlank;
      inputErrorMessageYear.style.visibility = "visible";
    } else {
      inputErrorMessageYear.style.visibility = "hidden";
    }
  }
};

  showResultYears.textContent = years;
  showResultMonths.textContent = months;
  showResultDays.textContent = days;
};

const showResult = () => {
  if (
    inputDay.value !== "" &&
    inputMonth.value !== "" &&
    inputYear.value !== ""
  ) {
    calculateAge();
  } else {
    inputDay.classList.add("error");
    labelDay.classList.add("error");
    inputMonth.classList.add("error");
    labelMonth.classList.add("error");
    inputYear.classList.add("error");
    labelYear.classList.add("error");
    if (inputDay.value === "") {
      inputErrorMessageDay.innerText = errorMessageInputBlank;
      inputErrorMessageDay.style.visibility = "visible";
    } else {
      inputErrorMessageDay.style.visibility = "hidden";
    }
    if (inputMonth.value === "") {
      inputErrorMessageMonth.innerText = errorMessageInputBlank;
      inputErrorMessageMonth.style.visibility = "visible";
    } else {
      inputErrorMessageMonth.style.visibility = "hidden";
    }
    if (inputYear.value === "") {
      inputErrorMessageYear.innerText = errorMessageInputBlank; 
      inputErrorMessageYear.style.visibility = "visible";
    } else {
      inputErrorMessageYear.style.visibility = "hidden";
    }
  }
};

btn.addEventListener("click", showResult);

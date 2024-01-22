const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");
const btn = document.querySelector(".button");
const showResultYears = document.querySelector(".show-result-years");
const showResultMonths = document.querySelector(".show-result-months");
const showResultDays = document.querySelector(".show-result-days");

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
  console.log({
    year: Number(inputYear.value),
    month: Number(inputMonth.value),
    day: Number(inputDay.value),
  });
  console.log({
    currentMonth: currentDate.getMonth(),
    birthDateMonth: birthDate.getMonth(),
  });
  console.log({ birthDate: birthDate });
  console.log({ years: years, months: months, days: days });
  if (months < 0 || (months == 0 && days < 0)) {
    years--;
    months += 12;
    console.log(months);
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

btn.addEventListener("click", calculateAge);

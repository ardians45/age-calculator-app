document.getElementById("age-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const day = document.getElementById("day");
  const month = document.getElementById("month");
  const year = document.getElementById("year");
  const errorElements = document.querySelectorAll(".error");
  const labelElements = document.querySelectorAll(".label");
  const result = document.getElementById("result");

  // Validasi inputan
  if (!day.value || !month.value || !year.value) {
    errorElements.forEach((error) => {
      error.textContent = "This field is required";
      error.classList.remove("hidden");
    });
    labelElements.forEach((label) => {
      label.style.color = "red";
    });
    day.style.borderColor = "red";
    month.style.borderColor = "red";
    year.style.borderColor = "red";
    return;
  }

  const inputDate = new Date(year.value, month.value - 1, day.value);
  if (inputDate > new Date()) {
    errorElements.forEach((error) => {
      error.textContent = "Date cannot be in the future.";
      error.classList.remove("hidden");
    });
    return;
  }

  if (inputDate.getDate() != day.value) {
    errorElements.forEach((error) => {
      error.textContent = "Invalid date.";
      error.classList.remove("hidden");
    });
    return;
  }

  errorElements.forEach((error) => {
    error.classList.add("hidden");
  });
  const today = new Date();
  const ageDate = new Date(today - inputDate);
  const years = ageDate.getUTCFullYear() - 1970;
  const months = ageDate.getUTCMonth();
  const days = ageDate.getUTCDate();

  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;
  labelElements.forEach((label) => {
    label.style.color = "";
  });
  day.style.borderColor = "";
  month.style.borderColor = "";
  year.style.borderColor = "";
  return;
});

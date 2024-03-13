const modal = document.querySelector(".modal");

const submit = document.querySelector(".submit");

const spanClose = document.querySelector(".close");

const result = document.querySelector(".result");

const rates = document.querySelectorAll("#rate");

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    rate.classList.add("active");
    const rateValue = rate.getAttribute("value");
    // result.innerHTML = rateValue;
  });
});

submit.addEventListener("click", () => {
  modal.style.display = "flex";
});

spanClose.addEventListener("click", () => {
  modal.style.display = "none";
});

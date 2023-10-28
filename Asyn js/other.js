const button = document.querySelector("button");
const header = document.querySelector("h1");

button.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data.slip.advice);
      header.innerText = data.slip.advice;
    });
});

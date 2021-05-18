const input = document.querySelector("#input");
const output = document.querySelector("#output");
const loader = document.querySelector("#loader");
const count = document.querySelector("#count");
const percent = document.querySelector("#percent");
const limit = 30;

const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.addEventListener("click", () => {
    // console.log(item.dataset.tag);
    input.value += item.dataset.tag;
    // input.append(item.dataset.tag);
  });
});

input.setAttribute("maxlength", limit);
input.addEventListener("focus", () => {
  loader.style.display = "block";
});
input.addEventListener("blur", () => {
  loader.style.display = "none";
});
input.addEventListener("keyup", (e) => {
  if (input.value.length > 0) {
    loader.style.display = "none";
  } else {
    loader.style.display = "block";
  }
  output.innerHTML = e.target.value;
  if (output.textContent.length >= limit || output.textContent.length == 0) {
    count.textContent = "";
  } else {
    count.textContent = limit - output.textContent.length;
  }
  const width = (output.textContent.length / limit) * 100;
  percent.style.width = `${width}%`;
  if (width <= 50) {
    percent.style.backgroundColor = "green";
  }
  if (width > 50) {
    percent.style.backgroundColor = "orange";
  }
  if (width > 80) {
    percent.style.backgroundColor = "red";
  }
});

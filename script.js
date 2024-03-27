// const btn = document.querySelector(".btn");
// const passwordbox = document.querySelector("#password");
// const length = 12;
// const uppercase = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
// const lowercase = "abcdefghijklmnopqrstuvwxyz";
// const number = "0123456789";
// const symbol = "@!#$%^&*()_+{}";
// const allchar = uppercase + lowercase + symbol + number;

// function createpassword() {
//   let password = "";
//   password += uppercase[Math.floor(Math.random() * uppercase.length)];
//   password += lowercase[Math.floor(Math.random() * lowercase.length)];
//   password += number[Math.floor(Math.random() * number.length)];
//   password += symbol[Math.floor(Math.random() * symbol.length)];
//   while (length > password.length) {
//     password += allchar[Math.floor(Math.random() * allchar.length)];
//   }
//   passwordbox.value = password;
// }
// btn.addEventListener("click", () => {
//   setTimeout(() => {
//     createpassword();
//   }, 1000);
// });uppercase + lowercase + symbol +
const btn = document.querySelector(".btn");
const passwordbox = document.querySelector("#password");
const length = 6;
const uppercase = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@!#$%^&*()_+{}";
const allchar = number;

function createpassword() {
  let password = "";
  // password += uppercase[Math.floor(Math.random() * uppercase.length)];
  // password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  // password += symbol[Math.floor(Math.random() * symbol.length)];
  while (length > password.length) {
    password += allchar[Math.floor(Math.random() * allchar.length)];
  }
  return password;
}

btn.addEventListener("click", () => {
  let password = createpassword();
  let i = 0;
  passwordbox.value = "";
  const interval = setInterval(() => {
    if (i < password.length) {
      passwordbox.value += password[i];
      i++;
    } else {
      clearInterval(interval);
    }
  }, 1000);
});

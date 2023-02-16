const reserveCampsite = document.querySelector(".reserve");
const footer = document.querySelector(".site-footer");
const loginBtn = document.querySelector(".login");

reserveCampsite.addEventListener("click", function () {
  document.body.style.backgroundColor = "#aa9ce0";
  footer.style.color = "#312c46";

  document.body.style.color = "#fff";
});

loginBtn.addEventListener("click", function () {
  document.body.style.color = "#000";
});
// Functionality for forgotten password
const messagePass = document.querySelector(".message-password");
const forgotPassForm = document.getElementById("forgotPassword");

forgotPassForm.addEventListener("mouseover", function () {
  messagePass.textContent = `If you need recover your password, please input email address that is linked to your account and we will email you a recovery link. NuCamp team 👥`;
  messagePass.classList.remove("hidden");
});

forgotPassForm.addEventListener("mouseout", function () {
  messagePass.classList.add("hidden");
});

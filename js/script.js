/* NAVIGATION FUNCTIONALITY */

/* THE USER WANTS TO ASK A QUESTION */

const askField = document.querySelector(".ask_inner");
const popupContainer = document.querySelector(".popup_container");
askField.onclick = () => {
  popupContainer.classList.add("active");
};

/* SIDE BAR ACTIVATION */

const sideBarIcon = document.querySelector(".side_bar_icon");
const sideBar = document.querySelector(".side_bar_container ul");
const sideBarBlur = document.querySelector(".side_bar_blur");

sideBarIcon.onclick = () => {
  sideBar.classList.toggle("active");
  sideBarBlur.classList.toggle("active");
};
// ASK QUESTION

const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "service_hkmipd8";
  const templateID = "template_vt3gb2d";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Sent!");
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});

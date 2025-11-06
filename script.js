const invite = document.querySelector(".btn")
const support = document.querySelector(".btn10")
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navlinks");


invite.addEventListener("click", () =>{
    window.open("https://discord.com/oauth2/authorize?client_id=1327936936203124789&permissions=8&integration_type=0&scope=bot", "_blank")
});

support.addEventListener("click", () =>{
    window.open("https://discord.gg/lovers-arenaa", "_blank")
})

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("toggle");
});


window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

window.history.scrollRestoration = "manual";
window.addEventListener("load", () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 10); 
});

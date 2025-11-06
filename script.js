let invite = document.querySelector(".btn")
let support = document.querySelector(".btn10")

invite.addEventListener("click", () =>{
    window.open("https://discord.com/oauth2/authorize?client_id=1327936936203124789&permissions=8&integration_type=0&scope=bot", "_blank")
});

support.addEventListener("click", () =>{
    window.open("https://discord.gg/lovers-arenaa", "_blank")
})

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

window.history.scrollRestoration = "manual";
window.addEventListener("load", () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 10); 
});

// Taco Tuesday Hooligans - quick link config
const links = {
  instagram: "", // e.g. "https://www.instagram.com/yourhandle/"
  facebook: "",  // e.g. "https://www.facebook.com/yourpage"
  email: ""      // e.g. "mailto:you@tacotuesdayhooligans.com"
};

document.getElementById("year").textContent = new Date().getFullYear();

function setLink(id, url) {
  const el = document.getElementById(id);
  if (!el) return;
  if (!url) {
    el.style.opacity = 0.45;
    el.style.pointerEvents = "none";
    el.title = "Link not set yet";
    el.href = "#";
  } else {
    el.href = url;
  }
}

setLink("btnInstagram", links.instagram);
setLink("btnFacebook", links.facebook);
setLink("btnEmail", links.email);

function toggleSidebar(){
document
.getElementById("sidebar")
.classList
.toggle("open");
}

// Scroll Top

window.addEventListener("scroll",()=>{

const btn =
document.getElementById("scrollTop");

if(window.scrollY > 300){
btn.classList.add("visible");
}else{
btn.classList.remove("visible");
}

});

// Active Navigation

const sections =
document.querySelectorAll("section[id]");

const navLinks =
document.querySelectorAll(".nav-item");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const top =
section.offsetTop - 200;

if(window.scrollY >= top){
current = section.getAttribute("id");
}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(
link.getAttribute("href")
===
"#"+current
){
link.classList.add("active");
}

});

});

// Tutup sidebar mobile

document
.querySelectorAll(
".nav-item,.nav-sub"
)
.forEach(link=>{

link.addEventListener(
"click",
()=>{

if(
window.innerWidth < 900
){

document
.getElementById("sidebar")
.classList
.remove("open");

}

}
);

});
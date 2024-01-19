let switcherlis = document.querySelectorAll(".switcher li");
let boxes = document.querySelectorAll(".portfolio .box")

  
  switcherlis.forEach((li)=> {
    li.addEventListener("click",removeactive);
    li.addEventListener("click",mangeimages);
  });

  // remove Active Class
  function removeactive () {
    switcherlis.forEach((li) => {
      li.classList.remove("active");
      this.classList.add("active");
    })
  }

  // Mange Images
  function mangeimages () {
    boxes.forEach((box)=> {
      box.style.display = "none"
    })
    document.querySelectorAll(this.dataset.value).forEach((el)=> {
      el.style.display = "block"
    })
  }



//   // munebar
//   let toogle  = document.querySelector(".toogle");
// let nav  = document.querySelector(".navbar navbar");
// // let close  = document.querySelector(".close")

// toogle.onclick = function () {
//   nav.classList.add("open");
// }

// // toogle.onclick = function () {
// //     this.parentElement.classList.remove("open");

// // }
let body = document.querySelector("body")
let nav = document.querySelector("nav")
let sliderbaropen = document.querySelector(".sliderbaropen");
let sliderbarClose = document.querySelector(".sliderbarClose");

sliderbaropen.addEventListener("click",() => {
  nav.classList.add("active");
})

body.addEventListener("click", e => {
  let clickedElm = e.target;

  if (!clickedElm.classList.contains("sliderbaropen") && !clickedElm.classList.contains("menu")) {
    nav.classList.remove("active");
  }
})

// Start Up Down

let span = document.querySelector(".up")

// Scroll Show
window.onscroll = function () {
    this.scrollY >= 1500 ? span.classList.add("show") : span.classList.remove("show");
};

// Click Up
span.onclick = function () {
  window.scrollTo({
    top:0,
    behavior : "smooth"
  }) 
}
// End Up Down

// Start Contact Us
function sendMail() {
	var params = {
	  name: document.getElementById("name").value,
	  phone: document.getElementById("phone").value,
	  service: document.getElementById("service").value,
	  massage: document.getElementById("massage").value,
	};
  
	const serviceID = "service_slojdo9";
	const templateID = "template_0jih65i";
  
	  emailjs.send(serviceID, templateID, params)
	  .then(res=>{
		  document.getElementById("name").value = "";
		  document.getElementById("phone").value = "";
		  document.getElementById("service").value = "";
		  document.getElementById("massage").value = "";
		  console.log(res);
		  alert("Your message sent successfully!!")
  
	  })
	  .catch(err=>console.log(err));
  }

// End Contact Us
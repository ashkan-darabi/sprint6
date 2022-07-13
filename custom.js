//sticky meno
//scroll top
let background = document.querySelector(".background");
let scroll = document.querySelector(".scroll")
let topnav = document.querySelector(".topnav")
window.addEventListener("scroll", e => {
    if (scrollY >= 200) {
      background.classList.add("show")
      scroll.classList.add("show")
      topnav.classList.add("show")
    }else{
        background.classList.remove("show")
        scroll.classList.remove("show")
        topnav.classList.remove("show")
    }
    scroll.addEventListener("click", e => {
      if(scroll.classList.contains("show")){
          window.scrollTo({top:0, behavior:"smooth"})
          console.log(scroll)
      }
    })
})
//meno hamburger
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
//accordion
let accordions  = document.querySelectorAll(".accordion")

accordions.forEach(accordion => {
  Array.from(accordion.children).forEach(wrapper => {
    if (wrapper.classList.contains("show")) {
      wrapper.querySelector("div").style.maxHeight = wrapper.querySelector("div").scrollHeight + 30 + 'px'
    }
    wrapper.querySelector("span").addEventListener("click" , e => {
    let span    = e.target
    let wrapper = span.parentElement
    let div     = span.nextElementSibling
    wrapper.classList.toggle("show")
   if (wrapper.classList.contains("show")) {
     div.style.maxHeight = div.scrollHeight + 30 + 'px'
   } else {
  div.style.maxHeight = null
   }
    Array.from(accordion.children).forEach(w => {
      if (w != wrapper) {
        w.classList.remove("show")
        w.querySelector('div').style.maxHeight = null
      }
    })
    })
  })
});

//FORM 
let form        = document.querySelector(".form")
let username    = document.querySelector("#username")
let password    = document.querySelector("#password")
let seepassword = document.querySelector("#see-password")

//userpatter => up
let up = /^[a-zA-Z][\w._]{5,23}$/

//evaluateUser=> eu
let eu = false

//evaluatePassword => ep
let ep = 0

form.addEventListener("submit", e => {
  if (!(eu && ep === 5))
  e.preventDefault()

  if (!eu) {
    form.username.classList.add("is-invalid")
  }
  if (ep !== 5) {
    form.password.classList.add("is-invalid")
  }
})
form.username.addEventListener("keyup", e => {
  if (e.target.value){
  username.textContent = e.target.value.toLowerCase()
  if (up.test(e.target.value)) {
    eu = true
    e.target.classList.add("is-valid")
    e.target.classList.remove("is-invalid")
  } else{
    eu = false
    e.target.classList.add("is-invalid")
  }
}else {
    username.innerHTML = '<i>please write something</i>'
  }
})
form.password.addEventListener("keyup", e => {
  if (e.target.value) {
 password.textContent = "*".repeat(e.target.value.length)
 seepassword.textContent = e.target.value

ep = 0
ep+= /[A-Z]/.test(e.target.value) ? 1 : 0;
ep+= /[a-z]/.test(e.target.value) ? 1 : 0;
ep+= /[0-9]/.test(e.target.value) ? 1 : 0;
ep+= /[\W]/.test(e.target.value) ? 1 : 0;
ep+=e.target.value.length >= 6 ? 1 : 0;

if (ep === 5) {
  e.target.classList.add("is-valid")
    e.target.classList.remove("is-invalid")
}else {
  e.target.classList.add("is-invalid")
}


  } else {
    password.innerHTML = '<i>please select password</i>'
    seepassword.innerHTML = '<i>please select password</i>'
  }
})
//DARK MOD

let themes   = document.querySelector(".themes")
let selectin = document.querySelector("#seseltin")

let selectedtheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
selectin.textContent = selectedtheme 
document.body.classList = selectedtheme

Array.from(themes.children).forEach(theme => {
  theme.addEventListener("click", e => {
    let color = e.target.dataset.color
    document.body.classList = color
    selectin.textContent = color
    localStorage.setItem("theme", color)
  })
})




// modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

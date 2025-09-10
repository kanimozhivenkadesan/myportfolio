//Toggle mobile menu

const menuToggle=document.getElementById("menu-toggle");

const navLinks=Document.getElementById("nav-links");

menuToggle.addEventListenerListener("click",()=>

{

  navLinks.classList.toggle("show");

});

//Simple contact form validation 

const contactForm=document.getElementById("contact-form");

const formStatus=Document.getElementByID("form-status");

contactForm.addEventListener("submit",(e)=>

{

  e.preventDefault();

  const name=Document.getElementByID("name").value.trim();

   const email=Document.getElementByID("email").value.trim();

   const message=document.getElementByID("message").value.trim();

   if(name && email && message){

    formStatus.textContent="message send successfully";

    formStatus.style.color="purple";

   }

   else{

    formStatus.textContent="Please fill in all fields.";

    formStatus.style.color="red";

   }

   }

  );
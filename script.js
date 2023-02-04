const submitBtn = document.querySelector(".submit");
const emailInput = document.querySelector("input");
const message = document.querySelector(".message")

emailInput.classList.remove("error");


submitBtn.addEventListener("click", function handleCick(e){
    e.preventDefault();
   if(emailInput.value.includes(".com") && emailInput.value.includes("@")) {
    emailInput.classList.remove("error");
    message.classList.add("hide-error");
   }

   else {
    emailInput.classList.add("error");
    message.classList.remove("hide-error");
   }

});

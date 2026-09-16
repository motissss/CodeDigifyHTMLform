document.getElementById("contactForm").addEventListener("submit", function(event)
{ event.preventDefault();
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;
let result = document.getElementById("result");
    if (name == "" || email == "" || message == ""){
        result.textContent = "Lūdzu, aizpildi visus laukus";
            return;
    }
    if (!email.includes("@")){
        result.textContent = "Ievadi derīgu e-pastu!";
        return;
    } 
    result.textContent = "Ziņa veiksmīgi nosūtīta!";
});
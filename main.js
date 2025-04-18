
const PassWordbox = document.getElementById("Password")
const length = 12;

// all password chars Possibility
const lowercase = "abcdefghijklmnopqrstuvwxyz";

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const numbers = "0123456789";

const specialChars = "!@#$%^&*()_+[]{},.?";
  
  const allChars = uppercase+lowercase+numbers+specialChars;

// function for generating the random password
const CreatePassword = (length)=>{
   let password= ""
   password += uppercase[Math.floor(Math.random()*uppercase.length)];
   password += lowercase[Math.floor(Math.random()*lowercase.length)];
   password += numbers[Math.floor(Math.random()*numbers.length)]; 
   password += specialChars[Math.floor(Math.random()*specialChars.length)];
   
   while(password.length <length){
    password += allChars[Math.floor(Math.random()*allChars.length)];
   }
PassWordbox.value = password;
return password;
}

function copyToClipboard() {
    const password = PassWordbox.value; // Get the generated password
    if (!password) {
        console.log("No password to copy!");
        return;
    }

    navigator.clipboard.writeText(password)
        .then(() => {
            console.log("Text copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
}

CreatePassword(length);
copyToClipboard();
// programmer: Francesco Cimino
// project: email check

// input-data
const userNameInputData = document.getElementById("name");
const userEmailInputData = document.getElementById("email");

// list
const userEmailList = ['francesco@gmail.com', 'cimino@gmail.com', 'boolean@libero.it', 'classe73@libero.it'];

// pre-output-data
let isFound = false;

// email-list
submit.addEventListener("click",  function () {

    // input-value
    const userNameInput = userNameInputData.value;
    const userEmailInput = userEmailInputData.value; 

    // loop
    for (let i = 0; i < userEmailList.length; i++) {
        const userEmail = userEmailList[i];
         
        if(userEmailInput === userEmail) {
            isFound = true;
        }
    }
    
    if (isFound) {
        alert("Welcome back... Good to see you!!!");
    } else {
        alert("There is no email like this inside the database... Try it again with another one please:"); 
    }

    //reset-input-value
    userNameInputData.value = "";
    userEmailInputData.value = "";
});
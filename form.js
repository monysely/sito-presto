//Funzione Form

function submitForm (event){
    event.preventDefault();
    let data = {};
    
    data.name = firstNameInput.value;
    data.surname = lastNameInput.value;
    data.email = emailInput.value;
    data.message = msgInput.value;

    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    msgInput.value = "";
    
    const confirmModal = new bootstrap.Modal("#confirmModal",{})
    confirmModal.show();

}
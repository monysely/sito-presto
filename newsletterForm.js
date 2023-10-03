function submitNewsletter (event) {
    event.preventDefault()

    let data = {}

    const newsletterInput = document.querySelector("#newsletterInput");
    const invalidNewsletterFeedback = document.querySelector("#invalidNewsletterFeedback")

    newsletterInput.classList.remove("is-valid");
    newsletterInput.classList.remove("is-invalid");
    invalidNewsletterFeedback.classList.remove("d-block");

    if (newsletterInput.value === "") {
        invalidNewsletterFeedback.classList.add("d-block");
        invalidNewsletterFeedback.innerHTML = " Campo non valido! " ;
        newsletterInput.classList.add("is-invalid");
        return;  
    }

    newsletterInput.classList.add("is-valid");
    data.email = newsletterInput.value;

    newsletterInput.value = "";

    const newsletterModal = new bootstrap.Modal("newsletterFormModal",{});
    newsletterModal.show();

}
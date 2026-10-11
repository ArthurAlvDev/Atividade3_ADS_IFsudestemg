document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const inputNome = document.getElementById("nome");
    const inputEmail = document.getElementById("email");
    const feedbackElement = document.getElementById("formFeedback");

    function validarEEnviarFormulario(event) {
        event.preventDefault();

        const nomeValor = inputNome.value.trim();
        const emailValor = inputEmail.value.trim();

        if (nomeValor === "" || emailValor === "") {
            feedbackElement.style.color = "red";
            feedbackElement.textContent = "Por favor, preencha todos os campos obrigatórios (Nome e E-mail).";
            return;
        }

        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(emailValor)) {
            feedbackElement.style.color = "red";
            feedbackElement.textContent = "Por favor, insira um endereço de e-mail válido.";
            return;
        }

        feedbackElement.style.color = "green";
        feedbackElement.textContent = `Obrigado, ${nomeValor}! A sua mensagem foi validada e simulada com sucesso.`;

        contactForm.reset();
    }

    if (contactForm) {
        contactForm.addEventListener("submit", validarEEnviarFormulario);
    }
});
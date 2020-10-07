$(function() {
  $("#inputsLogin").validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true
      }
    },
    messages: {
      email: {
        required: "Campo de preenchimento obrigatório.",
        email: "E-mail inválido."
      },
      password: {
        required: "Campo de preenchimento obrigatório."
      }
    },
    errorClass: "error",
  });
});
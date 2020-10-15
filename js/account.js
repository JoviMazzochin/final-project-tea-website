$(function() {

  $.validator.addMethod("fullName", function(value, element, regexpr) {
    return regexpr.test(value);
  }, "Please enter a valid name."); //Adding a new rule for validate

  //Validating Login Inputs
  $("#inputsLogin").validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
      }
    },
    messages: {
      email: {
        required: "Campo de preenchimento obrigatório.",
        email: "E-mail inválido.",
      },
      password: {
        required: "Campo de preenchimento obrigatório.",
      }
    },
    errorClass: "error",
  });
  //Validation CreateAccount Inputs
  $("#inputsCreateAccount").validate({
    rules: {
      name: {
        required: true,
        fullName: /[A-Z][a-z]* [A-Z][a-z]*/
      },
      cpf: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      createPassword: {
        required: true,
      },
      rcreatePassword: {
        required: true,
        equalTo: '#createPassword',
      }
    },
    messages: {
      name: {
        required: "Campo de preenchimento obrigatório.",
      },
      cpf: {
        required: "Campo de preenchimento obrigatório.",
      },
      email: {
        required: "Campo de preenchimento obrigatório.",
        email: "E-mail inválido.",
      },
      createPassword: {
        required: "Campo de preenchimento obrigatório.",
      },
      rcreatePassword: {
        required: "Campo de preenchimento obrigatório.",
        equalTo: "Verifique se as senhas conferem",
      }
    },
    errorClass: "error",
  });
});

//Hidding product modal on addToCart click.
$("#addToCart").click(() => $("#productModal").modal("hide"));

//Hidding userLogin modal on createAccoungButton click.
$("#createAccountButton").click(() => $("#userLoginModal").modal("hide"));

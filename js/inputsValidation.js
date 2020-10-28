$(function() {

  $.validator.addMethod("fullName", function(value, element, regexpr) {
    return regexpr.test(value);
  }, "Please enter a valid name.");//Adding a new rule for validate

  $.validator.addMethod("cpf", function(value, element, regexpr) {
    return regexpr.test(value);
  }, "Please enter a valid CPF.");

  $.validator.addMethod("checkDigits", function(value, element, regexpr) {
    return regexpr.test(value);
  }, "Please a valid digits.");

  $.validator.addMethod("onlyNumbers", function(value, element, regexpr) {
    return regexpr.test(value);
  }, "Please enter a valid number.");

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
        required: "This field is required.",
        email: "Invalid e-mail.",
      },
      password: {
        required: "This field is required.",
      }
    },
    errorClass: "error",
  });
  //Validation CreateAccount Inputs
  $("#inputsCreateAccount").validate({
    rules: {
      name: {
        required: true,
        fullName: /[A-Z][a-z]* [A-Z][a-z]*/,
      },
      cpf: {
        required: true,
        cpf: /^\d{3}.\d{3}.\d{3}-\d{2}$/,
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
      },
      zipCode: {
        required: true,
        onlyNumbers: /^\d{8}$/,
      },
      number: {
        required: true,
        onlyNumbers: /^[0-9]{1,6}$/,
      }
    },
    messages: {
      name: {
        required: "This field is required.",
      },
      cpf: {
        required: "This field is required.",
      },
      email: {
        required: "This field is required.",
        email: "E-mail inválido.",
      },
      createPassword: {
        required: "This field is required.",
      },
      rcreatePassword: {
        required: "This field is required.",
        equalTo: "Verify if the passwords match.",
      },
      zipCode: {
        required: "This field is required.",
      },
      number: {
        required: "This field is required.",
      }
    },
    errorClass: "error",
  });

  //validating Credit Card inputs
  $('#inputsCreditCard').validate({
    rules: {
      cardNumber: {
        required: true,
        onlyNumbers: /^\d{16}$/,
      },
      cardHolder: {
        required: true,
        fullName: /[A-Z][a-z]* [A-Z][a-z]*/
      },
      shelfLife: {
        required: true,
      },
      checkDigits: {
        required: true,
        checkDigits: /[0-9]{3} */
      },
    },
    messages: {
      cardNumber: {
        required: "This field is required.",
      },
      cardHolder: {
        required: "This field is required.",
        fullName: "Insert a full name"
      },
      shelfLife: {
        required: "This field is required.",
      },
      checkDigits: {
        required: "This field is required.",
        checkDigits: "Invalid digits"

      },
    },
    errorClass: "error",
  })
  
  //Hidding product modal on addToCart click.
  $("#addToCart").click(() => $("#productModal").modal("hide"));
  
  //Hidding userLogin modal on createAccoungButton click.
  $("#createAccountButton").click(() => $("#userLoginModal").modal("hide"));
  
});
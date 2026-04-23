$("#contactForm").on("submit", function (event) {
    event.preventDefault();
    //$("#sendBtn").prop("disabled", true);

    var fd = new FormData();
    fd.append("Pagina", window.location.pathname);
    fd.append("Nome", $("input[id='formNome']").val());
    fd.append("Cognome", $("input[id='formCognome']").val());
    fd.append("Email", $("input[id='formEmail']").val());
    fd.append("Telefono", $("input[id='formTelefono']").val());
    fd.append("Messaggio", $("textarea[id='formMessaggio']").val());

    $.ajax({
        url: "mail/contact_me.php",
        type: "POST",
        data: fd,
        contentType: false,
        processData: false,
        cache: false,
        success: function (res) {
            result = JSON.parse(res);

            if (result.success == "true") {
                
                _iub.cons_instructions.push(["submit", {
                    writeOnLocalStorage: false, // default: false
                    form: {
                        selector: document.getElementById("contactForm"),
                        map: {
                            subject: {
                                full_name: "formNome",
                                email: "formEmail",
                                first_name: "formNome",
                                last_name: "formCognome"
                            },
                            preferences: {
                                generic: "generic",
                            }
                        }
                    },
                    consent: {
                        legal_notices: [{
                                identifier: "privacy_policy",
                            },
                            {
                                identifier: 'cookie_policy',
                            },
                            {
                                identifier: "terms",
                            }
                        ],
                    }
                }, {
                    success: function (response) {
                        console.log(response);
                        $(".success-message").toggleClass("d-none");
                        $("#sendBtn").fadeOut();
                        document.getElementById("contactForm").reset();

                    },
                    error: function (response) {
                        console.log(response);
                    }
                }])

            } else {
                // Fail message
                $(".error-message").toggleClass("d-none");
                //$("#sendBtn").fadeOut();
            }
        },
        error: function () {
            // Fail message
            $(".error-message").toggleClass("d-none");
            //$("#sendBtn").fadeOut();
        },
    })
})
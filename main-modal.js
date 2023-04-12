
const input = document.querySelector("#input");
const iti = window.intlTelInput(input, {
    initialCountry: "ae",
    onlyCountries: ["ae"],
    formatOnDisplay: false,
    utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js",
    customPlaceholder: function (_, selectedCountryData) {
        return "+" + selectedCountryData.dialCode + " ___ ___ ____";
    },
});

$("#input").inputmask("+999 999 999 9999", {
    placeholder: "_",
    showMaskOnHover: false,
    greedy: false
});

$(function () {
    $(".button_on_page , .modal_form_close , .menu_button_2_home").on("click", function (e) {
        $("body").toggleClass("hidden_body");
    });

    function convertFormToJSON(_form) {
        var fields = $(_form).serializeArray();
        var result = {};
        $.each(fields, (_, field) => {
            const value = field.value?.trim() || "";
            result[field.name] = field.name === "phone" ?
                value.replaceAll(" ", "").replaceAll("_", "") :
                value;
        });
        return result;
    }

    makeWebflowFormAjax = function (forms, successCallback, errorCallback) {
        forms.each(function () {
            var form = $(this);
            form.on("submit", function () {
                var container = form.parent();
                var doneBlock = $(".w-form-done", container);
                var failBlock = $(".w-form-fail", container);
                var action = form.attr("action");
                var method = form.attr("method");
                var data = convertFormToJSON(form);
                $.ajax({
                    type: method,
                    url: action,
                    data: JSON.stringify(data),
                    contentType: "application/json",
                    dataType: "json",
                    success: function (resultData) {
                        if (typeof successCallback === "function") {
                            result = successCallback(resultData);
                            if (!result) {
                                form.show();
                                doneBlock.hide();
                                failBlock.show();
                                return;
                            }
                        }
                        form.hide();
                        doneBlock.show();
                        failBlock.hide();
                    },
                    error: function (e) {
                        if (typeof errorCallback === "function") {
                            errorCallback(e);
                        }
                        form.show();
                        doneBlock.hide();
                        failBlock.show();
                    },
                });
                return false;
            });
        });
    };
    makeWebflowFormAjax($("form"));
});

$(".text-field-2.w-input").attr("maxlength", "17");

$(".button_on_page").on("click", validateForm);

function registerMainModuleListeners() {
    const { nameInput, phoneInput, termsCheckbox } = getFormFields();
    nameInput.on('input', validateForm);
    phoneInput.on('input', validateForm);
    termsCheckbox.on('change', validateForm);
}

function validateForm() {
    const { submitButton } = getFormFields();
    submitButton.attr("disabled", !checkFormValidation());
}

function checkFormValidation() {
    const { nameInput, termsCheckbox } = getFormFields();
    const isValidName = nameInput.val().trim().length > 1;
    const numberValidationError = iti.getValidationError();
    const isValidNumber = iti.isValidNumber() ||
        (numberValidationError === 0 || numberValidationError === 4);
    const isTermsChecked = $(termsCheckbox).is(":checked");
    return isValidName & isValidNumber & isTermsChecked;
}

function getFormFields() {
    var form = $('form[data-name="Contact Form"]');
    return {
        nameInput: form.find("input[type=text]"),
        phoneInput: form.find("input[type=tel]"),
        termsCheckbox: form.find("#checkbox"),
        submitButton: form.find("input[type=submit]")
    };
}

registerMainModuleListeners();

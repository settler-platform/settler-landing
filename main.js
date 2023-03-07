
$(document).ready(function () {
    $(".w-dyn-item").each(function () {
        $(this).attr(
            "data-stories",
            "" + $(this).children(".idtext").text().toLowerCase().trim());
    });
});
const mySwiper = new Swiper("#portfolio-swiper", {
    slidesPerView: 1,
    grabCursor: true,
    spaceBetween: 28,
    allowTouchMove: true,
    navigation: {
        nextEl: "#right-button",
        prevEl: "#left-button",
    },
    pagination: {
        el: "#portfolio_pagination",
        type: "bullets",
        clickable: true,
    },
});
const mySwiper3 = new Swiper("#reviews_slider", {
    allowTouchMove: true,
    slidesPerView: 2.2,
    centeredSlides: true,
    pauseOnMouseEnter: true,
    spaceBetween: 40,
    loop: true,
    autoplay: {
        delay: 5000,
    },
});
const input = document.querySelector("#input");
const iti = window.intlTelInput(input, {
    initialCountry: "ae",
    onlyCountries: ["ae"],
    utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js",
    customPlaceholder: function (_, selectedCountryData) {
        return "+" + selectedCountryData.dialCode + " ___ ___ ____";
    },
});
$("#input").inputmask("+999 999 999 9999", {
    placeholder: "_", showMaskOnHover: false, greedy: false
});

$(function () {
    var splide1 = new Splide("#splide_repair", {
        autoplay: "play",
        type: "loop",
        resetProgress: false, snap: true, interval: "30000", drag: "free", arrows: true, pauseOnFocus: false, pauseOnHover: false, start: 0, perMove: 1,
    });
    var splide2 = new Splide("#splide_materials", {
        autoplay: "play",
        type: "loop",
        resetProgress: false,
        snap: true,
        interval: "30000",
        drag: "free",
        arrows: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        start: 0,
        perMove: 1,
    });
    var splide3 = new Splide("#splide_process", {
        autoplay: "play",
        type: "loop",
        resetProgress: false,
        snap: true,
        interval: "30000",
        drag: "free",
        arrows: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        start: 0,
        perMove: 1,
    });
    var splide4 = new Splide("#splide_ideas", {
        autoplay: "play",
        type: "loop",
        resetProgress: false,
        snap: true,
        interval: "30000",
        drag: "free",
        arrows: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        start: 0,
        perMove: 1,
    });
    $(".stories_item, .main_stories_modal_close").click(function () {
        $("body").toggleClass("hidden_body");
        const selected = $(this).attr("data-stories");
        $(".main_stories_modal_close").attr("data-stories", selected);
        $("div[data-stories = " + selected + "]").toggleClass("active");
        $(".main_stories_modal").toggleClass("active");
        if ($(splide1.root).hasClass("is-active")) {
            splide1.destroy();
        } else if ($(splide1.root).attr("data-stories", "repair")) {
            splide1.on("pagination:mounted", function (data) {
                splide1.on("mounted move", function () {
                    splide1.autoplay;
                    splide1.on("autoplay:playing", (rate) => {
                        data.items.forEach(function (item) {
                            if (item.button.classList.contains("is-active")) {
                                item.button.style.width = `${rate * 100}%`;
                            } else {
                                item.button.style.width = `100%`;
                            }
                        });
                    });
                });
            });
            splide1.mount();
        } else {
        }
        if ($(splide2.root).hasClass("is-active")) {
            splide2.destroy();
        } else if ($(splide2.root).attr("data-stories", "materials")) {
            splide2.on("pagination:mounted", function (data) {
                splide2.on("mounted move", function () {
                    splide2.autoplay;
                    splide2.on("autoplay:playing", (rate) => {
                        data.items.forEach(function (item) {
                            if (item.button.classList.contains("is-active")) {
                                item.button.style.width = `${rate * 100}%`;
                            } else {
                                item.button.style.width = `100%`;
                            }
                        });
                    });
                });
            });
            splide2.mount();
        } else {
        }
        if ($(splide3.root).hasClass("is-active")) {
            splide3.destroy();
        } else if ($(splide3.root).attr("data-stories", "process")) {
            splide3.on("pagination:mounted", function (data) {
                splide3.on("mounted move", function () {
                    splide3.autoplay;
                    splide3.on("autoplay:playing", (rate) => {
                        data.items.forEach(function (item) {
                            if (item.button.classList.contains("is-active")) {
                                item.button.style.width = `${rate * 100}%`;
                            } else {
                                item.button.style.width = `100%`;
                            }
                        });
                    });
                });
            });
            splide3.mount();
        } else {
        }
        if ($(splide4.root).hasClass("is-active")) {
            splide4.destroy();
        } else if ($(splide4.root).attr("data-stories", "ideas")) {
            splide4.on("pagination:mounted", function (data) {
                splide4.on("mounted move", function () {
                    splide4.autoplay;
                    splide4.on("autoplay:playing", (rate) => {
                        data.items.forEach(function (item) {
                            if (item.button.classList.contains("is-active")) {
                                item.button.style.width = `${rate * 100}%`;
                            } else {
                                item.button.style.width = `100%`;
                            }
                        });
                    });
                });
            });
            splide4.mount();
        } else {
        }
        $(".splide__toggle__pause").on("click", function (e) {
            $(
                ".splide__slide .w-embed .w-background-video.w-background-video-atom video"
            ).trigger("pause");
        });
        $(".splide__toggle__play").on("click", function (e) {
            $(
                ".splide__slide .w-embed .w-background-video.w-background-video-atom video"
            ).trigger("play");
        });
    });
    $(".button_on_page , .modal_form_close , .menu_button_2_home").on("click", function (e) {
        $("body").toggleClass("hidden_body");
    });
    $(".button_on_page").on("click", function (e) {
        var form = $('form[data-name="Contact Form"]');
        var submitButton = form.find("input[type=submit]");
        const nameInput = form.find("input[type=text]");
        const phoneInput = form.find("input[type=tel]");
        submitButton.attr("disabled", true);
        var termsCheckbox = form.find($("#checkbox"));
        $(form).on('change', 'input', function () {
            $(input).on('input', 'propertychange', 'change', function (e) {
                const isValid = iti.isValidNumber();
                const error = iti.getValidationError();
            });
            if ($(termsCheckbox).is(":checked") & nameInput.val().length > 1 & iti.isValidNumber() === true) {
                submitButton.attr("disabled", false);
            } else {
                submitButton.attr("disabled", true);
            }
        });
    });
    function convertFormToJSON(r) { var e = $(r).serializeArray(), n = {}; return $.each(e, function () { n[this.name] = this.value || "" }), n }
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
                }); return false;
            });
        });
    };
    makeWebflowFormAjax($("form"));
});
gsap.registerPlugin(ScrollTrigger);
$(".main_stories").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".main_stories");
    const hero = document.querySelector(".main_hero");
    const scrollHeight = $("body").height();
    const landingScrollTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".main_hero",
            start: "80% top",
            end: scrollHeight + 10,
            toggleActions: "play none reverse reset",
        },
    });
    landingScrollTimeline
        .to(".header", {
            background: "white",
        })
        .to(".nav-link", {
            color: "#000",
        })
        .to(".header_logo_black", {
            opacity: "1",
        });
    return landingScrollTimeline;
});
$(".text-field-2.w-input").attr("maxlength", "17");
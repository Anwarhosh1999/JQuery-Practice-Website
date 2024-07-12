// ------------------------------------------------ activate preloader

let loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

var cityArray = "giza";
localStorage.setItem("currentCity", cityArray);

// ------------------------------------------------ Selectors
$(".openNav").click(function () {
  $(".sidenav").css("width", "200px");
  $("#Home h2 ,#Home p").css("margin-left", "200px");
});
$("#closebtn").click(function () {
  $(".sidenav").css("width", "0px");
  $("#Home h2 ,#Home p").css("margin-left", "0px");
});

$("#sliderDown .toggle").click(function () {
  $(this).next().slideToggle();
  $(".inner").not($(this).next()).slideUp();
});

$("textarea").keyup(function () {
  let textLength = $(this).val().length;
  if (100 - textLength <= 0) {
    $("#chars").text("No remaining characters");
    $(".submit").attr("disabled", "disabled");
  } else {
    $("#chars").html(100 - textLength + " Characters Reamining");
    $(".submit").removeAttr("disabled");
  }
});

let countDownDate = new Date("oct 9, 2024 23:59:59").getTime();

function counterNow() {
  let dateNow = new Date().getTime();

  let dateDiff = countDownDate - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  $(".days").html(days < 10 ? `0${days} Days` : `${days} Days`);
  $(".hours").html(hours < 10 ? `0${hours} Hours` : `${hours} Hours`);
  $(".minutes").html(
    minutes < 10 ? `0${minutes} Minutes` : `${minutes} Minutes`
  );
  $(".seconds").html(
    seconds < 10 ? `0${seconds} Seconds` : `${seconds} Seconds`
  );
}
counterNow();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let dateDiff = countDownDate - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  $(".days").html(days < 10 ? `0${days} Days` : `${days} Days`);
  $(".hours").html(hours < 10 ? `0${hours} Hours` : `${hours} Hours`);
  $(".minutes").html(
    minutes < 10 ? `0${minutes} Minutes` : `${minutes} Minutes`
  );
  $(".seconds").html(
    seconds < 10 ? `0${seconds} Seconds` : `${seconds} Seconds`
  );

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

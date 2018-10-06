var timer;

var reset = () => {
  var currentSlide = $(".slide.active");
  var nextSlide = currentSlide.next();

  currentSlide.fadeOut(500).removeClass("active");
  nextSlide.fadeIn(500).addClass("active");

  if (nextSlide.length === 0) {
    $(".slide")
      .first()
      .fadeIn(500)
      .addClass("active");
  }

  // grab the ID of the active project in the carousel
  let activeProject = document.getElementsByClassName("active")[0].id;

  let slides = document.getElementsByClassName("slide-underline");
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].id === activeProject) {
      slides[i].style.color = "white";
    } else {
      slides[i].style.color = "black";
    }
  }
};

var timer = setInterval(reset, 8000);
let buttonId;
let button;

window.onload = () => {
  reset();
};

$("#right-arrow").click(event => {
  event.preventDefault();
  clearInterval(timer);
  timer = setInterval(reset, 8000);

  var currentSlide = $(".slide.active");
  var nextSlide = currentSlide.next();

  currentSlide.fadeOut(300).removeClass("active");
  nextSlide.fadeIn(300).addClass("active");

  if (nextSlide.length === 0) {
    $(".slide")
      .first()
      .fadeIn(300)
      .addClass("active");
  }
});

$("#left-arrow").click(event => {
  event.preventDefault();
  clearInterval(timer);
  timer = setInterval(reset, 8000);

  var currentSlide = $(".slide.active");
  var prevSlide = currentSlide.prev();

  currentSlide.fadeOut(300).removeClass("active");
  prevSlide.fadeIn(300).addClass("active");

  if (prevSlide.length === 0) {
    $(".slide")
      .last()
      .fadeIn(300)
      .addClass("active");
  }
});

const toggle = btn => {
  let button = document.getElementById(btn);
  if (button.style.display == "block") {
    button.style.display = "none";
  } else if (button.style.display == "none") {
    button.style.display = "block";
  }
};

$(".read-more").click(event => {
  event.preventDefault();
  clearInterval(timer);

  let spanId = event.target.value;
  let buttonId = event.target.id;
  localStorage.setItem("btn-id", buttonId);
  let btn = localStorage.getItem("btn-id");
  let button = document.getElementById(btn);
  button.style.display = "none";
  let span = document.getElementById(spanId);
  span.style.display = "block";
});

$(".show-less").click(event => {
  event.preventDefault();
  timer = setInterval(reset, 8000);
  let spanId = event.target.value;
  let span = document.getElementById(spanId);
  span.style.display = "none";
  let btn = localStorage.getItem("btn-id");
  toggle(btn);
});

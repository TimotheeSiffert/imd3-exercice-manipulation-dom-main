document.addEventListener("DOMContentLoaded", function () {
  const exercice1 = document.querySelector("#exercice-1");
  const exercice2 = document.querySelector("#exercice-2");
  const exercice3 = document.querySelector("#exercice-3");

  if (exercice1) {
    document.querySelector(".broccoli").remove();
    document.querySelector(".broccoli").remove();
    document.querySelector(".broccoli").remove();
    document.querySelector(".broccoli").remove();
    document.querySelector(".broccoli").remove();
  }

  if (exercice2) {
    document.querySelector(".raw").classList.add("cooked");
    document.querySelector(".hot").classList.remove("burned");
    document.querySelector("#pizza-special").classList.toggle("highlighted");
    document.querySelector(".basic").classList.add("premium", "deluxe");
    document.querySelector(".cold").classList.add("hot");
    document.querySelector(".cold").classList.remove("cold");
    document
      .querySelector(".regular-size")
      .classList.replace("regular-size", "large-size");
    document.querySelector(".unfinished").classList.add("ready");
    document.querySelector(".unfinished").classList.remove("unfinished", "raw");
  }

  if (exercice3) {
    document
      .querySelector("#exercice-3-1")
      .addEventListener("click", function () {
        document.querySelector("#exercice-3-1").classList.add("highlight");
      });

    document
      .querySelector("#exercice-3-2 button")
      .addEventListener("click", function () {
        document.querySelector("#exercice-3-2").classList.toggle("highlight");
      });

    document
      .querySelector("#exercice-3-3")
      .addEventListener("mouseover", function () {
        document.querySelector("#exercice-3-3").classList.add("highlight");
      });
    document
      .querySelector("#exercice-3-3")
      .addEventListener("mouseout", function () {
        document.querySelector("#exercice-3-3").classList.remove("highlight");
      });

    document
      .querySelector("#exercice-3-4")
      .addEventListener("mousemove", function () {
        document.querySelector("#exercice-3-4").classList.add("highlight");
      });

    document.addEventListener("scroll", function () {
      document.querySelector("#exercice-3-5").classList.add("highlight");
    });

    document.addEventListener("keydown", function () {
      document.querySelector("#exercice-3-6").classList.add("highlight");
    });
    document.addEventListener("keyup", function () {
      document.querySelector("#exercice-3-6").classList.remove("highlight");
    });

    window.addEventListener("resize", function () {
      document.querySelector("#exercice-3-7").classList.add("highlight");
    });
  }
});

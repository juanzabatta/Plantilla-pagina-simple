"use strict";

window.addEventListener("load", () => {
  //mostrar ocultar menu
  const $iconMenu = document.querySelector("#icon-menu");
  const $menu = document.querySelector("#menu");

  $iconMenu.addEventListener("click", () => {
    $menu.style.display = isEmpty($menu.style.display) ? "flex" : "none";
  });

  //Oculta o muestra el header si se hace scroll
  const $header = document.querySelector("header");
  var lastScrollTop = 0;
  var $heightheader;

  window.addEventListener(
    "scroll",
    () => {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        $heightheader = -$header.clientHeight;
        $header.style.transform = `translate(0px, ${$heightheader}px)`;
      } else {
        $header.style.transform = "translate(0px, 0px)";
      }
      lastScrollTop = st;
    },
    false
  );

  // Hace scroll al interactuar con los botones del header
  const $historyButton = document.querySelector("#history-button");
  const $aboutButton = document.querySelector("#about-button");
  const $serviceButton = document.querySelector("#service-button");
  const $contactButton = document.querySelector("#contact-button");

  const $history = document.querySelector("#history");
  const $about = document.querySelector("#about");
  const $service = document.querySelector("#service");
  const $contact = document.querySelector("#contact");

  $historyButton.addEventListener("click", () => windowTab(0));
  $aboutButton.addEventListener("click", () => windowTab(1));
  $serviceButton.addEventListener("click", () => windowTab(2));
  $contactButton.addEventListener("click", () => windowTab(3));

  function windowTab(n) {
    var contentHeight = 0;

    if (window.outerWidth <= 1023) {
      $menu.style.display = "none";
    }

    switch (n) {
      case 0:
        contentHeight = 0;

        break;
      case 1:
        contentHeight = $history.clientHeight + 30;
        hideBar();
        break;
      case 2:
        contentHeight = $history.clientHeight + $about.clientHeight;
        hideBar();
        break;
      case 3:
        contentHeight =
          $history.clientHeight +
          $about.clientHeight +
          $service.clientHeight +
          30;
        hideBar();
        break;
    }

    window.scrollTo(0, contentHeight);
  }

  function hideBar() {
    setTimeout(() => {
      $heightheader = -$header.clientHeight;
      $header.style.transform = `translate(0px, ${$heightheader}px)`;
    }, 50);
  }

  function isEmpty(str) {
    return !str || 0 === str.length || str === "none";
  }

  var resizeTimer;

  //Evento para manejar el cambio de tamaño
  window.onresize = resize;

  function resize() {
    if (window.outerWidth <= 1023) {
      $menu.style.display = "none";
    } else {
      $menu.style.display = "flex";
    }
  }
});

// Modal popup //

let modal = document.querySelector('[data-element="modal"]');
let btnsOpen = document.querySelectorAll('[data-action="open-modal"]');
let btnsClose = document.querySelectorAll('[data-action="close-modal"]');
let mainContent = document.querySelector('[data-element="main-content"]');
let overlay = document.querySelector('[data-element="overlay"]');

btnsOpen.forEach(function (btnOpen) {
  btnOpen.onclick = function () {
    openModal();
  };
});

btnsClose.forEach(function (btnClose) {
  btnClose.onclick = function () {
    closeModal();
  };
});

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) { // ESC key code
    closeModal();
  }
});

// Swipe functionality
let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(event) {
  touchStartX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
  touchEndX = event.changedTouches[0].clientX;
  handleSwipeGesture();
}

function handleSwipeGesture() {
  if (touchEndX > touchStartX && (touchEndX - touchStartX) > 50) { // Swipe right detection
    closeModal();
  }
}

modal.addEventListener('touchstart', handleTouchStart, false);
modal.addEventListener('touchend', handleTouchEnd, false);

function openModal() {
  modal.classList.remove("closed");
  modal.classList.add("open");
  mainContent.classList.add("pushed");
  overlay.classList.add("visible");
  document.body.style.overflow = "hidden";
  modal.setAttribute("aria-hidden", "false");
  mainContent.setAttribute("aria-hidden", "true");
  overlay.setAttribute("aria-hidden", "false");

  // Disable focusable elements in mainContent
  let focusableElements = mainContent.querySelectorAll(
    "a[href], button, input, select, textarea, [tabindex]:not([tabindex='-1'])"
  );
  focusableElements.forEach(function (element) {
    element.setAttribute("tabindex", "-1");
  });
}

function closeModal() {
  modal.classList.remove("open");
  modal.classList.add("closed");
  mainContent.classList.remove("pushed");
  overlay.classList.remove("visible");
  document.body.style.overflow = "auto";
  modal.setAttribute("aria-hidden", "true");
  mainContent.setAttribute("aria-hidden", "false");
  overlay.setAttribute("aria-hidden", "true");

  // Enable focusable elements in mainContent
  let focusableElements = mainContent.querySelectorAll(
    "a[href], button, input, select, textarea, [tabindex='-1']"
  );
  focusableElements.forEach(function (element) {
    element.removeAttribute("tabindex");
  });
}

// Modal popup end //

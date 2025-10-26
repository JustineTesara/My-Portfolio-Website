// EmailJS Configuration
emailjs.init("lnDvXTz1wB_TOrbQw");

// Modal Functions
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

function closeModalOnOutside(event, modalId) {
  if (event.target.classList.contains("modal")) {
    closeModal(modalId);
  }
}

// Close modal on Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const activeModal = document.querySelector(".modal.active");
    if (activeModal) {
      activeModal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  }
});

// Contact Form Handling
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const submitBtn = this.querySelector("button[type='submit']");
  const originalText = submitBtn.textContent;

  // Disable button and show loading state
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  let params = {
    title: document.getElementById("title").value,
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_6eo6t73", "template_vkh8c4b", params)
    .then(() => {
      alert("✅ Message sent successfully! I'll get back to you soon.");
      document.getElementById("contactForm").reset();
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    })
    .catch((error) => {
      console.error("Email send failed:", error);
      alert(
        "❌ Failed to send message. Please try again or contact me directly at justine.tesara0907@gmail.com"
      );
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    });
});

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

function closeModalOnOutside(event, modalId) {
  if (event.target.classList.contains("modal")) {
    closeModal(modalId);
  }
}

// Close modal on Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const activeModal = document.querySelector(".modal.active");
    if (activeModal) {
      activeModal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  }
});

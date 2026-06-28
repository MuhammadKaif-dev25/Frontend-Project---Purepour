const contactForm = document.querySelector(".contact form");
const CONTACT_STORAGE_KEY = "purepore-contact-submission";

const savedData = localStorage.getItem(CONTACT_STORAGE_KEY);
if (savedData) {
  const data = JSON.parse(savedData);
  contactForm.querySelector('input[name="name"]').value = data.name || "";
  contactForm.querySelector('input[name="email"]').value = data.email || "";
  contactForm.querySelector('textarea[name="message"]').value =
    data.message || "";
}

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    name: contactForm.querySelector('input[name="name"]').value,
    email: contactForm.querySelector('input[name="email"]').value,
    message: contactForm.querySelector('textarea[name="message"]').value,
  };

  localStorage.setItem(CONTACT_STORAGE_KEY, JSON.stringify(formData));

  showSavedMessage();
});

function showSavedMessage() {
  let msg = document.querySelector(".save-confirm");

  if (!msg) {
    msg = document.createElement("p");
    msg.className = "save-confirm";
    msg.textContent = "✓ Your message has been saved.";
    contactForm.appendChild(msg);
  }

  msg.style.opacity = "1";

  setTimeout(() => {
    msg.style.opacity = "0";
  }, 3000);
}

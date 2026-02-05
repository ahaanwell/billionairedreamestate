function openModal() {
  document.getElementById("enquiryModal").classList.add("active");
}

function closeModal() {
  document.getElementById("enquiryModal").classList.remove("active");
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(openModal, 3000);
});


function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("hidden");
}

const smtp_api = "https://smtp-server-sepia.vercel.app/send-email";

async function sendEmail(name, email, number, countryCode) {
  const data = {
    name,
    email,
    number,
    country_code: countryCode,
    company_email: "leadsbillionairedreamestate@gmail.com",
    project_name: "Mizumi Reserve",
  };

  try {
    const res = await fetch(smtp_api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      const responseData = await res.json();
      alert("Thank you for your interest! We will contact you shortly.");
      return true;
    } else {
      alert("Failed to send email. Please try again later.");
      return false;
    }
  } catch (error) {
    alert("An error occurred while sending the email. Please try again later.");
    return false;
  }
}

async function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const countryCode = document.getElementById("countryCode").value;
  const submitBtn = document.getElementById("submitbtn");
  submitBtn.disabled = true;
  submitBtn.textContent = "Submitting...";
  try {
    const isSuccess = await sendEmail(name, email, phone, countryCode);
    if (isSuccess) {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      closeModal();
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit Enquiry";
    }
  } catch (error) {
    console.error("Error in handleSubmit:", error);
    submitBtn.disabled = false;
    submitBtn.textContent = "Submit Enquiry";
  }

  //
}

async function handleSubmit1(event) {
  event.preventDefault();
  const name = document.getElementById("name1").value;
  const email = document.getElementById("email1").value;
  const phone = document.getElementById("phone1").value;
  const countryCode = document.getElementById("countryCode1").value;
  const submitBtn = document.getElementById("submitBtn1");
  submitBtn.disabled = true;
  submitBtn.textContent = "Submitting...";
  try {
    const isSuccess = await sendEmail(name, email, phone, countryCode);
    if (isSuccess) {
      document.getElementById("name1").value = "";
      document.getElementById("email1").value = "";
      document.getElementById("phone1").value = "";
      closeModal();
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit";
    }
  } catch (error) {
    console.error("Error in handleSubmit:", error);
    submitBtn.disabled = false;
    submitBtn.textContent = "Submit";
  }

  //
}

// Close modal when clicking outside
document.getElementById("enquiryModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal();
  }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Close mobile menu if open
      document.getElementById("mobileMenu").classList.add("hidden");
    }
  });
});

// Add scroll effect to navbar
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";
  } else {
    nav.style.boxShadow = "0 2px 20px rgba(0,0,0,0.1)";
  }
});

// Animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll(".feature-card, .card-hover").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "all 0.6s ease";
  observer.observe(el);
});

const galleryImages = [
  "./Assist/galleryimg8.png",
  "./Assist/galleryimg1.webp",
  "./Assist/galleryimg2.webp",
  "./Assist/galleryimg4.webp",
  "./Assist/galleryimg5.webp",
  "./Assist/galleryimg6.webp",
];

let currentImageIndex = 0;

// Open modal with specific image
function openImageModal(imageSrc) {
  currentImageIndex = galleryImages.indexOf(imageSrc);
  if (currentImageIndex === -1) currentImageIndex = 0;

  document.getElementById("modalImage").src = galleryImages[currentImageIndex];
  document.getElementById("imageModal").classList.remove("hidden");
  document.getElementById("imageModal").classList.add("flex");
  document.body.style.overflow = "hidden";

  updateImageCounter();
}

// Close modal
function closeImageModal() {
  document.getElementById("imageModal").classList.add("hidden");
  document.getElementById("imageModal").classList.remove("flex");
  document.body.style.overflow = "auto";
}

// Navigate to previous image
function previousImage() {
  currentImageIndex =
    (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  document.getElementById("modalImage").src = galleryImages[currentImageIndex];
  updateImageCounter();
}

// Navigate to next image
function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  document.getElementById("modalImage").src = galleryImages[currentImageIndex];
  updateImageCounter();
}

// Update image counter
function updateImageCounter() {
  document.getElementById("currentImageIndex").textContent =
    currentImageIndex + 1;
  document.getElementById("totalImages").textContent = galleryImages.length;
}

// Keyboard navigation
document.addEventListener("keydown", function (e) {
  const modal = document.getElementById("imageModal");
  if (!modal.classList.contains("hidden")) {
    if (e.key === "Escape") closeImageModal();
    if (e.key === "ArrowLeft") previousImage();
    if (e.key === "ArrowRight") nextImage();
  }
});

// Close modal when clicking outside image
document.getElementById("imageModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeImageModal();
  }
});

// ===================================================================================
// Fichier: script.js
// Description: Logique compensatoire (Back-to-Top et Formulaire de Contact)
// ===================================================================================

document.addEventListener("DOMContentLoaded", () => {
  // ---------------------------------------------
  // A. LOGIQUE DU BOUTON "RETOUR EN HAUT" (Back-to-Top)
  // ---------------------------------------------
  const backToTopButton = document.getElementById("backToTopButton");

  if (backToTopButton) {
    // Affiche/masque le bouton si l'utilisateur a fait défiler plus de 300px
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add("show");
      } else {
        backToTopButton.classList.remove("show");
      }
    };

    // Gère le défilement en douceur vers le haut de la page
    const scrollToTop = (event) => {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    window.addEventListener("scroll", toggleVisibility);
    backToTopButton.addEventListener("click", scrollToTop);
    toggleVisibility(); // Exécute la vérification au chargement
  }

  // ---------------------------------------------
  // B. GESTION DU FORMULAIRE DE CONTACT (Uniquement pour contact.html)
  // ---------------------------------------------
  const form = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");
  const submitButton = document.getElementById("submitButton");

  if (form && formStatus && submitButton) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      formStatus.textContent = "";
      submitButton.disabled = true;
      formStatus.style.color = "blue";
      formStatus.textContent = "Envoi en cours... ⏳";

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      // --- Validation des champs obligatoires ---
      if (!data.nom || !data.email || !data.message) {
        formStatus.style.color = "red";
        formStatus.textContent =
          "❌ Veuillez remplir tous les champs obligatoires.";
        submitButton.disabled = false;
        return;
      }

      // ⚠️ ATTENTION : Vous DEVEZ remplacer 'YOUR_SERVER_ENDPOINT' par une URL fonctionnelle
      // pointant vers un script serveur (PHP, Node, etc.) qui traitera l'envoi de l'e-mail.
      const endpoint = "YOUR_SERVER_ENDPOINT";

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          formStatus.style.color = "green";
          formStatus.textContent =
            "✅ Votre message a été envoyé avec succès !";
          form.reset();
        } else {
          const errorData = await response.json();
          formStatus.style.color = "red";
          formStatus.textContent = `❌ Erreur lors de l'envoi: ${
            errorData.message || "Problème de serveur."
          }`;
        }
      } catch (error) {
        console.error("Erreur réseau:", error);
        formStatus.style.color = "red";
        formStatus.textContent =
          "🚨 Erreur réseau. Veuillez vérifier votre connexion.";
      } finally {
        submitButton.disabled = false;
      }
    });
  }
});

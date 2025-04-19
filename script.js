
  function sendToWhatsApp() {
      let email = document.getElementById("email").value;
      let whatsappNumber = document.getElementById("whatsappNumber").value;
      let message = document.getElementById("message").value;

      if (email === "" || whatsappNumber === "" || message === "") {
          alert("Please fill in all fields.");
          return;
      }
      let yourWhatsApp = "2349127463774";
      window.open(url, "_blank");
    }


  document.getElementById("whatsappForm").addEventListener("submit", function(e) {
      e.preventDefault();

      var name = document.getElementById("name").value;
     var name = document.getElementById("whatsappNumber").value;
      var email = document.getElementById("email").value;
      var message = document.getElementById("message").value;

      var text = Hello, my name is ${name}. My email is ${email}. Message: ${message};
      var phoneNumber = "2349127463774"; // Replace with your WhatsApp number (with country code)

      var whatsappURL = https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)};
      window.open(whatsappURL, '_blank');
    });

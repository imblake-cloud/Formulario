const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que el formulario se envíe de manera predeterminada

  if (!contactForm.checkValidity()) {
    event.stopPropagation();
  } else {
    // Recolecta los datos del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const website = document.getElementById("website").value;
    const message = document.getElementById("message").value;

    // Construye los datos a enviar a Zapier
    const data = {
      name,
      email,
      website,
      message,
    };

    // Realiza una solicitud POST a Zapier
    fetch("https://hooks.zapier.com/hooks/catch/16984931/3z5ln21/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // El envío fue exitoso, puedes realizar alguna acción adicional aquí
          console.log("Formulario enviado exitosamente a Zapier");
        } else {
          // Manejo de errores si la solicitud falla
          console.error("Error al enviar el formulario a Zapier");
        }
      })
      .catch((error) => {
        console.error("Error de red:", error);
      });
  }

  contactForm.classList.add("was-validated");
});

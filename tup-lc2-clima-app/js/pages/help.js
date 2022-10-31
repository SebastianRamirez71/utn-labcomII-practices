const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Enviando";

  const serviceID = "default_service";
  const templateID = "template_hcc8upv";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Enviar";
      alert("Mensaje enviado correctamente");
    },
    (err) => {
      btn.value = "Enviar";
      alert(JSON.stringify(err));
    }
  );
});

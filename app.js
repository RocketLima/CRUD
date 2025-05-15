document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formulario');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = {
      nombre: document.getElementById('nombre').value,
      celular: document.getElementById('celular').value,
      correo: document.getElementById('correo').value,
      nacimiento: document.getElementById('nacimiento').value
    };

    fetch('https://script.google.com/macros/s/AKfycbzElEGKeoPskyvOVvsHAkEvpZ6zaRyZUXPMYTN4k8Jz1-a_5uDVAwUVwQvDqBgCP3lC/exec', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(result => {
        if (result.status === 'success') {
          alert('Cliente registrado correctamente');
          form.reset();
        } else {
          alert('Error en el registro: ' + result.message);
        }
      })
      .catch(error => {
        alert('Error de red: ' + error);
      });
  });
});

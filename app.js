const scriptURL = 'https://script.google.com/macros/library/d/1cZhms190fg8NzysI5EY_EdO7_ONxa7YG_8iyCWuwsn-UTFkm1fyTArKz/5';

const form = document.getElementById('formulario');

form.addEventListener('submit', e => {
  e.preventDefault();

  const data = {
    nombre: document.getElementById('nombre').value,
    celular: document.getElementById('celular').value,
    correo: document.getElementById('correo').value,
    nacimiento: document.getElementById('nacimiento').value
  };

  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      alert('Cliente guardado exitosamente');
      form.reset();
    } else {
      alert('Error al guardar el cliente');
    }
  })
  .catch(error => alert('Error: ' + error.message));
});

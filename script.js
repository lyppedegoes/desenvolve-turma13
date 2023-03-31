const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // previne o envio do formulário
  const nome = document.querySelector('#inputNome').value;
  localStorage.setItem('nome', nome); // salva o valor do nome no localStorage
  window.location.href = "principal.html"; // redireciona para a página principal.html
});
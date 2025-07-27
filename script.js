// Segurança básica contra XSS via innerHTML (evite onde não for necessário)
document.querySelectorAll('a').forEach(link => {
  link.setAttribute('rel', 'noopener noreferrer');
});

// Confirmação ao clicar no WhatsApp
document.querySelectorAll('a[href^="https://wa.me"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const confirmacao = confirm("Você será redirecionado para o WhatsApp. Deseja continuar?");
    if (!confirmacao) e.preventDefault();
  });
});
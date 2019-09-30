const form = document.querySelector('form');
const tweedsElement = document.querySelector('.tweeds');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');
  const content = formData.get('content');
  const tweed = {
    name,
    content
  };

	console.log(tweed);
  form.reset();
});
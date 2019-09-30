const form = document.querySelector('form');
const tweedsElement = document.querySelector('.tweeds');
streams.users.visitor = [];
const visitor = "visitor";

form.addEventListener('submit', (event) => {
  event.preventDefault();
  var formData = new FormData(form);
  var message = formData.get('content');
  console.log(visitor, message);
  if (message !== '') {
    writeTweet(message);
  }
  form.reset();
});
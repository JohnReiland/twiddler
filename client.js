streams.users.visitor = [];
const visitor = "visitor";
var focus = undefined;
const form = document.querySelector('form');
const tweedsElement = document.querySelector('.tweeds');

function changeFocusTo(user) {
  if ((focus === undefined) || (user === undefined)) {
  	focus = user;
  }
  console.log('focus changed to', focus);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  var formData = new FormData(form);
  var message = formData.get('content');
  console.log(visitor, message, focus);
  if (message !== '') {
    writeTweet(message);
  }
  form.reset();
});
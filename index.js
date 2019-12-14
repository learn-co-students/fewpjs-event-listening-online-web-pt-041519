const input = document.querySelector('input');

function addingEventListener() {
  input.addEventListener('click', function(event) {
    return "clicked"
  });
}

// const input = document.getElementById('input');
// input.addEventListener('click', function(event) {
//   alert('I was clicked!');
// });
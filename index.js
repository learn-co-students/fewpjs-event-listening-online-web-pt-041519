
function addingEventListener() {
// set a variable for the input node
const input = document.getElementById('input')

// now that we have an input, we want to do something with it
// in this case, the type of event will be a click
// when that click takes place, we will alert the browser it was clicked
// we pass event listener the type of event, then the callback function 

input.addEventListener('click', function(alert) {
   alert('I was clicked!')
})

}

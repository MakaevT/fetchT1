const jokeButton = document.createElement('button');
jokeButton.textContent = 'Make Joke';
document.body.append(jokeButton);


const jokeText = document.createElement('p');
document.body.append(jokeText);


jokeButton.addEventListener('click', function () {

  fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => response.json())
    .then((data) => {
      jokeText.textContent = data.value;
    })
});



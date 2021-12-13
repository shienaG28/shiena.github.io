var quote = ["“You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go...”","“I have not failed. I've just found 10,000 ways that won't work.”","“We are all in the gutter, but some of us are looking at the stars.”","“Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.”","“We accept the love we think we deserve.”","“Be the change that you wish to see in the world.”","“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”"] ;

function getquote() {
  var randomquote = quote[Math.floor(Math.random() * quote.length)];
  return randomquote;
}
function create() {
   document.querySelector('.tag').innerHTML = getquote();
}

const fetchPromise = fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(kestrel)
    .then(data => data.quote)
    .then(quote => quote)
    .catch(e => console.error(e))

function kestrel(a){
    console.log(a)
    return a
}
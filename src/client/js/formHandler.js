function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8000/test')
    .then(res => res.json())
    .then(function(res) {
        console.log(res);
        document.getElementById('results').innerHTML = res.message
    });
    let api = null;
    console.log(":::Calling the external API:::");
    fetch('http://localhost:8000/api')
    .then(res => res.json())
    .then(function(res){
        console.log(res);
        document.getElementById('results').innerHTML += '<br>Polarity: '+res.polarity+'<br>';
        document.getElementById('results').innerHTML += 'Text: '+res.text+'<br>';
        document.getElementById('results').innerHTML += 'Polarity_confidence: '+res.polarity_confidence;
    });
}

export { handleSubmit }

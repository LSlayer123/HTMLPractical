window.addEventListener('click', function(event){
    fetch('http://localhost:1700/list')
    .then(response => response.text())
    .then(body => 
        this.document.getElementById('content').innerHTML=body)
})
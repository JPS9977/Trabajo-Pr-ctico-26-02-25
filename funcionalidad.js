document.getElementById('deportista-form').addEventListener('submit', function(event) {
event.preventDefault();

const formData = new FormData(this);

const data = {
    name: formData.get('name'),
    surname: formData.get('surname'),
    category: formData.get('category'),
    rama: formData.get('rama'),
    mes: formData.get('mes'),
    image: formData.get('image') 
};

fetch('http://localhost:3000/registro', { 
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => {
    alert('Registro exitoso');
})
.catch(error => {
    console.error('Error:', error);
    alert('Hubo un error al registrar los datos');
});
});
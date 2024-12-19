const formData = {
    email: '',
    message: ''
}

const form = document.querySelector('form');
const input = document.getElementsByTagName('input')[0];
const textArea = document.getElementsByTagName('textarea')[0];
const raw = localStorage.getItem('feedback-form-state');

if(raw) {
    const obj = JSON.parse(raw);
    input.value = obj.email;
    textArea.value = obj.message;
    formData.email = obj.email;
    formData.message = obj.message;
}

form.addEventListener('input', e => {
    formData[e.target.name] += e.data;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
})

form.addEventListener('submit', e => {
    e.preventDefault();
    if (!input.value || !textArea.value) {
        alert('Fill please all fields');
    }
    else {
        console.log({...formData});
        formData.email = '';
        formData.message = '';
        form.reset();
    }
})
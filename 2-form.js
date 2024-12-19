formData = {
    email: "",
    message: ""
}

localStorage.setItem('feedback-form-state', 'HEllo');

const raw = localStorage.getItem('feedback-form-state');
const person = JSON.parse(raw);
console.log(person)
person.email = 'erw@isdgjs'
console.log(person)
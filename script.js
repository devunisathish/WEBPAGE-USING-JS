const submitBtn = document.querySelector('#submit-btn');
const output = document.querySelector('#output');

submitBtn.addEventListener('click', () => {
	const name = document.querySelector('#name').value;
	const age = parseInt(document.querySelector('#age').value);
	const gender = document.querySelector('#gender').value;

	if (name === '') {
		alert('Please enter your name.');
		return;
	}

	if (isNaN(age)) {
		alert('Please enter a valid age.');
		return;
	}

	let message = `Hello, ${name}! You are ${age} years old.`;

	if (age < 18) {
		message += ` You are not yet an adult.`;
	}

	if (gender === 'male') {
		message += ` You are a male.`;
	} else if (gender === 'female') {
		message += ` You are a female.`;
	} else {
		message += ` Your gender is ${gender}.`;
	}

	output.textContent = message;
});

const colors = ['red', 'green', 'blue'];

for (let i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}

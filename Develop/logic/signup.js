document
	.querySelector("#signup-form")
	.addEventListener("submit", function (event) {
		// prevent the default form submission behavior
		event.preventDefault();
	});

const name = document.querySelector("#name").value;
const email = document.querySelector("#email").value;
const password = document.querySelector("#password").value;

fetch("/signup", {
	method: "POST",
	headers: { "Content-Type": "application/json" },
	body: JSON.stringify({ name, email, password }),
})
	.then((response) => response.json())
	.then((data) => {
		// do something with the response data
	})
	.catch((error) => {
		// handle any errors
	});

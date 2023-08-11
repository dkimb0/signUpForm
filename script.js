// const firstName = document.getElementById('firstName');
// const lastName = document.getElementById('lastName');
// const email = document.getElementById('email');
// const password = document.getElementById("password");
// const confirmPassword = document.getElementById('confirmPassword');

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     validateInputs();
// });

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    input.addEventListener(
            "invalid",
            event => {
                input.classList.add("error");
            },
            false
    );
});
const eyes = document.querySelectorAll('.eye');
let showPass = false;

eyes.forEach((eye) => {
    let showPass = false;
    eye.addEventListener('click', () => {
        const targetInputId = eye.getAttribute('data-target');
        console.log(targetInputId);

        const targetInput = document.getElementById(targetInputId);

        if (!showPass) {
            eye.setAttribute('src', './Assets/images/icons/closedEye.svg');
            targetInput.setAttribute('type', 'text');
        } else {
            eye.setAttribute('src', './Assets/images/icons/eye.svg');
            targetInput.setAttribute('type', 'password');
        }
        showPass = !showPass;
    });
});
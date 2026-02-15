document.addEventListener('DOMContentLoaded', () => {
    const rewardsForm = document.getElementById('rewards-form');
    const formMessage = document.getElementById('form-message');

    rewardsForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the form from submitting the traditional way

        const emailInput = document.getElementById('email');
        const email = emailInput.value;

        if (email) {
            // Display a success message
            formMessage.textContent = `Thank you! ${email} has been added to the Lemon-67 Rewards Program.`;
            formMessage.style.color = 'green';
            formMessage.classList.remove('hidden');
            
            // Clear the input field
            emailInput.value = '';

            // Hide the message after a few seconds
            setTimeout(() => {
                formMessage.classList.add('hidden');
            }, 5000);
        }
    });
});
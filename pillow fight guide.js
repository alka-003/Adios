let currentStep = 1;

        function showStep(step) {
            const steps = document.querySelectorAll('.step');
            steps.forEach(s => s.classList.remove('active'));
            document.getElementById(`step${step}`).classList.add('active');
        }

        function nextStep(step) {
            currentStep++;
            if (currentStep <= 4) {
                showStep(currentStep);
            }
        }

        function prevStep(step) {
            currentStep--;
            if (currentStep >= 1) {
                showStep(currentStep);
            }
        }

        // Show the first step when the page loads
        document.addEventListener('DOMContentLoaded', function() {
            document.body.style.display = 'block';
            showStep(currentStep);
        });
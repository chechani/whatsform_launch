
export const formTemplatesHtml: { [key: string]: string } = {
  'Bike Book': `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bike Booking</title>
        <style>
            :root { --theme-color: #10b981; --theme-color-light: color-mix(in srgb, #10b981 10%, white); --theme-color-focus: color-mix(in srgb, #10b981 25%, transparent); --theme-color-dark: color-mix(in srgb, #10b981, black 10%); }
            body { font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif; background-color: #f9fafb; color: #1f2937; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
            .form-wrapper { max-width: 42rem; margin: 3rem auto; padding: 1rem; }
            .form-container { background-color: white; padding: 2.5rem; border-radius: 0.75rem; box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); }
            .form-title { font-size: 2.25rem; font-weight: 800; margin-bottom: 2rem; text-align: center; color: #111827; }
            .step-title { font-size: 1.5rem; font-weight: 700; color: #111827; margin-bottom: 1.5rem; }
            .form-field { margin-bottom: 1.5rem; }
            .form-label { display: block; font-size: 0.875rem; font-weight: 500; color: #374151; margin-bottom: 0.5rem; }
            .form-input, .form-select, .form-textarea { display: block; width: 100%; padding: 0.75rem 1rem; background-color: white; border: 1px solid #d1d5db; border-radius: 0.5rem; box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); transition: border-color 0.2s, box-shadow 0.2s; }
            .form-input:focus, .form-select:focus, .form-textarea:focus { outline: none; border-color: var(--theme-color); box-shadow: 0 0 0 3px var(--theme-color-focus); }
            .form-input.invalid, .form-select.invalid, .form-textarea.invalid { border-color: #ef4444; }
            .form-input.invalid:focus, .form-select.invalid:focus, .form-textarea.invalid:focus { border-color: #ef4444; box-shadow: 0 0 0 3px color-mix(in srgb, #ef4444 25%, transparent); }
            .error-message { color: #dc2626; font-size: 0.875rem; margin-top: 0.5rem; }
            .helper-text { font-size: 0.875rem; color: #6b7280; margin-top: 0.5rem; }
            .choice-card { display: flex; align-items: center; padding: 1rem; border: 1px solid #d1d5db; border-radius: 0.5rem; cursor: pointer; transition: background-color 0.2s, border-color 0.2s; }
            .choice-card:hover { background-color: #f9fafb; }
            .form-radio, .form-checkbox { height: 1.25rem; width: 1.25rem; color: var(--theme-color); border-color: #9ca3af; flex-shrink: 0; margin:0; padding:0; }
            .form-radio { border-radius: 100%; } .form-checkbox { border-radius: 0.25rem; }
            .form-radio:focus, .form-checkbox:focus { outline: none; box-shadow: 0 0 0 3px var(--theme-color-focus); }
            .choice-label { margin-left: 0.75rem; font-size: 1rem; color: #1f2937; }
            .choice-card-wrapper:has(input:checked) .choice-card { background-color: var(--theme-color-light); border-color: var(--theme-color); }
            .progress-bar { display: flex; justify-content: space-between; margin-bottom: 2.5rem; position: relative; }
            .progress-bar::before { content: ''; position: absolute; top: 50%; left: 0; transform: translateY(-50%); height: 4px; width: 100%; background-color: #e5e7eb; z-index: 1; }
            .progress-line { position: absolute; top: 50%; left: 0; transform: translateY(-50%); height: 4px; background-color: var(--theme-color); z-index: 2; transition: width 0.4s ease; }
            .progress-step { width: 32px; height: 32px; background-color: white; color: #4b5563; border: 2px solid #e5e7eb; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; z-index: 3; transition: all 0.4s ease; }
            .progress-step.active { border-color: var(--theme-color); color: var(--theme-color); }
            .progress-step.completed { background-color: var(--theme-color); color: white; border-color: var(--theme-color); }
            .form-button { display: inline-flex; align-items: center; justify-content: center; font-weight: 600; padding: 0.75rem 1.5rem; border-radius: 0.5rem; transition: all 0.2s; border: 1px solid transparent; cursor: pointer; }
            .form-button:disabled { opacity: 0.6; cursor: not-allowed; }
            .button-primary { background-color: var(--theme-color); color: white; }
            .button-primary:hover:not(:disabled) { background-color: var(--theme-color-dark); }
            .button-secondary { background-color: #e5e7eb; color: #1f2937; }
            .button-secondary:hover:not(:disabled) { background-color: #d1d5db; }
            .form-step { animation: fadeIn 0.5s ease-in-out; }
            @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        </style>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    </head>
    <body class="bg-gray-50">
        <div id="form-wrapper" class="form-wrapper">
            <div class="form-container">
                <h1 class="form-title">Bike Booking</h1>
                <form id="wizard-form" novalidate>
                    
    <div class="progress-bar">
        <div class="progress-line" style="width: 0%;"></div>
        <div class="progress-step" data-step="0">1</div><div class="progress-step" data-step="1">2</div><div class="progress-step" data-step="2">3</div>
    </div>
                    
                    <div id="form-step-0" class="form-step" >
                        <h2 class="step-title">User Info</h2>
                        <h1 class="text-4xl font-extrabold text-gray-900 my-6">Bike Booking</h1>
    <p class="text-base text-gray-600 my-3 leading-relaxed">Share your details and preferences to confirm availability and complete your booking process.</p>
    <div class="form-field"><label for="full-name" class="form-label">Full Name<span class="text-red-500 ml-1">*</span></label><input type="text" id="full-name" name="full-name" class="form-input" required><div class="error-message" id="error-full-name" style="display: none;"></div></div>
    <div class="form-field"><label for="mobile-number" class="form-label">Mobile Number <span class="text-red-500 ml-1">*</span></label><input type="phone" id="mobile-number" name="mobile-number" class="form-input" required><div class="error-message" id="error-mobile-number" style="display: none;"></div></div>
                    </div>
                

                    <div id="form-step-1" class="form-step" style="display: none;">
                        <h2 class="step-title">Booking Details</h2>
                        <div class="form-field"><label for="select-bike-mode" class="form-label">Select Bike Mode<span class="text-red-500 ml-1">*</span></label><select id="select-bike-mode" name="select-bike-mode" class="form-select" required><option value="">Select an option</option><option value="Sports">Sports</option><option value="Cruise">Cruise</option><option value="Scooter">Scooter</option><option value="Electric">Electric</option><option value="Adventure">Adventure</option></select><div class="error-message" id="error-select-bike-mode" style="display: none;"></div></div>
    <div class="form-field"><label for="preferred-booking-date" class="form-label">Preferred Booking Date<span class="text-red-500 ml-1">*</span></label><input type="date" id="preferred-booking-date" name="preferred-booking-date" class="form-input" required><div class="error-message" id="error-preferred-booking-date" style="display: none;"></div></div>
    <div class="form-field"><label for="location" class="form-label">Location <span class="text-red-500 ml-1">*</span></label><input type="text" id="location" name="location" class="form-input" required><div class="error-message" id="error-location" style="display: none;"></div></div>
    <div class="form-field"><label for="riding-experience" class="form-label">Riding Experience</label><input type="text" id="riding-experience" name="riding-experience" class="form-input" ><div class="error-message" id="error-riding-experience" style="display: none;"></div></div>
                    </div>
                

                    <div id="form-step-2" class="form-step" style="display: none;">
                        <h2 class="step-title">Additional Details</h2>
                        <div class="form-field"><label for="special-requests" class="form-label">Special Requests</label><textarea id="special-requests" name="special-requests" rows="4" class="form-textarea" ></textarea><div class="error-message" id="error-special-requests" style="display: none;"></div></div>

                    </div>
                
                    
    <div class="mt-8 flex justify-between items-center">
        <button type="button" id="prev-btn" class="form-button button-secondary" style="display: none;">Previous</button>
        <button type="button" id="next-btn" class="form-button button-primary">Next</button>
        <button type="submit" id="submit-btn" class="form-button button-primary" style="display: none;">Submit</button>
    </div>
                </form>
            </div>
        </div>
        <div id="success-container" style="display:none;" class="form-wrapper">
            <div class="form-container text-center flex-col items-center">
                <svg class="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <p class="text-xl font-medium text-gray-800">Thank you for your submission!</p>
            </div>
        </div>
        <script>
            async function handleSubmission(event) {
                const wizardForm = event.target;
                const formWrapper = document.getElementById('form-wrapper');
                const successContainer = document.getElementById('success-container');
                const submitButton = wizardForm.querySelector('button[type="submit"]');

                submitButton.disabled = true;
                submitButton.innerHTML =
                    '<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">' +
                        '<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>' +
                        '<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>' +
                    '</svg> Submitting...';

                const formData = new FormData(wizardForm);
                const data = {};
                formData.forEach((value, key) => {
                    if (data.hasOwnProperty(key)) {
                        if (!Array.isArray(data[key])) {
                            data[key] = [data[key]];
                        }
                        data[key].push(value);
                    } else {
                        data[key] = value;
                    }
                });

                const apiEndpoint = "https://connect.waflow.in/webhook/675cef03-3a7a-437f-96d1-beb19e2318fd";
                if (apiEndpoint) {
                    try {
                        const response = await fetch(apiEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
                        if (!response.ok) throw new Error('Network response was not ok');
                    } catch (error) {
                        console.error('Submission error:', error);
                        alert('There was an error submitting your form. Please try again.');
                        submitButton.disabled = false;
                        submitButton.textContent = 'Submit';
                        return;
                    }
                }
                
                if ("message" === "redirect" && "") {
                    window.location.href = "";
                } else {
                    formWrapper.style.display = 'none';
                    successContainer.style.display = 'flex';
                }
            }
        
            document.addEventListener('DOMContentLoaded', () => {
                const totalSteps = 3;
                let currentStep = 0;
                const form = document.getElementById('wizard-form');
                const steps = form.querySelectorAll('.form-step');
                const prevBtn = document.getElementById('prev-btn');
                const nextBtn = document.getElementById('next-btn');
                const submitBtn = document.getElementById('submit-btn');
                const progressSteps = document.querySelectorAll('.progress-step');
                const progressLine = document.querySelector('.progress-line');
    
                function clearValidation(stepDiv) {
                    const inputs = stepDiv.querySelectorAll('.form-input, .form-select, .form-textarea, fieldset');
                    inputs.forEach(input => {
                         if(input.classList.contains('form-input') || input.classList.contains('form-select') || input.classList.contains('form-textarea')) {
                            input.classList.remove('invalid');
                        }
                        const name = input.name || input.querySelector('input,select,textarea')?.name;
                        if (!name) return;
                        const errorDiv = stepDiv.querySelector('#error-' + name);
                        if (errorDiv) {
                            errorDiv.textContent = '';
                            errorDiv.style.display = 'none';
                        }
                    });
                }

                function validateStep(stepIndex) {
                    const stepDiv = steps[stepIndex];
                    if (!stepDiv) return true;
                    clearValidation(stepDiv);
                    let isValid = true;
                    const validatedGroups = new Set();
                    
                    const inputs = stepDiv.querySelectorAll('input[required], select[required], textarea[required]');
                    inputs.forEach(input => {
                        let fieldValid = true;
                        let errorMessage = '';
                        let groupName = input.name;

                        if (input.type === 'radio' || input.type === 'checkbox') {
                            if (validatedGroups.has(groupName)) return;
                            validatedGroups.add(groupName);
                            const group = stepDiv.querySelectorAll('input[name="' + groupName + '"]');
                            if (![...group].some(i => i.checked)) {
                                fieldValid = false;
                                errorMessage = 'Please make a selection.';
                            }
                        } else if (!input.value.trim()) {
                            fieldValid = false;
                            errorMessage = 'This field is required.';
                        } else if (!input.checkValidity()) {
                            fieldValid = false;
                            errorMessage = input.validationMessage;
                        }

                        if (!fieldValid) {
                            isValid = false;
                            const errorDiv = stepDiv.querySelector('#error-' + groupName);
                            if (errorDiv) {
                                errorDiv.textContent = errorMessage;
                                errorDiv.style.display = 'block';
                            }
                            if (input.type !== 'radio' && input.type !== 'checkbox') {
                                input.classList.add('invalid');
                            }
                        }
                    });
                    
                    return isValid;
                }

                function updateProgress() {
                    progressSteps.forEach((stepEl, index) => {
                        stepEl.classList.remove('active', 'completed');
                        if (index < currentStep) {
                            stepEl.classList.add('completed');
                        } else if (index === currentStep) {
                            stepEl.classList.add('active');
                        }
                    });
                    const progressWidth = totalSteps > 1 ? (currentStep / (totalSteps - 1)) * 100 : 0;
                    if (progressLine) progressLine.style.width = progressWidth + '%';
                }
    
                function showStep(stepIndex) {
                    steps.forEach((step, index) => {
                        step.style.display = index === stepIndex ? 'block' : 'none';
                    });
                    prevBtn.style.display = stepIndex === 0 ? 'none' : 'inline-block';
                    nextBtn.style.display = stepIndex >= totalSteps - 1 ? 'none' : 'inline-block';
                    submitBtn.style.display = stepIndex === totalSteps - 1 ? 'inline-block' : 'none';
                    currentStep = stepIndex;
                    updateProgress();
                    window.scrollTo(0, 0);
                }
    
                if (nextBtn) {
                    nextBtn.addEventListener('click', () => {
                        if (validateStep(currentStep)) {
                            if (currentStep < totalSteps - 1) {
                                showStep(currentStep + 1);
                            }
                        }
                    });
                }
    
                if (prevBtn) {
                    prevBtn.addEventListener('click', () => {
                        if (currentStep > 0) {
                            showStep(currentStep - 1);
                        }
                    });
                }
                
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    if (validateStep(currentStep)) {
                        handleSubmission(e);
                    }
                });
                
                showStep(0);
            });
        </script>
    </body>
    </html>
  `,
};

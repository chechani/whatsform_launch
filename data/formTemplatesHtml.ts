
export const formTemplatesHtml: { [key: string]: string } = {
  'Exchange': `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Astrology Consultation Request Form</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
            :root {
                --theme-color: #10b981;
            }
            body {
                font-family: sans-serif;
            }
            .bg-theme {
                background-color: var(--theme-color) !important;
            }
            .text-theme {
                color: var(--theme-color) !important;
            }
            .border-theme {
                border-color: var(--theme-color) !important;
            }
            .focus\\:ring-theme:focus {
                --tw-ring-color: var(--theme-color) !important;
            }
        </style>
    </head>
    <body class="bg-gray-50">
        <div class="max-w-2xl mx-auto py-12 px-4">
            <div id="form-container">
                <div class="bg-white p-8 rounded-xl shadow-lg">
                    <h1 class="text-4xl font-bold mb-2">Astrology Consultation Request Form</h1>
                    <hr class="mb-6" />
                    <form id="wizard-form">
                        <div class="mb-8">
                            <h2 class="text-xl font-semibold border-b pb-2 mb-4">Basic Information</h2>
                            <h1 class="text-3xl font-bold text-gray-800 my-4">Personal Information</h1>
                            <h2 class="text-2xl font-semibold text-gray-700 my-3">Please fill in your personal details to begin your astrology consultation</h2>
                            <div class="mb-4">
                                <label for="full-name" class="block text-sm font-medium text-gray-700">Full Name</label>
                                <input type="text" id="full-name" name="full-name" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme" />
                                <p class="mt-2 text-xs text-gray-500">Enter your complete legal name</p>
                            </div>
                            <div class="mb-4">
                                <fieldset>
                                    <legend class="block text-sm font-medium text-gray-700">Gender</legend>
                                    <div class="mt-2 space-y-2">
                                        <label class="flex items-center"><input type="radio" name="gender" value="Male" class="h-4 w-4 text-theme border-gray-300 focus:ring-theme" /><span class="ml-2 text-sm text-gray-700">Male</span></label>
                                        <label class="flex items-center"><input type="radio" name="gender" value="Female" class="h-4 w-4 text-theme border-gray-300 focus:ring-theme" /><span class="ml-2 text-sm text-gray-700">Female</span></label>
                                        <label class="flex items-center"><input type="radio" name="gender" value="Other" class="h-4 w-4 text-theme border-gray-300 focus:ring-theme" /><span class="ml-2 text-sm text-gray-700">Other</span></label>
                                    </div>
                                </fieldset>
                            </div>
                            <div class="mb-4">
                                <label for="email-address" class="block text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" id="email-address" name="email-address" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme" />
                                <p class="mt-2 text-xs text-gray-500">We will send your report or appointment info here</p>
                            </div>
                            <div class="mb-4">
                                <label for="phone-number" class="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input type="phone" id="phone-number" name="phone-number" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme" />
                                <p class="mt-2 text-xs text-gray-500">For direct contact or WhatsApp communication</p>
                            </div>
                        </div>
                        <div class="mb-8">
                            <h2 class="text-xl font-semibold border-b pb-2 mb-4">Birth Details</h2>
                            <h1 class="text-3xl font-bold text-gray-800 my-4">Birth Information</h1>
                            <h2 class="text-2xl font-semibold text-gray-700 my-3">These details are essential to create an accurate birth chart and horoscope</h2>
                            <div class="mb-4">
                                <label for="date-of-birth" class="block text-sm font-medium text-gray-700">Date of Birth</label>
                                <input type="date" id="date-of-birth" name="date-of-birth" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme" />
                            </div>
                            <div class="mb-4">
                                <label for="time-of-birth" class="block text-sm font-medium text-gray-700">Time of Birth</label>
                                <input type="text" id="time-of-birth" name="time-of-birth" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme" />
                                <p class="mt-2 text-xs text-gray-500">Mention in HH:MM AM/PM format. Example: 03:45 PM</p>
                            </div>
                            <div class="mb-4">
                                <label for="city" class="block text-sm font-medium text-gray-700">City</label>
                                <select id="city" name="city" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme">
                                    <option value="">Select an option</option>
                                    <option value="Bhilwara">Bhilwara</option>
                                    <option value="Indore">Indore</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Jaipur">Jaipur</option>
                                    <option value="Bhopal">Bhopal</option>
                                    <option value="Delhi">Delhi</option>
                                </select>
                            </div>
                        </div>
                        <div class="mb-8">
                            <h2 class="text-xl font-semibold border-b pb-2 mb-4">Purpose of Consultation</h2>
                            <h1 class="text-3xl font-bold text-gray-800 my-4">What Would You Like to Know?</h1>
                            <h2 class="text-2xl font-semibold text-gray-700 my-3">Help us understand your concerns or interests better</h2>
                            <div class="mb-4">
                                <label for="current-location" class="block text-sm font-medium text-gray-700">Current Location</label>
                                <select id="current-location" name="current-location" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme">
                                    <option value="">Select an option</option>
                                    <option value="Bhilwara">Bhilwara</option>
                                    <option value="Indore">Indore</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Bhopal">Bhopal</option>
                                </select>
                            </div>
                            <div class="mb-4">
                                <fieldset>
                                    <legend class="block text-sm font-medium text-gray-700">Marital Status</legend>
                                    <div class="mt-2 space-y-2">
                                        <label class="flex items-center"><input type="radio" name="marital-status" value="Single" class="h-4 w-4 text-theme border-gray-300 focus:ring-theme" /><span class="ml-2 text-sm text-gray-700">Single</span></label>
                                        <label class="flex items-center"><input type="radio" name="marital-status" value="Married" class="h-4 w-4 text-theme border-gray-300 focus:ring-theme" /><span class="ml-2 text-sm text-gray-700">Married</span></label>
                                        <label class="flex items-center"><input type="radio" name="marital-status" value="Divorced" class="h-4 w-4 text-theme border-gray-300 focus:ring-theme" /><span class="ml-2 text-sm text-gray-700">Divorced</span></label>
                                        <label class="flex items-center"><input type="radio" name="marital-status" value="Widowed" class="h-4 w-4 text-theme border-gray-300 focus:ring-theme" /><span class="ml-2 text-sm text-gray-700">Widowed</span></label>
                                    </div>
                                </fieldset>
                            </div>
                            <div class="mb-4">
                                <fieldset>
                                    <legend class="block text-sm font-medium text-gray-700">Purpose of Consultation</legend>
                                    <div class="mt-2 space-y-2">
                                        <label class="flex items-center"><input type="checkbox" name="career" value="true" class="h-4 w-4 text-theme border-gray-300 rounded focus:ring-theme" /><span class="ml-2 text-sm text-gray-700">Career</span></label>
                                        <label class="flex items-center"><input type="checkbox" name="marriage-relationship" value="true" class="h-4 w-4 text-theme border-gray-300 rounded focus:ring-theme" /><span class="ml-2 text-sm text-gray-700">Marriage / Relationship</span></label>
                                        <label class="flex items-center"><input type="checkbox" name="health" value="true" class="h-4 w-4 text-theme border-gray-300 rounded focus:ring-theme" /><span class="ml-2 text-sm text-gray-700">Health</span></label>
                                        <label class="flex items-center"><input type="checkbox" name="finance" value="true" class="h-4 w-4 text-theme border-gray-300 rounded focus:ring-theme" /><span class="ml-2 text-sm text-gray-700">Finance</span></label>
                                        <label class="flex items-center"><input type="checkbox" name="education" value="true" class="h-4 w-4 text-theme border-gray-300 rounded focus:ring-theme" /><span class="ml-2 text-sm text-gray-700">Education</span></label>
                                        <label class="flex items-center"><input type="checkbox" name="childbirth" value="true" class="h-4 w-4 text-theme border-gray-300 rounded focus:ring-theme" /><span class="ml-2 text-sm text-gray-700">Childbirth</span></label>
                                        <label class="flex items-center"><input type="checkbox" name="general-life-prediction" value="true" class="h-4 w-4 text-theme border-gray-300 rounded focus:ring-theme" /><span class="ml-2 text-sm text-gray-700">General Life Prediction</span></label>
                                        <label class="flex items-center"><input type="checkbox" name="other" value="true" class="h-4 w-4 text-theme border-gray-300 rounded focus:ring-theme" /><span class="ml-2 text-sm text-gray-700">Other</span></label>
                                    </div>
                                </fieldset>
                            </div>
                            <div class="mb-4">
                                <label for="preferred-language" class="block text-sm font-medium text-gray-700">Preferred Language</label>
                                <select id="preferred-language" name="preferred-language" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme">
                                    <option value="">Select an option</option>
                                    <option value="English">English</option>
                                    <option value="Hindi">Hindi</option>
                                    <option value="Marathi">Marathi</option>
                                </select>
                            </div>
                            <div class="mb-4">
                                <label for="specific-question-or-problem" class="block text-sm font-medium text-gray-700">Specific Question or Problem</label>
                                <textarea id="specific-question-or-problem" name="specific-question-or-problem" rows="4" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme"></textarea>
                            </div>
                        </div>
                        <div class="mb-8">
                            <h2 class="text-xl font-semibold border-b pb-2 mb-4">Additional Info</h2>
                            <h1 class="text-3xl font-bold text-gray-800 my-4">Other Information</h1>
                            <h2 class="text-2xl font-semibold text-gray-700 my-3">This helps us understand your background and how you found us</h2>
                            <div class="mb-4">
                                <fieldset>
                                    <legend class="block text-sm font-medium text-gray-700">Have you consulted an astrolog</legend>
                                    <div class="mt-2 space-y-2">
                                        <label class="flex items-center"><input type="radio" name="have-you-consulted-an-astrolog" value="Yes" class="h-4 w-4 text-theme border-gray-300 focus:ring-theme" /><span class="ml-2 text-sm text-gray-700">Yes</span></label>
                                        <label class="flex items-center"><input type="radio" name="have-you-consulted-an-astrolog" value="No" class="h-4 w-4 text-theme border-gray-300 focus:ring-theme" /><span class="ml-2 text-sm text-gray-700">No</span></label>
                                    </div>
                                </fieldset>
                            </div>
                            <div class="mb-4">
                                <label for="about-us" class="block text-sm font-medium text-gray-700">about us?</label>
                                <select id="about-us" name="about-us" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme">
                                    <option value="">Select an option</option>
                                    <option value="Google">Google</option>
                                    <option value="YouTube">YouTube</option>
                                    <option value="Instagram">Instagram</option>
                                    <option value="Referral">Referral</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div><button type="submit" class="w-full bg-theme text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center">Submit</button>
                    </form>
                </div>
            </div>
            <div id="success-container" style="display:none;" class="bg-white p-8 rounded-xl shadow-lg text-center flex-col items-center">
                <svg class="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-xl">Thank you for your submission!</p>
            </div>
        </div>
        <script>
            const form = document.getElementById('wizard-form');
            const formContainer = document.getElementById('form-container');
            const successContainer = document.getElementById('success-container');
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                const submitButton = form.querySelector('button[type="submit"]');
                submitButton.disabled = true;
                submitButton.innerHTML = '<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Submitting...';
                const formData = new FormData(form);
                const data = {};
                formData.forEach((value, key) => {
                    if (data[key]) {
                        if (!Array.isArray(data[key])) data[key] = [data[key]];
                        data[key].push(value);
                    } else {
                        data[key] = value;
                    }
                });
                const apiEndpoint = "https://connect.waflow.in/webhook/675cef03-3a7a-437f-96d1-beb19e2318fd";
                if (apiEndpoint) {
                    try {
                        const response = await fetch(apiEndpoint, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(data)
                        });
                        if (!response.ok) throw new Error('Network response was not ok');
                    } catch (error) {
                        console.error('Submission error:', error);
                        alert('There was an error submitting your form. Please try again.');
                        submitButton.disabled = false;
                        submitButton.textContent = 'Submit';
                        return;
                    }
                }
                if ("redirect" === "redirect" && "https://whatsform.in/") {
                    window.location.href = "https://whatsform.in/";
                } else {
                    formContainer.style.display = 'none';
                    successContainer.style.display = 'flex';
                }
            });
        </script>
    </body>
    </html>
  `,
};



export const formTemplatesHtml: { [key: string]: string } = {
  'Appointment Service': `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Service Appointment</title>
        <style>
            body { font-family: sans-serif; background-color: #f4f4f9; margin: 0; padding: 20px; }
            .container { background: white; max-width: 500px; margin: auto; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            h2 { color: #333; text-align: center; }
            .form-group { margin-bottom: 15px; }
            label { display: block; margin-bottom: 5px; color: #555; }
            input[type="text"], input[type="email"], input[type="tel"], input[type="date"], select, textarea {
                width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;
            }
            .choices { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;}
            .choice { padding: 10px 15px; border: 1px solid #ccc; border-radius: 20px; cursor: pointer; }
            input[type="radio"] { display: none; }
            input[type="radio"]:checked + .choice { background-color: #007bff; color: white; border-color: #007bff; }
            button { background-color: #007bff; color: white; padding: 12px 20px; border: none; border-radius: 4px; cursor: pointer; width: 100%; font-size: 16px; }
            button:hover { background-color: #0056b3; }
        </style>
    </head>
    <body>
        <div class="container">
            <h2>Service Appointment Form</h2>
            <form id="appointmentForm">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" required>
                </div>
                <div class="form-group">
                    <label for="vehicle_make">Vehicle Make</label>
                    <input type="text" id="vehicle_make" name="vehicle_make" placeholder="e.g., Toyota" required>
                </div>
                 <div class="form-group">
                    <label for="vehicle_model">Vehicle Model</label>
                    <input type="text" id="vehicle_model" name="vehicle_model" placeholder="e.g., Camry" required>
                </div>
                <div class="form-group">
                    <label>Preferred Service Type</label>
                    <div class="choices">
                        <label><input type="radio" name="service_type" value="regular_maintenance" checked><span class="choice">Regular Maintenance</span></label>
                        <label><input type="radio" name="service_type" value="repair"><span class="choice">Repair</span></label>
                        <label><input type="radio" name="service_type" value="inspection"><span class="choice">Inspection</span></label>
                    </div>
                </div>
                <div class="form-group">
                    <label for="appointment_date">Preferred Date</label>
                    <input type="date" id="appointment_date" name="appointment_date" required>
                </div>
                <div class="form-group">
                    <label for="comments">Additional Comments</label>
                    <textarea id="comments" name="comments" rows="4"></textarea>
                </div>
                <button type="submit">Book Appointment</button>
            </form>
        </div>
        <script>
            document.getElementById('appointmentForm').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Appointment booked successfully!');
            });
            
            // Set min date for date input to today
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('appointment_date').setAttribute('min', today);
        </script>
    </body>
    </html>
  `,
  'Sell Car': `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sell Your Car</title>
        <style>
            body { font-family: sans-serif; background-color: #f4f4f9; margin: 0; padding: 20px; }
            .container { background: white; max-width: 600px; margin: auto; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            h2 { color: #333; text-align: center; }
            .form-section { margin-bottom: 20px; padding-bottom: 10px; border-bottom: 1px solid #eee; }
            .form-group { margin-bottom: 15px; }
            label { display: block; margin-bottom: 5px; color: #555; }
            input[type="text"], input[type="number"], input[type="file"], select {
                width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;
            }
            .grid-container { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; }
            button { background-color: #28a745; color: white; padding: 12px 20px; border: none; border-radius: 4px; cursor: pointer; width: 100%; font-size: 16px; margin-top: 10px;}
            button:hover { background-color: #218838; }
        </style>
    </head>
    <body>
        <div class="container">
            <h2>Used Car Selling Form</h2>
            <form id="sellCarForm">
                <div class="form-section">
                    <h3>Car Details</h3>
                    <div class="grid-container">
                        <div class="form-group">
                            <label for="make">Make</label>
                            <input type="text" id="make" name="make" required>
                        </div>
                        <div class="form-group">
                            <label for="model">Model</label>
                            <input type="text" id="model" name="model" required>
                        </div>
                        <div class="form-group">
                            <label for="year">Year</label>
                            <input type="number" id="year" name="year" min="1900" max="2099" required>
                        </div>
                        <div class="form-group">
                            <label for="mileage">Mileage (km)</label>
                            <input type="number" id="mileage" name="mileage" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="fuel_type">Fuel Type</label>
                        <select id="fuel_type" name="fuel_type" required>
                            <option value="">Select Fuel Type</option>
                            <option value="petrol">Petrol</option>
                            <option value="diesel">Diesel</option>
                            <option value="electric">Electric</option>
                            <option value="cng">CNG</option>
                        </select>
                    </div>
                </div>
                <div class="form-section">
                    <h3>Seller Information</h3>
                    <div class="grid-container">
                        <div class="form-group">
                            <label for="seller_name">Your Name</label>
                            <input type="text" id="seller_name" name="seller_name" required>
                        </div>
                         <div class="form-group">
                            <label for="seller_phone">Phone Number</label>
                            <input type="text" id="seller_phone" name="seller_phone" required>
                        </div>
                    </div>
                </div>
                <div class="form-section">
                    <h3>Pricing and Photos</h3>
                    <div class="form-group">
                        <label for="price">Expected Price (₹)</label>
                        <input type="number" id="price" name="price" required>
                    </div>
                    <div class="form-group">
                        <label for="photos">Upload Photos (up to 5)</label>
                        <input type="file" id="photos" name="photos" multiple accept="image/*">
                    </div>
                </div>
                <button type="submit">Submit Car for Sale</button>
            </form>
        </div>
         <script>
            document.getElementById('sellCarForm').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Your car has been listed for sale!');
            });
        </script>
    </body>
    </html>
  `
};

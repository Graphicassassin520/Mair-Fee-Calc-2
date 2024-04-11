function loadSavedInputs() {
    document.getElementById('maintenanceFee').value = localStorage.getItem('maintenanceFee') || '3500';
    document.getElementById('maintenanceFee2').value = localStorage.getItem('maintenanceFee2') || '3500';
    // Load other inputs as before
}

function saveInputs() {
    localStorage.setItem('maintenanceFee', document.getElementById('maintenanceFee').value);
    localStorage.setItem('maintenanceFee2', document.getElementById('maintenanceFee2').value);
    // Save other inputs as before
}

function validateInputs() {
    // Validate inputs including the new maintenance fee
    // Return false if any validation fails
}

function calculateProjection() {
    if (!validateInputs()) return;
    saveInputs();
    // Existing setup for company 1's calculation

    // Setup and calculate for company 2 (Spinnaker)

    // Calculate total savings and update the DOM

    // Update the chart to display both sets of data
}

window.onload = loadSavedInputs;

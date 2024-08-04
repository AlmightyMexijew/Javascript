document.addEventListener("DOMContentLoaded", function() {
    let map;
    let mapInitialized = false;

    function initializeMap(lat, lng) {
        map = L.map('map').setView([lat, lng], 15);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        L.marker([lat, lng]).addTo(map);
        mapInitialized = true;
    }

    function showPosition(position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        if (!mapInitialized) {
            initializeMap(lat, lng);
        } else {
            map.setView([lat, lng], 15);
            L.marker([lat, lng]).addTo(map);
        }
    }

    function displayConfirmation(buttonId) {
        const currentDateTime = new Date().toLocaleString();
        const action = buttonId === "Clock_In" ? "Clocked in at" : "Clocked out at";
        document.getElementById('confirmation').innerHTML += `<p>${action} ${currentDateTime}</p>`;
    }

    document.getElementById('Clock_In').addEventListener('click', function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
        displayConfirmation("Clock_In");
    });

    document.getElementById('Clock_Out').addEventListener('click', function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
        displayConfirmation("Clock_Out");
    });
});

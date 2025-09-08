 function openSettings() {
      document.getElementById("settingsBtn").innerHTML = " you clicked button!⚙️"; // Change icon to gear
    }


function toggleDropdown(element) {
      const dropdown = element.querySelector('.dropdown');
      const allDropdowns = document.querySelectorAll('.dropdown');
      allDropdowns.forEach(d => {
        if (d !== dropdown) d.style.display = 'none';
      });
      dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    }

    function toggleSidebar() {
      document.getElementById('sidebar').classList.toggle('active');
    }
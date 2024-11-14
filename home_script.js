document.querySelector('.user-button').addEventListener('click', function() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });
  
  // Menutup dropdown jika klik di luar
  window.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.dropdown');
    const userButton = document.querySelector('.user-button');
    if (!userButton.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.style.display = 'none';
    }
  });
  
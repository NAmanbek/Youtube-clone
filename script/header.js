//Upload video button
  /*document.getElementById('videoUploadBtn').addEventListener('click', function(event) {
      event.stopPropagation();
      const dropdown = document.getElementById('dropdownMenu');
      dropdown.classList.toggle('show');
  });

  window.addEventListener('click', function(event) {
      const dropdown = document.getElementById('dropdownMenu');
      if (!event.target.closest('#videoUploadBtn') && !event.target.closest('#dropdownMenu')) {
          dropdown.classList.remove('show');
      }
  });

//Notification button
document.getElementById('notification-button').addEventListener('click', function(event) {
    event.stopPropagation();
    const dropdown = document.querySelector('.dropdown-notification-content');
    dropdown.classList.toggle('show');
});

window.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.dropdown-notification-content');
    if (!event.target.closest('#notification-button') && !event.target.closest('.dropdown-notification-content')) {
        dropdown.classList.remove('show');
    }
});

//User button
document.getElementById('user-picture-container').addEventListener('click', function(event) {
    event.stopPropagation();
    const dropdown = document.querySelector('.user-dropdown-main-container'); 
    dropdown.classList.toggle('show');
});

window.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.user-dropdown-main-container'); 

    if (!event.target.closest('#user-picture-container') && !event.target.closest('.user-dropdown-main-container')) {
        dropdown.classList.remove('show');
    }
});*/

// Store the currently open dropdown
let openDropdown = null;

// Function to toggle dropdown visibility
function toggleDropdown(button, dropdown) {
    // Close the currently open dropdown if it's different from the one clicked
    if (openDropdown && openDropdown !== dropdown) {
        openDropdown.classList.remove('show');
    }

    // Toggle the clicked dropdown's visibility
    dropdown.classList.toggle('show');

    // Update the open dropdown
    openDropdown = dropdown.classList.contains('show') ? dropdown : null;
}

// Upload video button
document.getElementById('videoUploadBtn').addEventListener('click', function(event) {
    event.stopPropagation();
    const dropdown = document.getElementById('dropdownMenu');
    toggleDropdown(this, dropdown);
});

// Notification button
document.getElementById('notification-button').addEventListener('click', function(event) {
    event.stopPropagation();
    const dropdown = document.querySelector('.dropdown-notification-content');
    toggleDropdown(this, dropdown);
});

// User button
document.getElementById('user-picture-container').addEventListener('click', function(event) {
    event.stopPropagation();
    const dropdown = document.querySelector('.user-dropdown-main-container');
    toggleDropdown(this, dropdown);
});

// Close dropdown if clicked outside
window.addEventListener('click', function(event) {
    if (openDropdown && !event.target.closest('.show')) {
        openDropdown.classList.remove('show');
        openDropdown = null;
    }
});

const uploadVideo = document.getElementById('videoUploadBtn');
const notification = document.getElementById('notification-button');
const voiceBtn = document.getElementById('voice-search-button');
const userBtn = document.getElementById('user-picture-container');
const hamburgerBtn = document.querySelectorAll('.hamburger-button');


[uploadVideo, notification, voiceBtn, userBtn].forEach(button => {
  button.addEventListener('mouseup', () => handleRelease(button));
})

hamburgerBtn.forEach(button => {
    button.addEventListener('mouseup', () => handleRelease(button));
  })

//Input->focus->left-search-icon 
const searchInput = document.querySelector('.search-bar');
const leftIcon = document.querySelector('.search-bar-icon-hidden'); 

// Show icon when the input is focused
searchInput.addEventListener('focus', () => {
    leftIcon.style.opacity = '1';
});

// Hide icon when the input loses focus
searchInput.addEventListener('blur', () => {
    leftIcon.style.opacity = '0';
});
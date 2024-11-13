const sidebarLink = document.querySelectorAll('.sidebar-link');

sidebarLink.forEach(button => {
  button.addEventListener('mouseup', () => handleRelease(button));
})

//Left-menu
const hamburgerButtons = document.querySelectorAll('.hamburger-button'); // Select all buttons
const dropdown = document.querySelector('.left-menu-container');
const overlay = document.getElementById('overlay');
let isMenuInitiallyHidden = true; // Track initial state to handle auto-opening at 1300px

// Function to toggle the menu and overlay
function toggleMenu() {
  const isMenuOpen = dropdown.classList.contains('show');
  if (window.innerWidth >= 1300) {  // Only adjust layout if width is 1300px or greater
    if (!isMenuOpen) {
      // Apply geometry changes for open menu
      document.body.style.paddingLeft = '240px';
      document.querySelector('.video-grid').style.paddingRight = '248px';
      document.querySelector('.left-container').style.left = '240px';
      document.querySelector('.scrolling-bar').style.marginRight = '284px';
    } else {
      // Reset geometry changes for closed menu
      document.body.style.paddingLeft = '';
      document.querySelector('.video-grid').style.paddingRight = '';
      document.querySelector('.left-container').style.left = '';
      document.querySelector('.scrolling-bar').style.marginRight = '';
    }
  }

  dropdown.classList.toggle('show');
  if (window.innerWidth < 1300) {
    overlay.classList.toggle('show');
  } else {
    overlay.classList.remove('show');
  }
}

// Function to handle screen resizing
function handleResize() {
  const isLargeScreen = window.innerWidth >= 1300;
  const isMenuOpen = dropdown.classList.contains('show');

  if (isLargeScreen) {
    if (isMenuInitiallyHidden) {
      // Show the menu and adjust layout when reaching 1300px for the first time
      dropdown.classList.add('show');
      document.body.style.paddingLeft = '240px';
      document.querySelector('.video-grid').style.paddingRight = '248px';
      document.querySelector('.left-container').style.left = '240px';
      document.querySelector('.scrolling-bar').style.marginRight = '284px';
      overlay.classList.remove('show'); // Hide overlay on larger screens
      isMenuInitiallyHidden = false; // Mark that the initial state has been handled
    }
  } else {
    if (isMenuOpen) {
      // Temporarily disable transition
      dropdown.style.transition = 'none';
      dropdown.classList.remove('show');
      overlay.classList.remove('show');
      // Reset layout adjustments
      document.body.style.paddingLeft = '';
      document.querySelector('.video-grid').style.paddingRight = '';
      document.querySelector('.left-container').style.left = '';
      document.querySelector('.scrolling-bar').style.marginRight = '';
      // Re-enable transition after a brief delay to allow the change
      setTimeout(() => dropdown.style.transition = '', 0);
    }

    isMenuInitiallyHidden = true; // Reset initial state tracking for future resizing
  }

  if (!isLargeScreen && isMenuOpen) {
    // Close menu when resizing below 1300px
    dropdown.classList.remove('show');
    overlay.classList.remove('show');
    // Reset layout adjustments
    document.body.style.paddingLeft = '';
    document.querySelector('.video-grid').style.paddingRight = '';
    document.querySelector('.left-container').style.left = '';
    document.querySelector('.scrolling-bar').style.marginRight = '';
  }
}

// Add click event listeners for each hamburger button
hamburgerButtons.forEach(button => {
  button.addEventListener('click', function(event) {
    event.stopPropagation();
    toggleMenu();
  });
});

// Close menu and overlay on overlay click
overlay.addEventListener('click', function() {
  dropdown.classList.remove('show');
  overlay.classList.remove('show');
  // Reset layout adjustments
  document.body.style.paddingLeft = '';
  document.querySelector('.video-grid').style.paddingRight = '';
  document.querySelector('.left-container').style.left = '';
  document.querySelector('.scrolling-bar').style.marginRight = '';
});



// Handle visibility and layout on resize
window.addEventListener('resize', handleResize);
handleResize(); // Initialize on page load
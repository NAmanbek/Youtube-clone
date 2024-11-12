const scrollingBar = document.querySelector('.scrolling-bar');
const leftScrollButton = document.querySelector('.left-scroll-button');
const rightScrollButton = document.querySelector('.right-scroll-button');
const firstItem = document.querySelector('.item.first');
const leftLinearGrad = document.querySelector('.left-container');
const rightLinearGrad = document.querySelector('.right-container');

// Function to update the visibility of buttons and items based on scroll position
function updateScrollVisibility() {
  const scrollLeft = scrollingBar.scrollLeft;
  const maxScrollLeft = scrollingBar.scrollWidth - scrollingBar.clientWidth;

  // Toggle left button and first item visibility
  if (scrollLeft === 0) {
    leftScrollButton.classList.add('hidden');
    leftScrollButton.classList.remove('visible');
    leftLinearGrad.classList.add('hidden');
    leftLinearGrad.classList.remove('visible');
    firstItem.classList.add('visible');
    firstItem.classList.remove('hidden'); // Show first item at the start
  } else {
    leftScrollButton.classList.add('visible');
    leftScrollButton.classList.remove('hidden');
    leftLinearGrad.classList.add('visible');
    leftLinearGrad.classList.remove('hidden');
    firstItem.classList.add('hidden')
    firstItem.classList.remove('visible') // Hide first item after scrolling starts
  }

  // Toggle right button and last item visibility
  if (scrollLeft >= maxScrollLeft) {
    rightScrollButton.classList.add('hidden');
    rightScrollButton.classList.remove('visible');
    rightLinearGrad.classList.add('hidden');
    rightLinearGrad.classList.remove('visible');
    //lastItem.classList.add('hidden');
    //lastItem.classList.remove('visible'); // Hide last item at the end
  } else {
    rightScrollButton.classList.add('visible');
    rightScrollButton.classList.remove('hidden');
    rightLinearGrad.classList.add('visible');
    rightLinearGrad.classList.remove('hidden');
    //lastItem.classList.add('visible');
    //lastItem.classList.remove('hidden'); // Show last item when not at the end
  }
}

// Initialize visibility based on starting scroll position
updateScrollVisibility();

// Add scroll event listener
scrollingBar.addEventListener('scroll', updateScrollVisibility);

// Add click events for scroll buttons
leftScrollButton.addEventListener('click', () => {
  scrollingBar.scrollBy({ left: -500, behavior: 'auto' });
    // Adjust scroll distance as needed
});

rightScrollButton.addEventListener('click', () => {
  scrollingBar.scrollBy({ left: 500, behavior: 'smooth' }); // Adjust scroll distance as needed
});

function handleRelease(button) {
  button.classList.add('released');
  setTimeout(() => button.classList.remove('released'), 400);
}

[leftScrollButton, rightScrollButton].forEach(button => {
  button.addEventListener('mouseup', () => handleRelease(button));
})

const first = document.querySelector('.first');

document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('click', function(event) {
      // Remove "active" class from all .item elements
      document.querySelectorAll('.item').forEach(link => link.classList.remove('active'));
      
      // Add "active" class to the clicked item
      this.classList.add('active');

      if (this !== firstItem) {
          first.style.backgroundColor = 'rgba(128, 128, 128, 0.1)';
          first.style.color = 'black';
        } else {
          // Reset the first item to its initial "active" style
          first.style.backgroundColor = 'black';
          first.style.color = 'white';
    }
  });
});
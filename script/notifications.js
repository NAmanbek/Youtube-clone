// Notification button
/*document.getElementById('notification-button').addEventListener('click', function() {
  const existingDiv = document.getElementById('mainDiv');

  if(existingDiv) {
    // Remove the div if it already exists
    existingDiv.remove();
  } else {
    // Add the div if it doesn't exist
    document.getElementById('new-container').appendChild(createMainDiv(notBtn, notifications));
  }
});

//Function to create the main div container
function createMainDiv(id, className) {
  const mainDiv = document.createElement('div');
  mainDiv.id = id;
  mainDiv.className = className;

  // Add nested divs to the main div
  mainDiv.appendChild(createNestedDiv(Notifications, not-header));
  mainDiv.appendChild(createNestedDiv());
  //mainDiv.appendChild(createNestedDiv());

  return mainDiv;
}

// Function to create a single nested div with custom content
function createNestedDiv(content, className) {
  const nestedDiv = document.createElement('div');
  nestedDiv.className = className;
  nestedDiv.textContent = content;
  return nestedDiv;
}
*/
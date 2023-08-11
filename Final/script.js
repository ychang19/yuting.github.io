// Get references to the title, video, and button elements
const title = document.getElementById('title');
const video = document.getElementById('vid');
const button = document.querySelector('.button1');

// Add a hover event listener to the title element
title.addEventListener('mouseenter', () => {
  // Show the video by removing the hidden class
  video.classList.remove('video-hidden');
});

// Add a mouseout event listener to the title element
title.addEventListener('mouseout', () => {
  // Hide the video by adding the hidden class
  video.classList.add('video-hidden');
});

// Add a click event listener to the button
button.addEventListener('click', () => {
  // Redirect to the specified URL (index.html in this case)
  window.location.href = 'index.html';
});

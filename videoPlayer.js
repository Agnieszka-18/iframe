var VideoPlayer = {
  void: function() {
    // Remove any existing iframes
    var iframes = document.querySelectorAll('iframe');
    iframes.forEach(function(iframe) {
      iframe.parentNode.removeChild(iframe);
    });
  },

  start: function() {
    // Create the iframe element
    var iframe = document.createElement('iframe');

    // Set the attributes of the iframe
    iframe.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'; // Add autoplay parameter
    iframe.width = '560';
    iframe.height = '315';
    iframe.frameBorder = '0';
    iframe.allow = 'autoplay; encrypted-media';
    iframe.allowFullscreen = true;

    // Append the iframe to the body or any other element in your HTML
    document.body.appendChild(iframe);
  }
};

window.VideoPlayer = {
  void: function() {
    var iframes = document.querySelectorAll('iframe');
    iframes.forEach(function(iframe) {
      iframe.parentNode.removeChild(iframe);
    });
  },

  start: function() {
    var iframe = document.createElement('iframe');

    iframe.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'; // Add autoplay parameter
    iframe.width = '560';
    iframe.height = '315';
    iframe.frameBorder = '0';
    iframe.allow = 'autoplay; encrypted-media';
    iframe.allowFullscreen = true;

    document.body.appendChild(iframe);
  }
};


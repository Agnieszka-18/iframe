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


function embedYouTubeVideo(containerId, videoUrl) {
  var videoId = videoUrl.split('v=')[1].split('&')[0];

  var iframe = document.createElement('iframe');
  iframe.width = '560';
  iframe.height = '315';
  iframe.src = 'https://www.youtube.com/embed/' + videoId;
  iframe.allowFullscreen = true;

  var container = document.getElementById(containerId);
  container.appendChild(iframe);
}



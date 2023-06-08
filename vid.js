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

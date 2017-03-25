if ('serviceWorker' in navigator) {

  navigator
    .serviceWorker
    .register('/service-worker.js')
    .then(function () {
      console.log('SW registered successfully');
    }).catch(function (error) {
      console.log('Could not register service worker', error);
    });
}

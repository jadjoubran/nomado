if ('serviceWorker' in navigator) {

  navigator
    .serviceWorker
    .register('/service-worker.js')
    .then(function () {
      //success
    }).catch(function (error) {
      console.log('Could not register service worker', error);
    });
}
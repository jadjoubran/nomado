window.addEventListener('online', function () {
    console.log('online');
    document.head.querySelector('meta[name=theme-color]').setAttribute('content', '#F44336')
    document.body.classList.remove('offline');
});

window.addEventListener('offline', offlineMode);

function offlineMode() {
    console.log('offline');
    document.head.querySelector('meta[name=theme-color]').setAttribute('content', '#353A49')
    document.body.classList.add('offline');
}

if (!navigator.onLine) {
    offlineMode();
}
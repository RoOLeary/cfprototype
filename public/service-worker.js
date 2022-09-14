if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        console.log('fuck you Ro');
        navigator.serviceWorker.getRegistrations().then(registrations => {
            for(let registration of registrations) {
                registration.unregister().then(bool => {console.log('unregister: ', bool);});
                }
                // window.location.reload();
        });
    });
  }
window.addEventListener('load', function() {
    function onPause(event) {
        console.log('pause', event);
    }
    
    if(Speechki) {
        console.log('customSpeechki', Speechki);
        Speechki.registerCallback('pause', onPause);
    }
})


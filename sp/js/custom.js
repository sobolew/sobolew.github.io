window.addEventListener('DOMContentLoaded', function() {
    function onPause(event) {
        console.log('pause', event);
    }
    
    if(Speechki) {
        Speechki.onload(function() {
            console.log('customSpeechki', Speechki);
            Speechki.registerCallback('pause', onPause);
        })
        
    }
})


window.addEventListener('load', function() {
    function onPause(event) {
        console.log('pause', event);
    }
    
    if(Speechki) {
        console.log('customSpeechki', Speechki);
        Speechki.registerCallback('pause', onPause);
        Speechki.registerCallback('progress', function (event) {
            console.log('progress', event);
        }, {
            marks: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
        });
        Speechki.registerCallback('start', function(event) {
            console.log('start', event);
        })
    }
})


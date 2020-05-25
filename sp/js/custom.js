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
            marks: [10, 20, 30, 40, 50, 60, 70, 75, 80, 85, 90, 100]
        });
        Speechki.registerCallback('start', function(event) {
            console.log('start', event);
        });
        Speechki.registerCallback('end', function(event) {
            console.log('end', event);
        });
        Speechki.registerCallback('next', function(event) {
            console.log('next');
        });
        Speechki.registerCallback('prev', function(event) {
            console.log('prev')
        })
    }
})


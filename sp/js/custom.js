if(Speechki) {
    console.log('customSpeechki', Speechki);
    Speechki.registerCallback('pause', onPause);
}

function onPause(event) {
    console.log('pause', event);
}

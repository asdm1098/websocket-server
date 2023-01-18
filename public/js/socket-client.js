

// Referencias del HTML
const lbOnline = document.querySelector('#lbOnline');
const lbOffline = document.querySelector('#lbOffline');
const txtMessage = document.querySelector('#txtMessage');
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io();


//Observables -- listeners

socket.on('connect', () => {

    console.log('Connected');

    lbOffline.style.display = 'none';
    lbOnline.style.display = '';

});

socket.on('disconnect', () => {

    console.log('disconnected');

    lbOnline.style.display = 'none';
    lbOffline.style.display = '';

});

socket.on('send-msg', (payload) => {
    console.log( payload ); 
});


btnEnviar.addEventListener( 'click', () => {
    const msg = txtMessage.value;
    const payload = {
        msg,
        id: '123ABC',
        fecha: new Date().getTime()
    }
    socket.emit('send-msg', payload, ( id ) => {
        console.log('desde el server', id);
    });
});


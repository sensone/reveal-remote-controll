'use strict';

const io = require('socket.io-client'),
  _ = require('underscore'),
  socket = io('https://warm-coast-3384.herokuapp.com/');

let model = require('./models/model'),
  session = require('./models/session');

function getSessionObj() {
  return {
    presentation_id: session.get('id'),
    token: session.get('token')
  };
}

function verifySession(dataObj) {
  if (dataObj.presentation_id === session.get('id') && dataObj.token === session.get('token')) {
    return true;
  } else {
    return false;
  }
}

function changeHandler(dataObj) {
  console.log('slidechange');
  let data = dataObj.state;

  if (!data) { return; }

  if (verifySession(dataObj)) {

    model.set({
      buttons: data.buttons,
      name: data.name,
      notes: data.notes,
      screenshot: data.screenshot
    });
  }
}

function emit(eventName , data) {
  console.log('remote:' + eventName);

  socket.emit('remote:' + eventName , _.extend({}, data, getSessionObj()));
}

socket.on('connect' , function () {
  console.log('connected!');

  emit('connect', getSessionObj());
});

socket.on('disconnect' , function () {
  console.log('disconnected!');
});

socket.on('presentation:slidechanged' , changeHandler);
socket.on('presentation:checkClient', function(data) {
  console.log('checkClient');
  console.log(data);
  emit('checkClient', getSessionObj());
});


module.exports = emit;

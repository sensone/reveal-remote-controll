'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var emit = require('./sockets');

var Control = require('./Control');

//emit('down', {presentation: 'down'});

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var imageURL = require('../../images/yeoman.png');

var RevealRemoteControllApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
          <img src={imageURL} />
        </ReactTransitionGroup>
        <Control></Control>
      </div>
    );
  }
});

module.exports = RevealRemoteControllApp;

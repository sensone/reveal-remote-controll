'use strict';

const React = require('react/addons')
  , ReactTransitionGroup = React.addons.TransitionGroup
  , Control = require('./Control')
  , Router = require('react-router')
  , Timer = require('./Timer')
  , Menu = require('./Menu')
  , { Route, DefaultRoute, RouteHandler, Link } = Router;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');
require('purecss');

class RevealRemoteControllApp {
  render() {
    return (
      <div>
        <Menu/>
        <div className="main">
          <ReactTransitionGroup transitionName="fade">
            <Timer/>
            <RouteHandler/>
          </ReactTransitionGroup>
        </div>
      </div>
    );
  }
}

module.exports = RevealRemoteControllApp;

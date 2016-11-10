/**
 * Created by Bartek on 06.11.2016.
 */
$ = jQuery = require('jQuery');
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

Router.run(routes, function (Handler) {
    React.render(<Handler/>,document.getElementById('app'));
});
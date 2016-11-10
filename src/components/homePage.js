/**
 * Created by Bartek on 08.11.2016.
 */
'use strict';
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
    render: function(){
        return(
            <div className="jumbotron">
                <h1>Administration Center.</h1>
                <p>React, react and flux</p>
                <Link to="about" className='btn btn-primary btn-lg'>Learn More </Link>
            </div>
        );
    }
});
module.exports = Home;

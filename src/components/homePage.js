/**
 * Created by Bartek on 08.11.2016.
 */
'use strict';
var React = require('react');

var Home = React.createClass({
    render: function(){
        return(
            <div className="jumbotron">
                <h1>Administration Center.</h1>
                <p>React, react and flux</p>
            </div>
        );
    }
});
module.exports = Home;

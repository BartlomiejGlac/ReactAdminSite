/**
 * Created by Bartek on 08.11.2016.
 */
"use strict";

var React = require('react');

var About = React.createClass({
    statics:{
      willTransitionTo(transition, params, query, callback){
          if(!confirm('Are You sure, you want to quit?')){
              transition.about();
          }
          else{
              callback();
          }
      },
        willTransitionFrom(transition, component){
            if(!confirm('Are You sure, you want to leave about Page?')){
                transition.about();
            }
        },
    },

    render: function () {
        return (
            <div>
                <h1>About</h1>
                <p>
                    This application uses the following technologies:
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Browserify</li>
                        <li>Bootstrap</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = About;

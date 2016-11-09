/**
 * Created by Bartek on 09.11.2016.
 */
'use strict';

var React = require('react');
var AuthorAPI = require('../../api/authorApi');
var AuthorList = require('./authorList');

var AuthorsPage = React.createClass({
    getInitialState: function () {
        return {
            authors: []
        };
    },

    componentWillMount: function () {
            this.setState({authors: AuthorAPI.getAllAuthors()});
    },

    render: function () {
        return (
            <div>
                <h1>Authors</h1>
                <AuthorList authors={this.state.authors}/>
            </div>
        )
    }
});

module.exports = AuthorsPage;
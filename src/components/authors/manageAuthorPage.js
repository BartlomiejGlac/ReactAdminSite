var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var AuthorAPI = require('../../api/authorApi');
var ManageAuthorPage = React.createClass({
    getInitialState: function () {
        return {
            author: { id: '', firstName: '', lastName: '' }
        };
    },

    mixins:[
        Router.Navigation
        ],

    setAuthorState: function (event) {
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({author:this.state.author});
    },

    saveAuthor: function (event) {
      event.preventDefault();
        AuthorAPI.saveAuthor(this.state.author);
        this.transitionTo('authors');
    },

    render: function () {
        return (
            <AuthorForm
                author={this.state.author}
                onChange={this.setAuthorState}
                onSave={this.saveAuthor}
            />
        );
    },
});

module.exports = ManageAuthorPage;
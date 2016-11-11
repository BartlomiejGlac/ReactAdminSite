/**
 * Created by Bartek on 11.11.2016.
 */
'use strict';
var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorAPI = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var InitializeActions = {
    initApp: function () {
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData:{
                authors:AuthorAPI.getAllAuthors()
            }
        });
    }
};
module.exports = InitializeActions;
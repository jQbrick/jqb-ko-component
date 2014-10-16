jqb-ko-component
================

Utility to register KnockoutJS components.

> It works amazingly with PoliteJS/Workspace

    var component = require('jqb-ko-component');
    component.register(
        'component-name',
        require('./path/to/template.html'),
        require('./path/to/view-model')
    );
    
so far the view model should be a Constructor function:

    module.exports = function(params, info) {};
    
or a prototype object:

    module.exports = {
        init: function(params, info) {}
    };
    


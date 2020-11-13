/**
 * https://docs.sencha.com/extjs/7.3.1/classic/Ext.app.ViewController.html
 */
Ext.define('Demo.view._feature_.FeatureViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller._feature_view',
    
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.app.ViewController.html#cfg-control
     */
    control: {
        'viewport': {
            render: function () { console.log(this.$className + '.' + arguments.callee.name); },
        },
        'gridview': {
            selectionchange: function () { console.log(this.$className + '.' + arguments.callee.name); },
        }
    },

    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.app.ViewController.html#cfg-listen
     */
    listen: {
        // controller: {},
        // store: {},
        component: {
            '#': {
                selectionchange: function() {
                    console.log(this.$className + '.' + arguments.callee.name, arguments);
                }
            }
        }
    },
    

    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.app.ViewController.html#cfg-routes
     */
    routes: {
        'classic/:{demo}': {
            action: 'demoRouteAction',
            before: 'demoRouteBefore',
            name: 'demo'
        }
    },

    demoRouteBefore: function (values) {
        console.log(this.$className + '.' + arguments.callee.name)
    },

    demoRouteAction: function (values) {
        var id = values.id;
        console.log(this.$className + '.' + arguments.callee.name)
    },

    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.app.ViewController.html#cfg-bindings
     */
    binding: {
        selectionChange: '{selection}'
    },

    selectionChange: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },

    /**
     * selModel Listeners
     */
    focuschange: function () {
        console.log(this.$className + '.' + arguments.callee.name)
    },

    selectionchange: function () {
        console.log(this.$className + '.' + arguments.callee.name)
    },


    /**
     * Template Methods
     */

    init: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },

    beforeRender: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },
    
    afterRender: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },

    destroy: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    }    
});

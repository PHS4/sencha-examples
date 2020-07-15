/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.app.ViewController.html
 */
Ext.define('Demo.view.multiselect.MultiSelectViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.multiselect',

    onSelection: function () {
        Log.log(arguments.callee.name, arguments);
    }
});

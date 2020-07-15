/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.app.ViewController.html
 */
Ext.define('Demo.view.multiselectcheck.MultiSelectCheckViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.multiselectcheck',
    onSelection: function () {
        Log.log(arguments.callee.name, arguments, this);
    }
});

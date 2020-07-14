Ext.define('Demo.view.selectionmultiselectclick.MultiSelectClickViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.multiselectclick-rowclickgrid',

    onSelection: function () {
        Log.log(arguments.callee.name, arguments);
    }
});

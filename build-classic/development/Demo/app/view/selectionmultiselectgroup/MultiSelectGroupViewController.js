Ext.define('Demo.view.selectionmultiselectgroup.MultiSelectGroupViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.multiselectgroup-rowgroupsgrid',

    onSelection: function () {
        Log.log(arguments.callee.name, arguments);
    }

});

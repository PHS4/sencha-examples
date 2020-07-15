Ext.define('Demo.view.selectionmultiselectshift.MultiSelectShiftViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.multiselectshift-rowshiftgrid',

    onSelection: function () {
        Log.log(arguments.callee.name, arguments);
    }

});

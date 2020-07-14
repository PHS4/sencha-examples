Ext.define('Demo.view.selectionsingle.SelectionSingleViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.singleselect-singlerowgrid',

    onSelection: function () {
        Log.log(arguments.callee.name, arguments, this);
    }
});

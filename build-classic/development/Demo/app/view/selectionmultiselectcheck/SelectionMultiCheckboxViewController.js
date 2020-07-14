Ext.define('Demo.view.selectionmultiselectcheck.SelectionMultiCheckboxViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.multiselectcheck-rowcheckboxgrid',

    onSelection: function () {
        Log.log(arguments.callee.name, arguments, this);
    }
});

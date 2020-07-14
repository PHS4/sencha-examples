Ext.define('Demo.view.selectionsinglecheckbox.SelectionSingleCheckboxViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.singleselectcheck-rowcheckboxgrid',

    onSelection: function () {
        Log.log(arguments.callee.name, arguments, this);
    }
});

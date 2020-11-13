/**
 * https://docs.sencha.com/extjs/7.3.1/modern/Ext.app.ViewController.html
 */
Ext.define('Demo.view.editableform.EditableFormViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.editableform',

    /**
     * Listen for changes made to data in the ViewModel
     * https://docs.sencha.com/extjs/7.3.1/modern/Ext.app.ViewController.html#cfg-bindings
     */
    bindings: {
        onSelectionChange: '{selection}'
    },

    selectRecord: function (s, e) {
        s.setSelection(s.getStore().first());
    },
    onSelectionChange: function (selection) {

        Log.event(arguments.callee.name, arguments, this);

        var form = this.getView().down('formpanel');

        /**
         * if the selection isn't null or undefined load the record.
         */
        if (selection) {

            form.load(selection);
        }
    },

    /**
     * On save click.
     */
    save: function (btn, eOpts) {
        var title = this.getViewModel().data.selection.data.name;
        /**
         * https://docs.sencha.com/extjs/7.3.1/modern/Ext.Msg.html#method-alert
         */
        Ext.Msg.alert(title + ' Saved', 'Record Saved.', Ext.emptyFn);
    }
});

/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.app.ViewController.html
 */
Ext.define('Demo.view.editablepopup.EditablePopupViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.editablepopup',

    listen: {
        component: {
            /**
             * References the current view
             */
            '#': {
                childdoubletap: 'openFormWindow'
            }
        }
    },


    openFormWindow: function (view, location, eOpts) {

        Log.event(arguments.callee.name, arguments, this);

        this.getView().down('dialog').show()

    },

    /**
     * On save click.
     */
    saveForm: function (btn, eOpts) {
        var title = this.getViewModel().data.selection.data.name;

        Ext.Msg.alert(title + ' Saved', 'Record Saved.', Ext.emptyFn);

    }
});

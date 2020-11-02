Ext.define('Demo.view.editablevalidation.EditableValidationViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.editing-validation-validategrid',

    /**
     * Return false if desired to prevent/cancel editing.
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.plugin.RowEditing.html#event-beforeedit
     */
    onBeforeEdit: function (editor, context, eOpts) {
        Log.event(arguments.callee.name, arguments, this);

        Ext.toast({
            category: '',
            title: 'Event',
            iconCls: 'x-fa fa-broadcast-tower',
            html: arguments.callee.name,
            layout: 'fit'
        });
        // return false;
    },

    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.plugin.RowEditing.html#event-canceledit
     */
    onCancelEdit: function (editor, context, eOpts) {
        Log.event(arguments.callee.name, arguments, this);
        
        Ext.toast({
            category: '',
            title: 'Event',
            iconCls: 'x-fa fa-broadcast-tower',
            html: arguments.callee.name,
            layout: 'fit',
            minWidth: 300
        });
    },

    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.plugin.RowEditing.html#event-validateedit
     */
    onValidateEdit: function (editor, context, eOpts) {
        Log.event(arguments.callee.name, arguments, this);
        
        var record = context.record;
        
        if (record.get('price') < 1) {
            // context.cancel = true;
            return false;
        }
    },

    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.plugin.RowEditing.html#event-edit
     */
    onEdit: function (editor, context, eOpts) {
        Log.event(arguments.callee.name, arguments, this);

        /**
         * https://docs.sencha.com/extjs/7.2.0/classic/Ext.window.Toast.html
         */
        Ext.toast({
            layout: 'fit',
            html: `'${context.originalValue}' to '${context.value}'`,
            category: '',
            title: 'Cell Edited',
            align: 't'
        });

        context.record.commit();
    }

});

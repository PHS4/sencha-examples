Ext.define('Demo.view.editablerow.EditableRowViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.editing-row-rowgrid',


    addRecord: function() {

        Log.event(arguments.callee.name, arguments, this);
        
        var view = this.getView();
        // This will prevent having to hardcode the model name in the controller.
        var rec = Ext.create(view.getStore().getModel().$className, {
            // optionally set some initial values.
        });
        
        view.store.insert(0, rec);
        view.findPlugin('rowediting').startEdit(rec, 0);
    },


    deleteRow: function(view, recIndex, cellIndex, item, e, record) {
        
        Log.event(arguments.callee.name, arguments, this);
        
        record.drop();
        
        Ext.toast({
            layout: 'fit',
            html: `Deleted: '${record.get('name')}'`,
            category: '',
    title: 'Delete',
            align: 't'
        });
    },

    /**
     * Return false if desired to prevent/cancel editing.
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.plugin.RowEditing.html#event-beforeedit
     */
    onBeforeEdit: function (editor, context, eOpts) {
        Log.event(arguments.callee.name, arguments);
        
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
        Log.event(arguments.callee.name, arguments);
        
        Ext.toast({
            category: '',
    title: 'Event',
            iconCls: 'x-fa fa-broadcast-tower',
            html: arguments.callee.name,
            layout: 'fit'
        });
    },

    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.plugin.RowEditing.html#event-validateedit
     */
    onValidateEdit: function (editor, context, eOpts) {
        Log.event(arguments.callee.name, arguments);
        
        Ext.toast({
            category: '',
    title: 'Event',
            iconCls: 'x-fa fa-broadcast-tower',
            html: arguments.callee.name,
            layout: 'fit'
        });
    },

    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.plugin.RowEditing.html#event-edit
     */
    onEdit: function (editor, context, eOpts) {
        Log.event(arguments.callee.name, arguments);
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
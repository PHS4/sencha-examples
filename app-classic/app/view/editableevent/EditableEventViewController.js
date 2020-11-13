/**
 * https://docs.sencha.com/extjs/7.3.1/classic/Ext.app.ViewController.html
 */
Ext.define('Demo.view.editableevent.EditableEventViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.datasourceview',

    /**
     * The event handler method called by an action column
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.grid.column.Action.html
     */
    onLoadDataActionClick: function (grid, rowIndex, colIndex, actionCmp, event, record) {
        
        Log.event(arguments.callee.name, arguments, this);
        
        /**
         * Fires a custom event that other components can listen for.
         */
        this.getView().fireEvent('loaddata', record);
    },

    /**
     * The event handler method called by an action column
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.grid.column.Action.html
     */
    onGenerateGridActionClick: function (grid, rowIndex, colIndex, actionCmp, event, record) {
        
        Log.event(arguments.callee.name, arguments, this);

        /**
         * Fires a custom event that other components can listen for.
         */
        this.getView().fireEvent('generategrid', record);
    },

    /**
     * The event handler method called by an action column
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.grid.column.Action.html
     */
    onRemoveDataSource: function (grid, rowIndex, colIndex, actionCmp, event, record) {
        
        Log.event(arguments.callee.name, arguments, this);
        
        /**
         * Deletes the record and also removes it's self from the Store.
         */
        record.drop();
    },

    /**
     * The event handler method called by an action column
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.grid.column.Action.html
     */
    addDataSource: function (event, element, header, tool) {
        
        Log.event(arguments.callee.name, arguments, this);

        var grid = this.getView();

        /**
         * Creates a new record with null values as default.
         */
        var rec = grid.getStore().insert(0, {
            name: null,
            url: null,
            root: null
        });

        /**
         * Then calls the plugin method to enter editing mode.
         * for a specific row/record.
         * 
         * https://docs.sencha.com/extjs/7.3.1/classic/Ext.grid.plugin.CellEditing.html#methods
         */
        grid.findPlugin('cellediting').startEdit(rec[0], 0);
    },

    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.grid.plugin.CellEditing.html#events
     */
    onEdit: function (editor, context) {

        Log.event(arguments.callee.name, arguments, this);
        
        /**
         * `context.record` is a Model instance.
         * That is why `.save()` is an available method.
         * https://docs.sencha.com/extjs/7.3.1/classic/Ext.data.Model.html
         */
        context.record.save();
    }
});
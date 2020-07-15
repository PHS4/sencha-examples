Ext.define('Demo.view.editablecell.EditableCellViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.editing-cell-cellgrid',
    
    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.app.ViewController.html#cfg-bindings
     */    
    // bindings: {},
    
    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.app.ViewController.html#cfg-control
     */
    // control: {},
    
    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.app.ViewController.html#cfg-listen
     */
    // listen: {},
    
    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.app.ViewController.html#cfg-listeners
     */
    // listeners: {},
    
    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.app.ViewController.html#cfg-routes
     */
    // routes: {},

    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.app.ViewController.html#method-beforeRender
     */
    beforeRender: function (view) {
        Log.event(arguments.callee.name, arguments, this);
    
        const plugin = view.getPlugin('editingPlugin');
    
        plugin.on({
            'beforeedit': this.onBeforeEdit,
            'canceledit': this.onCancelEdit,
            'edit': this.onEdit,
            'validateeditdit': this.onValidateEdit
        });
    },

    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.app.ViewController.html#method-afterRender
     */
    afterRender: function (view) {
        Log.event(arguments.callee.name, arguments, this);
    },

    /**
     * Return false to cancel editing
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.plugin.CellEditing.html#events
     */
    onBeforeEdit: function (editor, context, eOpts) {
        Log.event(arguments.callee.name, arguments, this);
    },

    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.plugin.CellEditing.html#event-edit
     */
    onEdit: function (editor, context, eOpts) {
        Log.event(arguments.callee.name, arguments, this);

        if (context.originalValue != context.value) {

            /**
             * Commit 'saves' the change to memory. When connected to an API
             * you can call `context.record.save();`
             * 
             * https://docs.sencha.com/extjs/7.2.0/classic/Ext.data.Model.html
             */
            context.record.commit();

            /**
             * https://docs.sencha.com/extjs/7.2.0/classic/Ext.window.Toast.html
             */
            Ext.toast({
                layout: 'fit', // this seems to fix a problem with auto width
                html: `'${context.originalValue}' to '${context.value}'`,
                category: '',
    title: 'Cell Edited',
                align: 't'
            });
        }
    },

    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.plugin.CellEditing.html#event-canceledit
     */
    onCancelEdit: function (editor, context, eOpts) {
        Log.event(arguments.callee.name, arguments, this);
    },
    
    /**
     * Fires after a cell is edited, but before the value is set in the record. There are three possible outcomes when handling the validateedit event:
     * - Return true - Return true to commit the change to the underlying record and hide the editor
     * - Return 'false' - Return false to prevent 1) the edit from being committed to the underlying record and 2) the editor from hiding / blurring.
     * - Set context.cancel: true and return false - Set the context param's cancel property to true and returning false will 1) prevent the edit from being committed to the underlying record but will allow the edit to hide once blurred.
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.plugin.CellEditing.html#event-validateedit
     */
    onValidateEdit: function (editor, context, eOpts) {
        Log.event(arguments.callee.name, arguments, this);
    },
    
    /**
     * called when clicking add record tool button. This method adds a new record to the store
     * then sets the edit mode of the row.
     */    
    addRecord: function() {
        Log.event(arguments.callee.name, arguments, this);
        
        var view = this.getView();
        // This will prevent having to hardcode the model name in the controller.
        var rec = Ext.create(view.getStore().getModel().$className, {
            // optionally set some initial values.
            id: 0
        });
        
        view.store.insert(0, rec);
        view.findPlugin('cellediting').startEdit(rec, 0);
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
    }
});

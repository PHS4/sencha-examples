Ext.define('Demo.view.editableform.EditableFormViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.editable-editableformview',

    /**
     * Listen for changes made to data in the ViewModel
     * https://docs.sencha.com/extjs/7.3.1/modern/Ext.app.ViewController.html#cfg-bindings
     */
    bindings: {
        onSelectionChange: '{selection}'
    },

    onSelectionChange: function (selection) {
        
        Log.event(arguments.callee.name, arguments, this);

        var form = this.getView().down('form');
        
        /**
         * Just in case, clear the form
         */
        form.reset();

        /**
         * if the selection isn't null or undefined expand 
         * the docked form and load the record.
         */
        if (selection) {

            /**
             * Passing true for `animate`
             * https://docs.sencha.com/extjs/7.3.1/classic/Ext.panel.Panel.html#method-expand
             */
            form.expand(true);

            /**
             * Calling load record will automatically populate the forms matching
             * field `name`s to the Model instance's field names names. Edits will also be made 
             * to the Model on save and reflected anywhere the instance is available.
             * 
             * If you're using an object of key value pairs, use `form.setValues(object)`
             * 
             * https://docs.sencha.com/extjs/7.3.1/classic/Ext.form.Panel.html#method-loadRecord
             */
            form.loadRecord(selection);
        }
    },

    /**
     * On save click.
     */
    save: function (btn, eOpts) {

        Log.event(arguments.callee.name, arguments, this);

        var form = this.getView().down('form').getForm();

        /**
         * https://docs.sencha.com/extjs/7.3.1/classic/Ext.data.Model.html#method-commit
         */
        form.updateRecord().getRecord().commit();
    }
});

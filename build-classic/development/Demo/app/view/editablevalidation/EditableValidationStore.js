Ext.define('Demo.view.editablevalidation.EditableValidationStore', {
    extend: 'Ext.data.Store',
    alias: 'store.editablevalidationstore',

    model: 'Demo.view.editablevalidation.EditableValidationStoreModel',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url: 'app/view/editablevalidation/data.json',
        reader: {
            type: 'json'
        }
    }
});

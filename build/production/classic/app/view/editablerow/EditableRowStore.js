Ext.define('Demo.view.editablerow.EditableRowStore', {
    extend: 'Ext.data.Store',
    alias: 'store.editablerowstore' ,

    model: 'Demo.view.editablerow.EditableRowStoreModel',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url: 'app/view/editablerow/data.json',
        reader: {
            type: 'json'
        }
    }
});

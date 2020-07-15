Ext.define('Demo.view.editableform.EditableFormStore', {
    extend: 'Ext.data.Store',
    alias: 'store.editableformstore',

    model: 'Demo.view.editableform.EditableFormStoreModel',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url: 'app/view/editableform/data.json',
        reader: {
            type: 'json'
        }
    }
});

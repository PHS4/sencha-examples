Ext.define('Demo.view.selectionmultiselectcheck.SelectionMultiCheckboxStore', {
    extend: 'Ext.data.Store',
    alias: 'store.selectionmulticheckboxstore' ,

    model: 'Demo.view.selectionmultiselectcheck.SelectionMultiCheckboxStoreModel',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url: 'app/view/selectionmultiselectcheck/data.json',
        reader: {
            type: 'json'
        }
    }
});

Ext.define('Demo.view.selectionmultiselectclick.MultiSelectClickStore', {
    extend: 'Ext.data.Store',
    alias: 'store.multiselectclickstore' ,

    model: 'Demo.view.selectionmultiselectclick.MultiSelectClickStoreModel',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url: 'app/view/selectionmultiselectclick/data.json',
        reader: {
            type: 'json'
        }
    }
});

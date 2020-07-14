Ext.define('Demo.view.dragndroproworder.DragnDropRowOrderStore', {
    extend: 'Ext.data.Store',
    alias: 'store.dragndroproworderstore',

    model: 'Demo.view.dragndroproworder.DragnDropRowOrderStoreModel',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url: 'app/view/dragndroproworder/data.json',
        reader: {
            type: 'json'
        }
    }
});

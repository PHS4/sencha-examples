Ext.define('Demo.view.dragndropfieldtogrid.DragnDropFieldToGridStore', {
    extend: 'Ext.data.Store',
    alias: 'store.dragndropfieldtogridstore',
    model: 'Demo.view.dragndropfieldtogrid.DragnDropFieldToGridStoreModel',
    
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'app/view/dragndropfieldtogrid/data.json',
        reader: {
            type: 'json'
        }
    }
});

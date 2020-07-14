Ext.define('Demo.view.dragndropgridtogrid.DragnDropGridtoGridStore', {
    extend: 'Ext.data.Store',
    alias: 'store.dragndropgridtogridstore',
    model: 'Demo.view.dragndropgridtogrid.DragnDropGridtoGridStoreModel',
    
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url: 'app/view/dragndropgridtogrid/data.json',
        reader: {
            type: 'json'
        }
    }
});

Ext.define('Demo.view.columnoverflow.OverflowStore', {
    extend: 'Ext.data.Store',
    alias: 'store.columnoverflowstore',

    model: 'Demo.view.columnoverflow.OverflowStoreModel',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url: 'app/view/columnoverflow/data.json',
        reader: {
            type: 'json'
        }
    }
});

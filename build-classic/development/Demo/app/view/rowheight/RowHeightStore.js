Ext.define('Demo.view.rowheight.RowHeightStore', {
    extend: 'Ext.data.Store',
    alias: 'store.rowheightstore' ,

    model: 'Demo.view.rowheight.RowHeightStoreModel',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url: 'app/view/rowheight/data.json',
        reader: {
            type: 'json'
        }
    }
});

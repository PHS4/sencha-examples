Ext.define('Demo.view.rowexpand.RowExpanderStore', {
    extend: 'Ext.data.Store',
    alias: 'store.rowexpanderstore' ,

    model: 'Demo.view.rowexpand.RowExpanderStoreModel',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url: 'app/view/rowexpander/data.json',
        reader: {
            type: 'json'
        }
    }
});

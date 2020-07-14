Ext.define('Demo.view.rowexpandlocked.RowExpanderLockedColumnStore', {
    extend: 'Ext.data.Store',
    alias: 'store.rowexpanderlockedcolumnstore' ,

    model: 'Demo.view.rowexpandlocked.RowExpanderLockedColumnStoreModel',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url: 'app/view/rowexpandlocked/data.json',
        reader: {
            type: 'json'
        }
    }
});

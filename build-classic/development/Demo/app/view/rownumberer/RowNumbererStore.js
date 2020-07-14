Ext.define('Demo.view.rownumberer.RowNumbererStore', {
    extend: 'Ext.data.Store',
    alias: 'store.rownumbererstore' ,

    model: 'Demo.view.rownumberer.RowNumbererStoreModel',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url: 'app/view/rownumberer/data.json',
        reader: {
            type: 'json'
        }
    }
});

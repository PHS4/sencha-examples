Ext.define('Demo.view.selectionsingle.SelectionSingleStore', {
    extend: 'Ext.data.Store',
    alias: 'store.selectionsinglestore' ,

    model: 'Demo.view.selectionsingle.SelectionSingleStoreModel',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url: 'app/view/selectionsingle/data.json',
        reader: {
            type: 'json'
        }
    }
});

Ext.define('Demo.view.rowbody.RowBodyStore', {
    extend: 'Ext.data.Store',
    alias: 'store.rowbodystore',

    model: 'Demo.view.rowbody.RowBodyStoreModel',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url: 'app/view/rowbody/data.json',
        reader: {
            type: 'json',
            rootProperty: 'companies'
        }
    }
});

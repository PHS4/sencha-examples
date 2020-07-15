Ext.define('Demo.view.columngroup.ColumnGroupStore', {
    extend: 'Ext.data.Store',
    alias: 'store.columngroupstore',

    model: 'Demo.view.columngroup.ColumnGroupStoreModel',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url: 'app/view/columngroup/data.json',
        reader: {
            type: 'json'
        }
    }
});

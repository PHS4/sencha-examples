Ext.define('Demo.view.export.ExportStore', {
    extend: 'Ext.data.Store',
    alias: 'store.exportstore' ,
    model: 'Demo.view.export.ExportStoreModel',

    autoLoad: true,
    remoteSort: false,
    pageSize: 50,
    
    sorters: [{
        property: 'company',
        direction: 'ASC'
    }],

    proxy: {
        type: 'ajax',
        url: 'app/view/export/data.json',
        reader: {
            type: 'json',
            rootProperty: 'data',
            idProperty: 'id',
            totalProperty: 'total'
        }
    }
});

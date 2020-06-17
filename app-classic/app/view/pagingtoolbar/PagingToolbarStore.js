Ext.define('Demo.view.pagingtoolbar.PagingToolbarStore', {
    extend: 'Ext.data.Store',
    alias: 'store.pagingtoolbarstore',
    // model: 'Demo.view.pagingtoolbar.PagingToolbarStoreModel',

    fields: [
        'firstName', 'lastName', 'address', 'company', 'title',
        {
            name: 'id',
            type: 'int'
        }
    ],

    pageSize: 50,
    remoteSort: true,
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'https://llbzr8dkzl.execute-api.us-east-1.amazonaws.com/production/user',
        reader: {
            rootProperty: 'users',
            totalProperty: 'totalCount'
        }
    }
});

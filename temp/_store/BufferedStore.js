Ext.define('Demo.store.BufferedStore', {
    extend: 'Ext.data.BufferedStore',
    alias: 'store.bufferedstore',
    storeId: 'bufferedstore',
    fields: [
        'firstName', 'lastName', 'address', 'company', 'title',
        {
            name: 'id',
            type: 'int'
        }],

    leadingBufferZone: 100,
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
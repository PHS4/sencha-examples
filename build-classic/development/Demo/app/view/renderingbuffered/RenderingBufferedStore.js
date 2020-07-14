Ext.define('Demo.view.renderingbuffered.RenderingBufferedStore', {
    extend: 'Ext.data.BufferedStore',
    alias: 'store.renderingbufferedstore' ,
    
    model: 'Demo.view.renderingbuffered.RenderingBufferedStoreModel',

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
    },
});

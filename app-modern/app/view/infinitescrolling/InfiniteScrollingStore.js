/**
 * https://docs.sencha.com/extjs/7.3.1/modern/Ext.data.virtual.Store.html
 */
Ext.define('Demo.view.infinitescrolling.InfiniteScrollingStore', {
    extend: 'Ext.data.virtual.Store',
    alias: 'store.infinitescrolling',

    fields: [
        'firstName', 'lastName', 'address', 'company', 'title',
        {
            name: 'id',
            type: 'int'
        }],

    /**
     * https://docs.sencha.com/extjs/7.3.1/modern/Ext.data.virtual.Store.html#cfg-leadingBufferZone
     */
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

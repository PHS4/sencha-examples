Ext.define('Demo.store.Logs', {
    extend: 'Ext.data.Store',
    alias: 'store.logs',
    storeId: 'logs',

    fields: ['timestamp', 'type', 'class', 'method', 'message', { name: 'args', type: 'array' }],

    data: [],

    proxy: 'memory',
});
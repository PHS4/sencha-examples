/**
 * https://docs.sencha.com/extjs/7.3.1/modern/Ext.data.Store.html
 */
Ext.define('Demo.view.livedata.LiveDataStore', {
    extend: 'Ext.data.Store',
    alias: 'store.livedatastore',

    model: 'Demo.view.livedata.LiveDataStoreModel',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url: 'app/view/livedata/data.json',
        reader: {
            type: 'json'
        }
    }
});

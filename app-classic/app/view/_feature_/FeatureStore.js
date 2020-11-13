/**
 * https://docs.sencha.com/extjs/7.3.1/classic/Ext.data.Store.html
 */
Ext.define('Demo.view._feature_.FeatureStore', {
    extend: 'Ext.data.Store',
    alias: 'store.featurestore',
    storeId: '_feature_store',

    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.data.Store.html#cfg-model
     */
    model: 'Demo.view._feature_.FeatureStoreModel',
    autoLoad: true,
    
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.data.proxy.Ajax.html
     */
    proxy: {
        type: 'ajax',
        url: './app/view/_feature_/data.json',

        /**
         * https://docs.sencha.com/extjs/7.3.1/classic/Ext.data.reader.Json.html
         */
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});

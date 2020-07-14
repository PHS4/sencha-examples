/**
 * https://docs.sencha.com/extjs/7.2.0/classic/Ext.data.Model.html
 */
Ext.define('Demo.view._feature_.FeatureStoreModel', {
    extend: 'Ext.data.Model',

    idProperty: 'id',

    fields: [
        'id',
        'name',
        'desc'
    ],

    /**
     * Not required for both the store and the model. Can be on 
     * either but might depend on individual scenarios.
     * 
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.data.proxy.Ajax.html
     */
    proxy: {
        type: 'ajax',
        url: './app/view/_feature_/data.json',

        /**
         * https://docs.sencha.com/extjs/7.2.0/classic/Ext.data.reader.Json.html
         */
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});

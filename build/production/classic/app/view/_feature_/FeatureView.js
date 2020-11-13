/**
 * https://docs.sencha.com/extjs/7.3.1/classic/Ext.grid.Panel.html
 */
Ext.define('Demo.view._feature_.FeatureView', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Demo.view._feature_.FeatureViewController',
        'Demo.view._feature_.FeatureViewModel',
        'Demo.view._feature_.FeatureStore',
        'Demo.view._feature_.FeatureStoreModel'
    ],

    xtype: '_feature_view',
    controller: '_feature_view',
    viewModel: '_feature_view',

    category: 'General',
    
    category: '',
    title: 'Feature',

    tools: [],

    /**
     * The Stores storeId property
     */
    store: {
        type: '_feature_store'
    },

    bind: {
        selection: '{selection}'
    },

    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.grid.Panel.html#cfg-selModel
     */
    selModel: {
        /**
         * 'SINGLE'|'SIMPLE'|'MULTI'
         */
        mode: 'SINGLE',
        
        allowDeselect: true,

        listeners: {
            focuschange: 'focuschange',
            selectionchange: 'selectionchange'
        }
    },

    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.grid.Panel.html#cfg-features
     */
    features: [],

    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.grid.Panel.html#cfg-plugins
     */
    plugins: [],

    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.grid.column.Column.html
     */
    columns: [
        { dataIndex: 'id',   text: 'ID' },
        { dataIndex: 'name', text: 'Name' },
        { dataIndex: 'desc', text: 'Description' }
    ]
});

/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.data.Model.html
 */
Ext.define('Demo.view.xmldatagrid.XmlDataGridStoreModel', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'common', type: 'string' },
        { name: 'botanical', type: 'string' },
        { name: 'light' },
        { name: 'price', type: 'float' },
        // dates can be automatically converted by specifying dateFormat
        { name: 'availDate', mapping: 'availability', type: 'date', dateFormat: 'm/d/Y' },
        { name: 'indoor', type: 'bool' }
    ]
});
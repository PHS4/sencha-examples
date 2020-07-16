/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.app.ViewModel.html
 */
Ext.define('Demo.view.xmldatagrid.XmlDataGridViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.xml-data-grid-viewmodel',
    requires: [
        'Ext.data.reader.Xml'
    ],

    stores: {
        plants: {

            fields: [
                { name: 'common', type: 'string' },
                { name: 'botanical', type: 'string' },
                { name: 'light' },
                { name: 'price', type: 'float' },
                // dates can be automatically converted by specifying dateFormat
                { name: 'availDate', mapping: 'availability', type: 'date', dateFormat: 'm/d/Y' },
                { name: 'indoor', type: 'bool' }
            ],
            proxy: {
                type: 'ajax',
                url: 'app/view/xmldatagrid/data.xml',

                reader: {
                    type: 'xml',
                    record: 'plant'
                }
            },
            autoLoad: true

        }
    }
});

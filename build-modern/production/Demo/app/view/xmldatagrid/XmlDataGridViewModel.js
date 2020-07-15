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

            model: 'Demo.view.xmldatagrid.XmlDataGridStoreModel',
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

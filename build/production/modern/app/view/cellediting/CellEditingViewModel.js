/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.app.ViewModel.html
 */
Ext.define('Demo.view.cellediting.CellEditingViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.cell-editing-viewmodel',

    stores: {
        plants: {
            fields: [
                // the 'name' below matches the tag name to read, except 'availDate'
                // which is mapped to the tag 'availability'
                { name: 'common', type: 'string' },
                { name: 'botanical', type: 'string' },
                { name: 'light' },
                { name: 'price', type: 'float' },
                // dates can be automatically converted by specifying dateFormat
                { name: 'availDate', mapping: 'availability', type: 'date', dateFormat: 'm/d/Y' },
                { name: 'indoor', type: 'bool' }
            ],
            autoLoad: true,

            proxy: {
                type: 'ajax',
                url: 'app/view/cellediting/data.json',
                reader: {
                    type: 'json'
                }
            }

        }

    }
});
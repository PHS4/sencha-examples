/**
 * https://docs.sencha.com/extjs/7.3.1/modern/Ext.app.ViewModel.html
 */
Ext.define('Demo.view.rowexpander.RowExpanderViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.row-expander-viewmodel',

    stores: {
        companies: {
            model: 'Demo.view.rowexpander.RowExpanderStoreModel',
            autoLoad: true,

            proxy: {
                type: 'ajax',
                url: 'app/view/rowexpander/data.json',
                reader: {
                    type: 'json'
                }
            }

        }
    }
});
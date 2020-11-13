/**
 * https://docs.sencha.com/extjs/7.3.1/modern/Ext.app.ViewModel.html
 */
Ext.define('Demo.view.rowoperations.RowOperationsViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.row-operations-viewmodel',
    stores: {
        companies: {
            model: 'Demo.view.rowoperations.RowOperationsStoreModel',
            sorters: {
                property: 'name',
                direction: 'ASC'
            },
            autoLoad: true,

            proxy: {
                type: 'ajax',
                url: 'app/view/rowoperations/data.json',
                reader: {
                    type: 'json'
                }
            }
        }
    }
});

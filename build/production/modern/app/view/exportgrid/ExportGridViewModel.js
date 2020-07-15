/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.app.ViewModel.html
 */
Ext.define('Demo.view.exportgrid.ExportGridViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.export-grid-viewmodel',
    stores: {
        companies: {
            model: 'Demo.view.exportgrid.ExportGridStoreModel',
            sorters: {
                property: 'name',
                direction: 'DESC'
            },
            autoLoad: true,

            proxy: {
                type: 'ajax',
                url: 'app/view/exportgrid/data.json',
                reader: {
                    type: 'json'
                }
            }
        }
    }
});

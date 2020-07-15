/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.app.ViewModel.html
 */
Ext.define('Demo.view.rowbody.RowBodyViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.row-body-viewmodel',

    stores: {
        companies: {
            model: 'Demo.view.rowbody.RowBodyStoreModel',
            autoLoad: true,

            proxy: {
                type: 'ajax',
                url: 'app/view/rowbody/data.json',
                reader: {
                    type: 'json'
                }
            }
        }
    }
});
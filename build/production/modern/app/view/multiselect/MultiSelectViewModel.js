/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.app.ViewModel.html
 */
Ext.define('Demo.view.multiselect.MultiSelectViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.multi-select-viewmodel',
    data: {
        name: 'Demo'
    },
    stores: {
        companies: {
            model: 'Demo.view.multiselect.MultiSelectStoreModel',
            autoLoad: true,

            proxy: {
                type: 'ajax',
                url: 'app/view/multiselect/data.json',
                reader: {
                    type: 'json'
                }
            }
        }
    }
});

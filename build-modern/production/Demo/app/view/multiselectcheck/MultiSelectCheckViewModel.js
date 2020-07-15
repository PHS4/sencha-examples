/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.app.ViewModel.html
 */
Ext.define('Demo.view.multiselectcheck.MultiSelectCheckViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.multi-select-check-viewmodel',
    data: {
        name: 'Demo'
    },
    stores: {
        companies: {
            model: 'Demo.view.multiselectcheck.MultiSelectCheckStoreModel',
            autoLoad: true,

            proxy: {
                type: 'ajax',
                url: 'app/view/multiselectcheck/data.json',
                reader: {
                    type: 'json'
                }
            }
        }
    }
});

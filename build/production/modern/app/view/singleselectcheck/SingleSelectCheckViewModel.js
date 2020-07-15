/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.app.ViewModel.html
 */
Ext.define('Demo.view.singleselectcheck.SingleSelectCheckViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.single-select-check-viewmodel',
    data: {
        name: 'Demo'
    },
    stores: {
        companies: {
            model: 'Demo.view.singleselectcheck.SingleSelectCheckStoreModel',
            autoLoad: true,

            proxy: {
                type: 'ajax',
                url: 'app/view/singleselectcheck/data.json',
                reader: {
                    type: 'json'
                }
            }
        }
    }

});

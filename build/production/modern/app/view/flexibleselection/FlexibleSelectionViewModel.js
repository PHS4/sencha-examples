/**
 * https://docs.sencha.com/extjs/7.3.1/modern/Ext.app.ViewModel.html
 */
Ext.define('Demo.view.flexibleselection.FlexibleSelectionViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.flexibleselection-grid-viewmodel',

    stores: {
        companies: {
            model: 'Demo.view.flexibleselection.FlexibleSelectionStoreModel',
            autoLoad: true,

            proxy: {
                type: 'ajax',
                url: 'app/view/flexibleselection/data.json',
                reader: {
                    type: 'json'
                }
            }
        }
    }
});

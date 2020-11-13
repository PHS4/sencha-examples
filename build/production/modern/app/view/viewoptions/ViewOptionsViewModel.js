/**
 * https://docs.sencha.com/extjs/7.3.1/modern/Ext.app.ViewModel.html
 */
Ext.define('Demo.view.viewoptions.ViewOptionsViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.view-options-viewmodel',
    stores: {
        companies: {
            model: 'Demo.view.viewoptions.ViewOptionsStoreModel',
            sorters: {
                property: 'name',
                direction: 'DESC'
            },
            autoLoad: true,

            proxy: {
                type: 'ajax',
                url: 'app/view/viewoptions/data.json',
                reader: {
                    type: 'json'
                }
            }
        }
    }
});

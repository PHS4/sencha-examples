/**
 * https://docs.sencha.com/extjs/7.3.1/modern/Ext.app.ViewModel.html
 */
Ext.define('Demo.view.multiselectclick.MultiSelectClickViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.multi-select-click-viewmodel',
    stores: {
        companies: {
            model: 'Demo.view.multiselectclick.MultiSelectClickStoreModel',
            sorters: {
                property: 'name',
                direction: 'ASC'
            },
            autoLoad: true,

            proxy: {
                type: 'ajax',
                url: 'app/view/multiselectclick/data.json',
                reader: {
                    type: 'json'
                }
            }
        }
    }
});

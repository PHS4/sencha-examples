/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.app.ViewModel.html
 */
Ext.define('Demo.view.singleselectclick.SingleSelectClickViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.single-select-click-viewmodel',
    stores: {
        companies: {
            model: 'Demo.view.singleselectclick.SingleSelectClickStoreModel',
            sorters: {
                property: 'name',
                direction: 'ASC'
            },
            autoLoad: true,

            proxy: {
                type: 'ajax',
                url: 'app/view/singleselectclick/data.json',
                reader: {
                    type: 'json'
                }
            }
        }
    }
});

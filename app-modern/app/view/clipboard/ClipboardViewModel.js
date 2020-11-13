/**
 * https://docs.sencha.com/extjs/7.3.1/modern/Ext.app.ViewModel.html
 */
Ext.define('Demo.view.clipboard.ClipboardViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.clipboard-grid-viewmodel',

    stores: {
        companies: {
            model: 'Demo.view.clipboard.ClipboardStoreModel',
            autoLoad: true,

            proxy: {
                type: 'ajax',
                url: 'app/view/clipboard/data.json',
                reader: {
                    type: 'json'
                }
            }
        }
    }
});

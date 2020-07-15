/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.app.ViewModel.html
 */
Ext.define('Demo.view.editablepopup.EditablePopupViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.editable-popup-viewmodel',
    data: {
        selection: null
    },
    stores: {
        companies: {
            model: 'Demo.view.editablepopup.EditablePopupStoreModel',
            autoLoad: true,

            proxy: {
                type: 'ajax',
                url: 'app/view/editablepopup/data.json',
                reader: {
                    type: 'json'
                }
            }
        }
    }
});

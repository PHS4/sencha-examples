Ext.define('Demo.view.editablepopup.EditablePopupStore', {
    extend: 'Ext.data.Store',
    alias: 'store.editablepopupstore',

    model: 'Demo.view.editablepopup.EditablePopupStoreModel',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url: 'app/view/editablepopup/data.json',
        reader: {
            type: 'json'
        }
    }
});

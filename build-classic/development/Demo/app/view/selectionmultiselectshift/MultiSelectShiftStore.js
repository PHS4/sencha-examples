Ext.define('Demo.view.selectionmultiselectshift.MultiSelectShiftStore', {
    extend: 'Ext.data.Store',
    alias: 'store.multiselectshiftstore',

    model: 'Demo.view.selectionmultiselectshift.MultiSelectShiftStoreModel',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url: 'app/view/selectionmultiselectshift/data.json',
        reader: {
            type: 'json'
        }
    }
});

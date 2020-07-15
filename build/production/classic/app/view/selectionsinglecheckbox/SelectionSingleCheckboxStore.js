Ext.define('Demo.view.selectionsinglecheckbox.SelectionSingleCheckboxStore', {
    extend: 'Ext.data.Store',
    alias: 'store.selectionsinglecheckboxstore' ,

    model: 'Demo.view.selectionsinglecheckbox.SelectionSingleCheckboxStoreModel',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url: 'app/view/selectionsinglecheckbox/data.json',
        reader: {
            type: 'json'
        }
    }
});

Ext.define('Demo.view.selectionmultiselectgroup.MultiSelectGroupStore', {
    extend: 'Ext.data.Store',
    alias: 'store.multiselectgroupstore' ,

    model: 'Demo.view.selectionmultiselectgroup.MultiSelectGroupStoreModel',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url: 'app/view/selectionmultiselectgroup/data.json',
        reader: {
            type: 'json'
        }
    }
});

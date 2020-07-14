Ext.define('Demo.view.dragndropgridtoform.DragnDropGridToFormStore', {
    extend: 'Ext.data.Store',
    alias: 'store.dragndropgridtoformstore' ,

    model: 'Demo.view.dragndropgridtoform.DragnDropGridToFormStoreModel',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url: 'app/view/dragndropgridtoform/data.json',
        reader: {
            type: 'json'
        }
    }
});

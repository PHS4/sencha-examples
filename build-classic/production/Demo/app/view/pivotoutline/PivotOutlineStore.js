Ext.define('Demo.view.pivotoutline.PivotOutlineStore', {
    extend: 'Ext.data.Store',
    alias: 'store.pivotoutlinestore' ,

    model: 'Demo.view.pivotoutline.PivotOutlineStoreModel',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url: 'app/view/pivotoutline/data.json',
        limitParam: null,
        reader: {
            type: 'json'
        }
    }
});

Ext.define('Demo.view.pivotmatrix.PivotMatrixStore', {
    extend: 'Ext.data.Store',
    alias: 'store.pivotmatrixstore' ,

    model: 'Demo.view.pivotmatrix.PivotMatrixStoreModel',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url: 'app/view/pivotmatrix/data.json',
        reader: {
            type: 'json'
        }
    }
});

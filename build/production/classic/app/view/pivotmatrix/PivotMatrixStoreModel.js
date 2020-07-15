Ext.define('Demo.view.pivotmatrix.PivotMatrixStoreModel', {
    extend: 'Ext.data.Model',

    fields: ['id'],

    proxy: {
        type: 'ajax'
    }
});

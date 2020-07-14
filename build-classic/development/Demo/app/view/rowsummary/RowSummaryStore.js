Ext.define('Demo.view.rowsummary.RowSummaryStore', {
    extend: 'Ext.data.Store',
    alias: 'store.rowsummarystore',

    model: 'Demo.view.rowsummary.RowSummaryStoreModel',
    autoLoad: true,
    groupField: 'project',
    proxy: {
        type: 'ajax',
        url: 'app/view/rowsummary/data.json',
        reader: {
            type: 'json'
        }
    }
});

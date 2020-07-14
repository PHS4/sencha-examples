Ext.define('Demo.view.rowsummary.RowSummaryStoreModel', {
    extend: 'Ext.data.Model',
    idProperty: 'taskId',
    fields: [
        { name: 'projectId', type: 'int' },
        { name: 'project', type: 'string' },
        { name: 'taskId', type: 'int' },
        { name: 'description', type: 'string' },
        { name: 'estimate', type: 'float' },
        { name: 'rate', type: 'float' },
        { name: 'cost', type: 'float' },
        { name: 'due', type: 'date', dateFormat: 'm/d/Y' }
    ],

    proxy: {
        type: 'ajax',
        url: 'app/view/rowsummary/data.json',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});
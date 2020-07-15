Ext.define('Demo.view.export.ExportStoreModel', {
    extend: 'Ext.data.Model',
    
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'company'
    }, {
        name: 'price',
        type: 'float'
    }, {
        name: 'date',
        type: 'date',
        dateFormat: 'Y-m-d'
    }, {
        name: 'visible',
        type: 'boolean'
    }, {
        name: 'size'
    }]    
});

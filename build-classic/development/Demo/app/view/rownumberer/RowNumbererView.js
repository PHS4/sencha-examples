
Ext.define('Demo.view.rownumberer.RowNumbererView',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.rownumberer.RowNumbererViewController',
        'Demo.view.rownumberer.RowNumbererViewModel',
        'Demo.view.rownumberer.RowNumbererStore',
        'Demo.view.rownumberer.RowNumbererStoreModel'
    ],

    xtype: 'numberer-numberedrowgrid',
    controller: 'numberer-numberedrowgrid',
    viewModel: {
        type: 'numberer-numberedrowgrid'
    },

    iconCls: 'x-fa fa-list-ol',
    category: 'Row Operations',
    title: 'Row Numberer',

    columnLines: true,
    store: { type:  'rownumbererstore' },

    columns: [{
        xtype: 'rownumberer'
    }, {
        text: 'Company',
        dataIndex: 'name',
        flex: 1
    }, {
        text: 'Description',
        dataIndex: 'desc',
        flex: 2
    }, {
        text: 'Price',
        dataIndex: 'price',
        formatter: 'usMoney',
        width: 95,
    }, {
        text: 'Change',
        dataIndex: 'priceChange',
        width: 80
    }, {
        text: '% Change',
        dataIndex: 'priceChangePct',
        width: 100,
    }, {
        text: 'Last Updated',
        dataIndex: 'priceLastChange',
        formatter: 'date("m/d/Y")',
        width: 115,
    }]
});

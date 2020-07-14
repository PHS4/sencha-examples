
Ext.define('Demo.view.selectionsingle.SelectionSingleView',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.selectionsingle.SelectionSingleViewController',
        'Demo.view.selectionsingle.SelectionSingleViewModel',
        'Demo.view.selectionsingle.SelectionSingleStore',
        'Demo.view.selectionsingle.SelectionSingleStoreModel'
    ],

    xtype: 'singleselect-singlerowgrid',
    controller: 'singleselect-singlerowgrid',
    viewModel: {
        type: 'singleselect-singlerowgrid'
    },

    category: 'Selection',
    title: 'Single Select: Click',
    description: 'Allows only a single row selection',
    store: { type: 'selectionsinglestore' },
    columnLines: true,

    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.selection.Rows.html
     */
    selModel: {
        selType: 'rowmodel',
        mode: 'SINGLE'
    },

    columns: [{
        text: "Company",
        dataIndex: 'name',
        flex: 1
    }, {
        text: "Price",
        dataIndex: 'price',
        width: 100,
        formatter: 'usMoney'
    }, {
        text: "Change",
        width: 100,
        dataIndex: 'priceChange'
    }, {
        text: "% Change",
        width: 100,
        dataIndex: 'priceChangePct'
    }, {
        text: "Last Updated",
        width: 120,
        dataIndex: 'priceLastChange',
        formatter: 'date("m/d/Y")'
    }]
});

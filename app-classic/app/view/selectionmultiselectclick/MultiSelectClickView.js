
Ext.define('Demo.view.selectionmultiselectclick.MultiSelectClickView',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.selectionmultiselectclick.MultiSelectClickViewController',
        'Demo.view.selectionmultiselectclick.MultiSelectClickViewModel',
        'Demo.view.selectionmultiselectclick.MultiSelectClickStore',
        'Demo.view.selectionmultiselectclick.MultiSelectClickStoreModel',
    ],

    xtype: 'multiselectclick-rowclickgrid',
    controller: 'multiselectclick-rowclickgrid',
    viewModel: {
        type: 'multiselectclick-rowclickgrid'
    },

    category: 'Selection',
    description: 'Select/Deselect rows by holding CTL or CMD and clicking on any of the rows below.',
    title: 'Multi Click',
    iconCls: 'x-fa fa-check',
    

    store: { type: 'multiselectclickstore' },
    columnLines: true,

    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.grid.selection.Rows.html
     */
    selModel: {
        selType: 'rowmodel',
        mode: 'MULTI'
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
    }],

    listeners: {
        select: 'onSelection'
    }
});

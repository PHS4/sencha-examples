/**
 * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.Grid.html
 */
Ext.define('Demo.view.multiselect.MultiSelectView', {
    extend: 'Ext.grid.Grid',

    requires: [
        'Demo.view.multiselect.MultiSelectViewController',
        'Demo.view.multiselect.MultiSelectViewModel',
        'Demo.view.multiselect.MultiSelectStoreModel',
    ],

    xtype: 'multi-select',
    controller: 'multiselect',
    viewModel: {
        type: 'multi-select-viewmodel'
    },

    category: 'Selection',
    title: 'Multi Click',
    description: 'Select/Deselect rows by holding CTL or CMD and clicking on any of the rows below.',
    iconCls: 'x-fa fa-hand-pointer',

    bind: { store: '{companies}' },
    columnLines: true,

    //Allow multiple rows to be selected
    selectable: {
        mode: 'multi'
    },

    /**
     * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.Grid.html#cfg-columns
     */
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

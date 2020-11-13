/**
 * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.Grid.html
 */
Ext.define('Demo.view.groupedcolumns.GroupedColumnsView', {
    extend: 'Ext.grid.Grid',

    requires: [
        'Demo.view.groupedcolumns.GroupedColumnsViewController',
        'Demo.view.groupedcolumns.GroupedColumnsViewModel',
        'Demo.view.groupedcolumns.GroupedColumnsStoreModel',
    ],

    xtype: 'grouped-columns',
    controller: 'groupedcolumns',
    viewModel: {
        type: 'grouped-columns-viewmodel'
    },

    category: 'Column Operations',
    title: 'Grouped Columns',
    description: 'Grouped Columns',
    iconCls: 'x-fa fa-table',

    columnLines: true,

    bind: {
        store: '{companies}'
    },

    /**
    * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.Grid.html#cfg-columns
    */
    columns: [{
        text: 'Company',
        dataIndex: 'name',
        flex: 1,
        sortable: true
    }, {
        text: 'Stock Price',
        columns: [{
            text: 'Price',
            dataIndex: 'price',
            width: 75,
            sortable: true,
            formatter: 'usMoney'
        }, {
            text: 'Change',
            dataIndex: 'priceChange',
            width: 80,
            sortable: true,
            cell: {
                encodeHtml: false
            },
            renderer: 'renderChange'
        }, {
            text: '% Change',
            dataIndex: 'priceChangePct',
            cell: {
                encodeHtml: false
            },
            width: 100,
            sortable: true,
            renderer: 'renderPercent'
        }]
    }, {
        text: 'Last Updated',
        dataIndex: 'priceLastChange',
        width: 115,
        sortable: true,
        formatter: 'date("m/d/Y")'
    }],
    signTpl: '<span style="' +
        'color:{value:sign("red", "green")}"' +
        '>{text}</span>'
});

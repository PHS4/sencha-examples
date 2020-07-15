/**
 * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.Panel.html
 */
Ext.define('Demo.view.columngroup.ColumnGroupView',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.columngroup.ColumnGroupViewController',
        'Demo.view.columngroup.ColumnGroupViewModel',
        'Demo.view.columngroup.ColumnGroupStore',
        'Demo.view.columngroup.ColumnGroupStoreModel',
    ],

    xtype: 'column-columngroupview',
    controller: 'column-columngroupview',
    viewModel: {
        type: 'column-columngroupview'
    },

    category: 'Column Operations',
    title: 'Grouped Columns',
    iconCls: 'x-fa fa-table',

    columnLines: true,
    signTpl: '<span style="color:{value:sign(\'"#cf4c35"\',\'"#73b51e"\')}">{text}</span>',

    store: {
        type: 'columngroupstore',
        sorters: {
            property: 'name',
            direction: 'DESC'
        }
    },

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
            renderer: 'renderChange'
        }, {
            text: '% Change',
            dataIndex: 'priceChangePct',

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
    }]
});

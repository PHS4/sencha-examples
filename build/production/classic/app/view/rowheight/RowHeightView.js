/**
 * https://docs.sencha.com/extjs/7.3.1/classic/Ext.app.ViewModel.html
 */
Ext.define('Demo.view.rowheight.RowHeightView',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.rowheight.RowHeightViewController',
        'Demo.view.rowheight.RowHeightViewModel',
        'Demo.view.rowheight.RowHeightStore',
        'Demo.view.rowheight.RowHeightStoreModel',
    ],

    xtype: 'rowheightview',
    controller: 'rowheightview',
    viewModel: {
        type: 'rowheightview'
    },

    iconCls: 'x-fa fa-text-height',
    title: 'Variable Row Height',
    category: 'Row Operations',
    description: 'Allow rows with varied height.',

    store: { type:  'rowheightstore' },

    multiSelect: true,
    headerBorders: true,
    gridLines: true,
    columnLines: true,
    frame: false,
    
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.panel.Table.html#cfg-viewConfig
     */
    viewConfig: {
        enableTextSelection: true,
    },

    columns: [{
        text: 'Company',
        dataIndex: 'name',
        flex: 1
    }, {
        text: 'Description',
        dataIndex: 'desc',
        flex: 2,
        variableRowHeight: true,
        cellWrap: true,
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

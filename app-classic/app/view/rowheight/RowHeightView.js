/**
 * https://docs.sencha.com/extjs/7.2.0/classic/Ext.app.ViewModel.html
 */
Ext.define('Demo.view.rowheight.RowHeightView',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.rowheight.RowHeightView',
        'Demo.view.rowheight.RowHeightView',
        'Demo.view.rowheight.RowHeightView',
        'Demo.view.rowheight.RowHeightView',
    ],

    xtype: 'rowheightview',
    controller: 'rowheightview',
    viewModel: {
        type: 'rowheightview'
    },

    category: 'Row',
    title: 'Variable Row Height',
    iconCls: 'x-fa fa-text-height',
    store: { type:  'companies' },

    multiSelect: true,
    headerBorders: true,
    gridLines: true,
    columnLines: true,
    frame: false,
    
    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.panel.Table.html#cfg-viewConfig
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

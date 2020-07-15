
Ext.define('Demo.view.columnoverflow.OverflowView',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.columnoverflow.OverflowViewController',
        'Demo.view.columnoverflow.OverflowViewModel',
        'Demo.view.columnoverflow.OverflowStore',
        'Demo.view.columnoverflow.OverflowStoreModel',
    ],

    xtype: 'overflow-overflowtooltipgrid',
    controller: 'overflow-overflowtooltipgrid',
    description: 'Hover over a cell to view the full content in a tooltip.',
    viewModel: {
        type: 'overflow-overflowtooltipgrid'
    },
    
    
    category: 'Column Operations',
    title: 'Overflow Tooltips',
    iconCls: 'x-fa fa-check',

    store: { type:  'columnoverflowstore' },
    multiSelect: true,
    headerBorders: true,
    gridLines: true,
    columnLines: true,
    frame: false,

    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.Panel.html#cfg-columns
     */
    columns: {
        defaults: {
            // apply a renderer to all cells so the tooltip 
            // attribute is appended to the cell.
            renderer: 'renderTooltip'
        },
        items: [{
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
            width: 95
        }, {
            text: 'Change',
            dataIndex: 'priceChange',
            width: 80
        }, {
            text: '% Change',
            dataIndex: 'priceChangePct',
            xtype: 'templatecolumn',
            tpl: '{priceChangePct}%',
            width: 100
        }, {
            text: 'Last Updated',
            dataIndex: 'priceLastChange',
            formatter: 'date("m/d/Y")',
            width: 115
        }]
    }
});

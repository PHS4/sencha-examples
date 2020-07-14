/**
 * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.Panel.html
 */
Ext.define('Demo.view.columnmenu.ColumnMenuView',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.columnmenu.ColumnMenuViewModel',
        'Demo.view.columnmenu.ColumnMenuViewController',
        'Demo.view.columnmenu.ColumnMenuStore',
        'Demo.view.columnmenu.ColumnMenuStoreModel',
    ],

    xtype: 'column-columnmenuview',
    controller: 'column-columnmenuview',
    viewModel: {
        type: 'column-columnmenuview'
    },

    category: 'Column Operations',
    description: 'Click on the column\'s menu to see custom menu items added.',
    
    title: 'Custom Column Menu',
    iconCls: 'x-fa fa-caret-square-down',

    store: {
        type: 'columnmenustore'
    },

    // headerBorders: true,
    // gridLines: true,
    // columnLines: true,
    // frame: false,

    columns: [{
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

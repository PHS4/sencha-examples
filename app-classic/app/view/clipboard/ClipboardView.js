/**
 * https://docs.sencha.com/extjs/7.3.1/classic/Ext.grid.Panel.html
 */
Ext.define('Demo.view.clipboard.ClipboardView',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.clipboard.ClipboardViewController',
        'Demo.view.clipboard.ClipboardViewModel',
        'Demo.view.clipboard.ClipboardStore',
        'Demo.view.clipboard.ClipboardStoreModel'
    ],

    xtype: 'clipboard-clipboardgrid',
    controller: 'clipboard-clipboardgrid',
    viewModel: {
        type: 'clipboard-clipboardgrid'
    },

    iconCls: 'x-fa fa-clipboard',
    title: 'Copy and Paste',
    category: 'Editing',
    description: 'Click and Drag Cells or Rows to make a Selection then use Copy and Paste Keyboard Commands',

    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.data.Store.html
     */
    store: {
        type: 'clipboardstore'
    },

    plugins: [{
        /**
         * https://docs.sencha.com/extjs/7.3.1/classic/Ext.grid.plugin.CellEditing.html
         */
        ptype: 'cellediting'
    }, {
        /**
         * https://docs.sencha.com/extjs/7.3.1/classic/Ext.grid.plugin.Clipboard.html
         */
        ptype: 'clipboard'
    }],

    selModel: {
        /**
         * https://docs.sencha.com/extjs/7.3.1/classic/Ext.grid.selection.SpreadsheetModel.html
         */
        type: 'spreadsheet'
    },

    /**
     * https://docs.sencha.com/extjs/7.3.1/guides/tutorials/grid_tutorial/basics/selection_model/configuration.html
     */
    // selectable: {
    //     mode: 'multi',    // 'single' 'multi'
    //     drag: true,       // false true
    //     cells: true,      // false true
    //     columns: true,    // false true
    //     rows: true,       // true false
    //     checkbox: true,   // false true 'only'
    //     extensible: false // false true 'x' 'y'
    // },

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

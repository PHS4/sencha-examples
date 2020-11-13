/**
 * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.Grid.html
 */
Ext.define('Demo.view.viewoptions.ViewOptionsView', {
    extend: 'Ext.grid.Grid',

    requires: [
        'Demo.view.viewoptions.ViewOptionsViewController',
        'Demo.view.viewoptions.ViewOptionsViewModel',
        'Demo.view.viewoptions.ViewOptionsStoreModel',
        'Ext.grid.plugin.ViewOptions'
    ],

    xtype: 'view-options',
    controller: 'viewoptions',
    viewModel: {
        type: 'view-options-viewmodel'
    },

    category: 'Column Operations',
    title: 'View Options',
    description: 'The view options plugin displays a window with options to show, hide, reorder columns, or group rows. Long press on a column header to show the options.',
    iconCls: 'x-fa fa-glasses',

    columnLines: true,

    plugins: {
        /**
         * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.plugin.ViewOptions.html
         */
        gridviewoptions: true
    },

    bind: {
        store: '{companies}'
    },

    /**
     * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.Grid.html#cfg-columns
     */
    columns: [{
        text: 'Company',
        flex: 1,
        minWidth: 100,
        dataIndex: 'name'
    }, {
        text: 'Price',
        width: 75,
        dataIndex: 'price',
        formatter: 'usMoney'
    }, {
        text: 'Change',
        width: 90,
        dataIndex: 'change',
        renderer: 'renderChange',
        cell: {
            encodeHtml: false
        }
    }, {
        text: '% Change',
        width: 100,
        dataIndex: 'pctChange',
        renderer: 'renderPercent',
        cell: {
            encodeHtml: false
        }
    }, {
        text: 'Description',
        flex: 1,
        minWidth: 100,
        dataIndex: 'desc'
    }],
    signTpl: '<span style="' +
        'color:{value:sign("red", "green")}"' +
        '>{text}</span>'
});

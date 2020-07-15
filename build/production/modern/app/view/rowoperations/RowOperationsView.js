/**
 * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.Panel.html
 */
Ext.define('Demo.view.rowoperations.RowOperationsView', {
    extend: 'Ext.grid.Grid',

    requires: [
        'Demo.view.rowoperations.RowOperationsViewController',
        'Demo.view.rowoperations.RowOperationsViewModel',
        'Demo.view.rowoperations.RowOperationsStoreModel',
        'Ext.grid.plugin.RowOperations'
    ],

    xtype: 'row-operations',

    controller: 'rowoperations',

    viewModel: {
        type: 'row-operations-viewmodel'
    },

    category: 'Row Operations',
    title: 'Row Operations',
    iconCls: 'x-fa fa-check',
    description: 'The RowOperations grid plugin allows for multiple rows to be selected and manipulated by adding buttons to the grid header.',

    itemId: 'operations-grid',
    plugins: {
        /**
         * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.plugin.RowOperations.html
         */
        rowoperations: {
            // This config replaces the default "Delete" button
            // provided by the plugin.
            operation: {
                text: 'Operations',
                ui: 'alt',

                menu: [{
                    text: 'Archive',
                    iconCls: 'x-fa fa-archive',
                    handler: 'onArchive'
                }, {
                    text: 'Delete',
                    iconCls: 'x-fa fa-trash',
                    handler: 'onDelete'
                }]
            }
        }
    },

    columnLines: true,

    bind: {
        store: '{companies}'
    },
    /**
     * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.Grid.html#cfg-columns
     */
    columns: [{
        text: 'Company',
        flex: 1,
        minWidth: 100,
        dataIndex: 'name'
    }, {
        text: 'Price',
        width: 90,
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
        text: 'Last Updated',
        width: 125,
        dataIndex: 'lastChange',
        formatter: 'date("m/d/Y")'
    }],
    signTpl: '<span style="' +
        'color:{value:sign("red", "green")}"' +
        '>{text}</span>'
});

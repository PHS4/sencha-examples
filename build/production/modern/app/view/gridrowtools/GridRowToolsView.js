/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.Grid.html
 */
Ext.define('Demo.view.gridrowtools.GridRowToolsView', {
    extend: 'Ext.grid.Grid',

    requires: [
        'Demo.view.gridrowtools.GridRowToolsViewController',
        'Demo.view.gridrowtools.GridRowToolsViewModel',
        'Demo.view.gridrowtools.GridRowToolsStoreModel',
    ],

    xtype: 'grid-row-tools',

    controller: 'gridrowtools',

    viewModel: {
        type: 'grid-row-tools-viewmodel'
    },

    category: 'Row Operations',
    title: 'Grid Row Tools',
    description: 'Add a button or "tool" in a grid row.',
    iconCls: 'x-fa fa-cog',

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
        width: 44,
        cell: {
            /**
             * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.cell.Cell.html#cfg-tools
             */
            tools: {
                // Tools can also be configured using an object.
                gear: {
                    handler: 'onGear',
                    //tooltip: 'Change settings...',

                    // Cells offer a start or end "zone" for tools:
                    zone: 'start',


                }
            }
        }
    }],
    signTpl: '<span style="' +
        'color:{value:sign("red", "green")}"' +
        '>{text}</span>'
});

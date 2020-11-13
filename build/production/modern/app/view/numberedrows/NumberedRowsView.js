/**
 * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.Grid.html
 */
Ext.define('Demo.view.numberedrows.NumberedRowsView', {
    extend: 'Ext.grid.Grid',

    requires: [
        'Demo.view.numberedrows.NumberedRowsViewModel',
        'Demo.view.numberedrows.NumberedRowsViewController'

    ],

    xtype: 'numbered-rows',
    controller: 'numberedrows',
    viewModel: {
        type: 'numbered-rows-viewmodel'
    },

    iconCls: 'x-fa fa-list-ol',
    category: 'Row Operations',
    title: 'Numbered Rows',
    description: 'The row number is displayed in a column in the grid.',

    columnLines: true,

    bind: {
        store: '{plants}'
    },

    /**
     * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.Grid.html#cfg-columns
     */
    columns: [
        // Row Numberer
        {
            xtype: 'rownumberer'

        }, {
            text: 'Plant',
            flex: 1,
            dataIndex: 'common'
        }, {
            text: 'Light',
            width: 110,
            dataIndex: 'light'
        }, {
            text: 'Price',
            width: 70,
            formatter: 'usMoney',
            dataIndex: 'price'
        }, {
            xtype: 'datecolumn',
            text: 'Available',
            format: 'M d, Y',
            width: 110,
            dataIndex: 'availDate'
        }]
});
/**
 * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.Grid.html
 */
Ext.define('Demo.view.rowdragdrop.RowDragDropView', {
    extend: 'Ext.grid.Grid',

    requires: [
        'Demo.view.rowdragdrop.RowDragDropViewModel',
        'Demo.view.rowdragdrop.RowDragDropViewController',
        'Ext.grid.plugin.RowDragDrop'

    ],

    xtype: 'row-drag-drop',
    controller: 'rowdragdrop',
    viewModel: {
        type: 'row-drag-drop-viewmodel'
    },

    iconCls: 'x-fa fa-hand-rock',
    category: 'Drag and Drop',
    title: 'Row Drag and Drop',
    description: 'Reorder a single row or multiple rows with drag and drop.',

    bind: {
        store: '{plants}'
    },

    plugins: {
        /**
         * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.plugin.RowDragDrop.html
         */
        gridrowdragdrop: {
            dragText: 'Drag and drop to reorganize'
        }
    },

    /**
     * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.Grid.html#cfg-columns
     */
    columns: [{
        text: 'Plant',
        width: 110,
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
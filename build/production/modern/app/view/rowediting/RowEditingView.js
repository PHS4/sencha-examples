/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.locked.Grid.html
 */
Ext.define('Demo.view.rowediting.RowEditingView', {
    extend: 'Ext.grid.locked.Grid',
    requires: [
        'Demo.view.rowediting.RowEditingViewController',
        'Demo.view.rowediting.RowEditingViewModel',
        'Ext.grid.rowedit.Plugin'
    ],

    xtype: 'row-editing',
    controller: 'rowediting',
    viewModel: {
        type: 'row-editing-viewmodel'
    },
    iconCls: 'x-fa fa-edit',
    category: 'Editing',
    title: 'Row Editing',
    description: 'Add a small floating dialog to be shown for the row to be edited. Each editable column will show a field for editing. There are configurable buttons to save or cancel the edit. Double tap a row to start row editing.',

    rowNumbers: true,
    markDirty: true,

    plugins: {
        /**
         * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.rowedit.Plugin.html
         */
        rowedit: {
            autoConfirm: false
        }
    },

    bind: {
        store: '{plants}'
    },

    /**
     * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.locked.Grid.html#cfg-columns
     */
    columns: [{
        text: 'Common Name',
        flex: 1,
        width: 200,
        dataIndex: 'common',
        editable: true,
        locked: true
    }, {
        text: 'Light',
        width: 125,
        dataIndex: 'light',
        editable: true,
        editor: {
            xtype: 'selectfield',
            options: [
                'Shade',
                'Mostly Shady',
                'Sun or Shade',
                'Mostly Sunny',
                'Sunny'
            ]
        }
    }, {
        text: 'Price',
        width: 100,
        formatter: 'usMoney',
        dataIndex: 'price',
        editable: true
    }, {
        xtype: 'datecolumn',
        text: 'Available',
        width: 125,
        dataIndex: 'availDate',
        editable: true
    }, {
        text: 'Indoor?',
        xtype: 'checkcolumn',
        headerCheckbox: true,
        dataIndex: 'indoor'
    }]
});

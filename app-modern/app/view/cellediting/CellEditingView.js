/**
*  https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.Grid.html
*/
Ext.define('Demo.view.cellediting.CellEditingView', {
    extend: 'Ext.grid.Grid',

    requires: [
        'Demo.view.cellediting.CellEditingViewModel',
        'Demo.view.cellediting.CellEditingViewController',
        'Ext.grid.plugin.CellEditing'
    ],

    xtype: 'cell-editing',
    controller: 'cellediting',
    viewModel: {
        type: 'cell-editing-viewmodel'
    },

    iconCls: 'x-fa fa-edit',
    category: 'Editing',
    title: 'Cell Editing',
    description: 'Edit grid cell data. Double click/tap a grid cell to enable editing.',

    columnLines: true,
    markDirty: true,

    /**
     * https://docs.sencha.com/extjs/7.3.1/modern/Ext.ClassManager.html#cfg-platformConfig
     */
    platformConfig: {
        desktop: {
            plugins: {
                /**
                 * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.plugin.CellEditing.html
                 */
                gridcellediting: true
            }
        },

        '!desktop': {
            plugins: {
                /**
                 * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.plugin.Editable.html
                 */
                grideditable: true
            }
        }
    },
    selectable: {
        rows: false,
        cells: true
    },
    bind: {
        store: '{plants}'
    },

    /**
     * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.column.Column.html
     */
    columns: [{
        text: 'Plant',
        flex: 1,
        dataIndex: 'common',
        editable: true
    }, {
        text: 'Light',
        width: 110,
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
        width: 70,
        formatter: 'usMoney',
        dataIndex: 'price',
        editable: true
    }, {
        xtype: 'datecolumn',
        text: 'Available',
        format: 'M d, Y',
        width: 110,
        dataIndex: 'availDate',
        editor: {
            allowBlur: false,
            field: {
                xtype: 'datepickerfield'
            }
        }
    }, {
        text: 'Indoor?',
        xtype: 'checkcolumn',
        headerCheckbox: true,
        dataIndex: 'indoor'
    }]
});
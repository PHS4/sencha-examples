/**
 * https://docs.sencha.com/extjs/7.3.1/classic/Ext.grid.Panel.html
 */
Ext.define('Demo.view.multiselectcheck.MultiSelectCheckView', {
    extend: 'Ext.grid.Grid',

    requires: [
        'Demo.view.multiselectcheck.MultiSelectCheckViewController',
        'Demo.view.multiselectcheck.MultiSelectCheckViewModel',
        'Demo.view.multiselectcheck.MultiSelectCheckStoreModel',
    ],

    xtype: 'multi-select-check',
    controller: 'multiselectcheck',
    viewModel: {
        type: 'multi-select-check-viewmodel'
    },

    category: 'Selection',
    title: 'Multi Select Checkbox',
    iconCls: 'x-fa fa-tasks',
    description: 'Add a column of check boxes to the grid and allow multiple rows to be checked.',

    bind: {
        store: '{companies}'
    },

    /**
     * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.Grid.html#cfg-columns
     */
    columns: [
        {
            text: '',
            xtype: 'checkcolumn',
            headerCheckbox: true,
            width: 80,
            dataIndex: 'check'
        },
        {
            text: "Company",
            dataIndex: 'name',
            flex: 1
        }, {
            text: "Price",
            dataIndex: 'price',
            width: 80,
            formatter: 'usMoney'
        }, {
            text: "Change",
            width: 80,
            dataIndex: 'priceChange'
        }, {
            text: "% Change",
            width: 80,
            dataIndex: 'priceChangePct'
        }],

    listeners: {
        select: 'onSelection'
    }
});

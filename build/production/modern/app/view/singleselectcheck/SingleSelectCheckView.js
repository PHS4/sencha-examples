
/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.Grid.html
 */
Ext.define('Demo.view.singleselectcheck.SingleSelectCheckView', {
    extend: 'Ext.grid.Grid',

    requires: [
        'Demo.view.singleselectcheck.SingleSelectCheckViewController',
        'Demo.view.singleselectcheck.SingleSelectCheckViewModel',
        'Demo.view.singleselectcheck.SingleSelectCheckStoreModel',
    ],

    xtype: 'single-select-check',
    controller: 'singleselectcheck',
    viewModel: {
        type: 'single-select-check-viewmodel'
    },

    category: 'Selection',
    title: 'Single Select Checkbox',
    iconCls: 'x-fa fa-check-circle',
    description: 'Add a column of check boxes to the grid and only allow one row to be checked at a time.',

    bind: { store: '{companies}' },


    columns: [
        /**
        * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.column.Check.html
        */
        {
            /**
             * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.column.Check.html
             */
            xtype: 'checkcolumn',
            text: '',
            headerCheckbox: false,
            width: 80,
            dataIndex: 'check',
            listeners: {
                checkchange: 'onCheck'
            }
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
        }]
});

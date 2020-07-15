
Ext.define('Demo.view.selectionsinglecheckbox.SelectionSingleCheckboxView',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.selectionsinglecheckbox.SelectionSingleCheckboxViewController',
        'Demo.view.selectionsinglecheckbox.SelectionSingleCheckboxViewModel',
        'Demo.view.selectionsinglecheckbox.SelectionSingleCheckboxStore',
        'Demo.view.selectionsinglecheckbox.SelectionSingleCheckboxStoreModel',
    ],

    xtype: 'singleselectcheck-rowcheckboxgrid',
    controller: 'singleselectcheck-rowcheckboxgrid',
    viewModel: {
        type: 'singleselectcheck-rowcheckboxgrid'
    },
    
    category: 'Selection',
    title: 'Single Select: Check',
    iconCls: 'x-fa fa-check-circle',
    description: 'Allows only a single row selection using a checkbox column',

    store: { type: 'selectionsinglecheckboxstore' },

    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.selection.Rows.html
     */
    selModel: {
        selType: 'checkboxmodel',
        mode: 'SINGLE'
    },

    columns: [{
        text: "Company",
        dataIndex: 'name',
        flex: 1
    }, {
        text: "Price",
        dataIndex: 'price',
        width: 100,
        formatter: 'usMoney'
    }, {
        text: "Change",
        width: 100,
        dataIndex: 'priceChange'
    }, {
        text: "% Change",
        width: 100,
        dataIndex: 'priceChangePct'
    }, {
        text: "Last Updated",
        width: 120,
        dataIndex: 'priceLastChange',
        formatter: 'date("m/d/Y")'
    }]
});

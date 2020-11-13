/**
 * https://docs.sencha.com/extjs/7.3.1/classic/Ext.grid.Panel.html
 */
Ext.define('Demo.view.selectionmultiselectcheck.SelectionMultiCheckboxView', {
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.selectionmultiselectcheck.SelectionMultiCheckboxViewController',
        'Demo.view.selectionmultiselectcheck.SelectionMultiCheckboxViewModel',
        'Demo.view.selectionmultiselectcheck.SelectionMultiCheckboxStore',
        'Demo.view.selectionmultiselectcheck.SelectionMultiCheckboxStoreModel',
    ],

    xtype: 'multiselectcheck-rowcheckboxgrid',
    controller: 'multiselectcheck-rowcheckboxgrid',
    viewModel: {
        type: 'multiselectcheck-rowcheckboxgrid'
    },

    iconCls: 'x-fa fa-tasks',
    title: 'Multi Checkbox',
    category: 'Selection',
    description: 'Select/Deselect rows by holding CTL or CMD and clicking on any of the rows below.',

    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.selection.Model.html
     */
    selType: 'checkboxmodel',

    store: { type: 'multiselectclickstore' },
    
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
    }],

    listeners: {
        select: 'onSelection'
    }
});

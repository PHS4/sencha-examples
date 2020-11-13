/**
 * https://docs.sencha.com/extjs/7.3.1/classic/Ext.grid.Panel.html
 */
Ext.define('Demo.view.editablepopup.EditablePopupView',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.editablepopup.EditablePopupViewController',
        'Demo.view.editablepopup.EditablePopupViewModel',
        'Demo.view.editablepopup.EditablePopupStore',
        'Demo.view.editablepopup.EditablePopupStoreModel',
    ],

    xtype: 'editable-editablepopupgrid',
    controller: 'editable-editablepopupgrid',
    viewModel: {
        type: 'editable-editablepopupgrid'
    },
    

    category: 'Editing',
    title: 'Popup Editing',
    iconCls: 'x-fa fa-window-restore',
    description: 'Show a form populated by data from the record. Edits made can be seen in the row.',

    store: { type: 'editablepopupstore' },
    headerBorders: true,
    gridLines: true,
    columnLines: true,
    frame: false,

    /**
     * specify the name of the property to bind the selection to in the ViewModel.
     * In this case we are calling it `{selection}`.
     */
    bind: {
        selection: '{selection}'
    },

    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.grid.Panel.html#cfg-columns
     */
    columns: [{
        text: 'Company',
        dataIndex: 'name',
        flex: 1
    }, {
        text: 'Description',
        dataIndex: 'desc',
        flex: 1
    }, {
        text: 'Price',
        dataIndex: 'price',
        formatter: 'usMoney',
        width: 95,
    }, {
        text: 'Change',
        dataIndex: 'priceChange',
        width: 80,
    }, {
        text: '% Change',
        dataIndex: 'priceChangePct',
        width: 100,
    }, {
        text: 'Last Updated',
        dataIndex: 'priceLastChange',
        formatter: 'date("m/d/Y")',
        width: 115,
    }]
});

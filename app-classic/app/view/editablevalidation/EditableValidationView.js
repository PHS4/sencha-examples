/**
 * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.Panel.html
 */
Ext.define('Demo.view.editablevalidation.EditableValidationView',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.editablevalidation.EditableValidationViewController',
        'Demo.view.editablevalidation.EditableValidationViewModel',
        'Demo.view.editablevalidation.EditableValidationStore',
        'Demo.view.editablevalidation.EditableValidationStoreModel',
    ],

    xtype: 'editing-validation-validategrid',
    controller: 'editing-validation-validategrid',
    viewModel: {
        type: 'editing-validation-validategrid'
    },

    category: 'Editing',
    title: 'Validation Editing',
    iconCls: 'x-fa fa-edit',

    store: { 
        type: 'editablevalidationstore' 
    },
    
    headerBorders: true,
    gridLines: true,
    columnLines: true,
    frame: true,

    viewConfig: {},

    /**
     * Functionality to add onto a grid.
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.plugin.RowEditing.html
     */
    plugins: [{
        ptype: 'rowediting',
        autoUpdate: true,
        clicksToEdit: 2,
        listeners: {
            beforeedit: 'onBeforeEdit',
            edit: 'onEdit',
            validateedit: 'onValidateEdit',
            canceledit: 'onCancelEdit'
        }
    }],

    /**
     * Define a selection as the row (record) row or a cell (single value).
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.selection.Model.html
     */
    selModel: 'rowmodel',

    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.Panel.html#cfg-columns
     */
    columns: [{
        text: 'Company',
        dataIndex: 'name',
        flex: 1,
        editor: 'textfield'
    }, {
        text: 'Description',
        dataIndex: 'desc',
        flex: 1,
        editor: 'textareafield'
    }, {
        text: 'Price',
        dataIndex: 'price',
        formatter: 'usMoney',
        width: 95,
        editor: 'numberfield'
    }, {
        text: 'Change',
        dataIndex: 'priceChange',
        width: 80
    }, {
        text: '% Change',
        dataIndex: 'priceChangePct',
        width: 100,
    }, {
        text: 'Last Updated',
        dataIndex: 'priceLastChange',
        formatter: 'date("m/d/Y")',
        width: 115,
        editor: 'datefield'
    }, {
        xtype: 'actioncolumn',
        width: 40,
        sortable: false,
        menuDisabled: true,
        align: 'center',
        items: [{
            iconCls: 'x-fa fa-minus-circle',
            tooltip: 'Delete',
            handler: 'deleteRow'
        }]
    }]
});

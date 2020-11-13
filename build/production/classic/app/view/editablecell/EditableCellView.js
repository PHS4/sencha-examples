
Ext.define('Demo.view.editablecell.EditableCellView',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.editablecell.EditableCellViewController',
        'Demo.view.editablecell.EditableCellViewModel',
        'Demo.view.editablecell.EditableCellStore',
        'Demo.view.editablecell.EditableCellStoreModel',
    ],
    
    uses: [
        'Demo.view.editablecell.EditableCellView',
    ],

    xtype: 'editing-cell-cellgrid',
    controller: 'editing-cell-cellgrid',
    viewModel: {
        type: 'editing-cell-cellgrid'
    },
    
    category: 'Editing',
    description: 'Edit grid cell data.',
    title: 'Cell Editing',
    iconCls: 'x-fa fa-edit',

    store: { type: 'editablecellstore' },
    headerBorders: true,
    gridLines: true,
    columnLines: true,
    frame: false,

    // scrollable: true,

    header: {
        tools: [{
            iconCls: 'x-fa fa-plus-circle',
            tip: 'Add Record',
            handler: 'addRecord'
        }]
    },

    /**
     * Functionality to add onto a grid.
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.grid.plugin.RowEditing.html
     */
    plugins: [{
        id: 'editingPlugin',
        ptype: 'cellediting',
        autoUpdate: true,
        clicksToEdit: 1
    }],

    /**
     * Define a selection as the row (record) row or a cell (single value).
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.selection.Model.html
     */
    selModel: {
        selType: 'cellmodel',
        mode: 'SINGLE'
    },

    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.grid.Panel.html#cfg-columns
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
        editor: 'textareafield',
    }, {
        text: 'Price',
        dataIndex: 'price',
        formatter: 'usMoney',
        width: 95,
        editor: 'numberfield'
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

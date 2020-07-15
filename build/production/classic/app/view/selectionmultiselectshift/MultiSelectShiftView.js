
Ext.define('Demo.view.selectionmultiselectshift.MultiSelectShiftView', {
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.selectionmultiselectshift.MultiSelectShiftViewController',
        'Demo.view.selectionmultiselectshift.MultiSelectShiftViewModel',
        'Demo.view.selectionmultiselectshift.MultiSelectShiftStore',
        'Demo.view.selectionmultiselectshift.MultiSelectShiftStoreModel',
    ],

    xtype: 'multiselectshift-rowshiftgrid',
    controller: 'multiselectshift-rowshiftgrid',
    viewModel: {
        type: 'multiselectshift-rowshiftgrid'
    },
    
    iconCls: 'x-fa fa-hand-pointer',
    title: 'Multi Shift Click',
    category: 'Selection',
    description: 'Select multiple rows while holding the Shift key',

    store: { type: 'multiselectshiftstore' },
    columnLines: true,

    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.selection.Rows.html
     */
    selModel: {
        selType: 'rowmodel',
        mode: 'MULTI'
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
    }],

    listeners: {
        select: 'onSelection'
    }
});

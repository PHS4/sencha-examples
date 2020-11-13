
Ext.define('Demo.view.selectionmultiselectgroup.MultiSelectGroupView',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.selectionmultiselectgroup.MultiSelectGroupViewController',
        'Demo.view.selectionmultiselectgroup.MultiSelectGroupViewModel',
        'Demo.view.selectionmultiselectgroup.MultiSelectGroupStore',
        'Demo.view.selectionmultiselectgroup.MultiSelectGroupStoreModel'
    ],

    xtype: 'multiselectgroup-rowgroupsgrid',
    controller: 'multiselectgroup-rowgroupsgrid',
    viewModel: {
        type: 'multiselectgroup-rowgroupsgrid'
    },

    iconCls: 'x-fa fa-check',
    title: 'Row Groups',
    category: 'Selection',
    description: 'Select multiple rows in a grid using groups',

    features: [{
        id: 'grouping',
        ftype: 'grouping',
        startCollapsed: true
    }],

    store: {
        type: 'multiselectgroupstore',
        groupField: 'industry'
    },
    
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.grid.selection.Rows.html
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

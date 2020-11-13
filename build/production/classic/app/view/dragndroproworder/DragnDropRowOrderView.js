/**
 * https://docs.sencha.com/extjs/7.3.1/classic/Ext.grid.Panel.html
 */
Ext.define('Demo.view.dragndroproworder.DragnDropRowOrderView',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Ext.dd.*',
        'Ext.grid.plugin.DragDrop',
        
        'Demo.view.dragndroproworder.DragnDropRowOrderViewController',
        'Demo.view.dragndroproworder.DragnDropRowOrderViewModel',
        'Demo.view.dragndroproworder.DragnDropRowOrderStore',
        'Demo.view.dragndroproworder.DragnDropRowOrderStoreModel',
    ],

    xtype: 'dndrow-rowordergrid',
    controller: 'dndrow-rowordergrid',
    viewModel: {
        type: 'dndrow-rowordergrid'
    },
    
    category: 'Drag and Drop',
    title: 'Row Reordering',
    iconCls: 'x-fa fa-random',

    store: { type: 'dragndroproworderstore' },
    // stateful: true,
    // collapsible: true,
    // stateId: 'stateGrid',
    multiSelect: true,
    // headerBorders: false,

    viewConfig: {
        plugins: {
            gridviewdragdrop: {
                dragText: 'Drag and drop to reorganize'
            }
        }
    },

    columns: [{
        text: 'Company',
        dataIndex: 'name',
        flex: 1
    }, {
        text: 'Description',
        dataIndex: 'desc',
        flex: 2
    }, {
        text: 'Price',
        dataIndex: 'price',
        formatter: 'usMoney',
        width: 95,
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
    }]
});

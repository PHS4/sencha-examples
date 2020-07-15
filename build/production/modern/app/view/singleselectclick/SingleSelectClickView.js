/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.Grid.html
 */
Ext.define('Demo.view.singleselectclick.SingleSelectClickView', {
    extend: 'Ext.grid.Grid',

    requires: [
        'Demo.view.singleselectclick.SingleSelectClickViewController',
        'Demo.view.singleselectclick.SingleSelectClickViewModel',
        'Demo.view.singleselectclick.SingleSelectClickStoreModel',
    ],

    xtype: 'single-select-click',

    controller: 'singleselectclick',

    viewModel: {
        type: 'single-select-click-viewmodel'
    },

    category: 'Selection',
    title: 'Single Row Select',
    iconCls: 'x-fa fa-table',
    description:'Allows only a single row selection',

    columnLines: true,

    //allow only a sinlge row to be selected
    selectable:{
        mode:'single'
    },
    bind:{
        store:'{companies}'
    },

    /**
     * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.Grid.html#cfg-columns
     */
    columns: [{
        text: 'Company',
        flex: 1,
        minWidth: 100,
        dataIndex: 'name'
    }, {
        text: 'Price',
        width: 75,
        dataIndex: 'price',
        formatter: 'usMoney'
    }, {
        text: 'Change',
        width: 90,
        dataIndex: 'change',
        renderer: 'renderChange',
        cell: {
            encodeHtml: false
        }
    }, {
        text: '% Change',
        width: 100,
        dataIndex: 'pctChange',
        renderer: 'renderPercent',
        cell: {
            encodeHtml: false
        }
    }],
    signTpl: '<span style="' +
    'color:{value:sign("red", "green")}"' +
    '>{text}</span>'

});

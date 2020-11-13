/**
 * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.Grid.html
 */
Ext.define('Demo.view.multiselectclick.MultiSelectClickView', {
    extend: 'Ext.grid.Grid',

    requires: [
        'Demo.view.multiselectclick.MultiSelectClickViewController',
        'Demo.view.multiselectclick.MultiSelectClickViewModel',
        'Demo.view.multiselectclick.MultiSelectClickStoreModel',
    ],

    xtype: 'multi-select-click',
    controller: 'multiselectclick',
    viewModel: {
        type: 'multi-select-click-viewmodel'
    },

    category: 'Selection',
    title: 'Multi Row Select',
    iconCls: 'x-fa fa-check',
    description: 'Select multiple rows while holding the Shift key',

    columnLines: true,

    //allow multiple rows to be selected
    selectable: {
        mode: 'multi'
    },

    bind: {
        store: '{companies}'
    },
    /**
     * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.Grid.html#cfg-columns
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

/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.Grid.html
 */
Ext.define('Demo.view.clipboard.ClipboardView',{
    extend: 'Ext.grid.Grid',

    requires: [
        'Demo.view.clipboard.ClipboardViewController',
        'Demo.view.clipboard.ClipboardViewModel',
        'Demo.view.clipboard.ClipboardStoreModel',
        'Ext.util.Format',
        'Ext.grid.plugin.Clipboard'
    ],

    xtype: 'clipboard',
    controller: 'clipboard-grid',
    viewModel: {
        type: 'clipboard-grid-viewmodel'
    },

    category: 'Editing',
    title: 'Copy and Paste',
    iconCls: 'x-fa fa-clipboard',
    description:'Click/Tap a row to make a selection then use cut, copy, and paste keyboard commands',

    plugins:{
        /**
         * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.plugin.Clipboard.html
         */
        clipboard:true
    },

    bind:{
        store:'{companies}'
    },

    /**
     * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.Grid.html#cfg-columns
     */
    columns: [{
        text: 'Company',
        dataIndex: 'name',
        flex: 1
    },{
        text: 'Price',
        dataIndex: 'price',
        formatter: 'usMoney',
        width: 95,
    }, {
        text: 'Change',
        dataIndex: 'priceChange',
        width: 80,
        sortable: true,
        cell: {
            encodeHtml: false
        },
        renderer: 'renderChange'
    }, {
        text: '% Change',
        dataIndex: 'priceChangePct',
        cell: {
            encodeHtml: false
        },
        width: 100,
        sortable: true,
        renderer: 'renderPercent'
    }],
    signTpl: '<span style="' +
    'color:{value:sign("red", "green")}"' +
    '>{text}</span>'
});

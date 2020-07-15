/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.Grid.html
 */
Ext.define('Demo.view.rowexpander.RowExpanderView', {
    extend: 'Ext.grid.Grid',

    requires: [
        'Demo.view.rowexpander.RowExpanderViewController',
        'Demo.view.rowexpander.RowExpanderViewModel',
        'Demo.view.rowexpander.RowExpanderStoreModel',
        'Ext.grid.plugin.RowExpander'

    ],
    xtype: 'row-expander-grid',
    controller: 'rowexpandergrid',
    viewModel: {
        type: 'row-expander-viewmodel'
    },

    iconCls: 'x-fa fa-expand',
    category: 'Row Operations',
    title: 'Row Expander Grid',
    description: 'Additional data displayed in an expandable row body.',

    plugins: {
        /**
         * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.plugin.RowExpander.html
         */
        rowexpander: true
    },

    /**
     * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.Grid.html#cfg-itemConfig
     */
    itemConfig: {
        body: {
            tpl: '<div>Industry: {industry}</div>' +
                '<div>Last Updated: {lastChange:date("Y-m-d g:ia")}</div>' +
                '<div style="margin-top: 1em;">{desc}</div>'
        }
    },

    bind: {
        store: '{companies}'
    },
    /**
     * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.Grid.html#cfg-columns
     */
    columns: [{
        text: 'Company',
        locked: 'left',
        flex: 1,
        minWidth: 100,
        dataIndex: 'name'
    }, {
        text: 'Price',
        width: 75,
        dataIndex: 'trend',
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
    }, {
        text: 'Last Updated',
        width: 125,
        dataIndex: 'lastChange',
        formatter: 'date("m/d/Y")'
    }],
    signTpl: '<span style="' +
        'color:{value:sign("red", "green")}"' +
        '>{text}</span>'
});
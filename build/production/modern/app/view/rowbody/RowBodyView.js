/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.Grid.html
 */
Ext.define('Demo.view.rowbody.RowBodyView', {
    extend: 'Ext.grid.Grid',
    requires: [
        'Demo.view.rowbody.RowBodyViewModel',
        'Demo.view.rowbody.RowBodyViewController',
        'Demo.view.rowbody.RowBodyStoreModel'

    ],
    xtype: 'row-body-grid',
    controller: 'rowbodygrid',
    viewModel: {
        type: 'row-body-viewmodel'
    },

    iconCls: 'x-fa fa-table',
    category: 'Row Operations',
    title: 'Row Body Grid',
    description: 'Display data in the body of a row.',

    /**
     * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.Grid.html#cfg-itemConfig
     */
    itemConfig: {
        collapsed: false,
        body: {
            tpl: '<div>Industry: {industry}</div>' +
                '<div>Last Updated: {lastChange:date("Y-m-d g:ia")}</div>' +
                '<div style="margin-top: 1em;">{desc}</div>'
        }
    },

    // The template in our row body makes row height vary
    variableHeights: true,

    bind: {
        store: '{companies}'
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
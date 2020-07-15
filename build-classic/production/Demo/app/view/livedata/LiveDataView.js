/**
 * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.Panel.html
 */
Ext.define('Demo.view.livedata.LiveDataView',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.livedata.LiveDataViewController',
        'Demo.view.livedata.LiveDataViewModel',
        'Demo.view.livedata.LiveDataStore',
        'Demo.view.livedata.LiveDataStoreModel',
    ],

    xtype: 'advanced-live-livedatagrid',
    controller: 'advanced-live-livedatagrid',
    viewModel: {
        type: 'advanced-live-livedatagrid'
    },

    category: 'Rendering & Scrolling',
    title: 'Live Data Grid',
    iconCls: 'x-fa fa-clock',
    description: 'Live updates made to model instances reflected in Grid rows.',
    
    store: {
        type: 'livedatastore'
    },

    viewConfig: {
        throttledUpdate: true
    },

    plugins: {
        cellediting: true
    },

    columns: [{
        text: 'Company',
        flex: 1,
        sortable: true,
        dataIndex: 'name',
        editor: {
            xtype: 'textfield'
        }
    }, {
        text: 'Price',
        width: 95,
        formatter: 'usMoney',
        dataIndex: 'price',
        align: 'right',
        producesHTML: false,
        sortable: false
    }, {
        text: 'Trend',
        width: 100,
        dataIndex: 'trend',
        xtype: 'widgetcolumn',
        widget: {
            xtype: 'sparklineline',
            tipTpl: 'Price: {y:number("0.00")}'
        },
        sortable: false
    }, {
        text: 'Change',
        width: 90,
        producesHTML: true,
        renderer: 'renderChange',
        updater: 'updateChange',
        dataIndex: 'priceChange',
        align: 'right',
        sortable: false
    }, {
        text: '% Change',
        width: 100,
        renderer: 'renderChangePercent',
        updater: 'updateChangePercent',
        dataIndex: 'priceChangePct',
        align: 'right',
        sortable: false
    }, {
        text: 'Last Updated',
        hidden: true,
        width: 115,
        formatter: 'date("m/d/Y H:i:s")',
        dataIndex: 'priceLastChange',
        producesHTML: false,
        sortable: false
    }],
    bbar: {
        docked: 'bottom',
        xtype: 'toolbar',
        defaults: {
            margin: '0 10 0 0'
        },
        items: [{
            fieldLabel: 'Update\u00a0delay',
            xtype: 'sliderfield',
            minValue: 200,
            maxValue: 2000,
            increment: 10,
            labelWidth: 100,
            bind: '{tickDelay}',
            liveUpdate: true,
            listeners: {
                change: 'onTickDelayChange'
            },
            flex: 1
        }, {
            xtype: 'textfield',
            editable: false,
            bind: '{tickDelay}',
            width: 80,
            clearable: false,
            readOnly: true
        }, {
            xtype: 'checkboxfield',
            bind: '{flashBackground}',
            listeners: {
                render: function (c) {
                    c.inputEl.dom.setAttribute('data-qtip', 'Flash background color on change');
                },
                single: true
            }
        }]
    }
});

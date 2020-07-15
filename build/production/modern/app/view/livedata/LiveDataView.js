/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.Grid.html
 */
Ext.define('Demo.view.livedata.LiveDataView', {
    extend: 'Ext.grid.Grid',

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

    category: 'Rendering and Scrolling',
    title: 'Live Data Grid',
    description:'Live updates made to model instances reflected in grid rows.',
    iconCls: 'x-fa fa-clock',

    store: {
        type: 'livedatastore'
    },

    /**
     * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.Grid.html#cfg-itemConfig
     */
    itemConfig: {
        viewModel: {
            formulas: {
                cellCls: {
                    get: function (get) {
                        return get('flashBackground') ? Ext.util.Format.sign(get('record.change'), 'ticker-cell-loss', 'ticker-cell-gain') : '';
                    }
                }
            }
        }
    },
    /**
     * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.Grid.html#cfg-columns
     */
    columns: [{
        xtype: 'textcolumn',
        text: 'Company',
        flex: 1,
        sortable: true,
        dataIndex: 'name'
    }, {
        xtype: 'textcolumn',
        text: 'Price',
        width: 85,
        align: 'center',
        cell: {
            bind: '{record.price:usMoney}'
        },
        sortable: false
    }, {
        text: 'Trend',
        width: 200,
        cell: {
            bind: '{record.trend}',
            xtype: 'widgetcell',
            forceWidth: true,
            widget: {
                xtype: 'sparklineline',
                tipTpl: 'Price: {y:number("0.00")}'
            }
        },
        sortable: false
    }, {
        text: 'Change',
        width: 90,
        align: 'right',
        cell: {
            bind: {
                value: '{record.change:number(".00")}',
                cls: '{cellCls}',
                bodyStyle: 'color:{record.pctChange:sign("red", "green")}'
            }
        },
        sortable: false
    }, {
        xtype: 'textcolumn',
        text: '% Change',
        width: 100,
        align: 'right',
        cell: {
            bind: {
                value: '{record.pctChange:number(".00")}',
                cls: '{cellCls}',
                bodyStyle: 'color:{record.pctChange:sign("red", "green")}'
            }
        },
        sortable: false
    }, {
        xtype: 'textcolumn',
        text: 'Last Updated',
        hidden: true,
        width: 115,
        cell: {
            bind: '{record.lastChange:date("m/d/Y H:i:s")}'
        },
        sortable: false
    }],
    signTpl: '<span style="' +
        'color:{value:sign("red", "green")}"' +
        '>{text}</span>',
    

    items: [{
        docked: 'bottom',
        xtype: 'toolbar',
        defaults: {
            margin: '0 10 0 0'
        },
        items: [
            {
                xtype: "label",
                html: "ticker delay"
            },
            {
                xtype: "sliderfield",
                flex: 1,
                minValue: 200,
                maxValue: 2000,
                increment: 10,
                bind: "{tickDelay}",
                liveUpdate: true,
                listeners: {
                    change: "onTickDelayChange"
                }
            },
            {
                xtype: "textfield",
                editable: false,
                bind: "{tickDelay}",
                width: 80,
                clearable: false,
                readOnly: true
            }
        ]
    }]
});
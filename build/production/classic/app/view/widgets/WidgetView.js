/**
 * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.Panel.html
 */
Ext.define('Demo.view.widgets.WidgetView',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Ext.sparkline.*',
        'Ext.ProgressBarWidget',
        'Ext.slider.Widget',
        'Ext.grid.filters.*',
        'Ext.grid.column.Action',

        'Demo.view.widgets.WidgetViewController',
        'Demo.view.widgets.WidgetViewModel',
        'Demo.view.widgets.WidgetStore',
        'Demo.view.widgets.WidgetStoreModel',
    ],

    xtype: 'widgets-widgetgrid',
    controller: 'widgets-widgetgrid',
    viewModel: {
        type: 'widgets-widgetgrid'
    },

    category: 'Widget Integration',
    title: 'Widget Grid',
    iconCls: 'x-fa fa-cubes',
    
    store: { type: 'widgetstore' },

    viewConfig: {
        stripeRows: true,
        enableTextSelection: false,
        markDirty: false
    },
    
    trackMouseOver: false,
    disableSelection: true,

    tbar: [],

    columns: [{
        text: 'Button',
        width: 190,
        xtype: 'widgetcolumn',
        widget: {
            textAlign: 'left',
            bind: '{record.progress}',
            xtype: 'splitbutton',
            iconCls: 'widget-grid-user',
            handler: 'onButtonWidgetClick'
        }
    }, {
        text: 'Progress',
        xtype: 'widgetcolumn',
        width: 120,
        widget: {
            bind: '{record.progress}',
            xtype: 'progressbarwidget',
            textTpl: [
                '{percent:number("0")}% done'
            ]
        }
    }, {
        text: 'Run Mode',
        width: 150,
        xtype: 'widgetcolumn',
        widget: {
            xtype: 'combo',
            bind: '{record.mode}',
            store: [
                'Local',
                'Remote'
            ]
        }
    }, {
        text: 'Slider',
        xtype: 'widgetcolumn',
        width: 120,
        widget: {
            xtype: 'sliderwidget',
            minValue: 0,
            maxValue: 1,
            bind: '{record.progress}',
            publishOnComplete: false,
            decimalPrecision: 2
        }
    }, {
        text: 'Line',
        width: 100,
        xtype: 'widgetcolumn',
        widget: {
            xtype: 'sparklineline',
            bind: '{record.sequence1}',
            tipTpl: 'Value: {y:number("0.00")}'
        }
    }, {
        text: 'Bar',
        width: 100,
        xtype: 'widgetcolumn',
        widget: {
            xtype: 'sparklinebar',
            bind: '{record.sequence2}'
        }
    }, {
        text: 'Discrete',
        width: 100,
        xtype: 'widgetcolumn',
        widget: {
            xtype: 'sparklinediscrete',
            bind: '{record.sequence3}'
        }
    }, {
        text: 'Bullet',
        width: 100,
        xtype: 'widgetcolumn',
        widget: {
            xtype: 'sparklinebullet',
            bind: '{record.sequence4}'
        }
    }, {
        text: 'Pie',
        width: 60,
        xtype: 'widgetcolumn',
        widget: {
            xtype: 'sparklinepie',
            bind: '{record.sequence5}'
        }
    }, {
        text: 'Box',
        width: 100,
        xtype: 'widgetcolumn',
        widget: {
            xtype: 'sparklinebox',
            bind: '{record.sequence6}'
        }
    }, {
        text: 'TriState',
        width: 100,
        xtype: 'widgetcolumn',
        widget: {
            xtype: 'sparklinetristate',
            bind: '{record.sequence7}'
        }
    }],

    // Dispatch named listener and handler methods to this instance
    // defaultListenerScope: true,
    //
    listeners: {
        columnshow: 'onColumnToggle',
        columnhide: 'onColumnToggle'
    }
});
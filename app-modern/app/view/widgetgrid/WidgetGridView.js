/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.Grid.html
 */
Ext.define('Demo.view.widgetgrid.WidgetGridView', {
    extend: 'Ext.grid.Grid',

    requires: [
        'Demo.view.widgetgrid.WidgetGridStore',
        'Demo.view.widgetgrid.WidgetGridViewController',
        'Demo.view.widgetgrid.WidgetGridViewModel'
    ],

    xtype: 'widget-grid',
    controller: 'widgetgrid',
    viewModel: {
        type: 'widget-grid-viewmodel'
    },

    category: 'Widget Integration',
    title: 'Widget Grid',
    iconCls: 'x-fa fa-cubes',
    description:'Add widgets to grid cells.',

    store: { type: 'widgetstore' },

    columns: [
   
        {
            text: 'Button',
            width: 100,
            cell:{
                xtype: 'widgetcell',
                forceWidth: true,
                widget: {
                    xtype: 'button',
                    text:'button',
                    ui: 'action'
                }
            }
            
        },
        {
            text: 'Slider',
            width: 100,
            cell:{
                xtype: 'widgetcell',
                forceWidth: true,
                widget: {
                    xtype: 'slider'
                }
            }
            
        },
        {
            text: 'Line',
            dataIndex: 'sequence1',
            ignoreExport: true,
            cell: {
                xtype: 'widgetcell',
                forceWidth: true,
                widget: {
                    xtype: 'sparklineline',
                    tipTpl: 'Value: {y:number("0.00")}'
                }
            }
        },
        {
            text: 'Bar',
            width: 100,
            dataIndex: 'sequence2',
            cell: {
                xtype: 'widgetcell',
                forceWidth: true,
                widget: {
                    xtype: 'sparklinebar'
                }
            }
        },
        {
            text: 'Discrete',
            width: 100,
            dataIndex: 'sequence3',
            cell: {
                xtype: 'widgetcell',
                forceWidth: true,
                widget: {
                    xtype: 'sparklinediscrete'
                }
            }
        },
        {
            text: 'Bullet',
            width: 100,
            dataIndex: 'sequence4',
            cell:{
                xtype: 'widgetcell',
                forceWidth: true,
                widget: {
                    xtype: 'sparklinebullet'
                }
            }
           
        },
        {
            text: 'Pie',
            width: 60,
            dataIndex: 'sequence5',
            cell:{
                xtype: 'widgetcell',
                forceWidth: true,
                widget: {
                    xtype: 'sparklinepie'
                }
            }
          
        },
        {
            text: 'Box',
            width: 100,
            dataIndex: 'sequence6',
            cell:{
                xtype: 'widgetcell',
                forceWidth: true,
                widget: {
                    xtype: 'sparklinebox'
                }
            }
            
        },
        {
            text: 'TriState',
            width: 100,
            dataIndex: 'sequence7',
            cell:{
                xtype: 'widgetcell',
                forceWidth: true,
                widget: {
                    xtype: 'sparklinetristate'
                }
            }
            
        }
    ]
});
/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.Panel.html
 */
Ext.define('Demo.view.main.Main', {
    extend: 'Ext.Panel',

    requires: [
        /**
         * https://docs.sencha.com/extjs/7.2.0/modern/Ext.panel.Resizer.html
         */
        'Ext.panel.Resizer',
        'Demo.view.main.MainController',
        'Demo.view.main.MainModel',
        'Ext.scroll.Scroller',
        'Ext.Responsive'
    ],

    xtype: 'app-main',
    controller: 'main',
    category: ' Demo Code Structure',
    description: 'The Main view that is used to organize and display the Demos',
    viewModel: {
        type: 'main'
    },

    items: [{
        docked: 'top',
        xtype: 'toolbar',
        title: 'ExtJS Modern Grid Demos',
        bind: {
            hidden: '{toolbar}'
        },
        items: [{
            text: 'Prev Demo',
            docked: "left",
            iconCls: 'x-fa fa-arrow-left',
            iconAlign: 'left',
            handler: 'prevDemo'
        }, {
            text: 'Next Demo',
            docked: "right",
            iconCls: 'x-fa fa-arrow-right',
            iconAlign: 'right',
            handler: 'nextDemo'
        }]
    }, {
        xtype: 'panel',
        docked: 'left',
        title: 'Demos',
        collapsible: 'left',
        width: 300,
        bind: {
            collapsed: '{navigation}'
        },
        items: [
            /**
             * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.Grid.html
             */
            {
                xtype: 'grid',
                grouped: true,
                collapsible: true,
                collapseDefaults: {
                    collapsed: true
                },
                itemId: 'navigation',
                width: 300,
                height: "100%",
                hideHeaders: true,
                stateful: true,
                listeners: {
                    select: 'currentSelectionChange'
                },
                selectable: {
                    mode: 'single'
                },
                bind: {
                    /**
                     * Reference to store in viewModel
                     */
                    store: '{nav}'
                },
                groupHeader: {
                    xtype: 'rowheader',
                    name: 'rowheader_name',
                    tpl: `<span style="text-transform: uppercase;">{name}</span>`
                },
                columns: [
                    /**
                     * This column is purely for displaying the icon set in the view. 
                     */
                    {
                        dataIndex: 'iconCls',
                        width: 70,
                        align: 'right',
                        cell: {
                            encodeHtml: false
                        },
                        /**
                         * Using a renderer to apply the iconCls value to a dom element.
                         */
                        renderer: function (val) {
                            return `<span class="${val}"></span>`;
                        }
                    },
                    {
                        dataIndex: 'title',
                        flex: 1,

                        /**
                         * https://docs.sencha.com/extjs/7.2.0/modern/Ext.util.Format.html#method-uppercase
                         */
                        renderer: Ext.util.Format.uppercase
                    }
                ]

            }
        ]
    },

    /**
     * https://docs.sencha.com/extjs/7.2.0/modern/Ext.Container.html
     */
    {
        xtype: 'container',
        padding: 20,
        flex: 1,
        layout: {
            type: 'vbox',
            pack: 'stretch',
            align: 'stretch'
        },
        style: {
            backgroundColor: '#eee'
        },
        items: [
            {
                dock: 'top',
                xtype: 'panel',
                bodyPadding: '0px 10px 5px 10px',
                margin: '0px 0px 20px 0px',
                flex: 0,
                itemId: 'descPanel'
            },
            {
                xtype: 'panel',
                itemId: 'modernDemo',
                flex: 1,
                layout: 'fit',
                border: true,
                items: [
                    //
                    // example gets added here when a selection is made. 
                    //
                ]
            }
        ]
    },
    {
        xtype: 'panel',
        width: 400,
        resizable: {
            edges: 'west'
        },
        collapsible: {
            direction: 'right',
        },
        title: {
            text: 'Source',
        },
        iconCls: 'x-fa fa-code',
        tools: [{
            xtype: 'button',
            ui: 'plain',
            itemId: 'clipboard',
            iconCls: 'x-fa fa-clipboard',
            handler: 'copyToClipboard',
            tooltip: 'Copy to Clipboard'
        }],
        bind: {
            collapsed: '{source}'
        },
        responsiveConfig: {
            tall: {
                width: '100%',
                height: '50%',
                collapsible: 'bottom',
            },
            wide: {
                width: 400,
                height: '100%',
                collapsible: 'right',
            }
        },
        listeners: {
            beforecollapse: 'onCollapse',
            beforeexpand: 'onExpand'
        },
        items: [
            {
                xtype: 'tabpanel',
                itemId: 'demoSource',
                height: '100%',
                style: 'border:1px solid #4BA1DD',
                tabBar: {
                    scrollable:true,
                    layout:{
                        
                    }
                },
                items: []

            }

        ]
    }],
    /**
     * https://docs.sencha.com/extjs/7.2.0/modern/Ext.mixin.Responsive.html#cfg-responsiveConfig
     */
    responsiveConfig: {
        tall: {
            layout: {
                type: 'box',
                vertical: true
            }
        },
        wide: {
            layout: {
                type: 'box',
                vertical: false
            }
        }
    },
    bodyStyle: {
        backgroundColor: '#eee'
    }
});

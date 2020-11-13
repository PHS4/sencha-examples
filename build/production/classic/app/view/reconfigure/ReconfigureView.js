Ext.define('Demo.view.reconfigure.ReconfigureView',{
    extend: 'Ext.panel.Panel',

    requires: [
        'Demo.view.editableevent.EditableEventView',
        'Common.ux.Code',
        'Demo.view.reconfigure.RawData',
        'Demo.view.reconfigure.ReconfigureViewController',
        'Demo.view.reconfigure.ReconfigureViewModel',
    ],

    xtype: 'advanced-reconfigure',
    controller: 'advanced-reconfigure',
    viewModel: {
        type: 'advanced-reconfigure'
    },

    iconCls: 'x-fa fa-cog',
    title: 'Reconfigurable Grid',
    category: 'Column Operations',
    description: 
        'This demo allows you to reconfigure the grid based on a ' +
        'endpoint of your choice. There are some pre populated to try out. ' +
        'Select a row from the data source to view how the data is interpreted ' +
        'and choose a root property for the store\'s proxy reader.',

    /**
     * Layout components in the items array in a row
     * and fill the space horizontally and vertically.
     */
    layout: {
        type: 'hbox',
        pack: 'stretch', 
        align: 'stretch' 
    },
    
    items: [
        {
            xtype: 'panel',
            resizable: true,
            split: true,
            flex: 2,

            /**
             * Display as column and stretch both directions to fill space. 
             */
            layout: {
                type: 'vbox', 
                pack: 'stretch', 
                align: 'stretch' 
            },

            items: [
                /**
                 * This is a an editable grid we are referenceing. The class is defined
                 * here: `./app/view/editing/event/EventGridView.js`
                 */
                {
                    xtype: 'datasourceview',
                    collapsible: true,
                    flex: 1
                },
                {
                    /**
                     * This component allows a gutter between containers/components to 
                     * be resized when dragging.
                     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.resizer.Splitter.html
                     */
                    xtype: 'splitter'
                },
                {
                    xtype: 'container',
                    flex: 1,
                    layout: { 
                        type: 'hbox', 
                        pack: 'stretch', 
                        align: 'stretch' 
                    },

                    /**
                     * Each of these reuse the same Demo.ux.Raw class then overrides configuration
                     * as needed. These will display the json data. The first one is will allow clicking 
                     * of certain properties. The event listeners are applied in the viewController and 
                     * the CSS can be found in ./app/Application.scss
                     */
                    items: [
                        {
                            /**
                             * Displays prettified data.
                             * Demo.ux.Raw
                             */
                            xtype: 'reconfigurerawview',
                            itemId: 'raw',
                            cls: 'interactive-source',
                            flex: 1,
                            infoText: 'Click on a property below to set or change to Root (<code>rootProperty</code>) value. For best results choose an array property name.',
                            bind: {
                                value: '{rawData}'
                            }
                        },
                        { 
                            xtype: 'splitter' 
                        },
                        {
                            /**
                             * Displays prettified data.
                             * Demo.ux.Raw
                             */
                            xtype: 'reconfigurerawview',
                            itemId: 'sample',
                            title: 'Sample Record',
                            flex: 1,
                            infoText: 'This data should represent a single record. It will be used to generate the fields & columns.',
                            bind: { 
                                value: '{sampleData}' 
                            }
                        },
                        { 
                            xtype: 'splitter' 
                        },
                        {
                            /**
                             * Displays prettified data.
                             * Demo.ux.Raw
                             */
                            xtype: 'reconfigurerawview',
                            title: 'Generated Fields',
                            itemId: 'fields',
                            flex: 1,
                            infoText: 'This data is used to generate the grid columns and store fields.',
                            bind: { 
                                value: '{fieldsData}'
                            }
                        }
                    ]
                }
            ]
        },
        {
            /**
             * This Grid is initially empty but wil get configured
             * dynamically depending on the data loaded.
             */
            xtype: 'grid',
            itemId: 'tbdGrid',
            split: true,
            flex: 1,
            
            /**
             * When a selection is made in the datasource above grid it will update the viewModel 
             * and that data change will be reflected here. 
             */
            bind: {
                title: '{selection.name}.{selection.root}'
            },

            /**
             * Tools are Icon based buttons added to the panel header.
             * https://docs.sencha.com/extjs/7.3.1/classic/Ext.panel.Tool.html
             */
            tools: [{
                iconCls: 'x-fas fa-table',
                tooltip: 'Resize Columns',
                handler: 'onResizeColumns'
            }, {
                iconCls: 'x-fa fa-sync-alt',
                tooltip: 'Reload',
                handler: 'onReloadGrid'
            }],

            /**
             * This Object will drop configuration directly to the underlying 
             * TableView component the Grid Panel is based on. 
             * 
             * https://docs.sencha.com/extjs/7.3.1/classic/Ext.view.Table.html
             */
            viewConfig: {
                emptyText: 'Grid has not been configured'
            },

            columns: []
        }
    ]
});

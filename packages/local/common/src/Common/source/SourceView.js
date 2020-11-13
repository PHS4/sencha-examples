/**
 * https://docs.sencha.com/extjs/7.3.1/classic/Ext.window.Window.html
 */
Ext.define('Common.ux.source.SourceView', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Common.ux.Code',

        'Common.ux.source.SourceViewModel',
        'Common.ux.source.SourceViewController'
    ],

    xtype: 'sourceview',
    viewModel: 'sourceviewmodel',
    controller: 'sourceviewcontroller',

    maximizable: true,
    collapsible: true,

    layout: 'fit',

    title: 'View Source',

    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.Component.html#method-initComponent
     */
    initComponent: function() {

        var me = this;
        
        /**
         * A round about way to set the data in the store for the file list grid.
         */
        // me.getViewModel().getStore('files').loadData(me.store.data);
        
        Ext.apply(me, {
            
            dockedItems: [{
                dock: 'left',
                xtype: 'panel',
                resizable: true,
                frame: true,
                width: 300,
                layout: {
                    type: 'vbox',
                    align: 'stretch',
                    pack: 'stretch'
                },
                items: [{
                    xtype: 'grid',
                    title: 'Files',
                    cls: 'x-grid-navigation small',
                    flex: 3,
                    frame: true,
                    scrollable: true,
                    reference: 'filesGrid',
                    collapsible: true,

                    bind: {
                        store: '{files}'
                    },

                    /**
                     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.grid.feature.Grouping.html
                     */
                    features: [{
                        ftype: 'grouping',
                        startCollapsed: false,
                        groupHeaderTpl: '/{name}'
                    }],

                    columns: [{
                        dataIndex: 'text',
                        flex: 1,
                        renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                            return `<b>${record.get('path')}</b>`;
                        }
                    }],

                    listeners: {
                        select: 'changeSource'
                    }
                },
                {
                    /**
                     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.grid.property.Grid.html
                     */
                    xtype: 'propertygrid',
                    title: 'Requires',
                    cls: 'x-grid-navigation small',
                    autoLoad: true,
                    collapsible: true,
                    flex: 1,
                    bind: {
                        /**
                         * when the file list has a selection this binding will have 
                         * values listed from the requires field in the record object. 
                         */
                        source: '{filesGrid.selection.requires}'
                    }
                }]
            }],

            items: [{
                xtype: 'code',
                language: 'javascript',
                value: '// choose a file',
            }]
        });

        me.callParent(arguments);
    }
});
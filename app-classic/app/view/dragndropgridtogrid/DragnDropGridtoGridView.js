
Ext.define('Demo.view.dragndropgridtogrid.DragnDropGridtoGridView',{
    extend: 'Ext.panel.Panel',

    requires: [
        'Ext.dd.*',
        'Ext.grid.plugin.DragDrop',
        
        'Demo.view.dragndropgridtogrid.DragnDropGridtoGridViewController',
        'Demo.view.dragndropgridtogrid.DragnDropGridtoGridViewModel',
        'Demo.view.dragndropgridtogrid.DragnDropGridtoGridStore',
        'Demo.view.dragndropgridtogrid.DragnDropGridtoGridStoreModel',
    ],

    xtype: 'dndtogrid-gridtogrid',
    controller: 'dndtogrid-gridtogrid',
    viewModel: {
        type: 'dndtogrid-gridtogrid'
    },
    
    category: 'Drag and Drop',
    title: 'Grid to Grid',
    iconCls: 'x-fa fa-mouse-pointer',
    
    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    defaults: {
        margin: 20,
        frame: false,
        flex: 1,
        stripeRows: true,
        multiSelect: true
    },

    items: [{
        xtype: 'base-grid',
        title: 'First Grid',
        reference: 'grid1',

        tools: [{
            type: 'refresh',
            tooltip: 'Reset both grids',
            handler: 'onResetClick'
        }],

        viewConfig: {
            plugins: {
                gridviewdragdrop: {
                    containerScroll: true,
                    // identifies dragged items as group1
                    dragGroup: 'group1',
                    // accepts drops from component with same name for drag group.
                    dropGroup: 'group2'
                }
            },
            listeners: {
                drop: 'onDropGrid1'
            }
        },

        bind: { store: '{one}' },

        columns: [{
            text: 'Record Name',
            dataIndex: 'name',

            flex: 1,
            sortable: true
        }, {
            text: 'column1',
            dataIndex: 'column1',

            width: 80,
            sortable: true
        }, {
            text: 'column2',
            dataIndex: 'column2',

            width: 80,
            sortable: true
        }]
    }, {
        xtype: 'base-grid',
        title: 'Second Grid',
        reference: 'grid2',
        
        viewConfig: {
            plugins: {
                gridviewdragdrop: {
                    containerScroll: true,
                    // identifies dragged items as group2
                    dragGroup: 'group2',
                    // accepts drops from for drag group of same name
                    dropGroup: 'group1', 
                    // The right hand drop zone gets special styling
                    // when dragging over it.
                    dropZone: {
                        overClass: 'dd-over-gridview'
                    }
                }
            },
            listeners: {
                drop: 'onDropGrid2'
            }
        },

        bind: { store: '{two}' },

        columns: [{
            text: 'Record Name',
            dataIndex: 'name',

            flex: 1,
            sortable: true
        }, {
            text: 'column1',
            dataIndex: 'column1',

            width: 80,
            sortable: true
        }, {
            text: 'column2',
            dataIndex: 'column2',

            width: 80,
            sortable: true
        }]
    }]
});

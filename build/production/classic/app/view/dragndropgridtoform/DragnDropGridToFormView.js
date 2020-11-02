/**
 * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.Panel.html
 */
Ext.define('Demo.view.dragndropgridtoform.DragnDropGridToFormView',{
    extend: 'Ext.panel.Panel',

    requires: [
        'Ext.dd.*',
        'Ext.grid.plugin.DragDrop',
        // 'Ext.ux.dd.CellFieldDropZone',
        // 'Ext.ux.dd.PanelFieldDragZone',

        'Demo.view.dragndropgridtoform.DragnDropGridToFormViewController',
        'Demo.view.dragndropgridtoform.DragnDropGridToFormViewModel',
        'Demo.view.dragndropgridtoform.DragnDropGridToFormStore',
        'Demo.view.dragndropgridtoform.DragnDropGridToFormStoreModel',
    ],

    xtype: 'dndtoform-gridtoform',
    controller: 'dndtoform-gridtoform',
    viewModel: {
        type: 'dndtoform-gridtoform'
    },
    
    category: 'Drag and Drop',
    description: 'Drag from the grid over the form to load the values',
    title: 'Grid to Form',
    iconCls: 'x-fa fa-bars',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    defaults: {
        flex: 1,
        margin: 20,
        frame: false
    },
    
    items: [
        {
            xtype: 'grid',
            title: 'Data Grid',
            
            reference: 'grid',
            enableDragDrop: true,

            viewConfig: {
                /**
                 * TODO:
                 */
                plugins: {
                    gridviewdragdrop: {
                        ddGroup: 'grid-to-form',
                        enableDrop: false
                    }
                }
            },
            
            tools: [{
                iconCls: 'x-fa fa-sync',
                tooltip: 'Reset demo',
                handler: 'onResetClick'
            }],

            selModel: {
                selType: 'rowmodel',
                singleSelect: true
            },

            store: {
                fields: [ 'name', 'column1', 'columns2' ],
                data: [
                    { name: 'Record 0', column1: '0', column2: '0' },
                    { name: 'Record 1', column1: '1', column2: '1' },
                    { name: 'Record 2', column1: '2', column2: '2' },
                    { name: 'Record 3', column1: '3', column2: '3' },
                    { name: 'Record 4', column1: '4', column2: '4' },
                    { name: 'Record 5', column1: '5', column2: '5' },
                    { name: 'Record 6', column1: '6', column2: '6' },
                    { name: 'Record 7', column1: '7', column2: '7' },
                    { name: 'Record 8', column1: '8', column2: '8' },
                    { name: 'Record 9', column1: '9', column2: '9' }
                ]
            },

            columns: [{
                header: 'Record Name',
                dataIndex: 'name',

                flex: 1,
                sortable: true
            }, {
                header: 'column1',
                dataIndex: 'column1',

                width: 80,
                sortable: true
            }, {
                header: 'column2',
                dataIndex: 'column2',

                width: 80,
                sortable: true
            }]
        },
        {
            xtype: 'form',
            category: '',
    title: 'Generic Form Panel',
            
            reference: 'form',
            
            bodyPadding: 10,
            defaultType: 'textfield',

            items: [{
                fieldLabel: 'Record Name',
                name: 'name'
            }, {
                fieldLabel: 'Column 1',
                name: 'column1'
            }, {
                fieldLabel: 'Column 2',
                name: 'column2'
            }]
        }
    ]
});

/**
 * https://docs.sencha.com/extjs/7.3.1/classic/Ext.grid.Panel.html
 */
Ext.define('Demo.view.editableevent.EditableEventView', {
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.editableevent.EditableEventViewController',
        'Demo.view.editableevent.EditableEventViewModel',
        'Demo.view.editableevent.EditableEventStore',
        'Demo.view.editableevent.EditableEventStoreModel'
    ],
    
    xtype: 'datasourceview',
    viewModel: 'datasourceview',
    controller: 'datasourceview',

    category: 'Editing',
    title: 'Data Sources',
    iconCls: 'x-fa fa-link',
    
    bind: {

        store: '{dataSources}',

        selection: '{selection}'
    },

    /**
     * Tools are Icon based buttons added to the panel header.
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.panel.Tool.html
     */
    tools: [{
        iconCls: 'x-fa fa-plus',
        handler: 'addDataSource'
    }],

    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.selection.Model.html
     */
    selModel: {
        mode: 'rowmodel'
    },

    plugins: {
        /**
         * https://docs.sencha.com/extjs/7.3.1/classic/Ext.grid.plugin.CellEditing.html
         */
        cellediting: {
            clicksToEdit: 2,
            autoUpdate: true,

            /**
             * when the edit event is fired call the `onEdit`
             * method in the ViewController.
             */
            listeners: {
                edit: 'onEdit'
            }
        }
    },

    columns: [
        { dataIndex: 'name', text: 'Name', editor: 'textfield', flex: 1 },
        { dataIndex: 'url', text: 'URL', editor: 'textfield', flex: 3 },
        { dataIndex: 'root', text: 'Root', editor: 'textfield', flex: 1 },
        {
            /**
             * https://docs.sencha.com/extjs/7.3.1/classic/Ext.grid.column.Column.html
             */
            xtype: 'actioncolumn',
            align: 'center',
            width: 40,
            sortable: false,
            menuDisabled: true,
            items: [{
                xtype: 'button',
                itemId: 'reloadAction',
                iconCls: 'x-fa fa-sync-alt',
                tooltip: 'Test Load',
                handler: 'onLoadDataActionClick'
            }]
        }, {
            /**
             * https://docs.sencha.com/extjs/7.3.1/classic/Ext.grid.column.Column.html
             */
            xtype: 'actioncolumn',
            align: 'center',
            width: 40,
            sortable: false,
            menuDisabled: true,
            items: [{
                xtype: 'button',
                itemId: 'generateGridAction',
                iconCls: 'x-fa fa-wrench',
                tooltip: 'Generate Grid',
                handler: 'onGenerateGridActionClick',
            }]
        },
        {
            /**
             * https://docs.sencha.com/extjs/7.3.1/classic/Ext.grid.column.Column.html
             */
            xtype: 'actioncolumn',
            align: 'center',
            width: 40,
            sortable: false,
            menuDisabled: true,
            items: [{
                iconCls: 'x-fa fa-minus',
                tooltip: 'Delete Data Source',
                handler: 'onRemoveDataSource'
            }]
        }
    ]
}); 
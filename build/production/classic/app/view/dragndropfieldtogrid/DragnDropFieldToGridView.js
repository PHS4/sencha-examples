/**
 * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.Panel.html
 */
Ext.define('Demo.view.dragndropfieldtogrid.DragnDropFieldToGridView',{
    extend: 'Ext.panel.Panel',

    requires: [
        'Ext.dd.*',

        'Demo.view.dragndropfieldtogrid.DragnDropFieldToGridViewController',
        'Demo.view.dragndropfieldtogrid.DragnDropFieldToGridViewModel',
        'Demo.view.dragndropfieldtogrid.DragnDropFieldToGridStore',
        'Demo.view.dragndropfieldtogrid.DragnDropFieldToGridStoreModel',
    ],

    xtype: 'dndfieldtogrid-fieldtogrid',
    controller: 'dndfieldtogrid-fieldtogrid',
    viewModel: {
        type: 'dndfieldtogrid-fieldtogrid'
    },

    category: 'Drag and Drop',
    description: 'Drag a field by it\'s label to the grid cell.',
    title: 'Field to Grid',
    iconCls: 'x-fa fa-hand-rock',

    layout: {
        type: 'hbox',
        align: 'stretch',
        pack: 'stretch'
    },

    defaults: {
        flex: 1,
        margin: 20,
    },

    items: [{
        xtype: 'form',
        category: '',
    title: 'Source Form',

        /**
         * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.plugin.DragDrop.html#cfg-ddGroup
         */        
        plugins: [{
            ptype: 'ux-panelfielddragzone',
            ddGroup: 'dd-field-to-grid'
        }],
        
        layout: 'anchor',

        defaults: {
            anchor: '100%'
        },
        
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Drag this text',
            value: 'test'
        }, {
            xtype: 'numberfield',
            fieldLabel: 'Drag this number',
            value: 3.14
        }, {
            xtype: 'datefield',
            fieldLabel: 'Drag this date',
            value: new Date(2016, 4, 20)
        }]
    }, {
        xtype: 'base-grid',
        title: 'Target Grid',
        
        reference: 'companyGrid',
        store: { type: 'dragndropfieldtogridstore' },
        
        plugins: [{

            ptype: 'ux-cellfielddropzone',
            /**
             * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.plugin.DragDrop.html#cfg-ddGroup
             */
            ddGroup: 'dd-field-to-grid',
            // FYI: 
            // - If this is in the viewController it errors thinking it needs to call the MainViewController.
            // - This also fails when onNodeEnter is called when trying to drag a datefield.
            /**
             * https://docs.sencha.com/extjs/7.2.0/classic/Ext.ux.dd.CellFieldDropZone.html#cfg-onCellDrop
             */
            onCellDrop: function (fieldName, value) {
                Log.log(arguments.callee.name, arguments);
                
                try {
                    var store = this.grid.store,
                        sorter = store.sorters.first();
                    if (sorter && sorter.property === fieldName) {
                        store.sort();
                    }
                } catch (e) {
                    Log.error(e, arguments);
                }
            }
        }],

        columns: [{
            header: 'Company',
            sortable: true,
            dataIndex: 'name',
            flex: 1
        }, {
            header: 'Price',
            width: 75,
            sortable: true,
            formatter: 'usMoney',
            dataIndex: 'price'
        }, {
            header: 'Change',
            dataIndex: 'priceChange',
            width: 80,
            sortable: true,
        }, {
            header: '% Change',
            dataIndex: 'priceChangePct',
            width: 100,
            sortable: true,
        }, {
            xtype: 'datecolumn',
            header: 'Last Updated',
            width: 115,
            sortable: true,
            formatter: 'date("m/d/Y")',
        }]
    }]
});

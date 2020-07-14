/**
 * This example shows how to create a pivot grid and display the results in
 * an outline layout.
 *
 * The outline layout is similar to the "Outline Form" layout in Excel.
 */
Ext.define('Demo.view.pivotoutline.PivotOutlineView',{
    extend: 'Ext.pivot.Grid',

    requires: [
        'Demo.view.pivotoutline.PivotOutlineViewController',
        'Demo.view.pivotoutline.PivotOutlineViewModel',
        'Demo.view.pivotoutline.PivotOutlineStore',
        'Demo.view.pivotoutline.PivotOutlineStoreModel'
    ],

    xtype: 'pivot-outline-outlinegrid',
    controller: 'pivot-outline-outlinegrid',
    viewModel: {
        type: 'pivot-outline-outlinegrid'
    },
    
    // Not a Grid conig option. Used to group navigation.
    title: 'Outline layout',
    category: 'Pivoting',
    description: 'The outline layout is similar to the "Outline Form" layout in Excel.',

    multiSelect: true,
    columnLines: true,
    selModel: {
        type: 'rowmodel'
    },

    // Set this to false if multiple dimensions are configured on leftAxis and
    // you want to automatically expand the row groups when calculations are ready.
    startRowGroupsCollapsed: false,

    matrix: {
        type: 'local',
        store: { type: 'pivotoutlinestore' },

        // Set layout type to "outline". If this config is missing then the default
        // layout is "outline"
        viewLayoutType: 'outline',

        // Configure the aggregate dimensions. Multiple dimensions are supported.
        aggregate: [{
            dataIndex: 'value',
            header: 'Total',
            aggregator: 'sum',
            width: 90
        }],

        // Configure the left axis dimensions that will be used to generate
        // the grid rows
        leftAxis: [{
            dataIndex: 'person',
            header: 'Person',
            width: 80
        }, {
            dataIndex: 'company',
            header: 'Company',
            sortable: false,
            width: 80
        }],

        /**
         * Configure the top axis dimensions that will be used to generate
         * the columns.
         *
         * When columns are generated the aggregate dimensions are also used.
         * If multiple aggregation dimensions are defined then each top axis
         * result will have in the end a column header with children columns
         * for each aggregate dimension defined.
         */
        topAxis: [{
            dataIndex: 'country',
            header: 'Country'
        }]
    },

    listeners: {
        pivotgroupexpand: 'onPivotGroupExpand',
        pivotgroupcollapse: 'onPivotGroupCollapse'
    },

    tbar: [{
        text: 'Collapsing',
        menu: [{
            text: 'Collapse all',
            handler: 'collapseAll'
        }, {
            text: 'Expand all',
            handler: 'expandAll'
        }]
    }, {
        text: 'Subtotals position',
        menu: {
            defaults: {
                xtype: 'menucheckitem',
                group: 'subtotals',
                checkHandler: 'subtotalsHandler'
            },
            items: [{
                text: 'First',
                checked: true
            }, {
                text: 'Last'
            }, {
                text: 'None'
            }]
        }
    }, {
        text: 'Totals position',
        menu: {
            defaults: {
                xtype: 'menucheckitem',
                group: 'totals',
                checkHandler: 'totalsHandler'
            },
            items: [{
                text: 'First'
            }, {
                text: 'Last',
                checked: true
            }, {
                text: 'None'
            }]
        }
    }]
});

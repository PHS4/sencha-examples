/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.pivot.Grid.html
 */
Ext.define('Demo.view.outlinelayout.OutlineLayoutView', {
    extend: 'Ext.pivot.Grid',
    requires: [
        'Demo.view.outlinelayout.OutlineLayoutViewController',
        'Demo.view.outlinelayout.OutlineLayoutViewModel',
        'Ext.pivot.Grid'
    ],

    xtype: 'outline-layout',
    controller: 'outlinelayout',
    viewModel: {
        type: 'outline-layout-viewmodel'
    },

    iconCls: 'x-fa fa-table',
    category: 'Pivot',
    title: 'Outline Layout',
    description: 'The outline layout is similar to the "Outline Form" layout in Excel.',

    striped: true,

    selectable: {
        cells: true
    },
    bind: {
        store: '{salesdata}'
    },

    // Set this to false if multiple dimensions are configured on leftAxis and
    // you want to automatically expand the row groups when calculations are ready.
    startRowGroupsCollapsed: true,
    // Set this to false if multiple dimensions are configured on topAxis and
    // you want to automatically expand the col groups when calculations are ready.
    startColGroupsCollapsed: true,
    matrix: {
        type: 'local',

        // Set layout type to "outline"
        viewLayoutType: 'outline',
        // Configure the aggregate dimensions. Multiple dimensions are supported.
        aggregate: [{
            dataIndex: 'value',
            header: 'Total',
            aggregator: 'sum',
            width: 110
        }],
        // Configure the left axis dimensions that will be used to generate
        // the grid rows
        leftAxis: [{
            dataIndex: 'person',
            header: 'Person',
            width: 150
        }, {
            dataIndex: 'company',
            header: 'Company',
            sortable: false,
            width: 150
        }, {
            dataIndex: 'country',
            header: 'Country',
            width: 150
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
            dataIndex: 'date',
            header: 'Year'
        }]
    },
    listeners: {
        pivotgroupexpand: 'onPivotGroupExpand',
        pivotgroupcollapse: 'onPivotGroupCollapse'
    },


    items: [{
        xtype: 'toolbar',
        docked: 'top',
        ui: 'transparent',
        padding: '5 8',
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        defaults: {
            margin: '0 10 0 0',
            shadow: 'true',
            ui: 'action'
        },
        items: [{
            text: 'Expand all',
            handler: 'expandAll'
        }, {
            text: 'Collapse all',
            handler: 'collapseAll'
        }]
    }]
});
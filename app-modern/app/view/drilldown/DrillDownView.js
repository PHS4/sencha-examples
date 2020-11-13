/**
 * This example shows how to use the grouping feature of the Grid.
 */
Ext.define('Demo.view.drilldown.DrillDownView', {
    extend: 'Ext.pivot.Grid',


    requires: [
        'Demo.view.drilldown.DrillDownViewController',
        'Demo.view.drilldown.DrillDownViewModel',
        'Ext.pivot.plugin.DrillDown'

    ],

    xtype: 'drill-down',
    controller: 'drilldown',
    viewModel: {
        type: 'drill-down-viewmodel'
    },

    iconCls: 'x-fa fa-table',
    category: 'Pivot',
    title: 'Drilldown',
    description: 'The drill down plugin allows you to double click a cell to open the drill down window and see all records used to aggregate that cell. Double click a cell in a year column to open the drill down window',
   
    striped:true,

    plugins: {
        /**
         * https://docs.sencha.com/extjs/7.3.1/modern/Ext.pivot.plugin.DrillDown.html
         */
        pivotdrilldown: true
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
       
        // // Set layout type to "outline"
        // viewLayoutType: 'outline',
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
    }
});
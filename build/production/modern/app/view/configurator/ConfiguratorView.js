/**
 * https://docs.sencha.com/extjs/7.3.1/modern/Ext.pivot.Grid.html
 */
Ext.define('Demo.view.configurator.ConfiguratorView', {
    extend: 'Ext.pivot.Grid',


    requires: [
        'Demo.view.configurator.ConfiguratorViewController',
        'Demo.view.configurator.ConfiguratorViewModel',
        'Ext.pivot.plugin.Configurator',
        'Ext.pivot.plugin.Configurator'

    ],

    xtype: 'configurator-grid',
    controller: 'configurator',
    viewModel: {
        type: 'configurator-viewmodel'
    },

    iconCls: 'x-fa fa-table',
    category: 'Pivot',
    title: 'Configurator',
    description: 'The configurator plugin lets the end user configure the pivot grid',

    striped: true,

    bind: {
        store: '{salesdata}'
    },

    // Set this to false if multiple dimensions are configured on leftAxis and
    // you want to automatically expand the row groups when calculations are ready.
    startRowGroupsCollapsed: true,
    // Set this to false if multiple dimensions are configured on topAxis and
    // you want to automatically expand the col groups when calculations are ready.
    startColGroupsCollapsed: true,

    plugins: {
        /**
         * https://docs.sencha.com/extjs/7.3.1/modern/Ext.pivot.plugin.Configurator.html
         */
        pivotconfigurator: {
            // It is possible to configure a list of fields that can be used to
            // configure the pivot grid
            // If no fields list is supplied then all fields from the Store model
            // are fetched automatically
            fields: [{
                dataIndex: 'quantity',
                header: 'Qty',
                // You can even provide a default aggregator function to be used
                // when this field is dropped
                // on the agg dimensions
                aggregator: 'min',
                formatter: 'number("0")',
                settings: {
                    // Define here in which areas this field could be used
                    allowed: ['aggregate'],
                    // Set a custom style for this field to inform the user that it
                    // can be dragged only to "Values"
                    style: {
                        fontWeight: 'bold'
                    },
                    // Define here custom formatters that ca be used on this dimension
                    formatters: {
                        '0': 'number("0")',
                        '0%': 'number("0%")'
                    }
                }
            }, {
                dataIndex: 'value',
                header: 'Value',
                settings: {
                    // Define here in which areas this field could be used
                    allowed: 'aggregate',
                    // Define here what aggregator functions can be used when this
                    // field is used as an aggregate dimension
                    aggregators: ['sum', 'avg', 'count'],
                    // Set a custom style for this field to inform the user that it
                    // can be dragged only to "Values"
                    style: {
                        fontWeight: 'bold'
                    },
                    // Define here custom renderers that can be used on this dimension
                    renderers: {
                        'Colored 0,000.00': 'coloredRenderer'
                    },
                    // Define here custom formatters that ca be used on this dimension
                    formatters: {
                        '0': 'number("0")',
                        '0.00': 'number("0.00")',
                        '0,000.00': 'number("0,000.00")',
                        '0%': 'number("0%")',
                        '0.00%': 'number("0.00%")'
                    }
                }
            }, {
                dataIndex: 'company',
                header: 'Company',
                settings: {
                    // Define here what aggregator functions can be used when this
                    // field is used as an aggregate dimension
                    aggregators: ['count']
                }
            }, {
                dataIndex: 'country',
                header: 'Country',
                settings: {
                    // Define here what aggregator functions can be used when this
                    // field is used as an aggregate dimension
                    aggregators: ['count']
                }
            }, {
                dataIndex: 'person',
                header: 'Person',
                settings: {
                    // Define here what aggregator functions can be used when this
                    // field is used as an aggregate dimension
                    aggregators: 'count'
                }
            }, {
                dataIndex: 'year',
                header: 'Year',
                settings: {
                    // Define here the areas in which this field is fixed and cannot
                    // be moved from
                    fixed: ['topAxis']
                }
            }, {
                dataIndex: 'month',
                header: 'Month',
                labelRenderer: 'monthLabelRenderer',
                settings: {
                    // Define here what aggregator functions can be used when this
                    // field is used as an aggregate dimension
                    aggregators: ['count'],
                    // Define here in which areas this field could be used
                    allowed: ['leftAxis', 'topAxis']
                }
            }]
        }
    },
    matrix: {
        type: 'local',
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


    items: [
        /**
         * https://docs.sencha.com/extjs/7.3.1/modern/Ext.Toolbar.html
         */
        {
            xtype: 'toolbar',
            docked: 'top',
            ui: 'transparent',
            padding: '5 8',
            defaults: {
                shadow: 'true',
                ui: 'action'
            },
            items: [{
                text: 'Configuration',
                handler: 'showConfigurator'
            }]
        }]
});
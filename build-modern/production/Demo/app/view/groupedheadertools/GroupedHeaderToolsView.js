/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.Grid.html
 */
Ext.define('Demo.view.groupedheadertools.GroupedHeaderToolsView', {
    extend: 'Ext.grid.Grid',


    requires: [
        'Demo.view.groupedheadertools.GroupedHeaderToolsViewController',
        'Demo.view.groupedheadertools.GroupedHeaderToolsViewModel',
        'Ext.ux.rating.Picker'
    ],

    xtype: 'grouped-header-tools',
    controller: 'groupedheadertools',
    viewModel: {
        type: 'grouped-header-tools-viewmodel'
    },

    iconCls: 'x-fa fa-table',
    category: 'Row Operations',
    title: 'Grouped Header Tools',
    description: 'Add buttons/"tools" to a grouped header row.',

    grouped: true,
    /**
     * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.Grid.html#cfg-groupFooter
     */
    groupFooter: {
        /**
         * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.SummaryRow.html
         */
        xtype: 'gridsummaryrow'
    },

    /**
     * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.Grid.html#cfg-groupHeader
     */
    groupHeader: {
        // Item headers can also have tools.
        tools: {
            print: {
                handler: 'onGroupPrint',
                tooltip: 'Print group...',

                // Item headers have "start" (the default),
                // "end" and "tail" zones:
                zone: 'tail'
            },

            save: {
                handler: 'onGroupSave',
                weight: -1
            },

            refresh: 'onGroupRefresh'
        }
    },

    helperTpl: [
        '<ul>',
        '<tpl for="group.items">',
        '<li>{data.name:htmlEncode}</li>',
        '</tpl>',
        '</ul>'
    ],

    bind: {
        store: '{restaurants}'
    },

    /**
     * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.Grid.html#cfg-columns
     */
    columns: [{
        text: 'Name',
        dataIndex: 'name',
        flex: 1,

        // Adjust the header text when grouped by this column:
        groupHeaderTpl: '{columnName}: {value:htmlEncode}'
    }, {
        text: 'Cuisine',
        dataIndex: 'cuisine',
        flex: 1
    }, {
        text: 'Rating',
        dataIndex: 'rating',

        summaryCell: 'numbercell',

        // Adjust the header text when grouped by this column:
        groupHeaderTpl: '{value:repeat("★")} ({value:plural("Star")})',

       /**
       * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.cell.Cell.html#cfg-tools
       */
        cell: {
            /**
             * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.cell.Widget.html
             */
            xtype: 'widgetcell',
            widget: {
                xtype: 'rating',
                tip: 'Set to {tracking:plural("Star")}'
            }
        }
    }]
});
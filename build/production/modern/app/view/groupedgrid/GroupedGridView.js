/**
 * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.Grid.html
 */
Ext.define('Demo.view.groupedgrid.GroupedGridView', {
    extend: 'Ext.grid.Grid',
    requires: [
        'Demo.view.groupedgrid.GroupedGridViewController',
        'Demo.view.groupedgrid.GroupedGridViewModel',
        'Ext.grid.cell.Number',
        'Ext.grid.cell.Widget',
        'Ext.grid.SummaryRow',
        'Ext.ux.rating.Picker'
    ],

    xtype: 'grouped-grid',
    controller: 'groupedgrid',
    viewModel: {
        type: 'grouped-grid-viewmodel'
    },

    iconCls: 'x-fa fa-table',
    category: 'Row Operations',
    description: 'Group grid rows.',
    title: 'Grouped Grid Data',

    columnLines: true,
    grouped: true,
    groupFooter: {
        xtype: 'gridsummaryrow'
    },

    bind: {
        store: '{restaurants}'
    },

    /**
     * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.Grid.html#cfg-columns
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
        * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.cell.Cell.html#cfg-tools
        */
        cell: {
            /**
             * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.cell.Widget.html
             */
            xtype: 'widgetcell',
            widget: {
                xtype: 'rating',
                tip: 'Set to {tracking:plural("Star")}'
            }
        }
    }]
});
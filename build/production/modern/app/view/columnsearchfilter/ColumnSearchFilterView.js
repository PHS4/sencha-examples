/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.Grid.html
 */
Ext.define('Demo.view.columnsearchfilter.ColumnSearchFilterView', {
    extend: 'Ext.grid.Grid',
    requires: [
        'Demo.view.columnsearchfilter.ColumnSearchFilterViewController',
        'Demo.view.columnsearchfilter.ColumnSearchFilterViewModel',
        'Ext.grid.filters.Plugin'
    ],

    xtype: 'column-search-filter',
    controller: 'columnsearchfilter',
    viewModel: {
        type: 'column-search-filter-viewmodel'
    },

    iconCls: 'x-fa fa-filter',
    category: 'Column Operations',
    title: 'Column Search Filter',
    description:'Add a search field to each column\'s drop down menu to filter the grid.',

    plugins: {
        /**
         * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.filters.Plugin.html
         */
        gridfilters: true
    },

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

    }, {
        text: 'Cuisine',
        dataIndex: 'cuisine',
        flex: 1
    }]
});
/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.app.ViewModel.html
 */
Ext.define('Demo.view.columnsearchfilter.ColumnSearchFilterViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.column-search-filter-viewmodel',

    requires: [
        'Ext.data.summary.Average'
    ],

    stores:{
        restaurants:{
            
            fields: [
                'name',
                'cuisine',
                {
                    name: 'rating',
                    summary: 'average'
                }
            ],
            sorters: ['cuisine', 'name'],
            autoLoad: true,

            proxy: {
                type: 'ajax',
                url: 'app/view/groupedgrid/data.json',
                reader: {
                    type: 'json'
                }
            }
        }
    }
});
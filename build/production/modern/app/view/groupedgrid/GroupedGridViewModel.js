/**
 * https://docs.sencha.com/extjs/7.3.1/modern/Ext.app.ViewModel.html
 */
Ext.define('Demo.view.groupedgrid.GroupedGridViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.grouped-grid-viewmodel',
    stores: {
        restaurants: {
            fields: [
                'name',
                'cuisine',
                {
                    name: 'rating',
                    summary: 'average'
                }
            ],
            groupField: 'cuisine',
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

/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.app.ViewModel.html
 */
Ext.define('Demo.view.groupedheadertools.GroupedHeaderToolsViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.grouped-header-tools-viewmodel',
 
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
                url: 'app/view/groupedheadertools/data.json',
                reader: {
                    type: 'json'
                }
            }
        }
    }
});

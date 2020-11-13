/**
 * https://docs.sencha.com/extjs/7.3.1/modern/Ext.app.ViewModel.html
 */
Ext.define('Demo.view.summaryrow.SummaryRowViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.summary-row-viewmodel',
    stores: {
        companies: {
            model: 'Demo.view.summaryrow.SummaryRowStoreModel',
            sorters: {
                property: 'name',
                direction: 'DESC'
            },
            autoLoad: true,

            proxy: {
                type: 'ajax',
                url: 'app/view/summaryrow/data.json',
                reader: {
                    type: 'json'
                }
            }
        }
    }
});

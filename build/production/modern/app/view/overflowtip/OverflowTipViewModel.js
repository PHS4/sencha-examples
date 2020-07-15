/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.app.ViewModel.html
 */
Ext.define('Demo.view.overflowtip.OverflowTipViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.overflow-tip-viewmodel',
    stores:{
        companies:{
            model: 'Demo.view.overflowtip.OverflowTipStoreModel', 
            sorters: {
                property: 'name',
                direction: 'DESC'
            },
            autoLoad: true,
            
            proxy: {
                type: 'ajax',
                url: 'app/view/overflowtip/data.json',
                reader: {
                    type: 'json'
                }
            }
        }
    }
});

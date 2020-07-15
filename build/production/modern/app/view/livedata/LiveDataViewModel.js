/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.app.ViewModel.html
 */
Ext.define('Demo.view.livedata.LiveDataViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.advanced-live-livedatagrid',

    data: {

        tickDelay: 200,

        flashBackground: false
    },
    parent: null,
    scheduler: {
        tickDelay: 200
    }
});

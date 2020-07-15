Ext.define('Demo.view.livedata.LiveDataViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.advanced-live-livedatagrid',
    
    data: {

        tickDelay: Ext.view.AbstractView.updateDelay,

        flashBackground: false
    }
});

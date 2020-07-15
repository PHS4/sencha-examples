/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.app.ViewController.html
 */
Ext.define('Demo.view.configurator.ConfiguratorViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.configurator',
    showConfigurator: function() {
        this.getView().showConfigurator();
    },

    yearLabelRenderer: function(value) {
        return 'Year ' + value;
    },

    monthLabelRenderer: function(value) {
        return Ext.Date.monthNames[value];
    },

    coloredRenderer: function(v, record, dataIndex, cell, column) {
        cell.setStyle(Ext.String.format('color: {0};', v > 500 ? 'green' : 'red'));

        return Ext.util.Format.number(v, '0,000.00');
    }
});
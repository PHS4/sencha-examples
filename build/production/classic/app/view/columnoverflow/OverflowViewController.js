/**
 * https://docs.sencha.com/extjs/7.3.1/classic/Ext.app.ViewController.html
 */
Ext.define('Demo.view.columnoverflow.OverflowViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.overflow-overflowtooltipgrid',
    
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.app.ViewController.html#cfg-bindings
     */
    bindings: {},

    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.app.ViewController.html#cfg-control
     */
    control: {},

    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.app.ViewController.html#cfg-id
     */
    id: null,

    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.app.ViewController.html#cfg-listen
     */
    listen: {},

    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.app.ViewController.html#cfg-listeners
     */
    listeners: {},

    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.app.ViewController.html#cfg-routes
     */
    routes: {},

    renderTooltip: function (value, metaData) {
        metaData.tdAttr = Ext.String.format('data-qtip="{0}"', value);
        return value;
    }
});

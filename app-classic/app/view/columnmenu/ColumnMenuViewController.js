/**
 * https://docs.sencha.com/extjs/7.3.1/classic/Ext.app.ViewController.html
 */
Ext.define('Demo.view.columnmenu.ColumnMenuViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.column-columnmenuview',

    /**
     * ViewController Template Method
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.app.ViewController.html#method-afterRender
     */
    afterRender: function () {
        
        Log.event(arguments.callee.name, arguments, this);
        
        /**
         * https://docs.sencha.com/extjs/7.3.1/classic/Ext.panel.Table.html#method-getHeaderContainer
         */
        var menu = this.getView().getHeaderContainer().getMenu();

        /**
         * https://docs.sencha.com/extjs/7.3.1/classic/Ext.menu.Menu.html
         */
        menu.add([
            {
                text: 'Visible for All Columns',
                iconCls: 'x-fa fa-question',
                handler: this.onCustomMenuItemClick
            }, 
            {
                text: 'Name Column Only',
                iconCls: 'x-fa fa-exclamation',
                // this config is just made up. It's only used to identify
                // the for show and hide based on column. An ItemId or similar
                // could also be used in a similar way.
                showForDataIndex: 'name',
                handler: this.onCustomMenuItemClick
            }
        ]);

        /**
         * Add an event listener to handle show and hide of 
         * certain menu items based on the column.
         */
        menu.on('beforeshow', this.onBeforeMenuShow);
    },

    /**
     * The event handler is scoped to the menu so `this` isn't this controller.
     */
    onBeforeMenuShow: function () {

        Log.event(arguments.callee.name, arguments, this);

        var dataIndex = this.activeHeader.dataIndex;
        
        // For each menuitem with an attribute of showForDataIndex
        // check to see if it matches the current column dataIndex.
        //
        this.query('[showForDataIndex]').forEach(item => {
            if (item.showForDataIndex === dataIndex) {
                item.show();
            } else {
                item.hide();
            }
        });
    },

    onCustomMenuItemClick: function (item) {

        Log.event(arguments.callee.name, arguments, this);
        
        var { dataIndex, text } = item.up('menu').activeHeader;
        Ext.toast('dataIndex: "' + dataIndex + '" Text: "' + text + '" Menu Item Was Pressed.');
    }
});

/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.app.ViewController.html
 */
Ext.define('Demo.view.menugridrow.MenuGridRowViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.menugridrow',

    init: function (grid) {
        if (Ext.os.is.Desktop) {
            grid.el.on({
                scope: this,
                contextmenu: this.onContextMenu
            });
        }
    },

    destroy: function () {
        this.toolMenu = Ext.destroy(this.toolMenu);

        this.callParent();
    },

    getMenu: function () {
        var menu = this.toolMenu,
            view = this.getView();

        if (!menu) {
            this.toolMenu = menu = Ext.create(Ext.apply({
                ownerCmp: view
            }, view.toolContextMenu));
        }

        return menu;
    },

    updateMenu: function (record, el, e, align) {
        var menu = this.getMenu();

        this.getViewModel().set('record', record.getData());
        menu.autoFocus = !e.pointerType;
        menu.showBy(el, align);
    },

    onContextMenu: function (e) {
        var grid = this.getView(),
            target = e.getTarget(grid.itemSelector),
            item;

        if (target) {
            e.stopEvent();

            item = Ext.getCmp(target.id);

            this.updateMenu(item.getRecord(), item.el, e, 't-b?');
        }
    },

    onMenu: function (grid, context) {
        this.updateMenu(context.record, context.tool.el, context.event, 'r-l?');
    },

    addButton: function () {
        Ext.Msg.alert('Add', 'You tapped the Add button!', Ext.emptyFn);
    }
});

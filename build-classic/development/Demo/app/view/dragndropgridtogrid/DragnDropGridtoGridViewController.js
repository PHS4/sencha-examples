Ext.define('Demo.view.dragndropgridtogrid.DragnDropGridtoGridViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dndtogrid-gridtogrid',

    beforeRender: function () {
        try {
            var store = this.lookup('grid1').store,
                data = (this.myData = []),
                obj;

            // Keep a copy of the original data for reset:
            store.each(function (rec) {
                data.push(obj = Ext.apply({}, rec.data));
                delete obj.id;
            });
        } catch (e) {
            Log.error(e, arguments);
        }
    },

    onDrop: function (onRec, rec, dropPosition, title) {
        var dropOn = onRec ? ' ' + dropPosition + ' ' + onRec.get('name') : ' on empty view';
        Ext.toast(title, 'Dropped ' + rec.get('name') + dropOn);
    },

    onDropGrid1: function (node, data, dropRec, dropPosition) {
        this.onDrop(dropRec, data.records[0], dropPosition, 'Drag from right to left');
    },

    onDropGrid2: function (node, data, dropRec, dropPosition) {
        this.onDrop(dropRec, data.records[0], dropPosition, 'Drag from left to right');
    },

    onResetClick: function () {
        this.lookup('grid1').getStore().loadData(this.myData);
        this.lookup('grid2').getStore().removeAll();
    }
});

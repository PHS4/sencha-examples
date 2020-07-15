Ext.define('Demo.view.singleselectcheck.SingleSelectCheckViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.singleselectcheck',

    onSelection: function () {
        Log.log(arguments.callee.name, arguments, this);
    },

    onCheck: function (t, index) {
        var grid = t.up('grid'),
            records = grid.getStore().getData(),
            i;
        for (i = 0; i < records.items.length; i++) {
            if (i !== index) {
                records.items[i].set('check', false);
            }
        }
    }
});

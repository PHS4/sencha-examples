/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.app.ViewController.html
 */
Ext.define('Demo.view.livedata.LiveDataViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.advanced-live-livedatagrid',
    init: function(view) {
        var store = view.getStore();

        this.callParent();
        if (store.isLoaded() && store.getCount()) {
            this.startTicker(store);
        }
        view.getStore().on('load', 'onStoreLoad', this);
    },

    bindings:{
        renderChange:'{change}'
    },

    onStoreLoad: function (store) {
        this.startTicker(store);
    },

    startTicker: function(store) {
        if (this.timer) {
            return;
        }

        store.removeAt(15, 70);

        var count = store.getCount(),
            i, j, rec;

        for (i = 0; i < count; i++) {
            rec = store.getAt(i);
            rec.beginEdit();

            for (j = 0; j < 10; j++) {
                rec.addPriceTick();
            }

            rec.endEdit(true);
        }

        this.timer = Ext.interval(function () {
            rec = store.getAt(Ext.Number.randomInt(0, store.getCount() - 1));
            rec.addPriceTick();
        }, Ext.isIE || !Ext.is.Desktop ? 100 : 20);
    },

    onTickDelayChange: function(slider, value, oldValue) {
        this.getView().lookupViewModel().getScheduler().setTickDelay(value);
    },

    destroy: function() {
        Ext.uninterval(this.timer);
    },

    renderChange: function (value) {
        console.log(value)
        return this.renderSign(value, '0.00');
    },

    renderPercent: function (value) {
        return this.renderSign(value, '0.00%');
    },

    renderSign: function (value, format) {
        var text = Ext.util.Format.number(value, format),
            tpl = this.signTpl;

        if (Math.abs(value) > 0.1) {
            if (!tpl) {
                this.signTpl = tpl = this.getView().lookupTpl('signTpl');
            }

            text = tpl.apply({
                text: text,
                value: value
            });
        }

        return text;
    }
});
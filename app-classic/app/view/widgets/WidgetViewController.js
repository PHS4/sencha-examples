Ext.define('Demo.view.widgets.WidgetViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.widgets-widgetgrid',

    onButtonWidgetClick: function (btn) {
        var rec = btn.lookupViewModel().get('record');

        Ext.Msg.alert("Button clicked", "Hey! " + rec.get('name'));
    },

    onButtonToggle: function (btn, pressed) {
        var header;

        if (this.processing) {
            return;
        }

        this.processing = true;
        header = this.headerCt.child('[text=' + btn.text + ']');

        header.setVisible(pressed);
        this.processing = false;
    },

    onColumnToggle: function (headerCt, header) {
        var btn;

        if (this.processing) {
            return;
        }

        this.processing = true;
        btn = this.getView().down('toolbar').child('[text=' + header.text + ']');

        btn.setPressed(header.isVisible());
        this.processing = false;
    }
});

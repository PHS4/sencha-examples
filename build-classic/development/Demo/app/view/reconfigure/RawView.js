/**
 * Customized Panel to allow data binding on the infoText config.
 */
Ext.define('Demo.view.reconfigure.RawData', {
    extend: 'Ext.panel.Panel',
    xtype: 'reconfigurerawview',

    config: {
    
        title: 'Raw Data',

        infoText: undefined
    },

    layout: 'fit',

    initComponent: function () {
        var me = this;

        Ext.apply(me, {
            dockedItems: [{
                dock: 'top',
                xtype: 'container',
                cls: 'instructions',
                html: me.infoText,
                hidden: (!me.infoText)
            }],
            items: [{
                xtype: 'code'
            }]
        });
        me.callParent(arguments);
    },

    setValue: function(value) {
        this.down('code').setValue(value);
    },

    getValue: function(value) {
        return this.down('code').getValue(value);
    }
});
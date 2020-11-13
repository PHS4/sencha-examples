/**
 * https://docs.sencha.com/extjs/7.3.1/classic/Ext.app.ViewController.html
 */
Ext.define('Demo.view.editablepopup.EditablePopupViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.editable-editablepopupgrid',

    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.app.ViewController.html#cfg-listen
     */
    listen: {
        component: {
            /**
             * References the current view
             */
            '#': {
                rowdblclick: 'openFormWindow'
            }
        }
    },

    /**
     * This will be used to save a reference to the window once it's created
     * and it's lost across method calls.
     */
    win: null,

    openFormWindow: function (view, record, element, rowIndex, e, eOpts) {
        
        Log.event(arguments.callee.name, arguments, this);
        
        /**
         * If the window instance is already created just reuse it. 
         * If not then create it.
         */
        if (!this.win) {
            
            Log.log('The window doesn\'t exist so creating it now.', null, this);

            this.win = Ext.create('Ext.window.Window', {
                layout: 'fit',
                width: 400,
                closeAction: 'destroy',
                animateTarget: element,
                category: '',
    title: 'Edit',
                iconCls: 'x-fa fa-building',
                items: {
                    xtype: 'form',
                    width: 300,
                    bodyPadding: 10,
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%',
                        labelAlign: 'top'
                    },
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: 'Company',
                        name: 'name'
                    }, {
                        xtype: 'textareafield',
                        fieldLabel: 'Description',
                        name: 'desc'
                    }, {
                        xtype: 'numberfield',
                        fieldLabel: 'Price',
                        name: 'price',
                    }, {
                        xtype: 'displayfield',
                        fieldLabel: 'Change',
                        name: 'priceChange',
                    }, {
                        xtype: 'displayfield',
                        fieldLabel: '% Change',
                        name: 'priceChangePct',
                    }, {
                        xtype: 'datefield',
                        fieldLabel: 'Last Updated',
                        name: 'priceLastChange',
                    }],

                    buttons: [{
                        text: 'Save',
                        handler: this.save
                    }]
                }
            });

            /**
             * On close reset this.win to null to prevent any 
             * issues after close.
             */
            this.win.on('close', function (e) {
                this.win = null;
            }, this);

        } else {
            
            Log.log('The window already exists so only reset, load and show', null, this);
        }
        
        this.win.down('form').reset();
        this.win.down('form').loadRecord(record);
        this.win.showBy(element);
    },

    /**
     * On save click.
     */
    save: function (btn, eOpts) {
        
        Log.event(arguments.callee.name, arguments, this);

        var form = btn.up('form').getForm();

        /**
         * https://docs.sencha.com/extjs/7.3.1/classic/Ext.data.Model.html#method-commit
         */
        form.updateRecord().getRecord().commit();
    }
});

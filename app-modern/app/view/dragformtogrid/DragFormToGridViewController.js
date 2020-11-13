/**
 * https://docs.sencha.com/extjs/7.3.1/modern/Ext.app.ViewController.html
 */
Ext.define('Demo.view.dragformtogrid.DragFormToGridViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dragformtogrid',
    
    init: function() {
        this.registerDragZone();
        this.registerDropZone();
    },

    dragZone: null,

    dropZone: null,

    ddEl: null,

    registerDragZone: function() {
        var me = this,
            patientView = me.lookup('patientView'),
            touchEvents = Ext.supports.Touch && Ext.supports.TouchEvents;

        me.dragZone = Ext.create('Ext.plugin.dd.DragZone', {
            element: patientView.bodyElement,
            handle: '.patient-source',
            view: patientView,
            $configStrict: false,
            activateOnLongPress: touchEvents ? true : false,
            proxy: {
                cls: 'x-proxy-drag-el patient-proxy-el'
            },

            getDragText: function(info) {
                var selector = '.x-listitem',
                    el = Ext.fly(info.eventTarget).up(selector);

                return el.dom.innerHTML;
            },

            getDragData: function(e) {
                return {
                    patientData: this.view.mapToRecord(e)
                };
            }
        });
    },

    registerDropZone: function() {
        var me = this,
            hospitalView = me.lookup('hospitalView');

        me.dropZone = Ext.create('Ext.plugin.dd.DropZone', {
            element: hospitalView.bodyElement,
            view: hospitalView,
            $configStrict: false,

            onDragMove: function(info) {

                var me = this;
                var ddManager = Ext.dd.Manager;
                var targetEl = ddManager.getTargetEl(info);
                var rowBody = Ext.fly(targetEl) && Ext.fly(targetEl);
                var isRowBody = rowBody.hasCls('hospital-target');
                
                rowBody = !isRowBody ? Ext.fly(targetEl).parent('.x-rowbody') : rowBody;
                isRowBody = rowBody && rowBody.hasCls('hospital-target');
                
                me.toggleDropMarker(info, false);

                if (!isRowBody) return;
                
                me.ddEl = rowBody;
                
                me.toggleDropMarker(info, true);
            },

            onDrop: function(info) {
                var me = this;

                if (!me.ddEl) return;
                
                var row = me.ddEl.component;
                var hospital = row.getRecord();
                var patient = info.data.dragData.patientData;

                // Check if the name already exists on this record.
                if (hospital.get('patients').indexOf(patient.get('name')) !== -1) {
                    return Ext.toast(`${patient.get('name')} is already a patient of hospital ${hospital.get('name')}`);
                }

                // Push data to model field called `patients`
                hospital.get('patients').push(patient.get('name'));
                
                // commit the changes to the model instance.
                hospital.commit();
                
                me.toggleDropMarker(info, false);
            },

            toggleDropMarker: function(info, state) {
                var me = this;
                var ddManager = Ext.dd.Manager;

                if (!me.ddEl) return;

                ddManager.toggleTargetNodeCls(me.ddEl, 'hospital-target-hover', state);
                ddManager.toggleProxyCls(info, me.validDropCls, state);

                if (!state) me.ddEl = null;
            }
        });
    },

    onRemoveTapped: function(e, target) {

        var patientIndex = +target.getAttribute('index');
        var rowBody = Ext.Component.from(target);
        var hospital = rowBody.getRecord();

        if (patientIndex === -1) return;
        
        // remove the name from patients field and save modified array to variable
        var patients = Ext.Array.removeAt(hospital.get('patients'), patientIndex, 0) || [];
        
        // update the patients field.
        hospital.set('patients', patients);
        hospital.commit();
    },

    destroy: function() {
        var me = this;

        me.dragZone = me.dropZone = Ext.destroy(me.dragZone, me.dragZone);
        me.callParent();
    }
});

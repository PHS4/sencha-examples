Ext.define('Demo.view.export.ExportViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.rendering-export-exportgrid',

    exportTo: function (btn) {
        Log.event(arguments.callee.name, arguments, this);

        try {
            var cfg = Ext.merge({
                category: '',
    title: 'Grid export demo',
                fileName: 'GridExport' + '.' + (btn.cfg.ext || btn.cfg.type)
            }, btn.cfg);

            this.getView().saveDocumentAs(cfg);
        } catch (e) {
            Log.error(e, arguments, this);
        }
    },

    onBeforeDocumentSave: function (view) {
        Log.event(arguments.callee.name, arguments, this);

        this.timeStarted = Date.now();
        view.mask('Document is prepared for export. Please wait ...');
        
        Ext.log('export started');
    },

    onDocumentSave: function (view) {
        Log.event(arguments.callee.name, arguments, this);

        view.unmask();
        
        Ext.log('export finished; time passed = ' + (Date.now() - this.timeStarted));
    },

    onDataReady: function () {
        Log.event(arguments.callee.name, arguments, this);
        
        Ext.log('data ready; time passed = ' + (Date.now() - this.timeStarted));
    }
});

Ext.define('Demo.util.Log', {
    alternateClassName: ['Log', 'Logger'],
    singleton: true,
    requires: [
        'Demo.store.Logs',
        'Demo.ux.Console'
    ],

    viewport: null,
    store: null,
    grid: null,

    constructor: function (config) {
        this.store = Ext.getStore('logs');
    },

    addLog: function (log) {
        var grid = this.grid;
        var store = this.store;
        var record = {
            timestamp: new Date(),
            class: log.scope ? log.scope.$className : '',
            type: log.type || 'INFO',
            method: log.method || arguments.callee.caller.name,
            message: log.message,
            args: Object.values(log.args).map((arg, index) => {
                var param;
                var type = arg ? arg.constructor.name : undefined;
                switch (type) {
                    case 'constructor':
                        param = arg.$className;
                        break;
                    case 'Array':
                        if (arg[0].constructor.name == 'constructor') {
                            param = '[' + arg[0].$className + ']';
                        } else {
                            param = '[' + arg + ']';
                        }
                        break;
                    case 'String':
                    case 'Number':
                    default:
                        param = arg;
                }
                return ` ${param} `;
            })
        };

        // store.add(record);
        
        // if (this.getViewport()) {
        //     this.showDocked();
        // } else {
        //     console.log(...Object.values(record));
        // }
        return this;
    },

    log: function (message, args, scope) {
        this.addLog({
            type: 'LOG',
            method: arguments.callee.caller.name,
            message: message || '',
            args: args || [],
            scope: scope
        });
    },

    event: function (message, args, scope) {
        this.addLog({
            type: 'EVENT',
            method: arguments.callee.caller.name,
            message: message,
            args: args || [],
            scope: scope
        });
    },

    error: function (error, args, scope) {
        this.addLog({
            type: 'ERROR',
            method: arguments.callee.caller.name,
            message: error.message,
            args: args || [],
            scope: scope
        });
    },

    json: function (message, args, scope) {
        this.addLog({
            type: 'JSON',
            method: arguments.callee.caller.name,
            message: JSON.stringify(message),
            args: args || [],
            scope: scope
        });
    },

    getViewport: function () {
        return this.viewport || Ext.getApplication().getMainView();
    },

    getConsole: function () {
        Log.log(arguments.callee.name, arguments);
        return this.grid;
    },

    showWindow: function () {
        
        if (this.grid && this.grid.floating) {
            this.grid.show();
        } else {
            this.grid = Ext.create('Demo.ux.Console', {
                store: this.store,
                floating: true,
                width: 600
            });
        }
        return this;
    },

    showDocked: function () {
        if (this.grid && this.grid.docked == 'bottom') {
            this.grid.show();
        } else {
            this.grid = Ext.create('Demo.ux.Console', {
                store: this.store,
                docked: 'bottom',
                width: '100%'
            });
            this.dock();
        }
        return this;
    },

    hide: function () {
        Log.event(arguments.callee.name, arguments, this);

        if (this.grid) {
            this.grid.hide();
        }
    },
    
    dock: function () {
        Log.event(arguments.callee.name, arguments, this);
        this.getViewport().addDocked(this.grid, -1);
    },

    undock: function () {
        Log.event(arguments.callee.name, arguments, this);
        this.getViewport().removeDocked(this.grid);
    }
});



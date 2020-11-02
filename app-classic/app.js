/**
 * Basically adding an override here that isn't relevant aside 
 * from oroganizing the demos/examples in the navigation.
 */
Ext.panel.Panel.prototype.category = 'Misc.';
Ext.panel.Panel.prototype.description = '';

/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Demo.Application',

    name: 'Demo',

    requires: [
        'Ext.window.Toast',

        'Common.*',
        // This will automatically load all classes in the Demo namespace
        // so that application classes do not need to require each other.
        'Demo.*'
    ],

    // The name of the initial view to create.
    mainView: 'Demo.view.main.Main'
});

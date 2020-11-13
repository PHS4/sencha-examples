/**
 * https://docs.sencha.com/extjs/7.3.1/classic/Ext.app.ViewController.html
 */
Ext.define('Demo.view.pivotmatrix.PivotMatrixViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.pivot-matrix-matrixgrid',
    
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.app.ViewController.html#cfg-bindings
     */
    bindings: {},

    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.app.ViewController.html#cfg-control
     */
    control: {},

    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.app.ViewController.html#cfg-id
     */
    id: null,

    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.app.ViewController.html#cfg-listen
     */
    listen: {},

    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.app.ViewController.html#cfg-listeners
     */
    listeners: {},

    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.app.ViewController.html#cfg-routes
     */
    routes: {},

    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.pivot.Grid.html#event-pivotbeforereconfigure
     */
    pivotbeforereconfigure: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.pivot.Grid.html#event-pivotbeforerequest
     */
    pivotbeforerequest: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.pivot.Grid.html#event-pivotbuildtotals
     */
    pivotbuildtotals: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.pivot.Grid.html#event-pivotcolumnsbuilt
     */
    pivotcolumnsbuilt: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.pivot.Grid.html#event-pivotdone
     */
    pivotdone: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.pivot.Grid.html#event-pivotgroupcellclick
     */
    pivotgroupcellclick: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.pivot.Grid.html#event-pivotgroupcellcontextmenu
     */
    pivotgroupcellcontextmenu: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.pivot.Grid.html#event-pivotgroupcelldblclick
     */
    pivotgroupcelldblclick: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.pivot.Grid.html#event-pivotgroupclick
     */
    pivotgroupclick: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.pivot.Grid.html#event-pivotgroupcollapse
     */
    pivotgroupcollapse: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.pivot.Grid.html#event-pivotgroupcontextmenu
     */
    pivotgroupcontextmenu: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.pivot.Grid.html#event-pivotgroupdblclick
     */
    pivotgroupdblclick: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.pivot.Grid.html#event-pivotgroupexpand
     */
    pivotgroupexpand: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.pivot.Grid.html#event-pivotitemcellclick
     */
    pivotitemcellclick: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.pivot.Grid.html#event-pivotitemcellcontextmenu
     */
    pivotitemcellcontextmenu: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.pivot.Grid.html#event-pivotitemcelldblclick
     */
    pivotitemcelldblclick: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.pivot.Grid.html#event-pivotitemclick
     */
    pivotitemclick: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.pivot.Grid.html#event-pivotitemcontextmenu
     */
    pivotitemcontextmenu: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.pivot.Grid.html#event-pivotitemdblclick
     */
    pivotitemdblclick: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.pivot.Grid.html#event-pivotmodelbuilt
     */
    pivotmodelbuilt: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.pivot.Grid.html#event-pivotprogress
     */
    pivotprogress: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.pivot.Grid.html#event-pivotreconfigure
     */
    pivotreconfigure: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.pivot.Grid.html#event-pivotrecordbuilt
     */
    pivotrecordbuilt: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.pivot.Grid.html#event-pivotrequestexception
     */
    pivotrequestexception: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.pivot.Grid.html#event-pivotstart
     */
    pivotstart: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.pivot.Grid.html#event-pivotstorebuilt
     */
    pivotstorebuilt: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.pivot.Grid.html#event-pivottotalcellclick
     */
    pivottotalcellclick: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.pivot.Grid.html#event-pivottotalcellcontextmenu
     */
    pivottotalcellcontextmenu: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.pivot.Grid.html#event-pivottotalcelldblclick
     */
    pivottotalcelldblclick: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.pivot.Grid.html#event-pivottotalclick
     */
    pivottotalclick: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.pivot.Grid.html#event-pivottotalcontextmenu
     */
    pivottotalcontextmenu: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    },
    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.pivot.Grid.html#event-pivottotaldblclick
     */
    pivottotaldblclick: function () {
        console.log(this.$className + '.' + arguments.callee.name);
    }
});

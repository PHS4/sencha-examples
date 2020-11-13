/**
 * https://docs.sencha.com/extjs/7.3.1/modern/Ext.app.ViewController.html
 */
Ext.define('Demo.view.tabularlayout.TabularLayoutViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tabularlayout',
    yearLabelRenderer: function (value) {
        return 'Year ' + value;
    },

    monthLabelRenderer: function (value) {
        return Ext.Date.monthNames[value];
    },

    expandAll: function () {
        this.getView().expandAll();
    },

    collapseAll: function () {
        this.getView().collapseAll();
    },

    onPivotBeforeUpdate: function () {
        Ext.log('Event "pivotbeforeupdate" fired');
    },

    onPivotUpdate: function () {
        Ext.log('Event "pivotupdate" fired');
    },

    onPivotGroupExpand: function (matrix, type, group) {
        Ext.log((group ? 'Group "' + group.name + '" expanded on ' : 'All groups expanded on ') + type);
    },

    onPivotGroupCollapse: function (matrix, type, group) {
        Ext.log((group ? 'Group "' + group.name + '" collapsed on ' : 'All groups collapsed on ') + type);

    }
});
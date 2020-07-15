/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.app.ViewController.html
 */
Ext.define('Demo.view.slidingpager.SlidingPagerViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.slidingpager',

    topicTpl: '<a href="http://sencha.com/forum/showthread.php?t={1}" target="_blank">{0}</a>',
    lastTpl: '{0}<br/>by {1}',

    renderTopic: function (value, record) {
        return Ext.String.format(
            this.topicTpl,
            value,
            record.getId()
        );
    },
    renderLast: function (value, model) {
        return Ext.String.format(
            this.lastTpl,
            Ext.Date.dateFormat(value, 'M j, Y, g:i a'),
            model.get('lastposter')
        );
    }
});
Ext.define('WireFrameOne.view.notifications.notifications',{
  extend: 'Ext.Panel',
  xtype: 'notifications',
  requires: ['WireFrameOne.view.ToolBar','Ext.List',
  'WireFrameOne.store.NotificationStore','Ext.Toolbar'],
  //'WireFrameOne.store.NotificationStore',
  stores : ['SessionStore'],
  config: {
      items: [
          {
              xtype : 'toolbarmenu',
              title : 'Notifications'
          },{
              xtype : 'list',
              itemId : 'notifs',
              itemTpl : '<div class="talk-bubbleM tri-rightM left-inM">'+
              '<div class="talktext">'+
              '<p>{message}</p>{date}<div>' +
              '</div></div>',
              height : '100%',
              store : 'notificationStore',
              styleHtmlContent : true,
              itemCls : 'notifications',
              //scroll: 'vertical',
              disableSelection : true
          }
      ]
  }
})

Ext.define('WireFrameOne.view.messages.messages',{
  extend: 'Ext.Panel',
  xtype: 'messages',
  requires: ['WireFrameOne.view.ToolBar','Ext.List',
  'WireFrameOne.store.MessageStore','Ext.Toolbar'],
  stores : ['SessionStore'],
  config: {
    //scrollable : true,
      items: [
          {
              xtype : 'toolbarmenu',
              title : 'Messages'
          },{
              xtype : 'list',
              itemId : 'msgs',
              itemTpl : '<div class="talk-bubble tri-right left-in">'+
              '<div class="talktext">'+
              '<p>{message}</p>{date}<div>' +
              '</div></div>',
              height : '100%',
              store : 'messageStore',
              /*
              store : {
                  type : 'notificationStore'
              },
              */
              styleHtmlContent : true,
              itemCls : 'messages',
              //scroll: 'vertical',
              disableSelection : true
          },{
            xtype : 'toolbar',
            docked : 'bottom',
            items : [
              {
                xtype : 'textareafield',
                maxRows : 3,
                flex : 20,
                width : '80%'
              },{
                xtype : 'button',
                text : 'send',
                action : 'send',
                ui : 'confirm'
              }
            ]
          }
      ]
  },
  initialize : function(){
    var me = this;
    me.callParent();
    var list = me.down('list');
    var scroller = list.getScrollable().getScroller();
    scroller.scrollToEnd(true);
  }
  /*
    //get sesssion ID
    var myStore = Ext.getStore('SessionStore');
    var refID = myStore.getAt(0).getData().refID;

    //get notificationStore and set params
    var msgStore = Ext.getStore('messageStore');
    msgStore.getProxy().setExtraParams({
      reference_id : refID
    });

    //get list component and set store
    var listComponent = Ext.ComponentQuery.query('#msgs')[0];
    listComponent.setStore(msgStore);

    //load store
    msgStore.load();
  }
  */
})

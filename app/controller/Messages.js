Ext.define('WireFrameOne.controller.Messages',{
  extend : 'Ext.app.Controller',
  requires: ['Ext.Toast'],
  config : {
    views : ['WireFrameOne.view.messages.messages'],
    refs : {
      msgPage : 'messages',
      messagesListView : 'messages list',

      sendMsgButton : 'toolbar button[action="send"]'
    },
    control : {
      sendMsgButton : {
        tap : 'onMsgSend'
      }
    }
  },
  onMsgSend : function(){
    //get msg text
    var msgPage = this.getMsgPage();
    var msgField = msgPage.down('toolbar textareafield');
    var msgContent = msgField.getValue();

    if(msgContent.length > 0){
      //get today's date
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1; //January is 0!

      var yyyy = today.getFullYear();
      if(dd<10){
        dd='0'+dd
      }
      if(mm<10){
        mm='0'+mm
      }
      var today = dd+'/'+mm+'/'+yyyy;

      //add it to msg store
      var msgStore = Ext.getStore('messageStore');

      var msgModel = Ext.create('WireFrameOne.model.MessageModel',{
        date : today,
        message : msgContent
       });

      msgStore.add(msgModel);
      msgStore.sync();
      //msgStore.load();

      //sync the view (scroll to buttom)
      var msgPage = this.getMessagesListView();
      var scroller = msgPage.getScrollable().getScroller();
      scroller.scrollToEnd(true);

      //make request

      // get current refId
      var SessionStore = Ext.getStore('SessionStore');
      var refID = SessionStore.getAt(0).getData().refID;

      /*
      Ext.Ajax.request({
        url: 'http://squer.mirealux.com/wdm-pm-api/login',//'http://squer.mirealux.com/wdm-pm-api/login',//
        //'UserLogin.json',// ,
        method: 'post',
        timeout : 30000,
        params: {
          reference_id : refID,
          message : msgContent,
          timestamp : new Date().getTime()
        },
        success: function (response){

        },
        failure: function () {

        }
      })
      */
    }else{
      console.log("can not send msg");
    }
  }
})

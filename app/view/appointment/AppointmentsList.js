Ext.define('WireFrameOne.view.appointment.AppointmentsList',{
  extend: 'Ext.Panel',
  xtype: 'appointmentlist',
  requires: ['WireFrameOne.view.ToolBar','Ext.List'],
  stores : ['SessionStore'],
  config: {
      items: [
          {
              xtype : 'toolbarmenu',
              title : 'Appointments'
          },{
              xtype : 'list',
              itemId : 'appointments',
              itemTpl : '{patient_name}<br/>{date} {time} <div class="{status}"></div>',              
              height : '100%',
              styleHtmlContent : true,
              itemCls : 'appointments',
              disableSelection : true
          },
      ]
  },
  initialize : function(){
    /*
    var me = this;

    //get sesssion ID
    var myStore = Ext.getStore('SessionStore');
    var refID = myStore.getAt(0).getData().refID;

    //get notificationStore and set params
    var notifStore = Ext.getStore('notificationStore');
    notifStore.getProxy().setExtraParams({
      reference_id : refID
    });

    //get list component and set store
    var listComponent = Ext.ComponentQuery.query('#notifs')[0];
    listComponent.setStore(notifStore);

    //load store
    notifStore.load();
    */
  }
})

Ext.define('WireFrameOne.controller.Main',{
  extend : 'Ext.app.Controller',
  requires : ['Ext.Toast','Ext.util.DelayedTask'],
  config : {
    views : ['WireFrameOne.view.MenuBar','WireFrameOne.view.myProfile.MyProfileView',
    'WireFrameOne.view.news.newslist','WireFrameOne.view.patients.PatientList',
    'WireFrameOne.view.login.LoginPage','WireFrameOne.view.notifications.notifications',
    'WireFrameOne.view.messages.messages','WireFrameOne.view.appointment.AppointmentsList'],

    stores : ['ProfileStore','SessionStore',//'PatientStore','NotificationStore',
    'HBAstore','FBGstore','DBPstore','PPGstore','RBSstore',
    'SBPstore','MessageStore','PatientStore','NotificationStore'],

    refs : {
      MenuButton : 'toolbarmenu button[action="MenuButton"]',
      MenuBar : 'menu',

      logout : 'menu button[action=logout]',
      loginpage : 'loginPage',

      myprofileButton : 'menu button[action="profileview"]',
      myprofileView : 'myprofile',

      appointView : 'appointmentlist',
      appointList : 'appointmentlist list',
      appointButton : 'menu button[action="appointments"]',

      notifView : 'notifications',
      notifList : 'notifications list',
      notificationButton : 'menu button[action="notifications"]',

      messageView : 'messages',
      messagesListView : 'messages list',
      messageButton : 'menu button[action="messages"]',

      homePageView : 'newslist',
      homePageButton : 'menu button[action="homeview"]',

      PatientListButton : 'menu button[action="patients"]',
      patientListView : 'patientlist',
      patientList : 'patientlist list'
    },
    control : {
      MenuButton : {
        tap : 'onMenuTap'
      },
      logout :{
        tap : 'onLogOut'
      },

      messageButton : {
        tap : 'onMessageTap'
      },

      myprofileButton : {
        tap : 'onMyProfile'
      },

      appointButton : {
        tap : 'onAppointTap'
      },

      homePageButton : {
        tap : 'onHomePageTap'
      },

      notificationButton : {
        tap : 'onNotificationsTap'
      },

      PatientListButton : {
        tap : 'onViewPatients'
      }
    }
  },
  onMenuTap : function(){
    var MyMenu = this.getMenuBar();
    if(MyMenu.isHidden()){
      Ext.Viewport.showMenu('left');
    }else{
      Ext.Viewport.hideMenu('left');
    }
  },
  onMessageTap : function(){
    Ext.Viewport.hideMenu('left');

    Ext.create('WireFrameOne.view.messages.messages');
    var MsgView = this.getMessageView();

    this.changeView(MsgView);

    //scroller.scrollToEnd(true);

    //var msgList = MsgView.down('list');
    //console.log(msgList);

    //var scroller = msgList.getScrollable().getScroller();
    //scroller.scrollTo({x : 1,y : 100000},true);

  },
  onNotificationsTap : function(){
    /*
    Ext.Viewport.hideMenu('left');

    Ext.create('WireFrameOne.view.notifications.notifications');
    var NotifView = this.getNotifView();
    console.log(NotifView);
    this.changeView(NotifView);
    */
    //hide menu
    Ext.Viewport.hideMenu('left');

    var me = this;
    var task = me.loadMask(me);

    //get reference_id for the session;
    var reference_id = this.getApplication().getController('RefId').passRefId();

    //make ajax request
    Ext.Ajax.request({
      url: 'notifications.json',//'UserProfileUpdate.json',
      method: 'post',
      timeout : 15000,
      params: {
        reference_id : reference_id,
        timestamp : new Date().getTime()
      },
      success : function(response){
        //loading mask
        task.cancel();
        Ext.Viewport.unmask();

        var result = Ext.JSON.decode(response.responseText);

        if(result.success == true){
          Ext.create('WireFrameOne.view.notifications.notifications');
          var notifList = me.getNotifList();

          //clear data if exists
          notifList.getStore().setData(result.data);

          var notifView = me.getNotifView();
          me.changeView(notifView);
        }else{
          Ext.toast('Sorry! Unable to fetch information at the moment');
        }
      },
      failure : function(){
        //loading mask
        task.cancel();
        Ext.Viewport.unmask();

        Ext.toast('Sorry! Unable to connect to server');
      }
    })

  },
  onLogOut : function(){
    Ext.Viewport.hideMenu('left');

    var myStore = Ext.getStore('SessionStore');
    myStore.removeAll();
    myStore.sync();

    var loginPage = this.getLoginpage();
    if(loginPage === undefined){
      Ext.create('WireFrameOne.view.login.LoginPage');
      loginPage = this.getLoginpage();
    }
    this.changeView(loginPage);
  },
  onMyProfile : function(){
    Ext.Viewport.hideMenu('left');

    var me = this;
    var task = me.loadMask(me);

    //get session store
    var SessionStore = Ext.getStore('SessionStore');

    // get ref id
    var myRefId = SessionStore.getAt(0).getData().refID;

    console.log(myRefId);
    //make an ajax request with ref id

    Ext.Ajax.disableCaching = false;
    Ext.Ajax.request({
      url: 'http://squer.mirealux.com/wdm-pm-api/user-info',//'UserProfileUpdate.json',
      method: 'post',
      timeout : 15000,
      params: {
        reference_id : myRefId,
        timestamp : new Date().getTime()
      },

      success: function (response) {

        //loading mask
        task.cancel();
        Ext.Viewport.unmask();

        var result = Ext.JSON.decode(response.responseText);//.profile;
        console.log(result);
        if (result.success === true) {
          result = result.data.profile_data;
          console.log(result);
          //get values from return object
          var pic= "";
          if(result.profile_url){
            pic = result.profile_url;
          }
          else{
            pic = "./resources/data/user.jpeg";
          }
          var ageString = "";
          if(result.age && result.age.year){
            ageString = result.age.year + " years";
          }

          var myHtmlString = '<div class="name"><img src="'+pic+'" alt="Image not found" class="pic"/><br>'+
          result.fname + ' ' + result.lname + ' (' +result.gender + ')<br>' + ageString +
           '</div><table class="pinfo">' + '<tr><th height="30px"> <b>Degrees:</b></th><td height="30px">' +
           result.degrees +'</td></tr><tr><th height="30px"> <b>Specialities:</b></th><td height="30px">' +
           result.specialities + '</td></tr><tr><th height="30px"> <b>Experience:</b></th><td height="30px">' +
           result.experience + " years"+ '</td></tr><tr><th height="30px"> <b>Email:</b></th><td height="30px">' +
           result.email+'</td></tr><tr><th height="30px"> <b>Address:</b></th><td height="30px">' +
           result.address_clinic + '</td></tr><tr><th height="30px"> <b>Contact:</b></th><td height="30px">'+
           result.contact_office +'</td></tr><tr><th height="30px"> <b>Emergency Contact:</b></th><td height="30px">' +
           result.contact_mo +'</td></tr></table>';

          //create view
          Ext.create('WireFrameOne.view.myProfile.MyProfileView');

          //set values
          var ProfileView = me.getMyprofileView();
          ProfileView.down('panel[itemId="hiddenData"]').setHtml(result);
          ProfileView.down('panel').setHtml(myHtmlString);

          //change view
          me.changeView(ProfileView);
        }else{
          //
          task.cancel();
          Ext.Viewport.unmask();
          // show failure msg
          console.log("loading profile failed");
        }

      },failure: function () {
        //loading mask
        task.cancel();
        Ext.Viewport.unmask();
        Ext.toast('Sorry! Unable to fetch information at the moment');

        // show connection error
        console.log("connection error");
      }
    })
  },
  onAppointTap : function(){
    //hide menu
    Ext.Viewport.hideMenu('left');

    var me = this;
    var task = me.loadMask(me);

    //get reference_id for the session;
    var reference_id = this.getApplication().getController('RefId').passRefId();

    //make ajax request
    Ext.Ajax.request({
      url: 'appointmentData.json',//'UserProfileUpdate.json',
      method: 'post',
      timeout : 15000,
      params: {
        reference_id : reference_id,
        timestamp : new Date().getTime()
      },
      success : function(response){
        //loading mask
        task.cancel();
        Ext.Viewport.unmask();

        var result = Ext.JSON.decode(response.responseText);

        if(result.success == true){
          Ext.create('WireFrameOne.view.appointment.AppointmentsList');
          var appointList = me.getAppointList();

          //clear data if exists
          if(appointList.getStore()){
            appointList.getStore().setData(result.data);
          }else{
            appointList.setData(result.data);
          }

          var appointView = me.getAppointView();
          me.changeView(appointView);
        }else{
          Ext.toast('Sorry! Unable to fetch information at the moment');
        }
      },
      failure : function(){
        //loading mask
        task.cancel();
        Ext.Viewport.unmask();

        Ext.toast('Sorry! Unable to connect to server');
      }
    })
  },

  onHomePageTap : function(){
    Ext.Viewport.hideMenu('left');

    console.log('tapped');
    var Home = this.getHomePageView();
    this.changeView(Home);
  },

  onViewPatients : function(){
    Ext.Viewport.hideMenu('left');

    var me = this;
    var task = me.loadMask(me);

    //get reference_id for the session;
    var reference_id = this.getApplication().getController('RefId').passRefId();

    Ext.Ajax.request({
      url: 'patientData.json',
      method: 'post',
      timeout : 15000,
      params: {
        reference_id : reference_id,
        timestamp : new Date().getTime()
      },
      success : function(response){
        //loading mask
        task.cancel();
        Ext.Viewport.unmask();

        var result = Ext.JSON.decode(response.responseText);

        if(result.success == true){
          Ext.create('WireFrameOne.view.patients.PatientList');
          var PatientList = me.getPatientList();
          //clear data if exists
          PatientList.getStore().setData(result.data);

          /*TODO : group and sort list
          if(PatientList.getStore()){
            PatientList.getStore().setData(result.data);
          }else{
            PatientList.setData(result.data);
          }

          PatientList.getStore().setGrouper({
              groupFn: function(record){
                  return record.get('pName')[0].toUpperCase();
              },
              sortProperty: 'pName'
          });

          PatientList.getStore().setSorters({
              property: 'pName',
              direction: 'ASC'
          });

          PatientList.setGrouped(true);
          PatientList.setIndexBar(true);
          */

          var PatientListView = me.getPatientListView();
          me.changeView(PatientListView);
        }else{
          Ext.toast('Sorry! Unable to fetch information at the moment');
        }
      },
      failure : function(){
        //loading mask
        task.cancel();
        Ext.Viewport.unmask();

        Ext.toast('Sorry! Unable to connect to server');
      }
    })
  },

  changeView : function(NewView){
    //Ext.Viewport.hideMenu('left');
    Ext.Viewport.animateActiveItem(NewView,{
      type : 'fade'
    });
  },

  passRefID : function(newStore){
    var SessionStore = Ext.getStore('SessionStore');
    var myRefId = SessionStore.getAt(0).getData().refID;

    var PatientStore = Ext.getStore(newStore);
    PatientStore.setParams({
      reference_id : myRefId,
      timestamp : new Date().getTime()
    });
    PatientStore.load();
  },
  loadMask : function(me){
    var task = Ext.create('Ext.util.DelayedTask', function() {
      Ext.Viewport.mask({ xtype: 'loadmask',
      message: "loading.." });
    }, me);
    task.delay(500);
    return task;
  }
})

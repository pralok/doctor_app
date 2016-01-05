Ext.define('WireFrameOne.controller.Login',{
    extend : 'Ext.app.Controller',
    requires : ['Ext.Toast','Ext.util.DelayedTask'],
    config : {
       views : ['WireFrameOne.view.login.LoginPage','WireFrameOne.view.news.newslist'],
       models : ['WireFrameOne.model.UserSession'],
        refs : {
            loginPage : 'loginPage',
            loginButton : 'loginPage button[action="Login"]',
            errorMsg : 'loginPage #loginError',

            homePage : 'newslist'
        },
        control : {
            loginButton : {
                tap : 'Login'
            }
        }
    },

    Login : function(){
      var me = this;
      var LoginValues = this.getLoginPage().getValues();
      var username = LoginValues.username;
      var password = LoginValues.password;

      //validate form
      if(username.length < 1 || password.length < 1){
        me.getErrorMsg().show();
      }else{
        console.log("========");
        //load mask
        var task = me.loadMask("Checking Credentials..");

        Ext.Ajax.request({
          url: 'http://squer.mirealux.com/wdm-pm-api/login',//
          //'UserLogin.json',// 'http://squer.mirealux.com/wdm-pm-api/login',
          method: 'post',
          timeout : 15000,
          params: {
            username: username,
            password: password,
            timestamp : new Date().getTime()
          },
          success: function (response) {
            //hide mask
            task.cancel();
            Ext.Viewport.unmask();

            var result = Ext.JSON.decode(response.responseText);

            if (result.success === true) {

              //reset fields
              me.getLoginPage().reset();

              //hide error msg if visible
              if(! me.getErrorMsg().isHidden()){
                me.getErrorMsg().hide();
              };
              // add a session local storage by passing ref id
              var refID = result.reference_id;
              console.log(refID);
              me.createUserSession(refID);

              // change view
              me.ChangeView();
            } else {
              console.log(result);
              // show failure msg
              me.getErrorMsg().show();
              console.log("login failed");
            }
          },
          failure: function () {
            //hide mask
            task.cancel();
            Ext.Viewport.unmask();

            // show connection error loginError
            console.log("Sorry !! connection error. Please try again later");
            Ext.toast('Sorry !! connection error. Please try again later');
          }
        })
      }
    },

    createUserSession : function(refID){
       var myStore = Ext.getStore('SessionStore');
       if(myStore.getCount()){
           myStore.removeAll();
       }
       var SessionModel = Ext.create('WireFrameOne.model.UserSession',{
           SessionStatus : true,
           refID : refID
        });
        myStore.add(SessionModel);
        //sync store
        myStore.sync();
    },

    createView : function(){
        Ext.create('WireFrameOne.view.news.newslist');
    },

    ChangeView : function(){
        this.createView();
        var HomePage = this.getHomePage();
        Ext.Viewport.animateActiveItem(HomePage,{
            type : 'slide',
            direction : 'left'
        });
    },

    loadMask : function(msg){
      var task = Ext.create('Ext.util.DelayedTask', function() {
          Ext.Viewport.mask({ xtype: 'loadmask',
                             message: msg });
      }, this);

      task.delay(500);
      return task;
    }
})

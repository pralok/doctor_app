Ext.define('WireFrameOne.controller.Login',{
    extend : 'Ext.app.Controller',
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

    Login : function() {
        var me = this;
        var LoginValues = this.getLoginPage().getValues();
        var username = LoginValues.username;
        var password = LoginValues.password;

        Ext.Ajax.request({
            url: 'UserLogin.json',
            method: 'post',
            params: {
                user: username,
                pwd: password
            },
            success: function (response) {
                var result = Ext.JSON.decode(response.responseText);

                if (result.success === true) {
                    //reset fields
                    me.getLoginPage().reset();
                    // add a session local storage by passing ref id
                    var refID = result.refID;
                    console.log(refID);
                    me.createUserSession(refID);

                    // change view
                    me.ChangeView();
                } else {
                    // show failure msg
                    console.log("login failed");
                }
            },
            failure: function () {
                // show connection error
                console.log("connection error");
            }
        })
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
    }
})
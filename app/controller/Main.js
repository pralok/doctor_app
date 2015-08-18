Ext.define('WireFrameOne.controller.Main',{
    extend : 'Ext.app.Controller',
    config : {
        views : ['WireFrameOne.view.MenuBar','WireFrameOne.view.myProfile.MyProfileView',
            'WireFrameOne.view.news.newslist','WireFrameOne.view.patients.PatientList','WireFrameOne.view.login.LoginPage'],

        stores : ['ProfileStore','SessionStore','PatientStore',
            'HBAstore','FBGstore','DBPstore','PPGstore','RBSstore','SBPstore'],

        refs : {
            MenuButton : 'toolbarmenu button[action="MenuButton"]',
            MenuBar : 'menu',

            logout : 'menu button[action=logout]',
            loginpage : 'loginPage',

            myprofileButton : 'menu button[action="profileview"]',
            myprofileView : 'myprofile',

            homePageView : 'newslist',
            homePageButton : 'menu button[action="homeview"]',

            PatientListButton : 'menu button[action="patients"]',
            patientList : 'patientlist'
        },
        control : {
            MenuButton : {
                tap : 'onMenuTap'
            },
            logout :{
                tap : 'onLogOut'
            },

            myprofileButton : {
                tap : 'onMyProfile'
            },

            homePageButton : {
                tap : 'onHomePageTap'
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
    onLogOut : function(){
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
        var me = this;
//        if(this.getMyprofileView() === undefined) {
            me.passRefID('profileStore');

            var profileStore = Ext.getStore('profileStore');
            var profileData = profileStore.getAt(0).data;
            console.log(profileData);

            Ext.create('WireFrameOne.view.myProfile.MyProfileView');

            var UserName = profileData.name;
            var Degress = profileData.degrees;
            var Specialities = profileData.specialities;
            var Address = profileData.address;
            var Contact = profileData.contact;

            var ProfileView = this.getMyprofileView();

            ProfileView.down('textfield[label="Name"]').setValue(UserName);
            ProfileView.down('textfield[label="Degrees"]').setValue(Degress);
            ProfileView.down('textfield[label="Specialities"]').setValue(Specialities);
            ProfileView.down('textareafield[label="Address"]').setValue(Address);
            ProfileView.down('textfield[label="Contact"]').setValue(Contact);

  //      }
        var MyProfile = this.getMyprofileView();
        this.changeView(MyProfile);
    },

    onHomePageTap : function(){
        console.log('tapped');
        var Home = this.getHomePageView();
        this.changeView(Home);
    },

    onViewPatients : function(){
        var me = this;
        if( this.getPatientList() === undefined) {
            me.passRefID('PatientStore');
            Ext.create('WireFrameOne.view.patients.PatientList');
        }
        var PatientList = this.getPatientList();

        this.changeView(PatientList);
    },

    changeView : function(NewView){
        Ext.Viewport.hideMenu('left');

        Ext.Viewport.animateActiveItem(NewView,{
            type : 'fade'
        });
    },

    passRefID : function(newStore){
        var SessionStore = Ext.getStore('SessionStore');
        var myRefId = SessionStore.getAt(0).getData().refID;

        var PatientStore = Ext.getStore(newStore);
        PatientStore.setParams({
            refID : myRefId
        });
        PatientStore.load();

    }

})

Ext.define('WireFrameOne.controller.MyProfile',{
    extend : 'Ext.app.Controller',
    config : {
        views : ['WireFrameOne.view.myProfile.MyProfileView'],
        refs : {
            myprofile : 'myprofile',
            saveButton : 'toolbarmenu button[action="save"]',

            'fileBtn': 'myprofile #fileBtn',
            'fileLoadBtn': 'myprofile #fileLoadBtn',
            'loadedImage': 'myprofile #loadedImage'
        },
        control : {
            saveButton : {
                tap : 'onSaveRecord'
            },

            fileBtn: {
                success: 'onFileUploadSuccess',
                failure: 'onFileUploadFailure'
            },

            fileLoadBtn: {
                loadsuccess: 'onFileLoadSuccess',
                loadfailure: 'onFileLoadFailure'
            }
        }
    },
    initialize : function(){
        Ext.create('WireFrameOne.view.myProfile.MyProfileView');
    },
    onSaveRecord : function(){

        // get current refId
        var SessionStore = Ext.getStore('SessionStore');
        var refID = SessionStore.getAt(0).getData().refID;
        console.log(refID);

        //get profile data
        var MyProfileData = this.getMyprofile().getValues();
        name = MyProfileData.name;
        degrees = MyProfileData.degrees;
        specialities = MyProfileData.specialities;
        address = MyProfileData.address;
        contact = MyProfileData.contact;

        Ext.Ajax.request({
            url: 'ProfileUpdate.json',
            method: 'post',
            params: {
                name : name,
                degrees : degrees,
                specialities : specialities,
                address : address,
                contact : contact,
                refID : refID
            },
            success: function (response) {
                var result = Ext.JSON.decode(response.responseText);

                if (result.success === true) {
                    //notify success msg
                    console.log("profile updated");
                } else {
                    // show failure msg
                    console.log("Please try again later");
                }
            },
            failure: function () {
                // show connection error
                console.log("connection error");
            }
        })
    },
    onFileUploadSuccess: function() {
        console.log('Success');

        Ext.device.Notification.show({
            title: 'All right',
            message: 'File uploaded successfully',
            buttons: Ext.MessageBox.OK,
            callback: Ext.emptyFn
        });
    },

    onFileUploadFailure: function(message) {
        console.log('Failure');

        Ext.device.Notification.show({
            title: 'Uploading error',
            message: message,
            buttons: Ext.MessageBox.OK,
            callback: Ext.emptyFn
        });
    },

    onFileLoadSuccess: function(dataurl, e) {
        console.log('File loaded');

        var me = this;
        var image = me.getLoadedImage();
        image.setSrc(dataurl);
    },

    onFileLoadFailure: function(message) {
        Ext.device.Notification.show({
            title: 'Loading error',
            message: message,
            buttons: Ext.MessageBox.OK,
            callback: Ext.emptyFn
        });
    }
})
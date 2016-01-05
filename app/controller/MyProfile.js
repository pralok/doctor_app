Ext.define('WireFrameOne.controller.MyProfile',{
    extend : 'Ext.app.Controller',
    requires: ['Ext.Toast'],
    config : {
        views : ['WireFrameOne.view.myProfile.MyProfileView',
        'WireFrameOne.view.myProfile.MyProfileEdit'],
        refs : {
            myprofile : 'myprofile',
            editProfile : 'profileEdit',

            saveButton : 'profileEdit toolbar button[action="save"]',
            cancelButton : 'profileEdit toolbar button[action="hide"]',
            editButton : 'myprofile toolbarmenu button[action="edit"]',
        },
        control : {
            saveButton : {
                tap : 'onSaveRecord'
            },
            cancelButton : {
              tap : 'onHideProfile'
            },
            editButton : {
              tap : 'onEditRecord'
            }
        }
    },
    initialize : function(){
        Ext.create('WireFrameOne.view.myProfile.MyProfileView');
    },

    onEditRecord : function(btn){
      var me = this;

      var profileView = me.getMyprofile();
      var result = profileView.down('panel[itemId="hiddenData"]').getHtml();
      console.log(result);

      //get values
      var fname = result.fname;
      var lname = result.lname;
      var gender = result.gender;

      var degrees = result.degrees || "";
      var specialities = result.specialities || "";
      var experience = result.experience || "";
      var email = result.email || "";
      var address_clinic = result.address_clinic || "";
      var contact_office = result.contact_office || "";
      var contact_mo = result.contact_mo || "";

      //create view
      Ext.create('WireFrameOne.view.myProfile.MyProfileEdit');
      var EditView = me.getEditProfile();

      //set values
      EditView.down('textfield[name="fName"]').setValue(fname);
      EditView.down('textfield[name="lname"]').setValue(lname);
      EditView.down('selectfield[name="gender"]').setValue(gender);
      EditView.down('textareafield[name="degrees"]').setValue(degrees);
      EditView.down('textareafield[name="specialities"]').setValue(specialities);
      EditView.down('numberfield[name="experience"]').setValue(experience);
      EditView.down('emailfield[name="email"]').setValue(email);
      EditView.down('textareafield[name="address"]').setValue(address_clinic);
      EditView.down('numberfield[name="contact"]').setValue(contact_office);
      EditView.down('numberfield[name="emg_contact"]').setValue(contact_mo);

      me.changeView(EditView,'up');


    },
    onHideProfile : function(){
      var ProfileView = this.getMyprofile();
      this.changeView(ProfileView,'down');
    },
    onSaveRecord : function(){
      var me = this;

      //load mask
      var task = me.loadMask("Updating Profile..");

      // get current refId
      var SessionStore = Ext.getStore('SessionStore');
      var reference_id = SessionStore.getAt(0).getData().refID;

        //get profile data
        var MyProfileData = this.getEditProfile().getValues();
        console.log(MyProfileData);

        var update_data = {
            profile_data : {
              fname : MyProfileData.fName,
              lname : MyProfileData.lname,
              gender : MyProfileData.gender,
              email : MyProfileData.email,
              degrees : MyProfileData.degrees,
              specialities : MyProfileData.specialities,
              experience : MyProfileData.experience,
              address_clinic : MyProfileData.address,
              contact_office : MyProfileData.contact + "",
              contact_mobile : MyProfileData.emg_contact + "",
              association_data : {
                //hospital_name : "lorem ipsum",
                //visiting_time : "11:30-14:50;16:50-20:30",
                //contact : "9876543210"
              }
            }
          };

        update_data = Ext.JSON.encode(update_data);

        Ext.Ajax.request({
            url: 'http://squer.mirealux.com/wdm-pm-api/update-profile',
            method: 'post',
            params: {
              reference_id : reference_id,
              timestamp : new Date().getTime(),
              data : update_data
            },
            success: function(response){
              //hide mask
              task.cancel();
              Ext.Viewport.unmask();

                var result = Ext.JSON.decode(response.responseText);

                if (result.success === true) {
                    //notify success msg
                    console.log("profile updated");
                } else {
                    // show failure msg
                    console.log("Please try again later");
                }
            },
            failure: function(){
              //hide mask
              task.cancel();
              Ext.Viewport.unmask();
              // show connection error
              console.log("connection error");
            }
        })
    },
    changeView : function(view,direction){
      Ext.Viewport.animateActiveItem(view,{
      type : 'slide',
      direction : direction
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

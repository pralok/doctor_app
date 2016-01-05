Ext.define('WireFrameOne.view.myProfile.MyProfileEdit', {
    extend: 'Ext.form.Panel',
    xtype: 'profileEdit',
    requires: ['WireFrameOne.view.ToolBar', 'Ext.field.Number', 'Ext.field.TextArea',
        'WireFrameOne.view.ToolBar', 'Ext.field.Email','Ext.field.Select'],
    config: {
      fullscreen: true,
      scrollable: true,
      items: [
        {
          xtype: 'toolbar',
          items: [{
            xtype : 'button',
            text : 'save',
            ui : 'confirm',
            action : 'save'
          },{
            xtype: 'spacer'
          },{
            xtype: 'button',
            text: 'cancel',
            ui: 'decline',
            action: 'hide'
          }]
        },

        {
          xtype: 'fieldset',
          items: [
              {
                  xtype: 'textfield',
                  label: 'First Name',
                  labelWrap : true,
                  name: 'fName'
              },{
                  xtype: 'textfield',
                  label: 'Last Name',
                  labelWrap : true,
                  name: 'lname'
              },{
                  xtype: 'selectfield',
                  label: 'Gender',
                  labelWrap : true,
                  name: 'gender',
                  options: [
                      {text: 'Male',  value: 'male'},
                      {text: 'Female', value: 'female'}
                  ]
              },
              {
                  xtype: 'textareafield',
                  label: 'Degrees',
                  labelWrap : true,
                  name: 'degrees'
              },
              {
                  xtype: 'textareafield',
                  label: 'Specialities',
                  labelWrap : true,
                name: 'specialities'
              },
              {
                xtype: 'numberfield',
                label: 'Experience(in years)',
                labelWrap : true,
                name: 'experience'
              },
              {
                xtype : 'emailfield',
                label : 'Email',
                labelWrap : true,
                name : 'email'
              },
              {
                xtype: 'textareafield',
                label: 'Address',
                labelWrap : true,
                name: 'address'
              },
              {
                  xtype: 'numberfield',
                  label: 'Office Contact',
                  labelWrap : true,
                  name: 'contact'
              },{
                  xtype: 'numberfield',
                  label: 'Personal Contact',
                  labelWrap : true,
                  name: 'emg_contact'
              }
            ]
        }]
    },
    initialize: function () {
        console.log("created profile view");
    }
})

Ext.define('WireFrameOne.view.myProfile.MyProfileView', {
    extend: 'Ext.form.Panel',
    xtype: 'myprofile',
    requires: ['WireFrameOne.view.ToolBar', 'Ext.Img', 'Ext.field.TextArea',
        'WireFrameOne.view.ToolBar', 'Ext.ux.Fileup'],
    config: {
        fullscreen: true,
        scrollable: true,
        items: [{
            xtype: 'toolbarmenu'
        },{
            itemId: 'loadedImage',
            xtype: 'img',
            src: 'user.jpeg',
            width: '200px',
            height: '200px',
            style: 'margin: auto;margin-top:15px;'
        }, {
            itemId: 'fileLoadBtn',
            xtype: 'fileupload',
            autoUpload: true,
            loadAsDataUrl: true,
            style : 'width : 200px;margin:auto;;',
            states: {
                browse: {
                    text: 'Profile Picture'
                },
                ready: {
                    text: 'Load'
                },

                uploading: {
                    text: 'Loading',
                    loading: true
                }
            }
        }, {
            xtype: 'fieldset',
            title: 'Personal Information',
            items: [
                {
                    xtype: 'textfield',
                    label: 'Name',
                    name: 'name'
                }, {
                    xtype: 'textfield',
                    label: 'Degrees',
                    name: 'degrees'
                }, {
                    xtype: 'textfield',
                    label: 'Specialities',
                    name: 'specialities'
                }, {
                    xtype: 'textareafield',
                    label: 'Address',
                    name: 'address'
                }, {
                    xtype: 'textfield',
                    label: 'Contact',
                    name: 'contact'
                }, {
                    xtype: 'textfield',
                    label: 'Visiting Time'
                }
            ]
        }]
    },
    initialize: function () {
        console.log("created profile view");
        var me = this;
        var ToolBar = me.down('toolbarmenu');
        ToolBar.add({
            xtype: 'spacer'
        });
        ToolBar.add({
            xtype: 'button',
            text: 'save',
            ui: 'confirm',
            action: 'save'
        });
        me.callParent();
    }
})
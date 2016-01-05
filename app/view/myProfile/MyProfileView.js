Ext.define('WireFrameOne.view.myProfile.MyProfileView', {
    extend: 'Ext.form.Panel',
    xtype: 'myprofile',
    style : 'background-color:#ffffff;',
    requires: ['WireFrameOne.view.ToolBar', 'Ext.Img', 'Ext.field.TextArea',
        'WireFrameOne.view.ToolBar', 'Ext.ux.Fileup'],
    config: {
      fullscreen: true,
      scrollable: true,
      items: [{
        xtype: 'toolbarmenu'
      },{
        xtype : 'panel',
        html : ''
      },{
        xtype : 'panel',
        hidden : true,
        html : '',
        itemId : 'hiddenData'
      }
    ]
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
            text: 'edit',
            ui: 'confirm',
            action: 'edit'
        });
        me.callParent();
    }
})

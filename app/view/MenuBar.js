Ext.define('WireFrameOne.view.MenuBar',{
    extend : 'Ext.Menu',
    requires: ['Ext.Button'],
    xtype : 'menu',
    config : {
        items: [
            {
                xtype : 'button',
                action : 'profileview',
                text: 'My Profile',
                iconCls: 'user'
            },{
              xtype : 'button',
              action : 'appointments',
              text: 'Appoinments',
              iconCls: 'organize'
            },{
                xtype : 'button',
                action : 'patients',
                text: 'My Patients',
                iconCls: 'team'
            },
            {
                xtype : 'button',
                action : 'homeview',
                text: 'Resources',
                iconCls: 'star'
            },
            {
                xtype : 'button',
                action : 'messages',
                text: 'Messages',
//                badge : '3',
                iconCls: 'compose'
            },
            {
                xtype : 'button',
                action : 'notifications',
                text: 'Notifications',
//                badge : '3',
                iconCls: 'compose'
            },
            {
                xtype : 'button',
                action : 'logout',
                text: 'Logout',
                iconCls: 'reply'
            }
        ]

    }
})

Ext.define('WireFrameOne.view.patients.PatientDetails',{
    extend : 'Ext.tab.Panel',
    requires : ['Ext.Button','Ext.Toolbar','Ext.Panel','Ext.Img','Ext.field.Text','Ext.field.TextArea',
        'WireFrameOne.view.patients.PatientReport'],
    xtype : 'PatientDetails',
    config : {
        fullscreen : true,
        tabBarPosition : 'bottom',
        items : [
            {
                xtype : 'toolbar',
                title : '',
                docked : 'top',
                items : [{
                    xtype : 'button',
                    text : 'back',
                    ui : 'back',
                    action : 'back'
                },{
                    xtype : 'spacer'
                },{
                    xtype : 'button',
                    text : 'Info',
                    ui : 'confirm',
                    action : 'show'
                }]
            },{
                xtype : 'panel',
                layout : {
                    type : 'vbox'
                },
                scrollable : true,
                iconCls : 'compose',
                title : 'Trend',
                items : [
                    {
                        xtype : 'report_chart',
                        title : 'Reports',
                        store : 'HBAstore'
                    }
                    ,{
                        xtype : 'report_chart',
                        title : 'Reports',
                        store : 'FBGstore'//,//mandatory
                    }                    ,{
                        xtype : 'report_chart',
                        title : 'Reports',
                        store : 'PPGstore'
                    }                    ,{
                        xtype : 'report_chart',
                        title : 'Reports',
                        store : 'RBSstore'//mandatory
                    }
                    ,{
                        xtype : 'report_chart',
                        title : 'Reports',
                        store : 'SBPstore'//mandatory
                    }
                    ,{
                        xtype : 'report_chart',
                        title : 'Reports',
                        store : 'DBPstore'//mandatory
                    }


                ]
            }
        ]

    }
})
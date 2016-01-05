Ext.define('WireFrameOne.view.news.newsdetails',{
    extend : 'Ext.Panel',
    xtype : 'detailnews',
    requires : ['Ext.Button','Ext.Toolbar'],
    config : {
        fullscreen : true,
        scrollable : true,
        items : [
            {
                xtype : 'toolbar',
                docked : 'top',
                title : '',
                items : [
                    {
                        xtype : 'button',
                        ui : 'back',
                        text : 'back'
                    }
                ]
            },{
                xtype : 'panel',
                html : 'content not found !'
            }
        ]
    },
    initialize : function(){
        console.log('news detail view created');
    }
})
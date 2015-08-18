Ext.define('WireFrameOne.view.news.newslist', {
    extend: 'Ext.Panel',
    xtype: 'newslist',
    requires: ['WireFrameOne.view.ToolBar','Ext.List', 'WireFrameOne.store.NewsStore'],
    config: {
        items: [
            {
                xtype : 'toolbarmenu',
                title : 'Home'
            },{
                xtype : 'list',
                itemTpl : '<img src="resources/startup/320x460.jpg"><p>{title}</p>',
                height : '100%',
                store : {
                    type : 'newsStore'
                },
                styleHtmlContent : true,
                cls : 'newsFeed'
            }
        ]
    },
    initialize : function(){
        console.log('news list view created');
    }
});

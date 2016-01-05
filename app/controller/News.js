Ext.define('WireFrameOne.controller.News',{
    extend : 'Ext.app.Controller',
    config : {
        views : ['WireFrameOne.view.news.newslist','WireFrameOne.view.news.newsdetails'],
        refs : {
            //views
            detailView : 'detailnews',
            listView : 'newslist',

            //content
            detailContent : 'detailnews panel',
            //buttons
            newslist : 'newslist list',
            backToList : 'detailnews toolbar button[ui="back"]'
        },

        control : {
            newslist : {
                itemtap : 'onNewsListTap'
            },
            backToList : {
                tap : 'backToList'
            }
        }
    },

    DetailsViewGenerate : function(){
        Ext.Viewport.add(Ext.create('WireFrameOne.view.news.newsdetails'));
    },

    onNewsListTap : function(btn,index,target,record){
        this.DetailsViewGenerate();
        var content = record.get('content');
        var DetailsPage = this.getDetailView();
        var DetailsContent = this.getDetailContent();//DetailView();
        DetailsContent.setHtml('<div class="detail-image"><img src="resources/startup/320x460.jpg"></div>' + content );
        Ext.Viewport.animateActiveItem(DetailsPage,{
            type : 'slide',
            direction : 'left'
        });
    },
    backToList : function(){
        var NewsList = this.getListView();
        Ext.Viewport.animateActiveItem(NewsList,{
            type : 'slide',
            direction : 'right'
        });
    }
})
Ext.define('WireFrameOne.model.NewsModel',{
    extend : 'Ext.data.Model',
    config : {
        fields : ['title', 'content'],
        proxy : {
            url : 'https://ajax.googleapis.com/ajax/services/feed/load?q=http://timesofindia.feedsportal.com/c/33039/f/533916/index.rss&v=1.0&num=5',
            type : 'rest',
            method : 'POST',
            extraParams : {
                name : 'pralok'
            },
            reader : {
                type : 'json',
                rootProperty : 'responseData.feed.entries'
            }
        }
    }
})
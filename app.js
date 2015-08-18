Ext.application({
    name: 'WireFrameOne',

    controllers : ['Login','Main','News','MyProfile','MyPatients'],

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

       // Load the Menu
        var menu = Ext.create('WireFrameOne.view.MenuBar');
        Ext.Viewport.setMenu(menu, {
            side: 'left',
            reveal: true
        });

        var SessionStore = Ext.getStore('SessionStore');
        console.log(SessionStore.getAt(0));
        if(SessionStore.getAt(0)){
            Ext.Viewport.setActiveItem(Ext.create('WireFrameOne.view.news.newslist'));
        }else{
            Ext.Viewport.add(Ext.create('WireFrameOne.view.login.LoginPage'));
        }
    }
});

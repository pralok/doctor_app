Ext.define('WireFrameOne.view.ToolBar',{
    extend : 'Ext.Toolbar',
    requires : ['Ext.Button'],
    xtype : 'toolbarmenu',
    config : {
        docked : 'top',
        items : [
            {
                xtype : 'button',
                text : 'Menu',
                action : 'MenuButton',
                itemId : 'menuButton'
            }
        ]
    }
})
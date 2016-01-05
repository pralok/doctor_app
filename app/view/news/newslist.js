Ext.define('WireFrameOne.view.news.newslist', {
  extend: 'Ext.Panel',
  xtype: 'newslist',
  requires: ['WireFrameOne.view.ToolBar','Ext.List', 'WireFrameOne.store.NewsStore'],
  config: {
    layout: 'vbox',
    fullscreen: true,
    items: [
      {
        xtype : 'toolbarmenu',
        title : 'Knowledge Resource'
      },
      {
        xtype : 'panel',
        layout : 'hbox',
        flex : 4,
        items : [{
          xtype : 'panel',
          styleHtmlContent : true,
          html: '<div class ="title">Medical Updates <br/><br/> <img src="updates.jpg" class="menuI" height="100" width="100"/></div>',
          styleHtmlCls : true,
          style: 'background-color:  #b30047; font-color:#ffffff;',
          flex: 1,
          listeners : [{
            element: 'element',
            event: 'tap',
            fn: function() {
              this.fireEvent('onFaqClick', this);
            }
          }]
        },
        {
          xtype : 'panel',
          styleHtmlContent : true,
          html: '<div class ="title">Conference Calender<br/><br/> <img src="calender1.png" class="menuI" height="100" width="100"/></div>',
          flex: 1,
          styleHtmlCls : true,
          cls:'calender',
          listeners : [{
            element: 'element',
            event: 'tap',
            fn: function() {
              this.fireEvent('onPlannerClick', this);
            }
          }]
        }]
      },
      {
        xtype : 'panel',
        layout : 'hbox',
        flex : 4,
        items : [{
          xtype : 'panel',
          styleHtmlContent : true,
          html: '<div class ="title">Videos <br/><br/> <img src="video.png" class="menuI" height="100" width="100" /></div>',
          styleHtmlCls : true,
          style: 'background-color: #ff481a; font-color:#ffffff;',
          flex: 1,
          listeners : [{
            element: 'element',
            event: 'tap',
            fn: function() {
              this.fireEvent('onFaqClick', this);
            }
          }]
        },
        {
          xtype : 'panel',
          styleHtmlContent : true,
          html: '<div class ="title">Case Studies <br/><br/> <img src="casestudy.png" class="menuI" height="100" width="100"/></div>',
          style: 'background-color: #0B96F3; font-color:#ffffff;',
          flex: 1,
          styleHtmlCls : true,
          listeners : [{
            element: 'element',
            event: 'tap',
            fn: function() {
              this.fireEvent('onPlannerClick', this);
            }
          }]
        }]
      },
      {
        xtype : 'panel',
        layout : 'hbox',
        flex : 4,
        items : [{
          xtype : 'panel',
          styleHtmlContent : true,
          html: '<div class ="title">Guidelines <br/><br/> <img src="guidelines.png" class="menuI" height="100" width="100"/></div>',
          style: 'background-color: #ffcc00; font-color:#ffffff;',
          flex: 1,
          styleHtmlCls : true,
          listeners : [{
            element: 'element',
            event: 'tap',
            fn: function() {
              this.fireEvent('onFaqClick', this);
            }
          }]
        },
        {
          xtype : 'panel',
          styleHtmlContent : true,
          html: '<div class ="title">Notifications <br/><br/> <img src="notification.png" class="menuI" height="100" width="100"/></div>',
          style: 'background-color: #ff3333; font-color:#ffffff;',
          flex: 1,
          styleHtmlCls : true,
          listeners : [{
            element: 'element',
            event: 'tap',
            fn: function() {
              this.fireEvent('onPlannerClick', this);
            }
          }]
        }]
      },
      {
        xtype : 'panel',
        layout : 'vbox',
        flex : 1,
        items : [{
          xtype : 'panel',
          styleHtmlContent : true,
          html: '<div class ="title1">Wockhardt Banner</div>',
          style: 'background-color: #f2f2f2; font-color:#000000; text-align: center;',
          flex: 1.5,
          styleHtmlCls : true,
          listeners : [{
            element: 'element',
            event: 'tap',
            fn: function() {
              this.fireEvent('onFaqClick', this);
            }
          }]
        }]
      }]
    }
  });

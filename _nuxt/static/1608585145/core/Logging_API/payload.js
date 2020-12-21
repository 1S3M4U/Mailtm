__NUXT_JSONP__("/core/Logging_API", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){return {data:[{document:{slug:"Logging_API",title:"Logging API",position:9,category:"Core",toc:[{id:k,depth:2,text:l}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"Logging conventions within Haraka"}]},{type:a,value:c},{type:b,tag:"h2",props:{id:k},children:[{type:b,tag:m,props:{href:"#see-also",ariaHidden:"true",tabIndex:-1},children:[{type:b,tag:"span",props:{className:["icon","icon-link"]},children:[]}]},{type:a,value:l}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:m,props:{href:""},children:[{type:a,value:"https:\u002F\u002Fgithub.com\u002Fharaka\u002FHaraka\u002Fpull\u002F119"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"logline will always always be in the form:"}]},{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:b,tag:g,props:{className:[h,i]},children:[{type:b,tag:j,props:{},children:[{type:a,value:"[level] [connection uuid] [origin] message\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"where origin is \"haraka_core\" or the name of the plugin which\ntriggered the message, and \"connection uuid\" is the ID of the\nconnection associated with the message."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"when calling a log method on logger, you should provide the\nplugin object and the connection object anywhere in the arguments\nto the log method."}]},{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:b,tag:g,props:{className:[h,i]},children:[{type:b,tag:j,props:{},children:[{type:a,value:"logger.logdebug(\"i like turtles\", plugin, connection);\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"will yield, for example,"}]},{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:b,tag:g,props:{className:[h,i]},children:[{type:b,tag:j,props:{},children:[{type:a,value:"[DEBUG] [7F1C820F-DC79-4192-9AA6-5307354B20A6] [dnsbl] i like turtles\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"if you call the log method on the connection object, you can\nforego the connection as argument:"}]},{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:b,tag:g,props:{className:[h,i]},children:[{type:b,tag:j,props:{},children:[{type:a,value:"connection.logdebug(\"turtles all the way down\", plugin);\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"and similarly for the log methods on the plugin object:"}]},{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:b,tag:g,props:{className:[h,i]},children:[{type:b,tag:j,props:{},children:[{type:a,value:"plugin.logdebug(\"he just really likes turtles\", connection);\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"failing to provide a connection and\u002For plugin object will leave\nthe default values in the log (currently \"core\" and\n\"no_connection\")."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"this is implemented by testing for argument type in\nthe logger.js log* method. objects-as-arguments are then sniffed\nto try to determine if they're a connection or plugin instance."}]}]},dir:"\u002Fen\u002Fcore",path:"\u002Fen\u002Fcore\u002FLogging_API",extension:".md",createdAt:n,updatedAt:n,to:"\u002Fcore\u002FLogging_API"},prev:{slug:"HAProxy",title:"HAProxy PROXY protocol extension support",to:"\u002Fcore\u002FHAProxy"},next:{slug:"Header",title:"Header Object",to:"\u002Fcore\u002FHeader"}}],fetch:[],mutations:[]}}("text","element","\n","p","div","nuxt-content-highlight","pre","language-text","line-numbers","code","see-also","See also","a","2020-12-21T21:10:36.371Z")));
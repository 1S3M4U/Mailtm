__NUXT_JSONP__("/plugins/auth/auth_vpopmaild", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){return {data:[{document:{slug:"auth_vpopmaild",title:"auth\u002Fauth_vpopmaild",position:23,category:"Plugins",toc:[{id:g,depth:2,text:h},{id:i,depth:3,text:j}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"The "},{type:b,tag:e,props:{},children:[{type:a,value:"auth\u002Fvpopmaild"}]},{type:a,value:" plugin allows you to authenticate against a vpopmaild\ndaemon."}]},{type:a,value:c},{type:b,tag:"h2",props:{id:g},children:[{type:b,tag:k,props:{ariaHidden:l,href:"#configuration",tabIndex:m},children:[{type:b,tag:n,props:{className:[o,p]},children:[]}]},{type:a,value:h}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Configuration is stored in "},{type:b,tag:e,props:{},children:[{type:a,value:"config\u002Fauth_vpopmaild.ini"}]},{type:a,value:" and uses INI\nstyle formatting."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"There are three configuration settings:"}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"host: The host\u002FIP that vpopmaild is listening on (default: localhost)."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"port: The TCP port that vpopmaild is listening on (default: 89)."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"sysadmin: A colon separated username:password of a vpopmail user with\nSYSADMIN privileges (see vpopmail\u002Fbin\u002Fvmoduser -S). This is "},{type:b,tag:"strong",props:{},children:[{type:a,value:"only"}]},{type:a,value:"\nnecessary to support CRAM-MD5 which requires access to the clear text\npassword. On new installs, it's best not to use CRAM-MD5, as it requires\nstoring clear text passwords. Legacy clients with MUAs configured\nto authenticate with CRAM-MD5 will need this enabled."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"h3",props:{id:i},children:[{type:b,tag:k,props:{ariaHidden:l,href:"#per-domain-configuration",tabIndex:m},children:[{type:b,tag:n,props:{className:[o,p]},children:[]}]},{type:a,value:j}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Additionally, domains can each have their own configuration for connecting\nto vpopmaild. The defaults are the same, so only the differences needs to\nbe declared. Example:"}]},{type:a,value:c},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-text","line-numbers"]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"[example.com]\nhost=192.168.0.1\nport=999\n\n[example2.com]\nhost=192.168.0.2\nsysadmin=postmaster@example2.com:sekret\n"}]}]}]}]},dir:"\u002Fen\u002Fplugins\u002Fauth",path:"\u002Fen\u002Fplugins\u002Fauth\u002Fauth_vpopmaild",extension:".md",createdAt:q,updatedAt:q,to:"\u002Fplugins\u002Fauth\u002Fauth_vpopmaild"},prev:{slug:"auth_proxy",title:"auth\u002Fauth_proxy",to:"\u002Fplugins\u002Fauth\u002Fauth_proxy"},next:{slug:"flat_file",title:"auth\u002Fflat_file",to:"\u002Fplugins\u002Fauth\u002Fflat_file"}}],fetch:[],mutations:[]}}("text","element","\n","p","code","li","configuration","Configuration","per-domain-configuration","Per-domain Configuration","a","true",-1,"span","icon","icon-link","2020-12-21T21:10:36.371Z")));
__NUXT_JSONP__("/core/Transaction", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A){return {data:[{document:{slug:"Transaction",title:"Transaction Object",position:15,category:"Core",toc:[{id:t,depth:2,text:u}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"An SMTP transaction is valid from MAIL FROM time until RSET or \"final-dot\"."}]},{type:a,value:c},{type:b,tag:"h2",props:{id:t},children:[{type:b,tag:h,props:{href:"#api",ariaHidden:v,tabIndex:-1},children:[{type:b,tag:"span",props:{className:["icon","icon-link"]},children:[]}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"transaction.uuid"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"A unique UUID for this transaction. Is equal to the connection.uuid + '.N'\nwhere N increments for each transaction on this connection."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"transaction.mail_from"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The value of the MAIL FROM command as an "},{type:b,tag:e,props:{},children:[{type:a,value:r}]},{type:a,value:"[1] object."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"transaction.rcpt_to"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"An Array of "},{type:b,tag:e,props:{},children:[{type:a,value:r}]},{type:a,value:"[1] objects of recipients from the RCPT TO command."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"transaction.message_stream"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"A node.js Readable Stream object for the message."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You use it like this:"}]},{type:a,value:c},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p,q]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"transaction.message_stream.pipe(WritableStream, options)\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Where WritableStream is a node.js Writable Stream object such as a\nnet.socket, fs.writableStream, process.stdout\u002Fstderr or custom stream."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The options argument should be an object that overrides the following\nproperties:"}]},{type:a,value:c},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p,q]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"* line_endings (default: \"\\r\\n\")\n* dot_stuffing (default: false)\n* ending_dot   (default: false)\n* end          (default: true)\n* buffer_size  (default: 65535)\n* clamd_style  (default: false)\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"e.g."}]},{type:a,value:c},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p,q]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"transaction.message_stream.pipe(socket, { dot_stuffing: true, ending_dot: true });\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"transaction.data_bytes"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The number of bytes in the email after DATA."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"transaction.add_data(line)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Adds a line of data to the email. Note this is RAW email - it isn't useful\nfor adding banners to the email."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"transaction.notes"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"A safe place to store transaction specific values. See also "},{type:b,tag:h,props:{href:"https:\u002F\u002Fgithub.com\u002Fharaka\u002Fharaka-results",rel:[i,j,k],target:l},children:[{type:a,value:"haraka-results"}]},{type:a,value:" and "},{type:b,tag:h,props:{href:"https:\u002F\u002Fgithub.com\u002Fharaka\u002Fharaka-notes",rel:[i,j,k],target:l},children:[{type:a,value:"haraka-notes"}]},{type:a,value:s}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"transaction.add_leading_header(key, value)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Adds a header to the top of the header list.  This should only be used in\nvery specific cases.  Most people will want to use "},{type:b,tag:e,props:{},children:[{type:a,value:"add_header()"}]},{type:a,value:" instead."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"transaction.add_header(key, value)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Adds a header to the email."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"transaction.remove_header(key)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Deletes a header from the email."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"transaction.header"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The header of the email. See "},{type:b,tag:e,props:{},children:[{type:a,value:"Header Object"}]},{type:a,value:s}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"transaction.parse_body = true|false [default: false]"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Set to "},{type:b,tag:e,props:{},children:[{type:a,value:v}]},{type:a,value:" to enable parsing of the mail body. Make sure you set this in\nhook_data or before."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"transaction.body"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The body of the email if you set "},{type:b,tag:e,props:{},children:[{type:a,value:w}]},{type:a,value:" above. See "},{type:b,tag:e,props:{},children:[{type:a,value:"Body Object"}]},{type:a,value:s}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"transaction.attachment_hooks(start)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Sets a callback for when we see an attachment if "},{type:b,tag:e,props:{},children:[{type:a,value:w}]},{type:a,value:" has been set."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The "},{type:b,tag:e,props:{},children:[{type:a,value:"start"}]},{type:a,value:" event will receive "},{type:b,tag:e,props:{},children:[{type:a,value:"(content_type, filename, body, stream)"}]},{type:a,value:" as\nparameters."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The stream is a "},{type:b,tag:e,props:{},children:[{type:a,value:"ReadableStream"}]},{type:a,value:" - see "},{type:b,tag:h,props:{href:x,rel:[i,j,k],target:l},children:[{type:a,value:x}]},{type:a,value:" for\ndetails on how this works."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If you set stream.connection then the stream will apply backpressure to the\nconnection, allowing you to process attachments before the connection has\nended. Here is an example which stores attachments in temporary files using\nthe "},{type:b,tag:e,props:{},children:[{type:a,value:"tmp"}]},{type:a,value:" library from npm and tells us the size of the file:"}]},{type:a,value:c},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p,q]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"exports.hook_data = function (next, connection) {\n    \u002F\u002F enable mail body parsing\n    connection.transaction.parse_body = true;\n    connection.transaction.attachment_hooks(\n        function (ct, fn, body, stream) {\n            start_att(connection, ct, fn, body, stream)\n        }\n    );\n    next();\n}\n\nfunction start_att (connection, ct, fn, body, stream) {\n    connection.loginfo(\"Got attachment: \" + ct + \", \" + fn + \" for user id: \" + connection.transaction.notes.hubdoc_user.email);\n    connection.transaction.notes.attachment_count++;\n\n    stream.connection = connection; \u002F\u002F Allow backpressure\n    stream.pause();\n\n    var tmp = require('tmp');\n\n    tmp.file(function (err, path, fd) {\n        connection.loginfo(\"Got tempfile: \" + path + \" (\" + fd + \")\");\n        var ws = fs.createWriteStream(path);\n        stream.pipe(ws);\n        stream.resume();\n        ws.on('close', function () {\n            connection.loginfo(\"End of stream reached\");\n            fs.fstat(fd, function (err, stats) {\n                connection.loginfo(\"Got data of length: \" + stats.size);\n                \u002F\u002F Close the tmp file descriptor\n                fs.close(fd, function(){});\n            });\n        });\n    });\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"transaction.discard_data = true|false [default: false]"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Set this flag to true to discard all data as it arrives and not store in\nmemory or on disk (in the message_stream property). You can still access\nthe attachments and body if you set parse_body to true. This is useful\nfor systems which do not need the full email, just the attachments or\nmail text."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"transaction.set_banner(text, html)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Sets a banner to be added to the end of the email. If the html part is not\ngiven (optional) then the text part will have each line ending replaced with\n"},{type:b,tag:e,props:{},children:[{type:a,value:"\u003Cbr\u002F\u003E"}]},{type:a,value:" when being inserted into HTML parts."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"transaction.add_body_filter(ct_match, filter)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Adds a filter to be applied to body parts in the email.  ct_match should be a\nregular expression to match against the full content-type line, or a string to\nmatch at the start, e.g. "},{type:b,tag:e,props:{},children:[{type:a,value:"\u002F^text\\\u002Fhtml\u002F"}]},{type:a,value:" or "},{type:b,tag:e,props:{},children:[{type:a,value:"'text\u002Fplain'"}]},{type:a,value:".  filter will be\ncalled when each body part matching ct_match is complete.  It receives three\nparameters, the content-type line, the encoding name, and a buffer with the\nfull body part.  It should return a buffer with the desired contents of the\nbody in the same encoding."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"transaction.results"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Store results of processing in a structured format. See "},{type:b,tag:h,props:{href:"http:\u002F\u002Fharaka.github.io\u002Fmanual\u002FResults.html",rel:[i,j,k],target:l},children:[{type:a,value:"docs\u002FResults"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"[1]: "},{type:b,tag:e,props:{},children:[{type:a,value:r}]},{type:a,value:" objects are address-rfc2821 objects. See "},{type:b,tag:h,props:{href:y,rel:[i,j,k],target:l},children:[{type:a,value:y}]}]}]},dir:"\u002Fen\u002Fcore",path:"\u002Fen\u002Fcore\u002FTransaction",extension:".md",createdAt:z,updatedAt:z,to:"\u002Fcore\u002FTransaction"},prev:{slug:A,title:A,to:"\u002Fcore\u002FResults"},next:{slug:"Tutorial",title:"Writing Haraka Plugins",to:"\u002Ftutorials\u002FTutorial"}}],fetch:[],mutations:[]}}("text","element","\n","p","code","ul","li","a","nofollow","noopener","noreferrer","_blank","div","nuxt-content-highlight","pre","language-text","line-numbers","Address",".","api","API","true","parse_body","http:\u002F\u002Fnodejs.org\u002Fapi\u002Fstream.html","https:\u002F\u002Fgithub.com\u002Fharaka\u002Fnode-address-rfc2821","2020-12-21T21:10:36.371Z","Results")));
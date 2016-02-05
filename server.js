var config = require('./config.json' ),
	express = require( 'express' ),
	app = express(),
	bodyParser = require('body-parser' ),
	jsonParser = bodyParser.json(),
	pubnub = require( 'pubnub' )({
		ssl: true,
		publish_key: config.publish_key
	});

app.get( '/', function( req, res ) {
	res.sendStatus( 404 )
} );

app.post( '/', jsonParser, function( req, res ) {
	res.sendStatus( 200 );
	console.log(req.get('host'), req.get('origin'));
	console.log(req.body);
//	res.json(req.body);
//	pubnub.publish({
//		channel   : config.channel,
//		message   : req.body,
//		callback  : function(e) { console.log( "SUCCESS!", e ); },
//		error     : function(e) { console.log( "FAILED! RETRY PUBLISH!", e ); }
//	});
} );

app.listen( process.env.PORT || 1337 );


//var pubnub = require("pubnub")({
//    ssl           : true,  // <- enable TLS Tunneling over TCP
//    publish_key   : "demo",
//    subscribe_key : "demo"
//});
//
///* ---------------------------------------------------------------------------
// Publish Messages
// --------------------------------------------------------------------------- */
//var message = { "some" : "data" };
//pubnub.publish({
//    channel   : 'my_channel',
//    message   : message,
//    callback  : function(e) { console.log( "SUCCESS!", e ); },
//    error     : function(e) { console.log( "FAILED! RETRY PUBLISH!", e ); }
//});
//
///* ---------------------------------------------------------------------------
// Listen for Messages
// --------------------------------------------------------------------------- */
//pubnub.subscribe({
//    channel  : "my_channel",
//    callback : function(message) {
//        console.log( " > ", message );
//    }
//});
//
///* ---------------------------------------------------------------------------
// Type Console Message
// --------------------------------------------------------------------------- */
//var stdin = process.openStdin();
//stdin.on( 'data', function(chunk) {
//    pubnub.publish({
//        channel : "my_channel",
//        message : ''+chunk
//    });
//});

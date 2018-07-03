'use strict';

var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );
app.use(bodyParser.urlencoded({limit: 100*1024*1024, extended: true}));
var config = require( './config/config.json' );

for ( var item in config ) {
    app.set( item, config[ item ] );
}

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {
    extended: true
} ) );

require( './src/api' )( app );

app.listen( app.get( 'port' ), function() {
    console.log( 'enketo-transformer running on port ' + app.get( 'port' ) + '!' );
} );

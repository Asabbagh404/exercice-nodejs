// Import events module
var events = require('events');


// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// A Listener
var bellRingHandler1 = function bellRingHandler1(who) {
    console.log("\n");
    console.log('The Bell Ringing..... (Handler 1)');

    console.log(" " + who + " was standing behind the door!");
    if(who == 'Jerry') {
        console.log(' Tom, help me!!');
        return;
    }
    console.log(" Welcome " + who);
}

// A Listener
var bellRingHandler2 = function bellRingHandler2(who) {
    console.log("\n");
    console.log('The Bell Ringing..... (Handler 2)');

    eventEmitter.emit("nobodyIsAtHome");
}

// A Listener
var nobodyIsAtHomeHandler = function nobodyIsAtHomeHandler()  {
    console.log("\n");
    console.log(" Sorry, Nobody is at home now, Please leave your message!")
}


// Add Event Listeners
eventEmitter.addListener('bellRing', bellRingHandler1);
eventEmitter.addListener('bellRing', bellRingHandler2);

eventEmitter.addListener('nobodyIsAtHome', nobodyIsAtHomeHandler);

// ----- Testing ------

// Fire bellRing event!!
eventEmitter.emit('bellRing', 'Jerry');

// Create a fizz buzz code that emit an event 'trigger' every %2 and %3 and two event fizz and buzz when it's
// respectively %2 and %3. Your fizz buzz must reach 1000

TIMEOUT(600000); // simulation duration in milliseconds

num_messages_tx = 0;
num_messages_rx = 0;

timeout_function = function () {
    log.log("Script timed out.\n");
    log.log("Messages transmitted: " + num_messages_tx + " \n");
    log.log("Messages received:    " + num_messages_rx + " \n");
    log.testOK();
}

while (true) {
    
    if (msg) {
        if(msg.startsWith("[INFO: App       ] Sending request")) {
            num_messages_tx += 1;
        }
        if(msg.startsWith("[INFO: App       ] Received response")) {
            num_messages_rx += 1;
        }
    }

    YIELD();
}
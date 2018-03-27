var yalgaar = require('yalgaar');

yalgaar.ConnectToYalgaar({
    ClientKey: 'ClientKey',
	UUID:'YalgaarNodeJSUUID',
    SSL: false,
    Callback: function (acknowledgment) {
        console.log(acknowledgment);
        SubscribeMessage();
    },
    Error: function (err) {
        console.log(err);
    }
});
function PublishMessage() {
    yalgaar.PublishMessage({
        ChannelName: 'YourChannel',
        Message: 'This is Yalgaar NodeJS SDK Example',
        Callback: function (acknowledgment) {
            console.log(acknowledgment);
        }
    });
}
function SubscribeMessage() {
    yalgaar.SubscribeMessage({
        ChannelName: 'YourChannel',
        Callback: function (message, channel, acknowledgment) {
            if (acknowledgment)
            {
                console.log(acknowledgment);
                PublishMessage();
            }
            if (message)
            {
                console.log(message);
            }
        },
        CallbackPresence: function (message, channel, acknowledgment) {
            if (acknowledgment)
                console.log(acknowledgment);
            if (message)
                console.log(message);
        }
    });
}
exports.handler =  async function(event, context) {
    console.log("TIER: " + process.env.TIER);
    console.log("EVENT: \n" + JSON.stringify(event, null, 2));
    return context.logStreamName; }
async function logAndReplyTo(msgObj, logStr) {
    msgObj.reply(logStr);
    console.log(logStr);
}

module.exports = async () => {
    return {
        logAndReplyTo: logAndReplyTo
    }
}
module.exports = async (msg) => {
    //Only enable this for DM messages
    if (msg.obj.channel.type != "dm") return;

    if (!(await process.core.users.getAddress(msg.sender))) {
        notifyCreation()
            .then(() => process.core.coin.createAddress(msg.sender))
            .then((newAddress) => process.core.users.setAddress(msg.sender, newAddress))
            .then((newAddress) => sendAddressOrNotifyError(newAddress))
            .catch(() => console.error("Error generating deposit address"));
    } else {
        address = await process.core.users.getAddress(msg.sender);
        replyWithAddress(address)
    };

    async function sendAddressOrNotifyError(newAddress) {
        if (newAddress != "invalid") {
            replyWithAddress(newAddress)
        } else {
            msg.obj.reply("There was an error generating your address.");
        }
    }

    async function replyWithAddress(address) {
        msg.obj.reply("Your reusable address is " + address + ".\n\nKeep in mind this ONLY ACCEPTS MATIC FRY (https://explorer-mainnet.maticvigil.com/address/0x48D3a72230e65380f63a05eE41A7BE31773c44b4).");
    }

    async function notifyCreation() {
        msg.obj.reply("You didn't have an address, generating one for you now ...");
    }
};

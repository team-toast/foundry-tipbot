//Get variables from the settings.
var bot = process.settings.discord.user;
var symbol = process.settings.coin.symbol;
var decimals = process.settings.coin.decimals;
var fee = process.settings.coin.withdrawFee;

//Default help tect.
var help = `
**TIPBOT COMMAND LIST**

To run a command, either preface it with "!" ("!deposit", "!tip") or ping the bot ("<@${bot}> deposit", "<@${bot}> tip").

This bot does use decimals, and has ${decimals} decimals of accuracy. You can also use "all" instead of any AMOUNT to tip/withdraw your entire balance.

-- *!balance*
Prints your balance.

-- *!tip <@PERSON> <AMOUNT>*
Tips the person that amount of ${symbol}.

-- *!withdraw <AMOUNT> <MATIC ADDRESS>*
NOTE: This will withdraw MATIC FRY ONLY (https://explorer-mainnet.maticvigil.com/address/0x48D3a72230e65380f63a05eE41A7BE31773c44b4)
Withdraws AMOUNT to MATIC ADDRESS, charging a ${fee} ${symbol} fee.

-- *!deposit*
NOTE: This will accept MATIC FRY ONLY (https://explorer-mainnet.maticvigil.com/address/0x48D3a72230e65380f63a05eE41A7BE31773c44b4)
Prints your personal deposit address for Matic FRY.

If you have any questions, feel free to ask <@390247192264310785>.

This bot is fully open source and available at https://github.com/mitche50/erc20tipbot.
Forked from original bot: https://github.com/kayabaNerve/tip-bot.
`;

module.exports = async (msg) => {
    //Only enable this for DM messages
    if (msg.obj.channel.type != "dm") return;
    msg.obj.author.send({
        embed: {
            description: help
        }
    });
};

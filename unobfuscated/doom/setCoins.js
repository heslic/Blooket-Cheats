/**
* @license StewartPrivateLicense-2.0.0
* Copyright (c) Aerell McKnight 2023
*
* You may not reproduce or distribute any code inside this file without the licenser's permission.
* You may not copy, modify, steal, skid, or recreate any of the code inside this file.
* You may not under any circumstance republish any code from this file as your own.
* 
* ALL TERMS STATED IN THE LINK BELOW APPLY ASWELL
* https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE
*/

/* THE UPDATE CHECKER IS ADDED DURING COMMIT PREP, THERE MAY BE REDUNDANT CODE, DO NOT TOUCH */

/* Update Checker start */
let i = document.createElement('iframe');
document.body.append(i);
window.confirm = i.contentWindow.confirm.bind(window);
i.remove();
if (1673311687181 > (await Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']]]).cache).find(x => x.exports?.a?.get).exports.a.get("https://dashboard.blooket.com/api/games?gameId=6368436a976422d8a3f70cd7").then(x => parseInt(`0${x.data.questions.find(x => x.question == "../cheats/doom/setCoins.js")?.answers?.[0]}`))) || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")) {
/* Update Checker end */
    let i = document.createElement('iframe');
    document.body.append(i);
    window.alert = i.contentWindow.prompt.bind(window);
    i.remove();
    if (window.location.pathname == "/tower/battle") {
        let coins = parseInt("0" + alert("How many coins would you like?"));
        let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
        try {
            stateNode.props.setTowerCoins(coins);
        } catch { }
    } else alert("You need to be in battle to run this cheat!");
}
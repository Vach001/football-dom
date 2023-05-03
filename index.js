import aplClubs from "./src/assets/data/leagues/apl.json" assert { type: "json" };
import aplMatches from "./src/assets/data/matches/apl.json" assert { type: "json" };
import { matchResultOption } from "./src/constants/matches.constants.js";
import getClabsStat from "./src/services/matches.services.js";
import { calcClabStat } from "./src/helpers/calcStats.helpers.js";
// console.log(aplClubs);
// console.log(aplMatches);

/*
{
    "Team Name": {
        mp: 0,
        w: 0,
        d: 0,
        l: 0,
        gf: 0,
        ga: 0,
        gd: 0,
        pts: 0,
    }
}
*/



console.log(getClabsStat(aplMatches.matches, matchResultOption));

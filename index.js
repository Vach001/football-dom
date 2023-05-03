import aplClubs from "./src/assets/data/leagues/apl.json" assert { type: "json" };
import aplMatches from "./src/assets/data/matches/apl.json" assert { type: "json" };
import { matchResultOption } from "./src/constants/matches.constants.js";
import getClabsStat from "./src/services/matches.services.js";
import { calcClabStat } from "./src/helpers/calcStats.helpers.js";


console.log(getClabsStat(aplMatches.matches, matchResultOption));

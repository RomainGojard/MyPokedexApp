import { Ability } from "./Ability";
import { Link } from "./Link";
import { Move } from "./Move";
import { Sprites } from "./Sprites";
import { Stat } from "./Stat";
import { Type } from "./Type";

export interface Pokemon {
    abilities:                Ability[];
    base_experience:          number;
    forms:                    Link[];
    game_indices:             any[];
    height:                   number;
    held_items:               any[];
    id:                       number;
    is_default:               boolean;
    location_area_encounters: string;
    moves:                    Move[];
    name:                     string;
    order:                    number;
    past_types:               any[];
    species:                  Link;
    sprites:                  Sprites;
    stats:                    Stat[];
    types:                    Type[];
    weight:                   number;
}
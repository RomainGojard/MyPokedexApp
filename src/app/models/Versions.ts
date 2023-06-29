import { GenerationI } from "./GenerationI";
import { GenerationII } from "./GenerationII";
import { GenerationIII } from "./GenerationIII";
import { GenerationIv } from "./GenerationIv";
import { GenerationV } from "./GenerationV";
import { GenerationVii } from "./GenerationVii";
import { GenerationViii } from "./GenerationViii";
import { Home } from "./Home";

export interface Versions {
    "generation-i":    GenerationI;
    "generation-ii":   GenerationII;
    "generation-iii":  GenerationIII;
    "generation-iv":   GenerationIv;
    "generation-v":    GenerationV;
    "generation-vi":   Home;
    "generation-vii":  GenerationVii;
    "generation-viii": GenerationViii;
}

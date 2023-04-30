import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import * as RMFunctions from "./parks/RockyMountain";
import { trees, wildlife } from "./parks/RockyMountain";

console.log(trees);
// > "Aspen and Pine"

wildlife();

export default function ColoradoStateParks() {
  howManyParks();
  return (
    
    <div>
      <MesaVerde />
    </div>
  );
}
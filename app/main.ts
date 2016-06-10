import { enableProdMode } from "@angular/core";
import { bootstrap }    from "@angular/platform-browser-dynamic";

import { MaterialComponent } from "./+material-component/material.component";

enableProdMode();

bootstrap(<any>MaterialComponent, [])
    .then(success => { console.log("Amgular material  is ready"); })
    .catch(error => console.log(error));

import { enableProdMode } from "@angular/core";
import {HTTP_PROVIDERS} from '@angular/http';
import { bootstrap }    from "@angular/platform-browser-dynamic";

import { MaterialComponent } from "./+material-component/material.component";

enableProdMode();

bootstrap(<any>MaterialComponent, [HTTP_PROVIDERS])
    .then(success => { console.log("Amgular material  is ready"); })
    .catch(error => console.log(error));

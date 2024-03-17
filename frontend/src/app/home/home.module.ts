import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { HttpClientModule } from '@angular/common/http';
import { ZohoCrmService } from './shared/zoho.crm.service';
//import { IOpenDeals } from './shared/opendeals.modal';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, HomeRoutingModule],
    exports: [HttpClientModule],
    providers: [ZohoCrmService]
})
export class HomeModule {}

import { AfterViewInit, Component } from "@angular/core";
import { ZohoCrmService } from './shared/zoho.crm.service';
import { IOpenDeals } from './shared/opendeals.modal'

import * as Session from "supertokens-auth-react/recipe/session";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
})
export class HomeComponent implements AfterViewInit {
    title = "angularreactapp";

    public rootId = "rootId";
    public userId = "";
    public session = false;
    public dataJson: any;

    constructor(private zohoCrmService: ZohoCrmService) {}

    ngAfterViewInit() {
        this.getUserInfo();
    }

    async getUserInfo() {
        this.session = await Session.doesSessionExist();
        if (this.session) {
            this.userId = await Session.getUserId();
        }
    }

    async getCRMReport() {
      console.log("Inside getCRMReport");
      this.zohoCrmService.getZohoCrmReport().subscribe((data) => {
        console.log("Get API data: ", data);
        console.log("Get message data: ", data);
        this.dataJson = data;
      });
      console.log("Exit getCRMReport");
    }

    async onLogout() {
        await Session.signOut();
        window.location.reload();
    }

    redirectToLogin() {
        window.location.href = "auth";
    }
}

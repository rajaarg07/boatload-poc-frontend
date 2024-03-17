import { Component } from "@angular/core";
import { SuperTokensConfig } from "src/config";

import * as SuperTokens from "supertokens-auth-react";
import * as EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";

SuperTokens.init({
    appInfo: {
        appName: "SuperTokens Demo App",
  //      apiDomain: "https://api-emailpassword.demo.supertokens.com/",
//        websiteDomain: "https://emailpassword.demo.supertokens.com/",
        websiteDomain: "https://localhost:3000/",
        apiDomain: "http://localhost:3001/",
        apiBasePath: "/auth",
        websiteBasePath: "/auth"
    },
    recipeList: [
        EmailPassword.init(),
        Session.init(),
    ],
});

@Component({
    selector: "app-root",
    template: "<router-outlet></router-outlet>",
})
export class AppComponent {
    title = "with-angular-thirdpartyemailpassword";
}

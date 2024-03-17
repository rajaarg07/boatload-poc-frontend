import express from "express";
import cors from "cors";
import supertokens from "supertokens-node";
import { verifySession } from "supertokens-node/recipe/session/framework/express";
import { middleware, errorHandler, SessionRequest } from "supertokens-node/framework/express";
import { getWebsiteDomain, SuperTokensConfig } from "./config";
import Multitenancy from "supertokens-node/recipe/multitenancy";
import Session from "supertokens-node/recipe/session";
import EmailPassword from "supertokens-node/recipe/emailpassword";

//supertokens.init(SuperTokensConfig);

supertokens.init({
    framework: "express",
    supertokens: {
        // https://try.supertokens.com is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.com), or self host a core.
        connectionURI: "https://try.supertokens.com",
        // apiKey: <API_KEY(if configured)>,
    },
    appInfo: {
        // learn more about this on https://supertokens.com/docs/session/appinfo
        appName: "SuperToken Backend App",
 //       apiDomain: getApiDomain(),
  //      websiteDomain: getWebsiteDomain(),
        websiteDomain: "http://localhost:3000/",
        apiDomain: "http://localhost:3001/",
        apiBasePath: "/auth",
        websiteBasePath: "/auth",
    },
    recipeList: [
        EmailPassword.init(), 
        Session.init()
    ]
});
//})

const app = express();

app.use(
    cors({
        origin: getWebsiteDomain(),
        allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
        methods: ["GET", "PUT", "POST", "DELETE"],
        credentials: true,
    })
);

// This exposes all the APIs from SuperTokens to the client.
app.use(middleware());

// An example API that requires session verification
app.get("/sessioninfo", verifySession(), async (req: SessionRequest, res) => {
    let session = req.session;
    res.send({
        sessionHandle: session!.getHandle(),
        userId: session!.getUserId(),
        accessTokenPayload: session!.getAccessTokenPayload(),
    });
});

// This API is used by the frontend to create the tenants drop down when the app loads.
// Depending on your UX, you can remove this API.
app.get("/tenants", async (req, res) => {
    let tenants = await Multitenancy.listAllTenants();
    res.send(tenants);
});

// In case of session related errors, this error handler
// returns 401 to the client.
app.use(errorHandler());

app.listen(3001, () => console.log(`API Server listening on port 3001`));

## BoatLoad POC

** Requirement: **

Below tasks needs to be completed as per the requirement from frontend

(i) Need to get user authenticated from Supertokens UI 

(ii) After login, trigger a API call to connect to Zoho CRM, 

(iii) Pull any report, save in DB and display the report in the UI
 
** Tech Stack Used **

*FrontEnd:*

(i) Angular 13, 

(ii) NodeJs Backend for user authentication
 
** How it works **

(i) Supertoken UI of Email and Password is displayed with Angular UI 

(ii) After providing the user credentials and when we try to login, the Angular Code redirects to NodeJs Backend to connect to Supertke URI to authenticate the UI

(iii) After sucessful authentication from Supertoken in Angular UI, we land on a home consisiting of UserId, Get Open Reports and Sign Out button

(iv) We need to Click on the Get Open Report button to trigger a backend call to Java to connect to Zoho CRM, and pull a report

(v) Pulled report is displayed in tabulation.

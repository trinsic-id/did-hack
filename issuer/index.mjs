import { TrinsicService } from "@trinsic/trinsic";

const trinsic = new TrinsicService({ authToken: "" });

const issueRequest = {
    templateId: "https://schema.trinsic.cloud/did-hack/example-credential",
    valuesJson: JSON.stringify({
        "name": "Alice Smith",
        "email": "alice@example.com",
        "dateOfBirth": "2019-09-26T07:58:30.996Z", // ISO 8601 format
    })
};
const issueResponse = await trinsic.credential().issueFromTemplate(issueRequest);

console.log(JSON.parse(issueResponse.documentJson));

// const sendRequest = {
//     email: "tomislav@trinsic.id",
//     documentJson: issueResponse.documentJson,
//     sendNotification: true
// };
// await trinsic.credential().send(sendRequest);
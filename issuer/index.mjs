import { TrinsicService } from "@trinsic/trinsic";

const trinsic = new TrinsicService({ authToken: "" });

const issueRequest = {
    templateId: "https://schema.trinsic.cloud/did-hack/attendance-credential",
    valuesJson: JSON.stringify({
        "name": "John Doe",
        "email": "john.doe@example.com",
        "organization": "ABC Corp",
        "experience": "Intermediate",
        "specialization": "Web Development",
        "sessionName": "Intro to Decentralized Identity",
        "sessionDateTime": "2023-06-10T09:30:00Z",
        "sessionLocation": "Conference Room A"
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

// const verifyResponse = await trinsic.credential().verifyProof({
//     proofDocumentJson: JSON.stringify()
// });

// // pretty print verify response
// console.log(JSON.stringify(verifyResponse, null, 2));
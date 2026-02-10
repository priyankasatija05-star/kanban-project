const admin = require("firebase-admin");
const credentials = require("../../intelligent-kanban-baord-firebase-sdk.json")
admin.initializeApp({
    credential:admin.credential.cert(credentials)
})
module.exports = admin
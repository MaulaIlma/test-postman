const newman = require("newman")

newman.run({
    collection: "json-collection/maula.postman_collection.json",
    environment: "json-env/maula.postman_environment.json",
    reporters: ["cli", "htmlextra"]
})

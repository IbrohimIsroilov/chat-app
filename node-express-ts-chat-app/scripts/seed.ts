const { Seeder } = require("mongo-seeding");

const path = require("path");

const config = {
  database:
    "mongodb+srv://admin-test-chat:pAw6sd1yNHXSmyIL@tokyocluster.5iimq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  dropDatabase: false,
};

const seeder = new Seeder(config);
const collections = seeder.readCollectionsFromPath(
  path.resolve(__dirname, ".")
);

seeder
  .import(collections)
  .then(() => {
    console.log("Success.");
  })
  .catch((err) => {
    console.log("Error.", err);
  });

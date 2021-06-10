const { Seeder } = require("mongo-seeding");

const path = require("path");

const config = {
  database:
    "mongodb+srv://1808707ii:1808707ii@cluster0.o23ru.mongodb.net/Capstone?retryWrites=true&w=majority",
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

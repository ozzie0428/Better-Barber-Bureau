const mongoose = require("mongoose");
const { BarberCollection } = require("./barber");
const { EquipmentCollection } = require("./equipment");
const { ReviewCollection } = require("./review");

const connectionString =
  process.env.MONGODB_URI || "mongodb://localhost/barber";

mongoose.connect(connectionString, { useNewUrlParser: true });

mongoose.connection.once("open", () => {
  console.log(`Mongoose has connected to MongoDB`);
});

mongoose.connection.on("error", error => {
  console.error(`
      MongoDB connection error!!!
      ${error}
    `);
  process.exit(-1);
});

const deleteEverything = async () => {
  const barbers = await BarberCollection.deleteMany({});
  console.log("TCL: deleteEverything -> barbers", barbers);
  console.log(`TCL: deleted -> ${barbers.deletedCount} barbers from databse`);

  const equipment = await EquipmentCollection.deleteMany({});
  console.log(
    `TCL: deleted -> ${equipment.deletedCount} equipment from databse`
  );
  const review = await ReviewCollection.deleteMany({});
  console.log(`TCL: deleted -> ${review.deletedCount} review from databse`);
};

deleteEverything()
  .then(async () => {
    const barber = await BarberCollection.create({
      location: "Decatur, GA",
      servicesOffered: "Edge",
      ratings: 5,
      price: 5,
      picture:
        "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi1oMTuy5PnAhVljK0KHfo3AjsQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.amazon.com%2FFunko-Pop-Pokemon-Pikachu-Waving%2Fdp%2FB07XYKSNXL&psig=AOvVaw1PydtAikvdcNQdr4OF6beN&ust=1579658294029794"
    });

    const barberID = barber._id;
    await EquipmentCollection.create({
      name: "String",
      image: "https://avatars2.githubusercontent.com/u/33838562?s=400&v=4",
      description: "String",
      price: 90
    });
    console.log("TCL: barberID", barberID);
    await ReviewCollection.create({
      cleanliness: 5,
      accuracy: 3,
      overallRating: 2,
      image: "https://avatars2.githubusercontent.com/u/33838562?s=400&v=4",
      comment: "He is pretty good",
      barberId: barberID
    });
    await ReviewCollection.create({
      cleanliness: 5,
      accuracy: 3,
      overallRating: 2,
      image: "https://avatars2.githubusercontent.com/u/33838562?s=400&v=4",
      comment: "he was trash",
      barberId: barberID
    });
    await ReviewCollection.create({
      cleanliness: 5,
      accuracy: 3,
      overallRating: 2,
      image: "https://avatars2.githubusercontent.com/u/33838562?s=400&v=4",
      comment: "He was ight",
      barberId: barberID
    });
    const barber1 = await BarberCollection.create({
      location: "Decatur, GA",
      servicesOffered: "Edge",
      ratings: 5,
      price: 5,
      picture:
        "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi1oMTuy5PnAhVljK0KHfo3AjsQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.amazon.com%2FFunko-Pop-Pokemon-Pikachu-Waving%2Fdp%2FB07XYKSNXL&psig=AOvVaw1PydtAikvdcNQdr4OF6beN&ust=1579658294029794"
    });
    await ReviewCollection.create({
      cleanliness: 5,
      accuracy: 3,
      overallRating: 2,
      image: "https://avatars2.githubusercontent.com/u/33838562?s=400&v=4",
      comment: "He was ight",
      barberId: barber1._id
    });
    // const barbe2 = await BarberCollection.create({
    //   location: "Decatur, GA",
    //   servicesOffered: "Edge",
    //   ratings: 5,
    //   price: 5,
    //   picture:
    //     "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi1oMTuy5PnAhVljK0KHfo3AjsQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.amazon.com%2FFunko-Pop-Pokemon-Pikachu-Waving%2Fdp%2FB07XYKSNXL&psig=AOvVaw1PydtAikvdcNQdr4OF6beN&ust=1579658294029794"
    // });
    // const barbe3 = await BarberCollection.create({
    //   location: "Decatur, GA",
    //   servicesOffered: "Edge",
    //   ratings: 5,
    //   price: 5,
    //   picture:
    //     "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi1oMTuy5PnAhVljK0KHfo3AjsQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.amazon.com%2FFunko-Pop-Pokemon-Pikachu-Waving%2Fdp%2FB07XYKSNXL&psig=AOvVaw1PydtAikvdcNQdr4OF6beN&ust=1579658294029794"
    // });
    // const barbe4 = await BarberCollection.create({
    //   location: "Decatur, GA",
    //   servicesOffered: "Edge",
    //   ratings: 5,
    //   price: 5,
    //   picture:
    //     "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi1oMTuy5PnAhVljK0KHfo3AjsQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.amazon.com%2FFunko-Pop-Pokemon-Pikachu-Waving%2Fdp%2FB07XYKSNXL&psig=AOvVaw1PydtAikvdcNQdr4OF6beN&ust=1579658294029794"
    // });
    // const barbe5 = await BarberCollection.create({
    //   location: "Decatur, GA",
    //   servicesOffered: "Edge",
    //   ratings: 5,
    //   price: 5,
    //   picture:
    //     "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi1oMTuy5PnAhVljK0KHfo3AjsQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.amazon.com%2FFunko-Pop-Pokemon-Pikachu-Waving%2Fdp%2FB07XYKSNXL&psig=AOvVaw1PydtAikvdcNQdr4OF6beN&ust=1579658294029794"
    // });
    // const barber6 = await BarberCollection.create({
    //   location: "Decatur, GA",
    //   servicesOffered: "Edge",
    //   ratings: 5,
    //   price: 5,
    //   picture:
    //     "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi1oMTuy5PnAhVljK0KHfo3AjsQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.amazon.com%2FFunko-Pop-Pokemon-Pikachu-Waving%2Fdp%2FB07XYKSNXL&psig=AOvVaw1PydtAikvdcNQdr4OF6beN&ust=1579658294029794"
    // });
    // console.log("TCL: review", review);
  })
  .then(() => {
    mongoose.connection.close();
    console.log(`Finished Seeding Database...

    Disconnecting from MongoDB`);
  });

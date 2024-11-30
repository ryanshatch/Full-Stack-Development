//* Old versions below that are not functional but kept for reference.

// const seedData = [
//     // Add your seed data here
//     {
//         field1: 'value1',
//         field2: 'value2',
//         // Add other fields
//     },
//     {
//         field1: 'value3',
//         field2: 'value4',
//         // Add other fields
//     },
//     // Add more seed data objects as needed
// ];

// async function seedDB() {
//     try {
//         await mongoose.connect('mongodb://localhost:27017/yourDatabase', {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });

//         console.log('Connected to MongoDB');

//         // Remove existing records
//         await YourModel.deleteMany({});
//         console.log('Existing records removed');

//         // Insert seed data
//         await YourModel.insertMany(seedData);
//         console.log('Seed data inserted');

//         mongoose.connection.close();
//         console.log('Connection closed');
//     } catch (error) {
//         console.error('Error seeding database:', error);
//         mongoose.connection.close();
//     }
// }

// seedDB();









// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// app.use(cors());
// app.use(express.json());

// const port = process.env.PORT || 3000;

// // MongoDB connection URI from environment variables
// const uri = process.env.MONGO_URI; // Ensure MONGO_URI is set in your .env file

// // Create a new MongoClient with the URI and options
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function connectToDatabase() {
//   try {
//     // Connect the client to the server
//     await client.connect();
//     console.log('Connected to MongoDB');

//     // Get reference to the database and collection
//     const db = client.db('myDatabase'); // Replace 'myDatabase' with your database name
//     const collection = db.collection('users'); // Replace 'users' with your collection name

//     // Read data from users.json file
//     const users = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'users.json'), 'utf8'));

//     // Check if the collection is empty before inserting
//     const count = await collection.countDocuments();
//     if (count === 0) {
//       // Insert data into the collection
//       const result = await collection.insertMany(users);
//       console.log(`${result.insertedCount} users added to the database`);
//     } else {
//       console.log('Users data already exists in the database');
//     }
//   } catch (err) {
//     console.error('Failed to connect to MongoDB or insert data:', err);
//   }
// }

// // Connect to MongoDB when the server starts
// connectToDatabase();

// // Route to test server connection
// app.get('/', (req, res) => {
//   res.send("Hello, Rafi");
// });

// // Route to handle POST requests and store data in MongoDB
// app.post('/api/data1', async (req, res) => {
//   try {
//     const result = await collection.insertOne(req.body);
//     console.log('Data received and stored:', req.body);
//     res.status(201).json({ message: 'Data successfully received', id: result.insertedId });
//   } catch (error) {
//     console.error('Error inserting data:', error);
//     res.status(500).json({ message: 'Error storing data' });
//   }
// });

// // Route to handle GET requests and fetch data from MongoDB
// app.get('/api/data1', async (req, res) => {
//   try {
//     const data = await collection.find().toArray();
//     res.json(data);
//   } catch (error) {
//     console.error('Error retrieving data:', error);
//     res.status(500).json({ message: 'Error retrieving data' });
//   }
// });

// // Route to serve JSON data from file
// app.get('/api/users', async (req, res) => {
//   try {
//     const users = await collection.find().toArray();
//     res.json(users);
//   } catch (error) {
//     console.error('Error retrieving users:', error);
//     res.status(500).json({ message: 'Error retrieving users' });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });



// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// app.use(cors());
// app.use(express.json());

// const port = process.env.PORT || 3000;

// // MongoDB connection URI from environment variables
// const uri = process.env.MONGO_URI; // Ensure MONGO_URI is set in your .env file

// // Create a new MongoClient with the URI and options
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function connectToDatabase() {
//   try {
//     // Connect the client to the server
//     await client.connect();
//     console.log('Connected to MongoDB');

//     // Get reference to the database and collection
//     const db = client.db('myDatabase'); // Replace 'myDatabase' with your database name
//     const collection = db.collection('users'); // Replace 'users' with your collection name

//     // Read data from users.json file
//     const users = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'users.json'), 'utf8'));

//     // Check if the collection is empty before inserting
//     const count = await collection.countDocuments();
//     if (count === 0) {
//       // Insert data into the collection
//       const result = await collection.insertMany(users);
//       console.log(`${result.insertedCount} users added to the database`);
//     } else {
//       console.log('Users data already exists in the database');
//     }
//   } catch (err) {
//     console.error('Failed to connect to MongoDB or insert data:', err);
//   }
// }

// // Connect to MongoDB when the server starts
// connectToDatabase();

// // Route to test server connection
// app.get('/', (req, res) => {
//   res.send("Hello, Rafi");
// });

// // Route to handle POST requests and store data in MongoDB
// app.post('/api/data1', async (req, res) => {
//   try {
//     const result = await collection.insertOne(req.body);
//     console.log('Data received and stored:', req.body);
//     res.status(201).json({ message: 'Data successfully received', id: result.insertedId });
//   } catch (error) {
//     console.error('Error inserting data:', error);
//     res.status(500).json({ message: 'Error storing data' });
//   }
// });

// // Route to handle GET requests and fetch data from MongoDB
// app.get('/api/data1', async (req, res) => {
//   try {
//     const data = await collection.find().toArray();
//     res.json(data);
//   } catch (error) {
//     console.error('Error retrieving data:', error);
//     res.status(500).json({ message: 'Error retrieving data' });
//   }
// });

// // Route to serve JSON data from file
// app.get('/api/users', async (req, res) => {
//   try {
//     const users = await collection.find().toArray();
//     res.json(users);
//   } catch (error) {
//     console.error('Error retrieving users:', error);
//     res.status(500).json({ message: 'Error retrieving users' });
//   }
// });

// // Route to update the database with changes from users.json
// app.post('/api/update-users', async (req, res) => {
//   try {
//     // Read data from users.json file
//     const users = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'users.json'), 'utf8'));

//     // Clear the existing data in the collection
//     await collection.deleteMany({});

//     // Insert the updated data from the users.json file
//     const result = await collection.insertMany(users);

//     console.log(`${result.insertedCount} users updated in the database`);
//     res.status(200).json({ message: 'Database updated successfully' });
//   } catch (error) {
//     console.error('Error updating database:', error);
//     res.status(500).json({ message: 'Error updating database' });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });



// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// app.use(cors());
// app.use(express.json());

// const port = process.env.PORT || 4000;
// const uri = process.env.MONGO_URI; // MongoDB connection URI from environment variables

// // Create a new MongoClient with the URI and options
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function connectToDatabase() {
//   try {
//     // Connect the client to the server
//     await client.connect();
//     console.log('Connected to MongoDB');

//     // Get reference to the database and collection
//     const db = client.db('myDatabase'); // Replace 'myDatabase' with your database name
//     const collection = db.collection('users'); // Replace 'users' with your collection name

//     // Read data from users.json file
//     const usersPath = path.join(__dirname, 'data', 'users.json');
//     const users = JSON.parse(fs.readFileSync(usersPath, 'utf8'));

//     // Check if the collection is empty before inserting
//     const count = await collection.countDocuments();
//     if (count === 0) {
//       // Insert data into the collection
//       const result = await collection.insertMany(users);
//       console.log(`${result.insertedCount} users added to the database`);
//     } else {
//       console.log('Users data already exists in the database');
//     }

//     // Route to get all users from the database
//     app.get('/api/users', async (req, res) => {
//       try {
//         const users = await collection.find().toArray();
//         res.json(users);
//       } catch (error) {
//         console.error('Error retrieving users:', error);
//         res.status(500).json({ message: 'Error retrieving users' });
//       }
//     });

//     // Route to handle POST requests and store data in MongoDB
//     app.post('/api/users', async (req, res) => {
//       try {
//         const newUser = req.body;
//         const result = await collection.insertOne(newUser);
//         console.log('User added:', newUser);
//         res.status(201).json({ message: 'User successfully added', id: result.insertedId });
//       } catch (error) {
//         console.error('Error inserting user:', error);
//         res.status(500).json({ message: 'Error adding user' });
//       }
//     });

//     // Start the server
//     app.listen(port, () => {
//       console.log(`Server is running on http://localhost:${port}`);
//     });

//   } catch (err) {
//     console.error('Failed to connect to MongoDB:', err);
//   }
// }

// // Call the function to start the connection and server
// connectToDatabase();




// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// app.use(cors());
// app.use(express.json());

// const port = process.env.PORT || 4000;
// const uri = process.env.MONGO_URI; // MongoDB connection URI from environment variables

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function connectToDatabase() {
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB');

//     const db = client.db('myDatabase'); // Replace with your database name
//     const collection = db.collection('users'); // Replace with your collection name

//     // Read data from users.json file
//     const usersPath = path.join(__dirname, 'data', 'users.json');
//     const users = JSON.parse(fs.readFileSync(usersPath, 'utf8'));

//     const count = await collection.countDocuments();
//     if (count === 0) {
//       const result = await collection.insertMany(users);
//       console.log(`${result.insertedCount} users added to the database`);
//     } else {
//       console.log('Users data already exists in the database');
//     }

//     // Route to get all users
//     app.get('/api/users', async (req, res) => {
//       try {
//         const users = await collection.find().toArray();
//         res.json(users);
//       } catch (error) {
//         console.error('Error retrieving users:', error);
//         res.status(500).json({ message: 'Error retrieving users' });
//       }
//     });

//     // Route to get all users for a new route
//     app.get('/api/users-2', async (req, res) => {
//       try {
//         const users = await collection.find().toArray();
//         res.json(users);
//       } catch (error) {
//         console.error('Error retrieving users:', error);
//         res.status(500).json({ message: 'Error retrieving users' });
//       }
//     });

//     // Route to handle POST requests to add a new user
//     app.post('/api/users-2', async (req, res) => {
//       try {
//         const newUser = req.body;
//         const result = await collection.insertOne(newUser);
//         console.log('User added:', newUser);
//         res.status(201).json({ message: 'User successfully added', id: result.insertedId });
//       } catch (error) {
//         console.error('Error inserting user:', error);
//         res.status(500).json({ message: 'Error adding user' });
//       }
//     });

//     // Route to handle PUT requests to update a user
//     app.put('/api/users-2/:id', async (req, res) => {
//       try {
//         const { id } = req.params;
//         const updatedUser = req.body;
//         const result = await collection.updateOne(
//           { _id: new ObjectId(id) },
//           { $set: updatedUser }
//         );
//         if (result.modifiedCount > 0) {
//           res.status(200).json({ message: 'User updated successfully' });
//         } else {
//           res.status(404).json({ message: 'User not found or no changes made' });
//         }
//       } catch (error) {
//         console.error('Error updating user:', error);
//         res.status(500).json({ message: 'Error updating user' });
//       }
//     });

//     // Route to handle DELETE requests to delete a user
//     app.delete('/api/users-2/:id', async (req, res) => {
//       try {
//         const { id } = req.params;
//         const result = await collection.deleteOne({ _id: new ObjectId(id) });
//         if (result.deletedCount > 0) {
//           res.status(200).json({ message: 'User deleted successfully' });
//         } else {
//           res.status(404).json({ message: 'User not found' });
//         }
//       } catch (error) {
//         console.error('Error deleting user:', error);
//         res.status(500).json({ message: 'Error deleting user' });
//       }
//     });

//     app.listen(port, () => {
//       console.log(`Server is running on http://localhost:${port}`);
//     });

//   } catch (err) {
//     console.error('Failed to connect to MongoDB:', err);
//   }
// }

// connectToDatabase();




// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// app.use(cors());
// app.use(express.json());

// const port = process.env.PORT || 4000;
// const uri = process.env.MONGO_URI; // MongoDB connection URI from environment variables

// // Create a new MongoClient with the URI and options
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function connectToDatabase() {
//   try {
//     // Connect the client to the server
//     await client.connect();
//     console.log('Connected to MongoDB');

//     // Get reference to the database and collection
//     const db = client.db('myDatabase'); // Replace 'myDatabase' with your database name
//     const collection = db.collection('users-2'); // Replace 'users-2' with your collection name

//     // Check if data should be imported from JSON file
//     const usersPath = path.join(__dirname, 'data', 'users-2.json');
//     if (fs.existsSync(usersPath)) {
//       const users = JSON.parse(fs.readFileSync(usersPath, 'utf8'));

//       const count = await collection.countDocuments();
//       if (count === 0) {
//         const result = await collection.insertMany(users);
//         console.log(`${result.insertedCount} users added to the 'users-2' collection`);
//       } else {
//         console.log('Users data already exists in the "users-2" collection');
//       }
//     }

//     // Route to get all users from the 'users-2' collection
//     app.get('/api/users-2', async (req, res) => {
//       try {
//         const users = await collection.find().toArray();
//         res.json(users);
//       } catch (error) {
//         console.error('Error retrieving users:', error);
//         res.status(500).json({ message: 'Error retrieving users' });
//       }
//     });

//     // Route to handle POST requests to add a new user
//     app.post('/api/users-2', async (req, res) => {
//       try {
//         const newUser = req.body;
//         const result = await collection.insertOne(newUser);
//         console.log('User added:', newUser);
//         res.status(201).json({ message: 'User successfully added', id: result.insertedId });
//       } catch (error) {
//         console.error('Error inserting user:', error);
//         res.status(500).json({ message: 'Error adding user' });
//       }
//     });

//     // Route to handle PUT requests to update a user
//     app.put('/api/users-2/:id', async (req, res) => {
//       try {
//         const { id } = req.params;
//         const updatedUser = req.body;
//         const result = await collection.updateOne(
//           { _id: new ObjectId(id) },
//           { $set: updatedUser }
//         );
//         if (result.modifiedCount > 0) {
//           res.status(200).json({ message: 'User updated successfully' });
//         } else {
//           res.status(404).json({ message: 'User not found or no changes made' });
//         }
//       } catch (error) {
//         console.error('Error updating user:', error);
//         res.status(500).json({ message: 'Error updating user' });
//       }
//     });

//     // Route to handle DELETE requests to delete a user
//     app.delete('/api/users-2/:id', async (req, res) => {
//       try {
//         const { id } = req.params;
//         const result = await collection.deleteOne({ _id: new ObjectId(id) });
//         if (result.deletedCount > 0) {
//           res.status(200).json({ message: 'User deleted successfully' });
//         } else {
//           res.status(404).json({ message: 'User not found' });
//         }
//       } catch (error) {
//         console.error('Error deleting user:', error);
//         res.status(500).json({ message: 'Error deleting user' });
//       }
//     });

//     // Start the server
//     app.listen(port, () => {
//       console.log(`Server is running on http://localhost:${port}`);
//     });

//   } catch (err) {
//     console.error('Failed to connect to MongoDB:', err);
//   }
// }

// // Call the function to start the connection and server
// connectToDatabase();

// ------------------------


// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const path = require('path');

// const app = express();
// app.use(cors());
// app.use(express.json());

// const port = process.env.PORT || 4000;
// const uri = process.env.MONGO_URI; // MongoDB connection URI from environment variables

// // Create a new MongoClient with the URI and options
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function connectToDatabase() {
//   try {
//     // Connect the client to the server
//     await client.connect();
//     console.log('Connected to MongoDB');

//     // Get reference to the database and collection
//     const db = client.db('myDatabase'); // Replace 'myDatabase' with your database name
//     const collection = db.collection('users-2'); // Replace 'users-2' with your collection name

//     // Route to get all users from the 'users-2' collection
//     app.get('/api/users-2', async (req, res) => {
//       try {
//         const users = await collection.find().toArray();
//         res.json(users);
//       } catch (error) {
//         console.error('Error retrieving users:', error);
//         res.status(500).json({ message: 'Error retrieving users' });
//       }
//     });

//     // Route to handle POST requests to add a new user
//     app.post('/api/users-2', async (req, res) => {
//       try {
//         const newUser = req.body;
//         const result = await collection.insertOne(newUser);
//         console.log('User added:', newUser);
//         res.status(201).json({ message: 'User successfully added', id: result.insertedId });
//       } catch (error) {
//         console.error('Error inserting user:', error);
//         res.status(500).json({ message: 'Error adding user' });
//       }
//     });

//     // Route to handle PUT requests to update a user
//     app.put('/api/users-2/:id', async (req, res) => {
//       try {
//         const { id } = req.params;
//         const updatedUser = req.body;
//         const result = await collection.updateOne(
//           { _id: new ObjectId(id) },
//           { $set: updatedUser }
//         );
//         if (result.modifiedCount > 0) {
//           res.status(200).json({ message: 'User updated successfully' });
//         } else {
//           res.status(404).json({ message: 'User not found or no changes made' });
//         }
//       } catch (error) {
//         console.error('Error updating user:', error);
//         res.status(500).json({ message: 'Error updating user' });
//       }
//     });

//     // Route to handle DELETE requests to delete a user
//     app.delete('/api/users-2/:id', async (req, res) => {
//       try {
//         const { id } = req.params;
//         const result = await collection.deleteOne({ _id: new ObjectId(id) });
//         if (result.deletedCount > 0) {
//           res.status(200).json({ message: 'User deleted successfully' });
//         } else {
//           res.status(404).json({ message: 'User not found' });
//         }
//       } catch (error) {
//         console.error('Error deleting user:', error);
//         res.status(500).json({ message: 'Error deleting user' });
//       }
//     });

//     // Start the server
//     app.listen(port, () => {
//       console.log(`Server is running on http://localhost:${port}`);
//     });

//   } catch (err) {
//     console.error('Failed to connect to MongoDB:', err);
//   }
// }

// // Call the function to start the connection and server
// connectToDatabase();





// -----


require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;
const uri = process.env.MONGO_URI; // MongoDB connection URI from environment variables

// Create a new MongoClient with the URI and options
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Function to load and insert component data from Component.json
async function loadComponentData() {
  try {
    // Read the JSON file
    const dataPath = path.join(__dirname, './data/Component.json');
    const rawData = fs.readFileSync(dataPath);
    const componentData = JSON.parse(rawData);

    // Get reference to the 'component' collection
    const db = client.db('myDatabase'); // Replace with your database name
    const collection = db.collection('component'); // Collection name for components

    // Insert data into the collection (only if the collection is empty)
    const existingData = await collection.countDocuments();
    if (existingData === 0) {
      const result = await collection.insertMany(componentData);
      console.log('Component data inserted:', result.insertedCount);
    } else {
      console.log('Component data already exists in the database.');
    }
  } catch (error) {
    console.error('Error loading component data:', error);
  }
}

// Connect to MongoDB and start the server
async function connectToDatabase() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log('Connected to MongoDB');

    // Load the initial component data
    await loadComponentData();

    // Get reference to the database and collections
    const db = client.db('myDatabase');
    const userCollection = db.collection('users-2');

    // Route to get all users from the 'users-2' collection
    app.get('/api/users-2', async (req, res) => {
      try {
        const users = await userCollection.find().toArray();
        res.json(users);
      } catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).json({ message: 'Error retrieving users' });
      }
    });

    // Route to get all component data from the 'component' collection
    app.get('/api/component', async (req, res) => {
      try {
        const componentData = await db.collection('component').find().toArray();
        res.json(componentData);
      } catch (error) {
        console.error('Error retrieving component data:', error);
        res.status(500).json({ message: 'Error retrieving component data' });
      }
    });

    // Route to handle POST requests to add a new user
    app.post('/api/users-2', async (req, res) => {
      try {
        const newUser = req.body;
        const result = await userCollection.insertOne(newUser);
        console.log('User added:', newUser);
        res.status(201).json({ message: 'User successfully added', id: result.insertedId });
      } catch (error) {
        console.error('Error inserting user:', error);
        res.status(500).json({ message: 'Error adding user' });
      }
    });

    // Route to handle PUT requests to update a user
    app.put('/api/users-2/:id', async (req, res) => {
      try {
        const { id } = req.params;
        const updatedUser = req.body;
        const result = await userCollection.updateOne(
          { _id: new ObjectId(id) },
          { $set: updatedUser }
        );
        if (result.modifiedCount > 0) {
          res.status(200).json({ message: 'User updated successfully' });
        } else {
          res.status(404).json({ message: 'User not found or no changes made' });
        }
      } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Error updating user' });
      }
    });

    // Route to handle DELETE requests to delete a user
    app.delete('/api/users-2/:id', async (req, res) => {
      try {
        const { id } = req.params;
        const result = await userCollection.deleteOne({ _id: new ObjectId(id) });
        if (result.deletedCount > 0) {
          res.status(200).json({ message: 'User deleted successfully' });
        } else {
          res.status(404).json({ message: 'User not found' });
        }
      } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Error deleting user' });
      }
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });

  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
  }
}

// Call the function to start the connection and server
connectToDatabase();

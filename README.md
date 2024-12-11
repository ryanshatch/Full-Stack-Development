# Travlr Getaways Admin Panel

```ps
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Try the new cross-platform PowerShell https://aka.ms/pscore6

PS C:\Users\rshat\Documents\School\Computer Science School\Current Classes\CS 465\00 Organized\branch6\travlr\ryanshatch_app\app_admin> ng serve

Initial chunk files | Names         |  Raw size
polyfills.js        | polyfills     |  90.20 kB |
main.js             | main          |   5.57 kB |
styles.css          | styles        | 106 bytes |

                    | Initial total |  95.87 kB

Application bundle generation complete. [32.877 seconds]

Watch mode enabled. Watching for file changes...
NOTE: Raw file sizes do not reflect development server per-request transformations.
  ➜  Local:   http://localhost:4200/
  ➜  press h + enter to show help
\ Changes detected. Rebuilding...
Initial chunk files | Names | Raw size
main.js             | main  |  5.70 kB |

Application bundle generation complete. [0.366 seconds]

Page reload sent to client(s).
Initial chunk files | Names | Raw size
main.js             | main  |  5.70 kB |

Application bundle generation complete. [0.294 seconds]

Page reload sent to client(s).
```

<!-- # Travlr Getaways

## Overview

Travlr Getaways is a comprehensive travel application designed to provide users with detailed information about various travel destinations, including trips, resorts, and activities. The application is built using Node.js and Express, following the Model-View-Controller (MVC) architectural pattern.

## Features

- **Browse Trips**: View a list of available trips with detailed information.
- **Trip Details**: Get detailed information about a specific trip, including the resort, length, cost per person, and description.
- **Dynamic Data**: Fetch trip data dynamically from an API.
- **Seeding Database**: Seed the database with initial trip data.

## Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/travlr-getaways.git
   cd travlr-getaways
2. **Install dependencies**:
   ```sh
   npm install
3. **Set up the database**:  Ensure you have MongoDB installed and running. Update the database connection string in app_server/app_api/models/db.js if necessary.
4. **Seed the database**:
   ```sh
   node app_server/app_api/models/seed.js
5. **Start the server**:
   ```sh
   npm start
6. **View the application**: Open http://localhost:3000 in your browser.
7. **API Documentation**: View the API documentation at http://localhost:3000/api-docs.

### API Endpoints
> GET /api/trips: Retrieve all trips.

> GET /api/trips/:code: Retrieve a single trip by code.

### Project Structure
```sh
travlr-getaways/
├── app.js
├── bin/
│   └── www
├── package.json
├── app_server/
│   ├── app_api/
│   │   ├── controllers/
│   │   │   └── trips.js
│   │   ├── models/
│   │   │   ├── db.js
│   │   │   ├── seed.js
│   │   │   └── trips.js
│   │   └── routes/
│   │       └── index.js
│   ├── controllers/
│   │   ├── about.js
│   │   ├── contact.js
│   │   ├── main.js
│   │   ├── meals.js
│   │   ├── news.js
│   │   ├── rooms.js
│   │   └── travlr.js
│   ├── routes/
│   │   ├── about.js
│   │   ├── contact.js
│   │   ├── index.js
│   │   ├── meals.js
│   │   ├── news.js
│   │   ├── rooms.js
│   │   └── travel.js
│   └── views/
│       ├── partials/
│       └── ...
└── data/
    ├── 
    └── ...
```
### Usage
> Browse Trips: Navigate to /travel to view a list of available trips.
> Trip Details: Click on a trip to view detailed information.
> API Documentation: View the API documentation at /api-docs.
### Contributing
Contributions are welcome! Please fork the repository and submit a pull request.
### License
This project is licensed under the MIT License.
### Contact
For any inquiries, please contact Ryan Hatch at ryanshatch@gmail.com  -->

# Schema for test data in the trips collection:
> Exported as JSON from MongoDB Compass running from URI: <code>cluster0.ohvap.mongodb.net -> test -> trips</code>
<hr>

```json
{
  "count": 3,
  "fields": [
    {
      "name": "_id",
      "path": [
        "_id"
      ],
      "count": 3,
      "type": "ObjectId",
      "probability": 1,
      "hasDuplicates": false,
      "types": [
        {
          "name": "ObjectId",
          "path": [
            "_id"
          ],
          "count": 3,
          "probability": 1,
          "unique": 3,
          "hasDuplicates": false,
          "values": [
            "674aec59266aafe4efe52505",
            "674aec59266aafe4efe52506",
            "674aec59266aafe4efe52507"
          ],
          "bsonType": "ObjectId"
        }
      ]
    },
    {
      "name": "__v",
      "path": [
        "__v"
      ],
      "count": 3,
      "type": "Int32",
      "probability": 1,
      "hasDuplicates": true,
      "types": [
        {
          "name": "Int32",
          "path": [
            "__v"
          ],
          "count": 3,
          "probability": 1,
          "unique": 1,
          "hasDuplicates": true,
          "values": [
            0,
            0,
            0
          ],
          "bsonType": "Int32"
        }
      ]
    },
    {
      "name": "code",
      "path": [
        "code"
      ],
      "count": 3,
      "type": "String",
      "probability": 1,
      "hasDuplicates": false,
      "types": [
        {
          "name": "String",
          "path": [
            "code"
          ],
          "count": 3,
          "probability": 1,
          "unique": 3,
          "hasDuplicates": false,
          "values": [
            "GALR01214",
            "DUKR01315",
            "CLRK01261"
          ],
          "bsonType": "String"
        }
      ]
    },
    {
      "name": "description",
      "path": [
        "description"
      ],
      "count": 3,
      "type": "String",
      "probability": 1,
      "hasDuplicates": false,
      "types": [
        {
          "name": "String",
          "path": [
            "description"
          ],
          "count": 3,
          "probability": 1,
          "unique": 3,
          "hasDuplicates": false,
          "values": [
            "Step into the aquatic hall of fame at Gale Reef.\nWe're talking crystal-clear waters so pure they'll make diamonds jealous.\nExplore some pimpin' vibrant coral palaces and kick it with some marine af VIPs.\n\nWhether you're new to the game of divin' or you so happen to be a seasoned pro, this reef is still pure underwater 1,000% swagger.",
            "Dawson's Reef ain't just a spot to go dive at, it's a genuine passport to get some access to marine royalty.\nFor this one, Picture a kaleidoscopic fish just chillin' with the sea turtles, and secret caves where you can find some mermaids playing underwater jazz concerts during the week or throwing raves on weekends.\n\nAnd Ima be honest with you guys, this spot is a treasure chest of underwater wonders that’ll make Donald Trump wish he were you instead of actually winning the election.",
            "Claire's Reef is like a psychedelic odyssey into another dimension. The coral here glows like radioactive liquid rainbows, and the water reflects with fractals that feel like they’re straight out of a Skrillex concert.\nThis is the only place where its normal to swim with fish that look like they’ve been dipped in neon paint, or to converse hours with a sea turtle that speaks in good vibes.\n\nThis place doesn’t just show you whats so below the sea, it is more like a gateway to a water park version of a Narnia multiverse."
          ],
          "bsonType": "String"
        }
      ]
    },
    {
      "name": "image",
      "path": [
        "image"
      ],
      "count": 3,
      "type": "String",
      "probability": 1,
      "hasDuplicates": false,
      "types": [
        {
          "name": "String",
          "path": [
            "image"
          ],
          "count": 3,
          "probability": 1,
          "unique": 3,
          "hasDuplicates": false,
          "values": [
            "reef.jpg",
            "reef2.jpg",
            "reef3.jpg"
          ],
          "bsonType": "String"
        }
      ]
    },
    {
      "name": "length",
      "path": [
        "length"
      ],
      "count": 3,
      "type": "String",
      "probability": 1,
      "hasDuplicates": true,
      "types": [
        {
          "name": "String",
          "path": [
            "length"
          ],
          "count": 3,
          "probability": 1,
          "unique": 2,
          "hasDuplicates": true,
          "values": [
            "5 days",
            "4 nights 5 days",
            "4 nights 5 days"
          ],
          "bsonType": "String"
        }
      ]
    },
    {
      "name": "name",
      "path": [
        "name"
      ],
      "count": 3,
      "type": "String",
      "probability": 1,
      "hasDuplicates": false,
      "types": [
        {
          "name": "String",
          "path": [
            "name"
          ],
          "count": 3,
          "probability": 1,
          "unique": 3,
          "hasDuplicates": false,
          "values": [
            "Gale Reef",
            "Dawson's Reef",
            "Claire's Reef"
          ],
          "bsonType": "String"
        }
      ]
    },
    {
      "name": "perPerson",
      "path": [
        "perPerson"
      ],
      "count": 3,
      "type": "String",
      "probability": 1,
      "hasDuplicates": false,
      "types": [
        {
          "name": "String",
          "path": [
            "perPerson"
          ],
          "count": 3,
          "probability": 1,
          "unique": 3,
          "hasDuplicates": false,
          "values": [
            "$799",
            "$1,199",
            "$1,099"
          ],
          "bsonType": "String"
        }
      ]
    },
    {
      "name": "resort",
      "path": [
        "resort"
      ],
      "count": 3,
      "type": "String",
      "probability": 1,
      "hasDuplicates": false,
      "types": [
        {
          "name": "String",
          "path": [
            "resort"
          ],
          "count": 3,
          "probability": 1,
          "unique": 3,
          "hasDuplicates": false,
          "values": [
            "Emerald Bay, 3 stars",
            "Blue Lagoon, 4 stars",
            "Coral Sands, 5 stars"
          ],
          "bsonType": "String"
        }
      ]
    },
    {
      "name": "start",
      "path": [
        "start"
      ],
      "count": 3,
      "type": "Date",
      "probability": 1,
      "hasDuplicates": false,
      "types": [
        {
          "name": "Date",
          "path": [
            "start"
          ],
          "count": 3,
          "probability": 1,
          "unique": 3,
          "hasDuplicates": false,
          "values": [
            "2021-12-08T00:00:00.000Z",
            "2021-03-15T08:00:00.000Z",
            "2021-11-20T08:00:00.000Z"
          ],
          "bsonType": "Date"
        }
      ]
    }
  ]
}
```
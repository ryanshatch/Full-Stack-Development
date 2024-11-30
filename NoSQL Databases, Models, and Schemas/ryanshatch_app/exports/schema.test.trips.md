### Schema for test data in the trips collection:
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
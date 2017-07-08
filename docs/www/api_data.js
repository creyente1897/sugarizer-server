define({ "api": [
  {
    "type": "get",
    "url": "api/v1/activities/:id?fields=:fields",
    "title": "Get activity detail",
    "name": "GetActivity",
    "description": "<p>Retrieve details of an activity.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "\"/api/v1/activities/org.olpcfrance.Abecedarium\"\n\"/api/v1/activities/org.olpcfrance.Abecedarium?fields=id,index,name,index\"",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-key",
            "description": "<p>User unique id.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User access token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Activity unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fields",
            "description": "<p>Fields to display <code>e.g. fields=name,index,version</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Activity unique ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Display name of the activity</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>Activity version number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "directory",
            "description": "<p>Location directory of the activity in Sugarizer</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>Location of the icon in the activity directory</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "favorite",
            "description": "<p>true means that the activity is in the favorite view</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityId",
            "description": "<p>Reserved for internal use</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "index",
            "description": "<p>Index of the activity in the activity list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"org.olpcfrance.Abecedarium\",\n  \"name\": \"Abecedarium\",\n  \"version\": \"5\",\n  \"directory\": \"activities/Abecedarium.activity\",\n  \"icon\": \"activity/activity-icon.svg\",\n  \"favorite\": true,\n  \"activityId\": null,\n  \"index\": 11\n}",
          "type": "json"
        },
        {
          "title": "Success-Response-Fields-Limited:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"org.olpcfrance.Abecedarium\",\n  \"name\": \"Abecedarium\",\n  \"version\": \"5\",\n  \"index\": 11\n}",
          "type": "json"
        }
      ]
    },
    "group": "Activities",
    "version": "1.0.0",
    "filename": "api/routes/activities.js",
    "groupTitle": "Activities"
  },
  {
    "type": "get",
    "url": "api/v1/activities?name=:name&favorite=:favorite&fields=:fields&sort=:sort",
    "title": "Get all activities",
    "name": "GetAllActivities",
    "description": "<p>Retrieve details of all activities installed on the server.</p>",
    "group": "Activities",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example usage:",
        "content": "\"/api/v1/activities\"\n\"/api/v1/activities?name=gears\"\n\"/api/v1/activities?favorite=false&sort=-version\"\n\"/api/v1/activities?favorite=true&fields=index,name&sort=+name\"",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-key",
            "description": "<p>User unique id.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User access token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Display name of the activity <code>e.g. name=paint</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "favorite",
            "description": "<p>true means that the activity is in the favorite view <code>e.g. favorite=true</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fields",
            "description": "<p>Fields to display <code>e.g. fields=name,index,version</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "defaultValue": "+index",
            "description": "<p>Order of results <code>e.g. sort=-name or sort=+index</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "activities",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"id\": \"org.sugarlabs.GearsActivity\",\n    \"name\": \"Gears\",\n    \"version\": \"6\",\n    \"directory\": \"activities/Gears.activity\",\n    \"icon\": \"activity/activity-icon.svg\",\n    \"favorite\": true,\n    \"activityId\": null,\n    \"index\": 0\n  },\n  {\n    \"id\": \"org.sugarlabs.MazeWebActivity\",\n    \"name\": \"Maze Web\",\n    \"version\": \"2\",\n    \"directory\": \"activities/MazeWeb.activity\",\n    \"icon\": \"activity/activity-icon.svg\",\n    \"favorite\": true,\n    \"activityId\": null,\n    \"index\": 1\n  },\n  ...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/activities.js",
    "groupTitle": "Activities"
  },
  {
    "type": "put",
    "url": "api/v1/activities",
    "title": "Update details of activities",
    "name": "UpdateActivities",
    "description": "<p>Update about details of the activities. Only admin can perform this action.</p>",
    "group": "Activities",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-key",
            "description": "<p>User unique id.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "activities",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"id\": \"org.sugarlabs.GearsActivity\",\n    \"name\": \"Gears\",\n    \"version\": \"6\",\n    \"directory\": \"activities/Gears.activity\",\n    \"icon\": \"activity/activity-icon.svg\",\n    \"favorite\": true,\n    \"activityId\": null,\n    \"index\": 0\n  },\n  {\n    \"id\": \"org.sugarlabs.MazeWebActivity\",\n    \"name\": \"Maze Web\",\n    \"version\": \"2\",\n    \"directory\": \"activities/MazeWeb.activity\",\n    \"icon\": \"activity/activity-icon.svg\",\n    \"favorite\": true,\n    \"activityId\": null,\n    \"index\": 1\n  },\n  ...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/activities.js",
    "groupTitle": "Activities"
  },
  {
    "type": "post",
    "url": "login/",
    "title": "Login User",
    "name": "Login_User",
    "description": "<p>login a user (Admin or Student) on to the system. Return the user created with access token.</p>",
    "group": "Auth",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Unique token of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "expires",
            "description": "<p>Expiration time of token</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User object (student or admin)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response(Student):",
          "content": " HTTP/1.1 200 OK\n {\n  \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0OTkxNDM2ODQxNjJ9.4gVrk0o_pyYt_X5z-FfdSEFuGGFxeEsQP8QBjNqI9EA\",\n  \"expires\": 1499143684162,\n  \"user\": {\n   \"name\": \"Tarun\",\n   \"role\": \"student\",\n   \"color\": {\n     \"stroke\": \"#00A0FF\",\n     \"fill\": \"#00B20D\"\n   },\n   \"favorites\": [],\n   \"language\": \"en\",\n   \"password\": \"xxx\",\n   \"private_journal\": \"5569f4b019e0b4c9525b3c96\",\n   \"shared_journal\": \"536d30874326e55f2a22816f\",\n   \"timestamp\": 1423341000747,\n   \"_id\": \"5569f4b019e0b4c9525b3c97\"\n }\n}",
          "type": "json"
        },
        {
          "title": "Success-Response(Admin):",
          "content": "HTTP/1.1 200 OK\n{\n\t\"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0OTkxNDM2ODQxNjJ9.4gVrk0o_pyYt_X5z-FfdSEFuGGFxeEsQP8QBjNqI9EA\",\n \"expires\": 1499143684162,\n \"user\": {\n  \"name\": \"Tarun\",\n  \"role\": \"admin\",\n  \"language\": \"en\",\n  \"password\": \"xxx\",\n  \"timestamp\": 1423341000747,\n  \"_id\": \"5569f4b019e0b4c9525b3c97\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "signup/",
    "title": "Signup User",
    "name": "Signup_User",
    "description": "<p>Add a new user (Admin or Student). Return the user created.</p>",
    "group": "Auth",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique user id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User role (student or admin)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "color",
            "description": "<p>Buddy color</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color.stroke",
            "description": "<p>Buddy strike color</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color.fill",
            "description": "<p>Buddy fill color</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "favorites",
            "description": "<p>Ids list of activities in the favorite view</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>Language setting of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "private_journal",
            "description": "<p>Id of the private journal on the server</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shared_journal",
            "description": "<p>Id of the shared journal on the server (the same for all users)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "timestamp",
            "description": "<p>when the user was created on the server</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response(Student):",
          "content": " HTTP/1.1 200 OK\n {\n   \"name\": \"Tarun\",\n   \"role\": \"student\",\n   \"color\": {\n     \"stroke\": \"#00A0FF\",\n     \"fill\": \"#00B20D\"\n   },\n   \"favorites\": [],\n   \"language\": \"en\",\n   \"password\": \"xxx\",\n   \"private_journal\": \"5569f4b019e0b4c9525b3c96\",\n   \"shared_journal\": \"536d30874326e55f2a22816f\",\n   \"timestamp\": 1423341000747,\n   \"_id\": \"5569f4b019e0b4c9525b3c97\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response(Admin):",
          "content": " HTTP/1.1 200 OK\n {\n   \"name\": \"Tarun\",\n   \"role\": \"admin\",\n   \"language\": \"en\",\n   \"password\": \"xxx\",\n   \"timestamp\": 1423341000747,\n   \"_id\": \"5569f4b019e0b4c9525b3c97\"\n}*",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "api/v1/Journal/:jid",
    "title": "Add entry",
    "name": "AddEntry",
    "description": "<p>Add an entry in a journal. Return the entry created. If the entry already exist, update it instead. Admin has access to all journals but student can modify his/her journal only.</p>",
    "group": "Journal",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example usage:",
        "content": "\"/api/v1/journal/5569f4b019e0b4c9525b3c96\"",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-key",
            "description": "<p>User unique id.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User access token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jid",
            "description": "<p>Unique id of the journal where the entry will be created</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "objectId",
            "description": "<p>Unique id of the entry in the journal</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "metadata",
            "description": "<p>Metadata of the entries, i.e. characteristics of the entry</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.title",
            "description": "<p>Title of the entry</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.title_set_by_user",
            "description": "<p>0 is the title has been changed by user, 1 if it's the original one (usually activity name)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.activity",
            "description": "<p>Activity unique ID used</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.activity_id",
            "description": "<p>ID of the activity instance</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "metadata.creation_time",
            "description": "<p>Timestamp, creation time of the entry</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "metadata.timestamp",
            "description": "<p>Timestamp, last time the instance was updated</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "metadata.file_size",
            "description": "<p>Here for Sugar compatibility, always set to 0</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.user_id",
            "description": "<p>User id of the entry creator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.name",
            "description": "<p>User name of the entry creator</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "metadata.color",
            "description": "<p>Buddy color of the entry creator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.color.stroke",
            "description": "<p>Buddy strike color of the entry creator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.color.fill",
            "description": "<p>Buddy fill color of the entry creator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text of the entries, i.e. storage value of the entry. It depends of the entry type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"metadata\": {\n     \"title\": \"Read me !\",\n     \"title_set_by_user\": \"0\",\n     \"activity\": \"org.sugarlabs.Markdown\",\n     \"activity_id\": \"caa97e48-d33c-470a-99e9-495ff02afe01\",\n     \"creation_time\": ​1423341000747,\n     \"timestamp\": ​1423341000747,\n     \"file_size\": ​0,\n     \"user_id\": \"5569f4b019e0b4c9525b3c97\",\n     \"buddy_name\": \"Lionel\",\n     \"buddy_color\": {\n       \"stroke\": \"#005FE4\",\n       \"fill\": \"#FF2B34\"\n     }\n   },\n   \"text\": \"\\\"# Hello World !\\\\n\\\"\",\n   \"objectId\": \"4837240f-bf78-4d22-b936-3db96880f0a0\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/journal.js",
    "groupTitle": "Journal"
  },
  {
    "type": "get",
    "url": "api/v1/journal",
    "title": "Get all journals",
    "name": "GetAllJournals",
    "description": "<p>It will get all the journals present in the database. Private and shared can be filtered using the &quot;type&quot; query param. Admin can access all journals but student can access only shared and his/her private journal.</p>",
    "group": "Journal",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example usage:",
        "content": "\"/api/v1/journal\"\n\"/api/v1/journal?type=shared\"\n\"/api/v1/journal?type=private\"",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-key",
            "description": "<p>User unique id.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User access token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Type of the journal (shared or private)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique id of the journal</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "type",
            "description": "<p>Type of the journal</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n  \"_id\": \"5946d4fc9f0e36686c50a548\",\n  \"shared\": true\n },\n {\n  \"_id\": \"5954089e088a9fd957734e46\",\n  \"shared\": false\n }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/journal.js",
    "groupTitle": "Journal"
  },
  {
    "type": "get",
    "url": "api/v1/journal/:jid",
    "title": "Get journal entries",
    "name": "GetJournalContent",
    "description": "<p>Retrieve full content of a journal. Result include both metadata and text. Admin has access to all journals but student can access entries of his/her journal only.</p>",
    "group": "Journal",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example usage:",
        "content": "\"/api/v1/journal/5569f4b019e0b4c9525b3c96\"\n\"/api/v1/journal/5569f4b019e0b4c9525b3c96?aid=org.sugarlabs.Markdown\"\n\"/api/v1/journal/5569f4b019e0b4c9525b3c96?aid=org.sugarlabs.Markdown&uid=5569f4b019e0b4c9525b3c97\"\n\"/api/v1/journal/5569f4b019e0b4c9525b3c96?aid=org.sugarlabs.Markdown&sort=-timestamp\"\n\"/api/v1/journal/5569f4b019e0b4c9525b3c96?aid=org.sugarlabs.Markdown&sort=-timestamp&offset=15&limit=10\"\n\"/api/v1/journal/5569f4b019e0b4c9525b3c96?aid=org.sugarlabs.Markdown&sort=-timestamp&fields=text,metadata\"",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-key",
            "description": "<p>User unique id.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User access token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jid",
            "description": "<p>Unique id of the journal to retrieve</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "aid",
            "description": "<p>filter on activity id <code>e.g. aid=org.sugarlabs.Markdown</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "oid",
            "description": "<p>filter on object id of the activity <code>e.g. oid=4837240f-bf78-4d22-b936-3db96880f0a0</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "uid",
            "description": "<p>filter on user id <code>e.g. uid=5569f4b019e0b4c9525b3c97</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fields",
            "defaultValue": "metadata",
            "description": "<p>field limiting <code>e.g. fields=text,metadata </code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "defaultValue": "+timestamp",
            "description": "<p>Order of results <code>e.g. sort=-timestamp or sort=-creation_time</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>Offset in results <code>e.g. offset=15</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>Limit results <code>e.g. limit=5</code>*</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "entries",
            "description": "<p>List of all entries in the journal.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset in journal entries</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit on number of results</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>total number of results</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "link",
            "description": "<p>pagination links</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n  \"entries\" : [\n   {\n     \"metadata\": {\n       \"title\": \"Read me !\",\n       \"title_set_by_user\": \"0\",\n       \"activity\": \"org.sugarlabs.Markdown\",\n       \"activity_id\": \"caa97e48-d33c-470a-99e9-495ff02afe01\",\n       \"creation_time\": ​1423341000747,\n       \"timestamp\": ​1423341066909,\n       \"file_size\": ​0,\n       \"user_id\": \"5569f4b019e0b4c9525b3c97\",\n       \"buddy_name\": \"Sugarizer server\",\n       \"buddy_color\": {\n         \"stroke\": \"#005FE4\",\n         \"fill\": \"#FF2B34\"\n       }\n     },\n     \"objectId\": \"4837240f-bf78-4d22-b936-3db96880f0a0\"\n   },\n   {\n     \"metadata\": {\n       \"title\": \"Physics JS Activity\",\n       \"title_set_by_user\": \"0\",\n       \"activity\": \"org.olpg-france.physicsjs\",\n       \"activity_id\": \"43708a15-f48e-49b1-85ef-da4c1419b364\",\n       \"creation_time\": ​1436003632237,\n       \"timestamp\": ​1436025389565,\n       \"file_size\": ​0,\n       \"user_id\": \"5569f4b019e0b4c9525b3c97\",\n       \"buddy_name\": \"Lionel\",\n       \"buddy_color\": {\n         \"stroke\": \"#00A0FF\",\n         \"fill\": \"#F8E800\"\n       }\n     },\n     \"objectId\": \"2acbcd69-aa14-4273-8a9f-47642b41ad9d\"\n   },\n   ...\n ],\n \"limit\": 10,\n \"offset\": 20,\n \"total\": 200,\n \"links\": {\n \t\"prev_page\": \"/api/v1/journal/5569f4b019e0b4c9525b3c96?limit=10&offset=10\",\n \t\"next_page\": \"/api/v1/journal/5569f4b019e0b4c9525b3c96?limit=10&offset=30\"\n }\n}",
          "type": "Json"
        }
      ]
    },
    "filename": "api/routes/journal.js",
    "groupTitle": "Journal"
  },
  {
    "type": "delete",
    "url": "api/v1/journal/:jid",
    "title": "Remove entry/journal",
    "name": "RemoveEntryJournal",
    "description": "<p>Remove an entry in a journal or the complete journal. Return the id of the entry or journal. Admin has access to all journals but student can modify his/her journal only.</p>",
    "group": "Journal",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example usage:",
        "content": "\"/api/v1/journal?type=full\"\n\"/api/v1/journal?type=partial&oid=d3c7cfc2-8a02-4ce8-9306-073814a2024e\"",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-key",
            "description": "<p>User unique id.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User access token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jid",
            "description": "<p>Unique id of the journal to delete</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "oid",
            "description": "<p>Unique id of the entry to delete when type is set to partial</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "defaultValue": "partial",
            "description": "<p><code>type=full</code> when to delete the entire journal else <code>type=partial</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>Unique id of the entry removed</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "jid",
            "description": "<p>Unique id of the journal removed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Journal:",
          "content": "HTTP/1.1 200 OK\n{\n \"jid\": \"5569f4b019e0b4c9525b3c97\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response-Entry:",
          "content": "HTTP/1.1 200 OK\n{\n \"objectId\": \"d3c7cfc2-8a02-4ce8-9306-073814a2024e\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/journal.js",
    "groupTitle": "Journal"
  },
  {
    "type": "put",
    "url": "api/v1/journal/:jid",
    "title": "Update entry",
    "name": "UpdateEntry",
    "description": "<p>Update an entry in a journal. Return the entry updated. If the entry don't exist, create a new one instead. Admin has access to all journals but student can modify his/her journal only.</p>",
    "group": "Journal",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example usage:",
        "content": "\"/api/v1/journal/5569f4b019e0b4c9525b3c96?oid=d3c7cfc2-8a02-4ce8-9306-073814a2024e\"",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-key",
            "description": "<p>User unique id.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User access token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jid",
            "description": "<p>Unique id of the journal to update</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oid",
            "description": "<p>Unique id of the entry to update</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "objectId",
            "description": "<p>Unique id of the entry in the journal</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "metadata",
            "description": "<p>Metadata of the entries, i.e. characteristics of the entry</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.title",
            "description": "<p>Title of the entry</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.title_set_by_user",
            "description": "<p>0 is the title has been changed by user, 1 if it's the original one (usually activity name)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.activity",
            "description": "<p>Activity unique ID used</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.activity_id",
            "description": "<p>ID of the activity instance</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "metadata.creation_time",
            "description": "<p>Timestamp, creation time of the entry</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "metadata.timestamp",
            "description": "<p>Timestamp, last time the instance was updated</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "metadata.file_size",
            "description": "<p>Here for Sugar compatibility, always set to 0</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.user_id",
            "description": "<p>User id of the entry creator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.name",
            "description": "<p>User name of the entry creator</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "metadata.color",
            "description": "<p>Buddy color of the entry creator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.color.stroke",
            "description": "<p>Buddy strike color of the entry creator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.color.fill",
            "description": "<p>Buddy fill color of the entry creator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text of the entries, i.e. storage value of the entry. It depends of the entry type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"metadata\": {\n     \"title\": \"Read me now !\",\n     \"title_set_by_user\": \"0\",\n     \"activity\": \"org.sugarlabs.Markdown\",\n     \"activity_id\": \"caa97e48-d33c-470a-99e9-495ff02afe01\",\n     \"creation_time\": ​1423341000747,\n     \"timestamp\": ​1423341066120,\n     \"file_size\": ​0,\n     \"user_id\": ​\"5569f4b019e0b4c9525b3c97\",\n     \"buddy_name\": \"Lionel\",\n     \"buddy_color\": {\n       \"stroke\": \"#005FE4\",\n       \"fill\": \"#FF2B34\"\n     }\n   },\n   \"text\": \"\\\"# Hello Sugarizer user !\\\\n\\\\nWelcome to the Sugarizer server cloud storage. You could put everything that you need to share.\\\\n\\\\n\\\"\",\n   \"objectId\": \"4837240f-bf78-4d22-b936-3db96880f0a0\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/journal.js",
    "groupTitle": "Journal"
  },
  {
    "type": "post",
    "url": "api/v1/stats",
    "title": "Add Stats",
    "name": "AddStats",
    "description": "<p>Add stats in the database. Returns all the inserted stats.</p>",
    "group": "Stats",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-key",
            "description": "<p>User unique id.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique user id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_agent",
            "description": "<p>User agent</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_ip",
            "description": "<p>User ip</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "client_type",
            "description": "<p>Type of client (Mobile/Web)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>where the action is being performed</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event_object",
            "description": "<p>where the action is being performed</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event_action",
            "description": "<p>type of action</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event_label",
            "description": "<p>label of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event_value",
            "description": "<p>value of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "timestamp",
            "description": "<p>when the stats was created by the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response(Student):",
          "content": " HTTP/1.1 200 OK\n[\n  {\n   \"user_id\"         : \"592d4445cc8be9187abb284f\",\n   \"user_agent\"      : \"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36\",\n   \"user_ip\"         : \"122.34.42.165\",\n   \"client_type\"     : \"mobile\",\n   \"event_source\"    : \"sugarizer\",\n   \"event_object\"    : \"home_view\",\n   \"event_action\"    : \"search\",\n   \"event_label\"     : \"q=stopwatch\",\n   \"event_value\"     : null,\n   \"timestamp\"       : 6712375127,\n   \"_id\"             : \"59541db5a297accf5b9003da\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/stats.js",
    "groupTitle": "Stats"
  },
  {
    "type": "get",
    "url": "api/v1/stats/",
    "title": "Get all stats",
    "name": "GetAllStats",
    "description": "<p>Retrieve all stats data registered on the server.</p>",
    "group": "Stats",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-key",
            "description": "<p>Users unique id.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users access token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "uid",
            "description": "<p>ID of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "object",
            "description": "<p>Name of the Event Object</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "action",
            "description": "<p>Name of the Event Action</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "defaultValue": "+timestamp",
            "description": "<p>Order of results <code>e.g. sort=-action or sort=+timestamp</code></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "\"/api/v1/stats\"\n\"/api/v1/stats?user_id=592d4445cc8be9187abb284f\"\n\"/api/v1/stats?event_object=home_view\"\n\"/api/v1/stats?user_id=592d4445cc8be9187abb284f&sort=-timestamp\"",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "stats",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n  \"user_id\"         : \"592d4445cc8be9187abb284f\",\n  \"user_agent\"      : \"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36\",\n  \"user_ip\"         : \"122.34.42.165\",\n  \"client_type\"     : \"mobile\",\n  \"event_source\"    : \"sugarizer\",\n  \"event_object\"    : \"home_view\",\n  \"event_action\"    : \"search\",\n  \"event_label\"     : \"q=stopwatch\",\n  \"event_value\"     : null,\n  \"timestamp\"       : 6712375127,\n  \"_id\"             : \"59541db5a297accf5b9003da\"\n }\n ...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/stats.js",
    "groupTitle": "Stats"
  },
  {
    "type": "delete",
    "url": "api/v1/stats",
    "title": "Remove stats",
    "name": "RemoveStats",
    "description": "<p>Remove all the stats for a particular user.</p>",
    "group": "Stats",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-key",
            "description": "<p>User unique id.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User access token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>Unique id of the user to delete stats</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"user_id\": \"5569f4b019e0b4c9525b3c97\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/stats.js",
    "groupTitle": "Stats"
  },
  {
    "type": "post",
    "url": "api/v1/users/",
    "title": "Add user",
    "name": "AddUser",
    "description": "<p>Add a new user. Return the user created. Only admin can add another admin or student.</p>",
    "group": "Users",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-key",
            "description": "<p>User unique id.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique user id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Unique user name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User role (student or admin)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "color",
            "description": "<p>Buddy color</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color.stroke",
            "description": "<p>Buddy strike color</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color.fill",
            "description": "<p>Buddy fill color</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "favorites",
            "description": "<p>Ids list of activities in the favorite view</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>Language setting of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "private_journal",
            "description": "<p>Id of the private journal on the server</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shared_journal",
            "description": "<p>Id of the shared journal on the server (the same for all users)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "timestamp",
            "description": "<p>when the user was created on the server</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"name\": \"Tarun\",\n   \"role\": \"student\",\n   \"color\": {\n     \"stroke\": \"#00A0FF\",\n     \"fill\": \"#00B20D\"\n   },\n   \"favorites\": [\n      \"org.olpcfrance.Abecedarium\",\n      \"org.sugarlabs.ChatPrototype\",\n      \"org.sugarlabs.Clock\",\n      \"org.olpcfrance.FoodChain\",\n      \"org.sugarlabs.GearsActivity\",\n      \"org.sugarlabs.GTDActivity\",\n      \"org.olpcfrance.Gridpaint\",\n      \"org.olpc-france.LOLActivity\",\n      \"org.sugarlabs.Markdown\",\n      \"org.sugarlabs.MazeWebActivity\",\n      \"org.sugarlabs.PaintActivity\"\n   ],\n   \"language\": \"en\",\n   \"password\": \"xxx\",\n   \"private_journal\": \"5569f4b019e0b4c9525b3c96\",\n   \"shared_journal\": \"536d30874326e55f2a22816f\",\n   \"timestamp\": 1423341000747,\n   \"_id\": \"5569f4b019e0b4c9525b3c97\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "api/v1/users/",
    "title": "Get all users",
    "name": "GetAllUsers",
    "description": "<p>Retrieve all users registered on the server. Query params can be mixed and match to achieve suitable results.</p>",
    "group": "Users",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example usage:",
        "content": "\"/api/v1/users\"\n\"/api/v1/users?name=tarun\"\n\"/api/v1/users?language=fr&sort=+name\"\n\"/api/v1/users?sort=+name&limit=5&offset=20\"",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-key",
            "description": "<p>User unique id.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User access token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Display name of the activity <code>e.g. name=paint</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "language",
            "description": "<p>To get users of specific language <code>e.g. language=fr</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "role",
            "defaultValue": "student",
            "description": "<p>To filter users based on role <code>e.g. role=admin or role= student</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>Fuzzy Search <code>e.g. q=tar</code> to search user with name &quot;Tarun&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "defaultValue": "+name",
            "description": "<p>Order of results <code>e.g. sort=-name or sort=+role</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>Offset in results <code>e.g. offset=15</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>Limit results <code>e.g. limit=5</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>List of users</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset in users list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit on number of results</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>total number of results</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>information about sorting used in the results</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "link",
            "description": "<p>pagination links</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n \"users\":[\n   {\n     \"name\": \"Tarun Singhal\",\n     \"role\": \"student\",\n     \"color\": {\n       \"stroke\": \"#005FE4\",\n       \"fill\": \"#FF2B34\"\n     },\n     \"favorites\": [\n       \"org.sugarlabs.GearsActivity\",\n       \"org.sugarlabs.MazeWebActivity\",\n     ],\n     \"language\": \"en\",\n     \"password\": \"xxx\",\n     \"private_journal\": \"5569f4b019e0b4c9525b3c96\",\n     \"shared_journal\": \"536d30874326e55f2a22816f\",\n     \"timestamp\": 1423341000747,\n     \"_id\": \"536dd30aadcd557f2a9d648b\"\n  },\n  ...\n ],\n \"limit\": 10,\n \"offset\": 20,\n \"total\": 200,\n \"sort\": \"+name\",\n \"links\": {\n \t\"prev_page\": \"/api/v1/users?limit=10&offset=10\",\n \t\"next_page\": \"/api/v1/users?limit=10&offset=30\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "api/v1/users/:id",
    "title": "Get user detail",
    "name": "GetUser",
    "description": "<p>Retrieve detail for a specific user.</p>",
    "group": "Users",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-key",
            "description": "<p>User unique id.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique user id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Unique user name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User role (student or admin)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "color",
            "description": "<p>Buddy color</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color.stroke",
            "description": "<p>Buddy strike color</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color.fill",
            "description": "<p>Buddy fill color</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "favorites",
            "description": "<p>Ids list of activities in the favorite view</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>Language setting of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "private_journal",
            "description": "<p>Id of the private journal on the server</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shared_journal",
            "description": "<p>Id of the shared journal on the server (the same for all users)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "timestamp",
            "description": "<p>when the user was created on the server</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"name\": \"Tarun\",\n   \"role\": \"student\",\n   \"color\": {\n     \"stroke\": \"#00A0FF\",\n     \"fill\": \"#00B20D\"\n   },\n   \"favorites\": [\n      \"org.olpcfrance.Abecedarium\",\n      \"org.sugarlabs.ChatPrototype\",\n      \"org.sugarlabs.Clock\",\n      \"org.olpcfrance.FoodChain\",\n      \"org.sugarlabs.GearsActivity\",\n      \"org.sugarlabs.GTDActivity\",\n      \"org.olpcfrance.Gridpaint\",\n      \"org.olpc-france.LOLActivity\",\n      \"org.sugarlabs.Markdown\",\n      \"org.sugarlabs.MazeWebActivity\",\n      \"org.sugarlabs.PaintActivity\"\n   ],\n   \"language\": \"en\",\n   \"password\": \"xxx\",\n   \"private_journal\": \"5569f4b019e0b4c9525b3c96\",\n   \"shared_journal\": \"536d30874326e55f2a22816f\",\n   \"timestamp\": 1423341000747,\n   \"_id\": \"5569f4b019e0b4c9525b3c97\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "delete",
    "url": "api/v1/users/:uid",
    "title": "Remove user",
    "name": "RemoveUser",
    "description": "<p>Remove an user from the database. Only admin can remove other users. Self removal can also be done.</p>",
    "group": "Users",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-key",
            "description": "<p>User unique id.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User access token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>Unique id of the user to delete</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"user_id\": \"5569f4b019e0b4c9525b3c97\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "api/v1/users/",
    "title": "Update user",
    "name": "UpdateUser",
    "description": "<p>Update an user. Return the user updated. Student can update only his/her details but admin can update anyone.</p>",
    "group": "Users",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-key",
            "description": "<p>User unique id.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique user id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Unique user name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User role (student or admin)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "color",
            "description": "<p>Buddy color</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color.stroke",
            "description": "<p>Buddy strike color</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color.fill",
            "description": "<p>Buddy fill color</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "favorites",
            "description": "<p>Ids list of activities in the favorite view</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>Language setting of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "private_journal",
            "description": "<p>Id of the private journal on the server</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shared_journal",
            "description": "<p>Id of the shared journal on the server (the same for all users)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "timestamp",
            "description": "<p>when the user was created on the server</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"name\": \"Tarun\",\n   \"role\": \"student\",\n   \"color\": {\n     \"stroke\": \"#00A0FF\",\n     \"fill\": \"#00B20D\"\n   },\n   \"favorites\": [\n      \"org.olpcfrance.Abecedarium\",\n      \"org.sugarlabs.ChatPrototype\",\n      \"org.sugarlabs.Clock\",\n      \"org.olpcfrance.FoodChain\",\n      \"org.sugarlabs.GearsActivity\",\n      \"org.sugarlabs.GTDActivity\",\n      \"org.olpcfrance.Gridpaint\",\n      \"org.olpc-france.LOLActivity\",\n      \"org.sugarlabs.Markdown\",\n      \"org.sugarlabs.MazeWebActivity\",\n      \"org.sugarlabs.PaintActivity\"\n   ],\n   \"language\": \"en\",\n   \"password\": \"xxx\",\n   \"private_journal\": \"5569f4b019e0b4c9525b3c96\",\n   \"shared_journal\": \"536d30874326e55f2a22816f\",\n   \"timestamp\": 1423341000747,\n   \"_id\": \"5569f4b019e0b4c9525b3c97\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/users.js",
    "groupTitle": "Users"
  }
] });
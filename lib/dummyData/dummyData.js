// query users logs where id === 1
const userLogs = {
  user: {
    id: 1,
    email: "example@dummy.com",
    first_name: "Bob",
    last_name: "Bobberson",
    logs: [
      {
        id: 1,
        public: true,
        date: new Date().toISOString(),
        dive_site: "Bobo's Lagoon",
        city: "Panama City",
        country: "United States",
        visibility: '10 feet',
        air_temp: '85 degrees fahrenheit',
        water_temp: '75 degrees fahrenheit',
        weight: '12 pounds',
        hood: false,
        gloves: false,
        wet_suit: true,
        waves: true,
        current: false,
        controlled_env: true,
        salt_water: true,
        boat: false,
        max_depth: '50 feet',
        time_in: new Date().toISOString(),
        time_out: new Date().toISOString(),
        rnt: 20,
        abt: 15,
        tbt: 35,
        start_pressure: '5 psi',
        end_pressure: '10 psi',
        notes: "I saw a sea turtle and a jellyfish!",
        dive_center: "Big Island Divers",
        dive_instructor: "Frank",
        instructor_cert: "123456",
        photos: [
          {
            id: 1,
            url: "https://unsplash.com/photos/Uu1CtKngEXY",
            id_log: 1,
          },
          {
            id: 2,
            url: "https://unsplash.com/photos/_AjqGGafofE",
            id_log: 1,
          }
        ],
        tags: ['Bobo\'s Lagoon', 'Panama City', 'United States', '#wow', '#ballin', 'sea turtle', 'jellyfish']
      },
      {
        id: 2,
        public: false,
        id_user: 1,
        date: new Date().toISOString(),
        dive_site: "Bobo's Palace",
        city: "Galveston",
        country: "United States",
        visibility: 8,
        air_temp: 90,
        water_temp: 82,
        weight: 14,
        hood: true,
        gloves: true,
        wet_suit: false,
        waves: false,
        current: true,
        controlled_env: false,
        salt_water: true,
        boat: true,
        max_depth: 75,
        time_in: new Date().toISOString(),
        time_out: new Date().toISOString(),
        rnt: 15,
        abt: 10,
        tbt: 25,
        start_pressure: 6,
        end_pressure: 12,
        notes: "I saw a sea turtle and a sea star!",
        dive_center: "Big Island Divers",
        dive_instructor: "Frank",
        instructor_cert: "123456",
        photos: [
          {
            id: 1,
            url: "https://unsplash.com/photos/L-2p8fapOA8",
            id_log: 1,
          },
          {
            id: 2,
            url: "https://unsplash.com/photos/nL-UM6zyxIk",
            id_log: 1,
          }
        ],
        tags: ['Bobo\'s Palace', 'Galveston', 'United States', 'sea turtle', 'sea star', '#scubaislife']
      }
    ]
  }
};

// query for all logs to go in the feed ->
const allLogs = {
  logs: [
    {
      id: 1,
      first_name: "Bob",
      last_name: "Bobberson",
      public: true,
      date: new Date().toISOString(),
      dive_site: "Bobo's Lagoon",
      city: "Panama City",
      country: "United States",
      photos: [
        {
          id: 1,
          url: "https://unsplash.com/photos/Uu1CtKngEXY",
          id_log: 1,
        },
        {
          id: 2,
          url: "https://unsplash.com/photos/_AjqGGafofE",
          id_log: 1,
        }
      ],
      tags: ['Bobo\'s Lagoon', 'Panama City', 'United States', '#wow', '#ballin', 'sea turtle', 'jellyfish']
    },
    {
      id: 45,
      first_name: "Steve",
      last_name: "Perry",
      public: true,
      date: new Date().toISOString(),
      dive_site: "Foolish Heart Dives",
      city: "San Francisco",
      country: "United States",
      photos: [
        {
          id: 1,
          url: "placeholder1",
          id_log: 1,
        },
        {
          id: 2,
          url: "placeholder2",
          id_log: 1,
        }
      ],
      tags: ['Foolish Heart Dives', 'San Francisco', 'United States']
    },
    {
      id: 137,
      first_name: "Peter",
      last_name: "Cetera",
      public: true,
      date: new Date().toISOString(),
      dive_site: "Look Away Dives",
      city: "Chicago",
      country: "United States",
      photos: [
        {
          id: 1,
          url: "placeholder1",
          id_log: 1,
        },
        {
          id: 2,
          url: "placeholder2",
          id_log: 1,
        }
      ],
      tags: ['Look Away Dives', 'Chicago', 'United States']
    }
  ]
}
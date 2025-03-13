import {GetAllResponse, Pokemon} from './data';

export const POKEMON_ENTRIES: Record<string,Pokemon> = {
  'ditto' :  {
    "id": 132,
    "name": "ditto",
    "description": null,
    "stats": [
      {
        "baseStat": 48,
        "effort": 1,
        "name": "hp"
      },
      {
        "baseStat": 48,
        "effort": 0,
        "name": "attack"
      },
      {
        "baseStat": 48,
        "effort": 0,
        "name": "defense"
      },
      {
        "baseStat": 48,
        "effort": 0,
        "name": "special-attack"
      },
      {
        "baseStat": 48,
        "effort": 0,
        "name": "special-defense"
      },
      {
        "baseStat": 48,
        "effort": 0,
        "name": "speed"
      }
    ],
    "physicalAttributes": {
      "height": 3,
      "weight": 40,
      "types": [
        "normal"
      ],
      "appearance": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
    },
    "abilities": [
      {
        "name": "limber",
        "url": "https://pokeapi.co/api/v2/ability/7/",
        "slot": 1,
        "isHidden": false
      },
      {
        "name": "imposter",
        "url": "https://pokeapi.co/api/v2/ability/150/",
        "slot": 3,
        "isHidden": true
      }
    ]
  },
  'blastoise' : {
    "id": 9,
    "name": "blastoise",
    "description": null,
    "stats": [
      {
        "baseStat": 79,
        "effort": 0,
        "name": "hp"
      },
      {
        "baseStat": 83,
        "effort": 0,
        "name": "attack"
      },
      {
        "baseStat": 100,
        "effort": 0,
        "name": "defense"
      },
      {
        "baseStat": 85,
        "effort": 0,
        "name": "special-attack"
      },
      {
        "baseStat": 105,
        "effort": 3,
        "name": "special-defense"
      },
      {
        "baseStat": 78,
        "effort": 0,
        "name": "speed"
      }
    ],
    "physicalAttributes": {
      "height": 16,
      "weight": 855,
      "types": [
        "water"
      ],
      "appearance": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg"
    },
    "abilities": [
      {
        "name": "torrent",
        "url": "https://pokeapi.co/api/v2/ability/67/",
        "slot": 1,
        "isHidden": false
      },
      {
        "name": "rain-dish",
        "url": "https://pokeapi.co/api/v2/ability/44/",
        "slot": 3,
        "isHidden": true
      }
    ]
  },
  'squirtle' : {
    "id": 7,
    "name": "squirtle",
    "description": null,
    "stats": [
      {
        "baseStat": 44,
        "effort": 0,
        "name": "hp"
      },
      {
        "baseStat": 48,
        "effort": 0,
        "name": "attack"
      },
      {
        "baseStat": 65,
        "effort": 1,
        "name": "defense"
      },
      {
        "baseStat": 50,
        "effort": 0,
        "name": "special-attack"
      },
      {
        "baseStat": 64,
        "effort": 0,
        "name": "special-defense"
      },
      {
        "baseStat": 43,
        "effort": 0,
        "name": "speed"
      }
    ],
    "physicalAttributes": {
      "height": 5,
      "weight": 90,
      "types": [
        "water"
      ],
      "appearance": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg"
    },
    "abilities": [
      {
        "name": "torrent",
        "url": "https://pokeapi.co/api/v2/ability/67/",
        "slot": 1,
        "isHidden": false
      },
      {
        "name": "rain-dish",
        "url": "https://pokeapi.co/api/v2/ability/44/",
        "slot": 3,
        "isHidden": true
      }
    ]
  },
  'wartortle' : {
    "id": 8,
    "name": "wartortle",
    "description": null,
    "stats": [
      {
        "baseStat": 59,
        "effort": 0,
        "name": "hp"
      },
      {
        "baseStat": 63,
        "effort": 0,
        "name": "attack"
      },
      {
        "baseStat": 80,
        "effort": 1,
        "name": "defense"
      },
      {
        "baseStat": 65,
        "effort": 0,
        "name": "special-attack"
      },
      {
        "baseStat": 80,
        "effort": 1,
        "name": "special-defense"
      },
      {
        "baseStat": 58,
        "effort": 0,
        "name": "speed"
      }
    ],
    "physicalAttributes": {
      "height": 10,
      "weight": 225,
      "types": [
        "water"
      ],
      "appearance": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg"
    },
    "abilities": [
      {
        "name": "torrent",
        "url": "https://pokeapi.co/api/v2/ability/67/",
        "slot": 1,
        "isHidden": false
      },
      {
        "name": "rain-dish",
        "url": "https://pokeapi.co/api/v2/ability/44/",
        "slot": 3,
        "isHidden": true
      }
    ]
  },
}

export const POKEMON_LIST =  [
  {
    "id": 1,
    "name": "bulbasaur",
    "avatar": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
  },
  {
    "id": 2,
    "name": "ivysaur",
    "avatar": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"
  },
  {
    "id": 3,
    "name": "venusaur",
    "avatar": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
  },
  {
    "id": 4,
    "name": "charmander",
    "avatar": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
  },
  {
    "id": 5,
    "name": "charmeleon",
    "avatar": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg"
  },
  {
    "id": 6,
    "name": "charizard",
    "avatar": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
  },
  {
    "id": 7,
    "name": "squirtle",
    "avatar": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg"
  },
  {
    "id": 8,
    "name": "wartortle",
    "avatar": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg"
  },
  {
    "id": 9,
    "name": "blastoise",
    "avatar": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg"
  },
  {
    "id": 10,
    "name": "caterpie",
    "avatar": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg"
  },
  {
    "id": 11,
    "name": "metapod",
    "avatar": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/11.svg"
  },
  {
    "id": 12,
    "name": "butterfree",
    "avatar": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg"
  },
  {
    "id": 13,
    "name": "weedle",
    "avatar": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/13.svg"
  },
  {
    "id": 14,
    "name": "kakuna",
    "avatar": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/14.svg"
  },
  {
    "id": 15,
    "name": "beedrill",
    "avatar": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/15.svg"
  },
  {
    "id": 16,
    "name": "pidgey",
    "avatar": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg"
  },
  {
    "id": 17,
    "name": "pidgeotto",
    "avatar": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/17.svg"
  },
  {
    "id": 18,
    "name": "pidgeot",
    "avatar": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/18.svg"
  },
  {
    "id": 19,
    "name": "rattata",
    "avatar": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/19.svg"
  },
  {
    "id": 20,
    "name": "raticate",
    "avatar": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/20.svg"
  }
]

export const MOCK_POKEMON_RESPONSE : GetAllResponse = {
  "count": 1302,
  "pokemon": [
    {
      "id": 1,
      "name": "bulbasaur",
      "avatar": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
    },
    {
      "id": 2,
      "name": "ivysaur",
      "avatar": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"
    },
    {
      "id": 3,
      "name": "venusaur",
      "avatar": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
    },
    {
      "id": 4,
      "name": "charmander",
      "avatar": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
    },
    {
      "id": 5,
      "name": "charmeleon",
      "avatar": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg"
    },
    {
      "id": 6,
      "name": "charizard",
      "avatar": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
    },
    {
      "id": 7,
      "name": "squirtle",
      "avatar": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg"
    },
    {
      "id": 8,
      "name": "wartortle",
      "avatar": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg"
    },
    {
      "id": 9,
      "name": "blastoise",
      "avatar": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg"
    },
    {
      "id": 10,
      "name": "caterpie",
      "avatar": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg"
    }
  ]
};

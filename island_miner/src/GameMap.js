export const map = [
  {
    room_id: 0,
    title: "A brightly lit room",
    description:
      "You are standing in the center of a brightly lit room. You notice a shop to the west and exits to the north, south and east.",
    coordinates: "(60,60)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 10
      },
      {
        direction: "s",
        next_room_id: 2
      },
      {
        direction: "e",
        next_room_id: 4
      },
      {
        direction: "w",
        next_room_id: 1
      }
    ]
  },
  {
    room_id: 1,
    title: "Shop",
    description:
      "You are standing in a small shop. A sign behind the mechanical shopkeeper says 'WILL PAY FOR TREASURE'.",
    coordinates: "(59,60)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 0
      }
    ]
  },
  {
    room_id: 2,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(60,59)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 0
      },
      {
        direction: "s",
        next_room_id: 6
      },
      {
        direction: "e",
        next_room_id: 3
      }
    ]
  },
  {
    room_id: 3,
    title: "Mt. Holloway",
    description: "You are at the base of a large, looming mountain.",
    coordinates: "(61,59)",
    elevation: 1,
    terrain: "MOUNTAIN",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 9
      },
      {
        direction: "e",
        next_room_id: 5
      },
      {
        direction: "w",
        next_room_id: 2
      }
    ]
  },
  {
    room_id: 4,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(61,60)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 23
      },
      {
        direction: "e",
        next_room_id: 13
      },
      {
        direction: "w",
        next_room_id: 0
      }
    ]
  },
  {
    room_id: 5,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(62,59)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "w",
        next_room_id: 3
      }
    ]
  },
  {
    room_id: 6,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(60,58)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 2
      },
      {
        direction: "w",
        next_room_id: 7
      }
    ]
  },
  {
    room_id: 7,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(59,58)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 8
      },
      {
        direction: "e",
        next_room_id: 6
      },
      {
        direction: "w",
        next_room_id: 56
      }
    ]
  },
  {
    room_id: 8,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(59,59)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 7
      },
      {
        direction: "w",
        next_room_id: 16
      }
    ]
  },
  {
    room_id: 9,
    title: "Mt. Holloway",
    description: "You are on the side of a steep incline.",
    coordinates: "(61,58)",
    elevation: 2,
    terrain: "MOUNTAIN",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 3
      },
      {
        direction: "s",
        next_room_id: 12
      },
      {
        direction: "e",
        next_room_id: 11
      }
    ]
  },
  {
    room_id: 10,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(60,61)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 19
      },
      {
        direction: "s",
        next_room_id: 0
      },
      {
        direction: "w",
        next_room_id: 43
      }
    ]
  },
  {
    room_id: 11,
    title: "Mt. Holloway",
    description: "You are at the base of a large, looming mountain.",
    coordinates: "(62,58)",
    elevation: 1,
    terrain: "MOUNTAIN",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 17
      },
      {
        direction: "w",
        next_room_id: 9
      }
    ]
  },
  {
    room_id: 12,
    title: "Mt. Holloway",
    description: "You are on the side of a steep incline.",
    coordinates: "(61,57)",
    elevation: 3,
    terrain: "MOUNTAIN",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 9
      },
      {
        direction: "s",
        next_room_id: 18
      },
      {
        direction: "e",
        next_room_id: 14
      },
      {
        direction: "w",
        next_room_id: 21
      }
    ]
  },
  {
    room_id: 13,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(62,60)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 15
      },
      {
        direction: "w",
        next_room_id: 4
      }
    ]
  },
  {
    room_id: 14,
    title: "Mt. Holloway",
    description: "You are on the side of a steep incline.",
    coordinates: "(62,57)",
    elevation: 2,
    terrain: "MOUNTAIN",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 34
      },
      {
        direction: "e",
        next_room_id: 37
      },
      {
        direction: "w",
        next_room_id: 12
      }
    ]
  },
  {
    room_id: 15,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(63,60)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "w",
        next_room_id: 13
      }
    ]
  },
  {
    room_id: 16,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(58,59)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 58
      },
      {
        direction: "e",
        next_room_id: 8
      },
      {
        direction: "w",
        next_room_id: 67
      }
    ]
  },
  {
    room_id: 17,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(63,58)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 24
      },
      {
        direction: "e",
        next_room_id: 42
      },
      {
        direction: "w",
        next_room_id: 11
      }
    ]
  },
  {
    room_id: 18,
    title: "Mt. Holloway",
    description: "You are on the side of a steep incline.",
    coordinates: "(61,56)",
    elevation: 4,
    terrain: "MOUNTAIN",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 12
      },
      {
        direction: "s",
        next_room_id: 22
      },
      {
        direction: "w",
        next_room_id: 25
      }
    ]
  },
  {
    room_id: 19,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(60,62)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 20
      },
      {
        direction: "s",
        next_room_id: 10
      },
      {
        direction: "w",
        next_room_id: 77
      }
    ]
  },
  {
    room_id: 20,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(60,63)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 63
      },
      {
        direction: "s",
        next_room_id: 19
      },
      {
        direction: "e",
        next_room_id: 27
      },
      {
        direction: "w",
        next_room_id: 46
      }
    ]
  },
  {
    room_id: 21,
    title: "Mt. Holloway",
    description: "You are on the side of a steep incline.",
    coordinates: "(60,57)",
    elevation: 2,
    terrain: "MOUNTAIN",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 12
      },
      {
        direction: "w",
        next_room_id: 29
      }
    ]
  },
  {
    room_id: 22,
    title: "The Peak of Mt. Holloway",
    description:
      "You are standing at the zenith of Mt. Holloway. You see before you a holy shrine erected in the image of a magnificent winged deity.",
    coordinates: "(61,55)",
    elevation: 5,
    terrain: "MOUNTAIN",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 18
      },
      {
        direction: "s",
        next_room_id: 78
      },
      {
        direction: "w",
        next_room_id: 36
      }
    ]
  },
  {
    room_id: 23,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(61,61)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 4
      },
      {
        direction: "e",
        next_room_id: 26
      }
    ]
  },
  {
    room_id: 24,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(63,59)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 17
      }
    ]
  },
  {
    room_id: 25,
    title: "Mt. Holloway",
    description: "You are on the side of a steep incline.",
    coordinates: "(60,56)",
    elevation: 3,
    terrain: "MOUNTAIN",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 18
      }
    ]
  },
  {
    room_id: 26,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(62,61)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 55
      },
      {
        direction: "w",
        next_room_id: 23
      }
    ]
  },
  {
    room_id: 27,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(61,63)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 40
      },
      {
        direction: "s",
        next_room_id: 28
      },
      {
        direction: "e",
        next_room_id: 30
      },
      {
        direction: "w",
        next_room_id: 20
      }
    ]
  },
  {
    room_id: 28,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(61,62)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure", "tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 27
      }
    ]
  },
  {
    room_id: 29,
    title: "Mt. Holloway",
    description: "You are at the base of a large, looming mountain.",
    coordinates: "(59,57)",
    elevation: 1,
    terrain: "MOUNTAIN",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 45
      },
      {
        direction: "e",
        next_room_id: 21
      },
      {
        direction: "w",
        next_room_id: 49
      }
    ]
  },
  {
    room_id: 30,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(62,63)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 31
      },
      {
        direction: "e",
        next_room_id: 32
      },
      {
        direction: "w",
        next_room_id: 27
      }
    ]
  },
  {
    room_id: 31,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(62,62)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 30
      },
      {
        direction: "e",
        next_room_id: 33
      }
    ]
  },
  {
    room_id: 32,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(63,63)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 39
      },
      {
        direction: "e",
        next_room_id: 54
      },
      {
        direction: "w",
        next_room_id: 30
      }
    ]
  },
  {
    room_id: 33,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(63,62)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 38
      },
      {
        direction: "w",
        next_room_id: 31
      }
    ]
  },
  {
    room_id: 34,
    title: "Mt. Holloway",
    description: "You are at the base of a large, looming mountain.",
    coordinates: "(62,56)",
    elevation: 1,
    terrain: "MOUNTAIN",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 14
      },
      {
        direction: "s",
        next_room_id: 50
      },
      {
        direction: "e",
        next_room_id: 35
      }
    ]
  },
  {
    room_id: 35,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(63,56)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 52
      },
      {
        direction: "w",
        next_room_id: 34
      }
    ]
  },
  {
    room_id: 36,
    title: "Mt. Holloway",
    description: "You are on the side of a steep incline.",
    coordinates: "(60,55)",
    elevation: 4,
    terrain: "MOUNTAIN",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 48
      },
      {
        direction: "e",
        next_room_id: 22
      },
      {
        direction: "w",
        next_room_id: 60
      }
    ]
  },
  {
    room_id: 37,
    title: "Mt. Holloway",
    description: "You are at the base of a large, looming mountain.",
    coordinates: "(63,57)",
    elevation: 1,
    terrain: "MOUNTAIN",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "w",
        next_room_id: 14
      }
    ]
  },
  {
    room_id: 38,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(64,62)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 59
      },
      {
        direction: "e",
        next_room_id: 66
      },
      {
        direction: "w",
        next_room_id: 33
      }
    ]
  },
  {
    room_id: 39,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(63,64)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 53
      },
      {
        direction: "s",
        next_room_id: 32
      },
      {
        direction: "e",
        next_room_id: 51
      },
      {
        direction: "w",
        next_room_id: 41
      }
    ]
  },
  {
    room_id: 40,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(61,64)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 27
      }
    ]
  },
  {
    room_id: 41,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(62,64)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 39
      }
    ]
  },
  {
    room_id: 42,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(64,58)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 44
      },
      {
        direction: "s",
        next_room_id: 80
      },
      {
        direction: "e",
        next_room_id: 118
      },
      {
        direction: "w",
        next_room_id: 17
      }
    ]
  },
  {
    room_id: 43,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(59,61)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 10
      },
      {
        direction: "w",
        next_room_id: 47
      }
    ]
  },
  {
    room_id: 44,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(64,59)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 42
      }
    ]
  },
  {
    room_id: 45,
    title: "Mt. Holloway",
    description: "You are on the side of a steep incline.",
    coordinates: "(59,56)",
    elevation: 2,
    terrain: "MOUNTAIN",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 29
      },
      {
        direction: "s",
        next_room_id: 60
      }
    ]
  },
  {
    room_id: 46,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(59,63)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 20
      },
      {
        direction: "w",
        next_room_id: 62
      }
    ]
  },
  {
    room_id: 47,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(58,61)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 71
      },
      {
        direction: "e",
        next_room_id: 43
      }
    ]
  },
  {
    room_id: 48,
    title: "Mt. Holloway",
    description: "You are on the side of a steep incline.",
    coordinates: "(60,54)",
    elevation: 3,
    terrain: "MOUNTAIN",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 36
      },
      {
        direction: "s",
        next_room_id: 105
      },
      {
        direction: "w",
        next_room_id: 149
      }
    ]
  },
  {
    room_id: 49,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(58,57)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 79
      },
      {
        direction: "e",
        next_room_id: 29
      },
      {
        direction: "w",
        next_room_id: 136
      }
    ]
  },
  {
    room_id: 50,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(62,55)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 34
      },
      {
        direction: "s",
        next_room_id: 89
      }
    ]
  },
  {
    room_id: 51,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(64,64)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 69
      },
      {
        direction: "e",
        next_room_id: 57
      },
      {
        direction: "w",
        next_room_id: 39
      }
    ]
  },
  {
    room_id: 52,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(63,55)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 35
      },
      {
        direction: "s",
        next_room_id: 68
      },
      {
        direction: "e",
        next_room_id: 75
      }
    ]
  },
  {
    room_id: 53,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(63,65)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 95
      },
      {
        direction: "s",
        next_room_id: 39
      },
      {
        direction: "w",
        next_room_id: 88
      }
    ]
  },
  {
    room_id: 54,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(64,63)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "w",
        next_room_id: 32
      }
    ]
  },
  {
    room_id: 55,
    title: "Wishing Well",
    description:
      "You are standing besides a large well. A sign next the well reads 'EXAMINE WELL, FIND WEALTH'.",
    coordinates: "(63,61)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "w",
        next_room_id: 26
      }
    ]
  },
  {
    room_id: 56,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(58,58)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 7
      },
      {
        direction: "w",
        next_room_id: 61
      }
    ]
  },
  {
    room_id: 57,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(65,64)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 145
      },
      {
        direction: "w",
        next_room_id: 51
      }
    ]
  },
  {
    room_id: 58,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(58,60)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 16
      },
      {
        direction: "w",
        next_room_id: 65
      }
    ]
  },
  {
    room_id: 59,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(64,61)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 38
      },
      {
        direction: "s",
        next_room_id: 104
      },
      {
        direction: "e",
        next_room_id: 92
      }
    ]
  },
  {
    room_id: 60,
    title: "Mt. Holloway",
    description: "You are on the side of a steep incline.",
    coordinates: "(59,55)",
    elevation: 3,
    terrain: "MOUNTAIN",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 45
      },
      {
        direction: "e",
        next_room_id: 36
      },
      {
        direction: "w",
        next_room_id: 70
      }
    ]
  },
  {
    room_id: 61,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(57,58)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 56
      },
      {
        direction: "w",
        next_room_id: 171
      }
    ]
  },
  {
    room_id: 62,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(58,63)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 64
      },
      {
        direction: "e",
        next_room_id: 46
      },
      {
        direction: "w",
        next_room_id: 84
      }
    ]
  },
  {
    room_id: 63,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(60,64)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 72
      },
      {
        direction: "s",
        next_room_id: 20
      },
      {
        direction: "w",
        next_room_id: 73
      }
    ]
  },
  {
    room_id: 64,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(58,64)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 62
      },
      {
        direction: "w",
        next_room_id: 82
      }
    ]
  },
  {
    room_id: 65,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(57,60)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 74
      },
      {
        direction: "e",
        next_room_id: 58
      },
      {
        direction: "w",
        next_room_id: 139
      }
    ]
  },
  {
    room_id: 66,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(65,62)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 169
      },
      {
        direction: "e",
        next_room_id: 123
      },
      {
        direction: "w",
        next_room_id: 38
      }
    ]
  },
  {
    room_id: 67,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(57,59)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 16
      },
      {
        direction: "w",
        next_room_id: 162
      }
    ]
  },
  {
    room_id: 68,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(63,54)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 52
      },
      {
        direction: "e",
        next_room_id: 100
      }
    ]
  },
  {
    room_id: 69,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(64,65)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 94
      },
      {
        direction: "s",
        next_room_id: 51
      },
      {
        direction: "e",
        next_room_id: 103
      }
    ]
  },
  {
    room_id: 70,
    title: "Mt. Holloway",
    description: "You are on the side of a steep incline.",
    coordinates: "(58,55)",
    elevation: 2,
    terrain: "MOUNTAIN",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 163
      },
      {
        direction: "e",
        next_room_id: 60
      },
      {
        direction: "w",
        next_room_id: 98
      }
    ]
  },
  {
    room_id: 71,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(58,62)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 47
      }
    ]
  },
  {
    room_id: 72,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(60,65)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 63
      },
      {
        direction: "w",
        next_room_id: 76
      }
    ]
  },
  {
    room_id: 73,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(59,64)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 63
      }
    ]
  },
  {
    room_id: 74,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(57,61)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 87
      },
      {
        direction: "s",
        next_room_id: 65
      },
      {
        direction: "w",
        next_room_id: 161
      }
    ]
  },
  {
    room_id: 75,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(64,55)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 85
      },
      {
        direction: "w",
        next_room_id: 52
      }
    ]
  },
  {
    room_id: 76,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(59,65)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 83
      },
      {
        direction: "e",
        next_room_id: 72
      },
      {
        direction: "w",
        next_room_id: 110
      }
    ]
  },
  {
    room_id: 77,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(59,62)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 19
      }
    ]
  },
  {
    room_id: 78,
    title: "Mt. Holloway",
    description: "You are on the side of a steep incline.",
    coordinates: "(61,54)",
    elevation: 4,
    terrain: "MOUNTAIN",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 22
      },
      {
        direction: "s",
        next_room_id: 108
      }
    ]
  },
  {
    room_id: 79,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(58,56)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 49
      }
    ]
  },
  {
    room_id: 80,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(64,57)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 42
      },
      {
        direction: "s",
        next_room_id: 81
      },
      {
        direction: "e",
        next_room_id: 86
      }
    ]
  },
  {
    room_id: 81,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(64,56)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 80
      }
    ]
  },
  {
    room_id: 82,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(57,64)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 191
      },
      {
        direction: "e",
        next_room_id: 64
      }
    ]
  },
  {
    room_id: 83,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(59,66)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 76
      },
      {
        direction: "e",
        next_room_id: 130
      },
      {
        direction: "w",
        next_room_id: 125
      }
    ]
  },
  {
    room_id: 84,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(57,63)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 62
      },
      {
        direction: "w",
        next_room_id: 91
      }
    ]
  },
  {
    room_id: 85,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(65,55)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 154
      },
      {
        direction: "w",
        next_room_id: 75
      }
    ]
  },
  {
    room_id: 86,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(65,57)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 96
      },
      {
        direction: "e",
        next_room_id: 90
      },
      {
        direction: "w",
        next_room_id: 80
      }
    ]
  },
  {
    room_id: 87,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(57,62)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 74
      }
    ]
  },
  {
    room_id: 88,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(62,65)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 53
      },
      {
        direction: "w",
        next_room_id: 122
      }
    ]
  },
  {
    room_id: 89,
    title: "Mt. Holloway",
    description: "You are at the base of a large, looming mountain.",
    coordinates: "(62,54)",
    elevation: 1,
    terrain: "MOUNTAIN",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 50
      },
      {
        direction: "s",
        next_room_id: 93
      }
    ]
  },
  {
    room_id: 90,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(66,57)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 178
      },
      {
        direction: "w",
        next_room_id: 86
      }
    ]
  },
  {
    room_id: 91,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(56,63)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 180
      },
      {
        direction: "s",
        next_room_id: 101
      },
      {
        direction: "e",
        next_room_id: 84
      },
      {
        direction: "w",
        next_room_id: 99
      }
    ]
  },
  {
    room_id: 92,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(65,61)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "w",
        next_room_id: 59
      }
    ]
  },
  {
    room_id: 93,
    title: "Mt. Holloway",
    description: "You are on the side of a steep incline.",
    coordinates: "(62,53)",
    elevation: 2,
    terrain: "MOUNTAIN",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 89
      },
      {
        direction: "w",
        next_room_id: 108
      }
    ]
  },
  {
    room_id: 94,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(64,66)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 152
      },
      {
        direction: "s",
        next_room_id: 69
      }
    ]
  },
  {
    room_id: 95,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(63,66)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 119
      },
      {
        direction: "s",
        next_room_id: 53
      },
      {
        direction: "w",
        next_room_id: 115
      }
    ]
  },
  {
    room_id: 96,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(65,56)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 86
      },
      {
        direction: "e",
        next_room_id: 97
      }
    ]
  },
  {
    room_id: 97,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(66,56)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 181
      },
      {
        direction: "w",
        next_room_id: 96
      }
    ]
  },
  {
    room_id: 98,
    title: "Mt. Holloway",
    description: "You are at the base of a large, looming mountain.",
    coordinates: "(57,55)",
    elevation: 1,
    terrain: "MOUNTAIN",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 102
      },
      {
        direction: "s",
        next_room_id: 126
      },
      {
        direction: "e",
        next_room_id: 70
      },
      {
        direction: "w",
        next_room_id: 109
      }
    ]
  },
  {
    room_id: 99,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(55,63)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure", "tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 190
      },
      {
        direction: "e",
        next_room_id: 91
      },
      {
        direction: "w",
        next_room_id: 146
      }
    ]
  },
  {
    room_id: 100,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(64,54)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 106
      },
      {
        direction: "e",
        next_room_id: 112
      },
      {
        direction: "w",
        next_room_id: 68
      }
    ]
  },
  {
    room_id: 101,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(56,62)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 91
      },
      {
        direction: "w",
        next_room_id: 113
      }
    ]
  },
  {
    room_id: 102,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(57,56)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 98
      },
      {
        direction: "w",
        next_room_id: 142
      }
    ]
  },
  {
    room_id: 103,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(65,65)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 160
      },
      {
        direction: "w",
        next_room_id: 69
      }
    ]
  },
  {
    room_id: 104,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(64,60)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 59
      },
      {
        direction: "e",
        next_room_id: 107
      }
    ]
  },
  {
    room_id: 105,
    title: "Mt. Holloway",
    description: "You are on the side of a steep incline.",
    coordinates: "(60,53)",
    elevation: 2,
    terrain: "MOUNTAIN",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 48
      },
      {
        direction: "w",
        next_room_id: 202
      }
    ]
  },
  {
    room_id: 106,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(64,53)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 100
      },
      {
        direction: "s",
        next_room_id: 111
      },
      {
        direction: "w",
        next_room_id: 135
      }
    ]
  },
  {
    room_id: 107,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(65,60)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 120
      },
      {
        direction: "e",
        next_room_id: 121
      },
      {
        direction: "w",
        next_room_id: 104
      }
    ]
  },
  {
    room_id: 108,
    title: "Mt. Holloway",
    description: "You are on the side of a steep incline.",
    coordinates: "(61,53)",
    elevation: 3,
    terrain: "MOUNTAIN",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 78
      },
      {
        direction: "s",
        next_room_id: 117
      },
      {
        direction: "e",
        next_room_id: 93
      }
    ]
  },
  {
    room_id: 109,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(56,55)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 185
      },
      {
        direction: "e",
        next_room_id: 98
      },
      {
        direction: "w",
        next_room_id: 175
      }
    ]
  },
  {
    room_id: 110,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(58,65)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 76
      }
    ]
  },
  {
    room_id: 111,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(64,52)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 106
      },
      {
        direction: "s",
        next_room_id: 367
      },
      {
        direction: "e",
        next_room_id: 158
      }
    ]
  },
  {
    room_id: 112,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(65,54)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 141
      },
      {
        direction: "e",
        next_room_id: 140
      },
      {
        direction: "w",
        next_room_id: 100
      }
    ]
  },
  {
    room_id: 113,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(55,62)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 114
      },
      {
        direction: "e",
        next_room_id: 101
      }
    ]
  },
  {
    room_id: 114,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(55,61)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 113
      },
      {
        direction: "w",
        next_room_id: 176
      }
    ]
  },
  {
    room_id: 115,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(62,66)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 116
      },
      {
        direction: "e",
        next_room_id: 95
      }
    ]
  },
  {
    room_id: 116,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(62,67)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 132
      },
      {
        direction: "s",
        next_room_id: 115
      }
    ]
  },
  {
    room_id: 117,
    title: "Mt. Holloway",
    description: "You are on the side of a steep incline.",
    coordinates: "(61,52)",
    elevation: 2,
    terrain: "MOUNTAIN",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 108
      },
      {
        direction: "s",
        next_room_id: 131
      },
      {
        direction: "e",
        next_room_id: 166
      },
      {
        direction: "w",
        next_room_id: 133
      }
    ]
  },
  {
    room_id: 118,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(65,58)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 137
      },
      {
        direction: "w",
        next_room_id: 42
      }
    ]
  },
  {
    room_id: 119,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(63,67)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 134
      },
      {
        direction: "s",
        next_room_id: 95
      }
    ]
  },
  {
    room_id: 120,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(65,59)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 107
      },
      {
        direction: "e",
        next_room_id: 127
      }
    ]
  },
  {
    room_id: 121,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(66,60)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 128
      },
      {
        direction: "e",
        next_room_id: 143
      },
      {
        direction: "w",
        next_room_id: 107
      }
    ]
  },
  {
    room_id: 122,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(61,65)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 124
      },
      {
        direction: "e",
        next_room_id: 88
      }
    ]
  },
  {
    room_id: 123,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(66,62)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "w",
        next_room_id: 66
      }
    ]
  },
  {
    room_id: 124,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(61,66)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 157
      },
      {
        direction: "s",
        next_room_id: 122
      }
    ]
  },
  {
    room_id: 125,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(58,66)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 165
      },
      {
        direction: "e",
        next_room_id: 83
      },
      {
        direction: "w",
        next_room_id: 237
      }
    ]
  },
  {
    room_id: 126,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(57,54)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 98
      },
      {
        direction: "s",
        next_room_id: 129
      }
    ]
  },
  {
    room_id: 127,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(66,59)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 184
      },
      {
        direction: "w",
        next_room_id: 120
      }
    ]
  },
  {
    room_id: 128,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(66,61)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 121
      },
      {
        direction: "e",
        next_room_id: 189
      }
    ]
  },
  {
    room_id: 129,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(57,53)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 126
      },
      {
        direction: "e",
        next_room_id: 194
      },
      {
        direction: "w",
        next_room_id: 170
      }
    ]
  },
  {
    room_id: 130,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(60,66)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "w",
        next_room_id: 83
      }
    ]
  },
  {
    room_id: 131,
    title: "Mt. Holloway",
    description: "You are at the base of a large, looming mountain.",
    coordinates: "(61,51)",
    elevation: 1,
    terrain: "MOUNTAIN",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 117
      },
      {
        direction: "s",
        next_room_id: 244
      },
      {
        direction: "w",
        next_room_id: 138
      }
    ]
  },
  {
    room_id: 132,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(62,68)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 116
      }
    ]
  },
  {
    room_id: 133,
    title: "Mt. Holloway",
    description: "You are at the base of a large, looming mountain.",
    coordinates: "(60,52)",
    elevation: 1,
    terrain: "MOUNTAIN",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 117
      },
      {
        direction: "w",
        next_room_id: 173
      }
    ]
  },
  {
    room_id: 134,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(63,68)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 147
      },
      {
        direction: "s",
        next_room_id: 119
      },
      {
        direction: "e",
        next_room_id: 144
      }
    ]
  },
  {
    room_id: 135,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(63,53)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 150
      },
      {
        direction: "e",
        next_room_id: 106
      }
    ]
  },
  {
    room_id: 136,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(57,57)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 49
      },
      {
        direction: "w",
        next_room_id: 148
      }
    ]
  },
  {
    room_id: 137,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(66,58)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "w",
        next_room_id: 118
      }
    ]
  },
  {
    room_id: 138,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(60,51)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 211
      },
      {
        direction: "e",
        next_room_id: 131
      },
      {
        direction: "w",
        next_room_id: 195
      }
    ]
  },
  {
    room_id: 139,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(56,60)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 65
      },
      {
        direction: "w",
        next_room_id: 188
      }
    ]
  },
  {
    room_id: 140,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(66,54)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "w",
        next_room_id: 112
      }
    ]
  },
  {
    room_id: 141,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(65,53)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 112
      },
      {
        direction: "e",
        next_room_id: 156
      }
    ]
  },
  {
    room_id: 142,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(56,56)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 102
      },
      {
        direction: "w",
        next_room_id: 159
      }
    ]
  },
  {
    room_id: 143,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(67,60)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 212
      },
      {
        direction: "w",
        next_room_id: 121
      }
    ]
  },
  {
    room_id: 144,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(64,68)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 155
      },
      {
        direction: "w",
        next_room_id: 134
      }
    ]
  },
  {
    room_id: 145,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(66,64)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 174
      },
      {
        direction: "e",
        next_room_id: 220
      },
      {
        direction: "w",
        next_room_id: 57
      }
    ]
  },
  {
    room_id: 146,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(54,63)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 215
      },
      {
        direction: "s",
        next_room_id: 177
      },
      {
        direction: "e",
        next_room_id: 99
      },
      {
        direction: "w",
        next_room_id: 257
      }
    ]
  },
  {
    room_id: 147,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(63,69)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 200
      },
      {
        direction: "s",
        next_room_id: 134
      },
      {
        direction: "e",
        next_room_id: 153
      },
      {
        direction: "w",
        next_room_id: 151
      }
    ]
  },
  {
    room_id: 148,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(56,57)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 136
      },
      {
        direction: "w",
        next_room_id: 292
      }
    ]
  },
  {
    room_id: 149,
    title: "Mt. Holloway",
    description: "You are on the side of a steep incline.",
    coordinates: "(59,54)",
    elevation: 2,
    terrain: "MOUNTAIN",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 48
      }
    ]
  },
  {
    room_id: 150,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(63,52)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 135
      },
      {
        direction: "w",
        next_room_id: 166
      }
    ]
  },
  {
    room_id: 151,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(62,69)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 172
      },
      {
        direction: "e",
        next_room_id: 147
      },
      {
        direction: "w",
        next_room_id: 207
      }
    ]
  },
  {
    room_id: 152,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(64,67)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 94
      }
    ]
  },
  {
    room_id: 153,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(64,69)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 329
      },
      {
        direction: "w",
        next_room_id: 147
      }
    ]
  },
  {
    room_id: 154,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(66,55)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 193
      },
      {
        direction: "w",
        next_room_id: 85
      }
    ]
  },
  {
    room_id: 155,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(65,68)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 187
      },
      {
        direction: "e",
        next_room_id: 316
      },
      {
        direction: "w",
        next_room_id: 144
      }
    ]
  },
  {
    room_id: 156,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(66,53)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 168
      },
      {
        direction: "e",
        next_room_id: 164
      },
      {
        direction: "w",
        next_room_id: 141
      }
    ]
  },
  {
    room_id: 157,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(61,67)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 210
      },
      {
        direction: "s",
        next_room_id: 124
      },
      {
        direction: "w",
        next_room_id: 182
      }
    ]
  },
  {
    room_id: 158,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(65,52)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 167
      },
      {
        direction: "w",
        next_room_id: 111
      }
    ]
  },
  {
    room_id: 159,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(55,56)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 142
      },
      {
        direction: "w",
        next_room_id: 196
      }
    ]
  },
  {
    room_id: 160,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(65,66)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 103
      }
    ]
  },
  {
    room_id: 161,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(56,61)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 74
      }
    ]
  },
  {
    room_id: 162,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(56,59)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 67
      }
    ]
  },
  {
    room_id: 163,
    title: "Mt. Holloway",
    description: "You are at the base of a large, looming mountain.",
    coordinates: "(58,54)",
    elevation: 1,
    terrain: "MOUNTAIN",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 70
      }
    ]
  },
  {
    room_id: 164,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(67,53)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 217
      },
      {
        direction: "e",
        next_room_id: 298
      },
      {
        direction: "w",
        next_room_id: 156
      }
    ]
  },
  {
    room_id: 165,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(58,67)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 203
      },
      {
        direction: "s",
        next_room_id: 125
      },
      {
        direction: "w",
        next_room_id: 204
      }
    ]
  },
  {
    room_id: 166,
    title: "Mt. Holloway",
    description: "You are at the base of a large, looming mountain.",
    coordinates: "(62,52)",
    elevation: 1,
    terrain: "MOUNTAIN",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 198
      },
      {
        direction: "e",
        next_room_id: 150
      },
      {
        direction: "w",
        next_room_id: 117
      }
    ]
  },
  {
    room_id: 167,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(65,51)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 158
      },
      {
        direction: "s",
        next_room_id: 262
      },
      {
        direction: "e",
        next_room_id: 260
      }
    ]
  },
  {
    room_id: 168,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(66,52)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 156
      },
      {
        direction: "e",
        next_room_id: 340
      }
    ]
  },
  {
    room_id: 169,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(65,63)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 66
      },
      {
        direction: "e",
        next_room_id: 186
      }
    ]
  },
  {
    room_id: 170,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(56,53)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 129
      }
    ]
  },
  {
    room_id: 171,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(56,58)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 61
      }
    ]
  },
  {
    room_id: 172,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(62,70)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 267
      },
      {
        direction: "s",
        next_room_id: 151
      }
    ]
  },
  {
    room_id: 173,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(59,52)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 133
      },
      {
        direction: "w",
        next_room_id: 214
      }
    ]
  },
  {
    room_id: 174,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(66,65)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 192
      },
      {
        direction: "s",
        next_room_id: 145
      },
      {
        direction: "e",
        next_room_id: 224
      }
    ]
  },
  {
    room_id: 175,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(55,55)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 183
      },
      {
        direction: "e",
        next_room_id: 109
      },
      {
        direction: "w",
        next_room_id: 179
      }
    ]
  },
  {
    room_id: 176,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(54,61)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 114
      },
      {
        direction: "w",
        next_room_id: 402
      }
    ]
  },
  {
    room_id: 177,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(54,62)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 146
      },
      {
        direction: "w",
        next_room_id: 346
      }
    ]
  },
  {
    room_id: 178,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(67,57)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 209
      },
      {
        direction: "e",
        next_room_id: 243
      },
      {
        direction: "w",
        next_room_id: 90
      }
    ]
  },
  {
    room_id: 179,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(54,55)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 233
      },
      {
        direction: "e",
        next_room_id: 175
      },
      {
        direction: "w",
        next_room_id: 213
      }
    ]
  },
  {
    room_id: 180,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(56,64)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 91
      }
    ]
  },
  {
    room_id: 181,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(67,56)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "w",
        next_room_id: 97
      }
    ]
  },
  {
    room_id: 182,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(60,67)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 157
      },
      {
        direction: "w",
        next_room_id: 208
      }
    ]
  },
  {
    room_id: 183,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(55,54)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure", "tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 175
      },
      {
        direction: "s",
        next_room_id: 229
      }
    ]
  },
  {
    room_id: 184,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(67,59)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 221
      },
      {
        direction: "w",
        next_room_id: 127
      }
    ]
  },
  {
    room_id: 185,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(56,54)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 109
      }
    ]
  },
  {
    room_id: 186,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(66,63)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 205
      },
      {
        direction: "w",
        next_room_id: 169
      }
    ]
  },
  {
    room_id: 187,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(65,67)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 155
      }
    ]
  },
  {
    room_id: 188,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(55,60)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 139
      },
      {
        direction: "w",
        next_room_id: 335
      }
    ]
  },
  {
    room_id: 189,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(67,61)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 255
      },
      {
        direction: "w",
        next_room_id: 128
      }
    ]
  },
  {
    room_id: 190,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(55,64)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 99
      }
    ]
  },
  {
    room_id: 191,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(57,65)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 82
      }
    ]
  },
  {
    room_id: 192,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(66,66)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 201
      },
      {
        direction: "s",
        next_room_id: 174
      },
      {
        direction: "e",
        next_room_id: 223
      }
    ]
  },
  {
    room_id: 193,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(67,55)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 251
      },
      {
        direction: "w",
        next_room_id: 154
      }
    ]
  },
  {
    room_id: 194,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(58,53)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 214
      },
      {
        direction: "w",
        next_room_id: 129
      }
    ]
  },
  {
    room_id: 195,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(59,51)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 228
      },
      {
        direction: "e",
        next_room_id: 138
      },
      {
        direction: "w",
        next_room_id: 225
      }
    ]
  },
  {
    room_id: 196,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(54,56)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 222
      },
      {
        direction: "e",
        next_room_id: 159
      },
      {
        direction: "w",
        next_room_id: 197
      }
    ]
  },
  {
    room_id: 197,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(53,56)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 232
      },
      {
        direction: "e",
        next_room_id: 196
      },
      {
        direction: "w",
        next_room_id: 276
      }
    ]
  },
  {
    room_id: 198,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(62,51)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 166
      },
      {
        direction: "s",
        next_room_id: 239
      },
      {
        direction: "e",
        next_room_id: 199
      }
    ]
  },
  {
    room_id: 199,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(63,51)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 230
      },
      {
        direction: "w",
        next_room_id: 198
      }
    ]
  },
  {
    room_id: 200,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(63,70)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 227
      },
      {
        direction: "s",
        next_room_id: 147
      },
      {
        direction: "e",
        next_room_id: 206
      }
    ]
  },
  {
    room_id: 201,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(66,67)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 192
      }
    ]
  },
  {
    room_id: 202,
    title: "Mt. Holloway",
    description: "You are at the base of a large, looming mountain.",
    coordinates: "(59,53)",
    elevation: 1,
    terrain: "MOUNTAIN",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 105
      }
    ]
  },
  {
    room_id: 203,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(58,68)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 268
      },
      {
        direction: "s",
        next_room_id: 165
      },
      {
        direction: "e",
        next_room_id: 299
      }
    ]
  },
  {
    room_id: 204,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(57,67)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 219
      },
      {
        direction: "e",
        next_room_id: 165
      },
      {
        direction: "w",
        next_room_id: 216
      }
    ]
  },
  {
    room_id: 205,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(67,63)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 241
      },
      {
        direction: "e",
        next_room_id: 479
      },
      {
        direction: "w",
        next_room_id: 186
      }
    ]
  },
  {
    room_id: 206,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(64,70)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 288
      },
      {
        direction: "e",
        next_room_id: 380
      },
      {
        direction: "w",
        next_room_id: 200
      }
    ]
  },
  {
    room_id: 207,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(61,69)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 231
      },
      {
        direction: "e",
        next_room_id: 151
      },
      {
        direction: "w",
        next_room_id: 290
      }
    ]
  },
  {
    room_id: 208,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(59,67)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 182
      }
    ]
  },
  {
    room_id: 209,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(67,58)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 178
      }
    ]
  },
  {
    room_id: 210,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(61,68)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 157
      }
    ]
  },
  {
    room_id: 211,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(60,50)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 138
      }
    ]
  },
  {
    room_id: 212,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(68,60)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "w",
        next_room_id: 143
      }
    ]
  },
  {
    room_id: 213,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(53,55)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 179
      },
      {
        direction: "w",
        next_room_id: 420
      }
    ]
  },
  {
    room_id: 214,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(58,52)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 194
      },
      {
        direction: "e",
        next_room_id: 173
      },
      {
        direction: "w",
        next_room_id: 226
      }
    ]
  },
  {
    room_id: 215,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(54,64)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 246
      },
      {
        direction: "s",
        next_room_id: 146
      }
    ]
  },
  {
    room_id: 216,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(56,67)",
    elevation: 0,
    terrain: "CAVE",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 234
      },
      {
        direction: "e",
        next_room_id: 204
      },
      {
        direction: "w",
        next_room_id: 218
      }
    ]
  },
  {
    room_id: 217,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(67,54)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 164
      },
      {
        direction: "e",
        next_room_id: 247
      }
    ]
  },
  {
    room_id: 218,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(55,67)",
    elevation: 0,
    terrain: "CAVE",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 263
      },
      {
        direction: "e",
        next_room_id: 216
      },
      {
        direction: "w",
        next_room_id: 242
      }
    ]
  },
  {
    room_id: 219,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(57,68)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 204
      }
    ]
  },
  {
    room_id: 220,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(67,64)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "w",
        next_room_id: 145
      }
    ]
  },
  {
    room_id: 221,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(68,59)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 253
      },
      {
        direction: "e",
        next_room_id: 240
      },
      {
        direction: "w",
        next_room_id: 184
      }
    ]
  },
  {
    room_id: 222,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(54,57)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 305
      },
      {
        direction: "s",
        next_room_id: 196
      }
    ]
  },
  {
    room_id: 223,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(67,66)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 283
      },
      {
        direction: "w",
        next_room_id: 192
      }
    ]
  },
  {
    room_id: 224,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(67,65)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "w",
        next_room_id: 174
      }
    ]
  },
  {
    room_id: 225,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(58,51)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 278
      },
      {
        direction: "e",
        next_room_id: 195
      }
    ]
  },
  {
    room_id: 226,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(57,52)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 300
      },
      {
        direction: "e",
        next_room_id: 214
      }
    ]
  },
  {
    room_id: 227,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(63,71)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 269
      },
      {
        direction: "s",
        next_room_id: 200
      }
    ]
  },
  {
    room_id: 228,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(59,50)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 195
      },
      {
        direction: "s",
        next_room_id: 281
      }
    ]
  },
  {
    room_id: 229,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(55,53)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 183
      },
      {
        direction: "s",
        next_room_id: 250
      },
      {
        direction: "w",
        next_room_id: 236
      }
    ]
  },
  {
    room_id: 230,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(63,50)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 199
      },
      {
        direction: "s",
        next_room_id: 307
      },
      {
        direction: "e",
        next_room_id: 297
      }
    ]
  },
  {
    room_id: 231,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(61,70)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 207
      },
      {
        direction: "w",
        next_room_id: 248
      }
    ]
  },
  {
    room_id: 232,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(53,57)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 272
      },
      {
        direction: "s",
        next_room_id: 197
      },
      {
        direction: "w",
        next_room_id: 235
      }
    ]
  },
  {
    room_id: 233,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(54,54)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 179
      },
      {
        direction: "w",
        next_room_id: 238
      }
    ]
  },
  {
    room_id: 234,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(56,68)",
    elevation: 0,
    terrain: "CAVE",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 368
      },
      {
        direction: "s",
        next_room_id: 216
      },
      {
        direction: "w",
        next_room_id: 252
      }
    ]
  },
  {
    room_id: 235,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(52,57)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 330
      },
      {
        direction: "e",
        next_room_id: 232
      },
      {
        direction: "w",
        next_room_id: 355
      }
    ]
  },
  {
    room_id: 236,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(54,53)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 264
      },
      {
        direction: "e",
        next_room_id: 229
      }
    ]
  },
  {
    room_id: 237,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(57,66)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 125
      },
      {
        direction: "w",
        next_room_id: 245
      }
    ]
  },
  {
    room_id: 238,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(53,54)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 233
      }
    ]
  },
  {
    room_id: 239,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(62,50)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 198
      },
      {
        direction: "w",
        next_room_id: 244
      }
    ]
  },
  {
    room_id: 240,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(69,59)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 249
      },
      {
        direction: "e",
        next_room_id: 386
      },
      {
        direction: "w",
        next_room_id: 221
      }
    ]
  },
  {
    room_id: 241,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(67,62)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 205
      },
      {
        direction: "e",
        next_room_id: 266
      }
    ]
  },
  {
    room_id: 242,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(54,67)",
    elevation: 0,
    terrain: "TRAP",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 287
      },
      {
        direction: "s",
        next_room_id: 259
      },
      {
        direction: "e",
        next_room_id: 218
      },
      {
        direction: "w",
        next_room_id: 275
      }
    ]
  },
  {
    room_id: 243,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(68,57)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 293
      },
      {
        direction: "e",
        next_room_id: 256
      },
      {
        direction: "w",
        next_room_id: 178
      }
    ]
  },
  {
    room_id: 244,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(61,50)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 131
      },
      {
        direction: "e",
        next_room_id: 239
      }
    ]
  },
  {
    room_id: 245,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(56,66)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 254
      },
      {
        direction: "e",
        next_room_id: 237
      }
    ]
  },
  {
    room_id: 246,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(54,65)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 215
      }
    ]
  },
  {
    room_id: 247,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(68,54)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 261
      },
      {
        direction: "w",
        next_room_id: 217
      }
    ]
  },
  {
    room_id: 248,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(60,70)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 296
      },
      {
        direction: "e",
        next_room_id: 231
      },
      {
        direction: "w",
        next_room_id: 280
      }
    ]
  },
  {
    room_id: 249,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(69,60)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 265
      },
      {
        direction: "s",
        next_room_id: 240
      },
      {
        direction: "e",
        next_room_id: 282
      }
    ]
  },
  {
    room_id: 250,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(55,52)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 229
      },
      {
        direction: "s",
        next_room_id: 294
      },
      {
        direction: "e",
        next_room_id: 289
      }
    ]
  },
  {
    room_id: 251,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(68,55)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 315
      },
      {
        direction: "w",
        next_room_id: 193
      }
    ]
  },
  {
    room_id: 252,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(55,68)",
    elevation: 0,
    terrain: "CAVE",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 284
      },
      {
        direction: "e",
        next_room_id: 234
      }
    ]
  },
  {
    room_id: 253,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(68,58)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 221
      },
      {
        direction: "e",
        next_room_id: 258
      }
    ]
  },
  {
    room_id: 254,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(56,65)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 245
      },
      {
        direction: "w",
        next_room_id: 314
      }
    ]
  },
  {
    room_id: 255,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(68,61)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "w",
        next_room_id: 189
      }
    ]
  },
  {
    room_id: 256,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(69,57)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 360
      },
      {
        direction: "e",
        next_room_id: 327
      },
      {
        direction: "w",
        next_room_id: 243
      }
    ]
  },
  {
    room_id: 257,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(53,63)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 320
      },
      {
        direction: "e",
        next_room_id: 146
      },
      {
        direction: "w",
        next_room_id: 364
      }
    ]
  },
  {
    room_id: 258,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(69,58)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 306
      },
      {
        direction: "w",
        next_room_id: 253
      }
    ]
  },
  {
    room_id: 259,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(54,66)",
    elevation: 0,
    terrain: "CAVE",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 242
      },
      {
        direction: "w",
        next_room_id: 310
      }
    ]
  },
  {
    room_id: 260,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(66,51)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "w",
        next_room_id: 167
      }
    ]
  },
  {
    room_id: 261,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(69,54)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 277
      },
      {
        direction: "e",
        next_room_id: 322
      },
      {
        direction: "w",
        next_room_id: 247
      }
    ]
  },
  {
    room_id: 262,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(65,50)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 167
      },
      {
        direction: "s",
        next_room_id: 370
      },
      {
        direction: "e",
        next_room_id: 358
      }
    ]
  },
  {
    room_id: 263,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(55,66)",
    elevation: 0,
    terrain: "CAVE",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 218
      }
    ]
  },
  {
    room_id: 264,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(54,52)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 236
      },
      {
        direction: "s",
        next_room_id: 274
      },
      {
        direction: "w",
        next_room_id: 273
      }
    ]
  },
  {
    room_id: 265,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(69,61)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 279
      },
      {
        direction: "s",
        next_room_id: 249
      },
      {
        direction: "e",
        next_room_id: 270
      }
    ]
  },
  {
    room_id: 266,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(68,62)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "w",
        next_room_id: 241
      }
    ]
  },
  {
    room_id: 267,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(62,71)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 285
      },
      {
        direction: "s",
        next_room_id: 172
      },
      {
        direction: "w",
        next_room_id: 271
      }
    ]
  },
  {
    room_id: 268,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(58,69)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 203
      },
      {
        direction: "e",
        next_room_id: 411
      },
      {
        direction: "w",
        next_room_id: 312
      }
    ]
  },
  {
    room_id: 269,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(63,72)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 319
      },
      {
        direction: "s",
        next_room_id: 227
      }
    ]
  },
  {
    room_id: 270,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(70,61)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 416
      },
      {
        direction: "e",
        next_room_id: 338
      },
      {
        direction: "w",
        next_room_id: 265
      }
    ]
  },
  {
    room_id: 271,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(61,71)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 337
      },
      {
        direction: "e",
        next_room_id: 267
      }
    ]
  },
  {
    room_id: 272,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(53,58)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 295
      },
      {
        direction: "s",
        next_room_id: 232
      }
    ]
  },
  {
    room_id: 273,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(53,52)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 343
      },
      {
        direction: "e",
        next_room_id: 264
      }
    ]
  },
  {
    room_id: 274,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(54,51)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 264
      },
      {
        direction: "w",
        next_room_id: 308
      }
    ]
  },
  {
    room_id: 275,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You notice a cave entrance to the east and cliffside landmark to the west.",
    coordinates: "(53,67)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 242
      },
      {
        direction: "w",
        next_room_id: 456
      }
    ]
  },
  {
    room_id: 276,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(52,56)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 197
      },
      {
        direction: "w",
        next_room_id: 419
      }
    ]
  },
  {
    room_id: 277,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(69,53)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 261
      },
      {
        direction: "e",
        next_room_id: 323
      }
    ]
  },
  {
    room_id: 278,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(58,50)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 225
      }
    ]
  },
  {
    room_id: 279,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(69,62)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 265
      }
    ]
  },
  {
    room_id: 280,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(59,70)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 325
      },
      {
        direction: "e",
        next_room_id: 248
      }
    ]
  },
  {
    room_id: 281,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(59,49)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 228
      },
      {
        direction: "s",
        next_room_id: 318
      },
      {
        direction: "e",
        next_room_id: 309
      },
      {
        direction: "w",
        next_room_id: 317
      }
    ]
  },
  {
    room_id: 282,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(70,60)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "w",
        next_room_id: 249
      }
    ]
  },
  {
    room_id: 283,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(67,67)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 331
      },
      {
        direction: "s",
        next_room_id: 223
      },
      {
        direction: "e",
        next_room_id: 313
      }
    ]
  },
  {
    room_id: 284,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(55,69)",
    elevation: 0,
    terrain: "CAVE",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 302
      },
      {
        direction: "s",
        next_room_id: 252
      },
      {
        direction: "w",
        next_room_id: 303
      }
    ]
  },
  {
    room_id: 285,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(62,72)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 286
      },
      {
        direction: "s",
        next_room_id: 267
      }
    ]
  },
  {
    room_id: 286,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(62,73)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 336
      },
      {
        direction: "s",
        next_room_id: 285
      },
      {
        direction: "w",
        next_room_id: 291
      }
    ]
  },
  {
    room_id: 287,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(54,68)",
    elevation: 0,
    terrain: "CAVE",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 242
      },
      {
        direction: "w",
        next_room_id: 339
      }
    ]
  },
  {
    room_id: 288,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(64,71)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 206
      }
    ]
  },
  {
    room_id: 289,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(56,52)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "w",
        next_room_id: 250
      }
    ]
  },
  {
    room_id: 290,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(60,69)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 207
      }
    ]
  },
  {
    room_id: 291,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(61,73)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 410
      },
      {
        direction: "e",
        next_room_id: 286
      },
      {
        direction: "w",
        next_room_id: 347
      }
    ]
  },
  {
    room_id: 292,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(55,57)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 301
      },
      {
        direction: "e",
        next_room_id: 148
      }
    ]
  },
  {
    room_id: 293,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(68,56)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 243
      }
    ]
  },
  {
    room_id: 294,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(55,51)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 250
      },
      {
        direction: "s",
        next_room_id: 334
      }
    ]
  },
  {
    room_id: 295,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(53,59)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 272
      }
    ]
  },
  {
    room_id: 296,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(60,71)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 248
      }
    ]
  },
  {
    room_id: 297,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(64,50)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "w",
        next_room_id: 230
      }
    ]
  },
  {
    room_id: 298,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(68,53)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 324
      },
      {
        direction: "w",
        next_room_id: 164
      }
    ]
  },
  {
    room_id: 299,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(59,68)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 311
      },
      {
        direction: "w",
        next_room_id: 203
      }
    ]
  },
  {
    room_id: 300,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(57,51)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 226
      },
      {
        direction: "s",
        next_room_id: 377
      },
      {
        direction: "w",
        next_room_id: 389
      }
    ]
  },
  {
    room_id: 301,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(55,58)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 304
      },
      {
        direction: "s",
        next_room_id: 292
      }
    ]
  },
  {
    room_id: 302,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(55,70)",
    elevation: 0,
    terrain: "TRAP",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 422
      },
      {
        direction: "s",
        next_room_id: 284
      }
    ]
  },
  {
    room_id: 303,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(54,69)",
    elevation: 0,
    terrain: "CAVE",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 361
      },
      {
        direction: "e",
        next_room_id: 284
      },
      {
        direction: "w",
        next_room_id: 405
      }
    ]
  },
  {
    room_id: 304,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(55,59)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 301
      }
    ]
  },
  {
    room_id: 305,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(54,58)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 365
      },
      {
        direction: "s",
        next_room_id: 222
      }
    ]
  },
  {
    room_id: 306,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(70,58)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 397
      },
      {
        direction: "w",
        next_room_id: 258
      }
    ]
  },
  {
    room_id: 307,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(63,49)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 230
      },
      {
        direction: "s",
        next_room_id: 373
      },
      {
        direction: "e",
        next_room_id: 371
      },
      {
        direction: "w",
        next_room_id: 321
      }
    ]
  },
  {
    room_id: 308,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(53,51)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 274
      }
    ]
  },
  {
    room_id: 309,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(60,49)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 333
      },
      {
        direction: "e",
        next_room_id: 326
      },
      {
        direction: "w",
        next_room_id: 281
      }
    ]
  },
  {
    room_id: 310,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(53,66)",
    elevation: 0,
    terrain: "CAVE",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 259
      },
      {
        direction: "w",
        next_room_id: 412
      }
    ]
  },
  {
    room_id: 311,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(60,68)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "w",
        next_room_id: 299
      }
    ]
  },
  {
    room_id: 312,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(57,69)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 328
      },
      {
        direction: "e",
        next_room_id: 268
      }
    ]
  },
  {
    room_id: 313,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(68,67)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "w",
        next_room_id: 283
      }
    ]
  },
  {
    room_id: 314,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(55,65)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 254
      }
    ]
  },
  {
    room_id: 315,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(69,55)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "w",
        next_room_id: 251
      }
    ]
  },
  {
    room_id: 316,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(66,68)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 344
      },
      {
        direction: "w",
        next_room_id: 155
      }
    ]
  },
  {
    room_id: 317,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(58,49)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 387
      },
      {
        direction: "e",
        next_room_id: 281
      },
      {
        direction: "w",
        next_room_id: 409
      }
    ]
  },
  {
    room_id: 318,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(59,48)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 281
      },
      {
        direction: "s",
        next_room_id: 487
      }
    ]
  },
  {
    room_id: 319,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(63,73)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 359
      },
      {
        direction: "s",
        next_room_id: 269
      },
      {
        direction: "e",
        next_room_id: 345
      }
    ]
  },
  {
    room_id: 320,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(53,64)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 348
      },
      {
        direction: "s",
        next_room_id: 257
      }
    ]
  },
  {
    room_id: 321,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(62,49)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 413
      },
      {
        direction: "e",
        next_room_id: 307
      }
    ]
  },
  {
    room_id: 322,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(70,54)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 382
      },
      {
        direction: "e",
        next_room_id: 435
      },
      {
        direction: "w",
        next_room_id: 261
      }
    ]
  },
  {
    room_id: 323,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(70,53)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 433
      },
      {
        direction: "w",
        next_room_id: 277
      }
    ]
  },
  {
    room_id: 324,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(68,52)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 298
      },
      {
        direction: "s",
        next_room_id: 349
      },
      {
        direction: "e",
        next_room_id: 354
      }
    ]
  },
  {
    room_id: 325,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(59,71)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 353
      },
      {
        direction: "s",
        next_room_id: 280
      },
      {
        direction: "w",
        next_room_id: 374
      }
    ]
  },
  {
    room_id: 326,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(61,49)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 342
      },
      {
        direction: "w",
        next_room_id: 309
      }
    ]
  },
  {
    room_id: 327,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(70,57)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 427
      },
      {
        direction: "w",
        next_room_id: 256
      }
    ]
  },
  {
    room_id: 328,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(57,70)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 332
      },
      {
        direction: "s",
        next_room_id: 312
      },
      {
        direction: "e",
        next_room_id: 357
      },
      {
        direction: "w",
        next_room_id: 363
      }
    ]
  },
  {
    room_id: 329,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(65,69)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "w",
        next_room_id: 153
      }
    ]
  },
  {
    room_id: 330,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(52,58)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 369
      },
      {
        direction: "s",
        next_room_id: 235
      },
      {
        direction: "w",
        next_room_id: 383
      }
    ]
  },
  {
    room_id: 331,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(67,68)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 283
      },
      {
        direction: "e",
        next_room_id: 446
      }
    ]
  },
  {
    room_id: 332,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(57,71)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 350
      },
      {
        direction: "s",
        next_room_id: 328
      }
    ]
  },
  {
    room_id: 333,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(60,48)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 309
      },
      {
        direction: "s",
        next_room_id: 378
      }
    ]
  },
  {
    room_id: 334,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(55,50)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 294
      },
      {
        direction: "s",
        next_room_id: 393
      },
      {
        direction: "e",
        next_room_id: 341
      },
      {
        direction: "w",
        next_room_id: 391
      }
    ]
  },
  {
    room_id: 335,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(54,60)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 188
      },
      {
        direction: "w",
        next_room_id: 366
      }
    ]
  },
  {
    room_id: 336,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(62,74)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 286
      }
    ]
  },
  {
    room_id: 337,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(61,72)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 271
      }
    ]
  },
  {
    room_id: 338,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(71,61)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 379
      },
      {
        direction: "w",
        next_room_id: 270
      }
    ]
  },
  {
    room_id: 339,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(53,68)",
    elevation: 0,
    terrain: "TRAP",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 287
      },
      {
        direction: "w",
        next_room_id: 445
      }
    ]
  },
  {
    room_id: 340,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(67,52)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "w",
        next_room_id: 168
      }
    ]
  },
  {
    room_id: 341,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(56,50)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 449
      },
      {
        direction: "w",
        next_room_id: 334
      }
    ]
  },
  {
    room_id: 342,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(61,48)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 326
      },
      {
        direction: "s",
        next_room_id: 432
      }
    ]
  },
  {
    room_id: 343,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(53,53)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 273
      },
      {
        direction: "w",
        next_room_id: 351
      }
    ]
  },
  {
    room_id: 344,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(66,69)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 392
      },
      {
        direction: "s",
        next_room_id: 316
      },
      {
        direction: "e",
        next_room_id: 390
      }
    ]
  },
  {
    room_id: 345,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(64,73)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 375
      },
      {
        direction: "w",
        next_room_id: 319
      }
    ]
  },
  {
    room_id: 346,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(53,62)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 177
      }
    ]
  },
  {
    room_id: 347,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(60,73)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 452
      },
      {
        direction: "s",
        next_room_id: 442
      },
      {
        direction: "e",
        next_room_id: 291
      }
    ]
  },
  {
    room_id: 348,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(53,65)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 320
      }
    ]
  },
  {
    room_id: 349,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(68,51)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 324
      },
      {
        direction: "s",
        next_room_id: 352
      },
      {
        direction: "e",
        next_room_id: 384
      },
      {
        direction: "w",
        next_room_id: 356
      }
    ]
  },
  {
    room_id: 350,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(57,72)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 436
      },
      {
        direction: "s",
        next_room_id: 332
      },
      {
        direction: "e",
        next_room_id: 404
      }
    ]
  },
  {
    room_id: 351,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(52,53)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 491
      },
      {
        direction: "e",
        next_room_id: 343
      },
      {
        direction: "w",
        next_room_id: 478
      }
    ]
  },
  {
    room_id: 352,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(68,50)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 349
      },
      {
        direction: "s",
        next_room_id: 362
      },
      {
        direction: "e",
        next_room_id: 485
      }
    ]
  },
  {
    room_id: 353,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(59,72)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 325
      }
    ]
  },
  {
    room_id: 354,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(69,52)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "w",
        next_room_id: 324
      }
    ]
  },
  {
    room_id: 355,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(51,57)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 235
      }
    ]
  },
  {
    room_id: 356,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(67,51)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 349
      }
    ]
  },
  {
    room_id: 357,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(58,70)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "w",
        next_room_id: 328
      }
    ]
  },
  {
    room_id: 358,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(66,50)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 401
      },
      {
        direction: "w",
        next_room_id: 262
      }
    ]
  },
  {
    room_id: 359,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(63,74)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 319
      }
    ]
  },
  {
    room_id: 360,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(69,56)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 256
      },
      {
        direction: "e",
        next_room_id: 398
      }
    ]
  },
  {
    room_id: 361,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(54,70)",
    elevation: 0,
    terrain: "TRAP",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 408
      },
      {
        direction: "s",
        next_room_id: 303
      }
    ]
  },
  {
    room_id: 362,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(68,49)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 352
      },
      {
        direction: "s",
        next_room_id: 399
      },
      {
        direction: "w",
        next_room_id: 463
      }
    ]
  },
  {
    room_id: 363,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(56,70)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 372
      },
      {
        direction: "e",
        next_room_id: 328
      }
    ]
  },
  {
    room_id: 364,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(52,63)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 429
      },
      {
        direction: "s",
        next_room_id: 381
      },
      {
        direction: "e",
        next_room_id: 257
      },
      {
        direction: "w",
        next_room_id: 448
      }
    ]
  },
  {
    room_id: 365,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(54,59)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 305
      }
    ]
  },
  {
    room_id: 366,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(53,60)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 335
      }
    ]
  },
  {
    room_id: 367,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(64,51)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 111
      }
    ]
  },
  {
    room_id: 368,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(56,69)",
    elevation: 0,
    terrain: "CAVE",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 234
      }
    ]
  },
  {
    room_id: 369,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(52,59)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 400
      },
      {
        direction: "s",
        next_room_id: 330
      },
      {
        direction: "w",
        next_room_id: 376
      }
    ]
  },
  {
    room_id: 370,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(65,49)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 262
      },
      {
        direction: "s",
        next_room_id: 434
      },
      {
        direction: "e",
        next_room_id: 407
      }
    ]
  },
  {
    room_id: 371,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(64,49)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 475
      },
      {
        direction: "w",
        next_room_id: 307
      }
    ]
  },
  {
    room_id: 372,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(56,71)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 441
      },
      {
        direction: "s",
        next_room_id: 363
      }
    ]
  },
  {
    room_id: 373,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(63,48)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 307
      },
      {
        direction: "s",
        next_room_id: 480
      }
    ]
  },
  {
    room_id: 374,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(58,71)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 325
      }
    ]
  },
  {
    room_id: 375,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(64,72)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 345
      },
      {
        direction: "e",
        next_room_id: 385
      }
    ]
  },
  {
    room_id: 376,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(51,59)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 369
      }
    ]
  },
  {
    room_id: 377,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(57,50)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 300
      }
    ]
  },
  {
    room_id: 378,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(60,47)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 333
      }
    ]
  },
  {
    room_id: 379,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(71,60)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 338
      },
      {
        direction: "e",
        next_room_id: 395
      }
    ]
  },
  {
    room_id: 380,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(65,70)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 424
      },
      {
        direction: "w",
        next_room_id: 206
      }
    ]
  },
  {
    room_id: 381,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(52,62)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 364
      },
      {
        direction: "w",
        next_room_id: 394
      }
    ]
  },
  {
    room_id: 382,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(70,55)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 322
      },
      {
        direction: "e",
        next_room_id: 388
      }
    ]
  },
  {
    room_id: 383,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(51,58)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 330
      },
      {
        direction: "w",
        next_room_id: 495
      }
    ]
  },
  {
    room_id: 384,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(69,51)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "w",
        next_room_id: 349
      }
    ]
  },
  {
    room_id: 385,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(65,72)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "w",
        next_room_id: 375
      }
    ]
  },
  {
    room_id: 386,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(70,59)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 414
      },
      {
        direction: "w",
        next_room_id: 240
      }
    ]
  },
  {
    room_id: 387,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(58,48)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 317
      },
      {
        direction: "s",
        next_room_id: 417
      },
      {
        direction: "w",
        next_room_id: 431
      }
    ]
  },
  {
    room_id: 388,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(71,55)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 477
      },
      {
        direction: "w",
        next_room_id: 382
      }
    ]
  },
  {
    room_id: 389,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(56,51)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 300
      }
    ]
  },
  {
    room_id: 390,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(67,69)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "w",
        next_room_id: 344
      }
    ]
  },
  {
    room_id: 391,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(54,50)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 396
      },
      {
        direction: "e",
        next_room_id: 334
      },
      {
        direction: "w",
        next_room_id: 428
      }
    ]
  },
  {
    room_id: 392,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(66,70)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 344
      },
      {
        direction: "e",
        next_room_id: 462
      }
    ]
  },
  {
    room_id: 393,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(55,49)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 334
      },
      {
        direction: "s",
        next_room_id: 482
      }
    ]
  },
  {
    room_id: 394,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(51,62)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 381
      }
    ]
  },
  {
    room_id: 395,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(72,60)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 403
      },
      {
        direction: "e",
        next_room_id: 421
      },
      {
        direction: "w",
        next_room_id: 379
      }
    ]
  },
  {
    room_id: 396,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(54,49)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 391
      }
    ]
  },
  {
    room_id: 397,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(71,58)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "w",
        next_room_id: 306
      }
    ]
  },
  {
    room_id: 398,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(70,56)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 438
      },
      {
        direction: "w",
        next_room_id: 360
      }
    ]
  },
  {
    room_id: 399,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(68,48)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 362
      },
      {
        direction: "s",
        next_room_id: 467
      }
    ]
  },
  {
    room_id: 400,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(52,60)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 369
      }
    ]
  },
  {
    room_id: 401,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(67,50)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "w",
        next_room_id: 358
      }
    ]
  },
  {
    room_id: 402,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(53,61)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 176
      },
      {
        direction: "w",
        next_room_id: 451
      }
    ]
  },
  {
    room_id: 403,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(72,59)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 395
      }
    ]
  },
  {
    room_id: 404,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(58,72)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 481
      },
      {
        direction: "w",
        next_room_id: 350
      }
    ]
  },
  {
    room_id: 405,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(53,69)",
    elevation: 0,
    terrain: "CAVE",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 406
      },
      {
        direction: "e",
        next_room_id: 303
      }
    ]
  },
  {
    room_id: 406,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(53,70)",
    elevation: 0,
    terrain: "CAVE",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 405
      },
      {
        direction: "w",
        next_room_id: 415
      }
    ]
  },
  {
    room_id: 407,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(66,49)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 496
      },
      {
        direction: "w",
        next_room_id: 370
      }
    ]
  },
  {
    room_id: 408,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(54,71)",
    elevation: 0,
    terrain: "CAVE",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 458
      },
      {
        direction: "s",
        next_room_id: 361
      },
      {
        direction: "w",
        next_room_id: 423
      }
    ]
  },
  {
    room_id: 409,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(57,49)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 317
      }
    ]
  },
  {
    room_id: 410,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(61,74)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 291
      }
    ]
  },
  {
    room_id: 411,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(59,69)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "w",
        next_room_id: 268
      }
    ]
  },
  {
    room_id: 412,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(52,66)",
    elevation: 0,
    terrain: "CAVE",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 488
      },
      {
        direction: "e",
        next_room_id: 310
      }
    ]
  },
  {
    room_id: 413,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(62,48)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 321
      }
    ]
  },
  {
    room_id: 414,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(71,59)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "w",
        next_room_id: 386
      }
    ]
  },
  {
    room_id: 415,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(52,70)",
    elevation: 0,
    terrain: "TRAP",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 406
      },
      {
        direction: "w",
        next_room_id: 418
      }
    ]
  },
  {
    room_id: 416,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(70,62)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 270
      }
    ]
  },
  {
    room_id: 417,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(58,47)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 387
      }
    ]
  },
  {
    room_id: 418,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(51,70)",
    elevation: 0,
    terrain: "CAVE",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 425
      },
      {
        direction: "s",
        next_room_id: 474
      },
      {
        direction: "e",
        next_room_id: 415
      }
    ]
  },
  {
    room_id: 419,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(51,56)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 276
      }
    ]
  },
  {
    room_id: 420,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(52,55)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 444
      },
      {
        direction: "e",
        next_room_id: 213
      },
      {
        direction: "w",
        next_room_id: 437
      }
    ]
  },
  {
    room_id: 421,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(73,60)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 440
      },
      {
        direction: "w",
        next_room_id: 395
      }
    ]
  },
  {
    room_id: 422,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(55,71)",
    elevation: 0,
    terrain: "TRAP",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 426
      },
      {
        direction: "s",
        next_room_id: 302
      }
    ]
  },
  {
    room_id: 423,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(53,71)",
    elevation: 0,
    terrain: "CAVE",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 408
      },
      {
        direction: "w",
        next_room_id: 454
      }
    ]
  },
  {
    room_id: 424,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(65,71)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 380
      },
      {
        direction: "e",
        next_room_id: 473
      }
    ]
  },
  {
    room_id: 425,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(51,71)",
    elevation: 0,
    terrain: "CAVE",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 418
      },
      {
        direction: "w",
        next_room_id: 469
      }
    ]
  },
  {
    room_id: 426,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(55,72)",
    elevation: 0,
    terrain: "TRAP",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 457
      },
      {
        direction: "s",
        next_room_id: 422
      }
    ]
  },
  {
    room_id: 427,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(71,57)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 430
      },
      {
        direction: "w",
        next_room_id: 327
      }
    ]
  },
  {
    room_id: 428,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(53,50)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 391
      }
    ]
  },
  {
    room_id: 429,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(52,64)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 364
      }
    ]
  },
  {
    room_id: 430,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(72,57)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 443
      },
      {
        direction: "e",
        next_room_id: 439
      },
      {
        direction: "w",
        next_room_id: 427
      }
    ]
  },
  {
    room_id: 431,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(57,48)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 387
      },
      {
        direction: "w",
        next_room_id: 492
      }
    ]
  },
  {
    room_id: 432,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(61,47)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 342
      }
    ]
  },
  {
    room_id: 433,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(71,53)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 455
      },
      {
        direction: "e",
        next_room_id: 460
      },
      {
        direction: "w",
        next_room_id: 323
      }
    ]
  },
  {
    room_id: 434,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(65,48)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 370
      }
    ]
  },
  {
    room_id: 435,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(71,54)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "w",
        next_room_id: 322
      }
    ]
  },
  {
    room_id: 436,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(57,73)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 350
      }
    ]
  },
  {
    room_id: 437,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(51,55)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 420
      },
      {
        direction: "w",
        next_room_id: 497
      }
    ]
  },
  {
    room_id: 438,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(71,56)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 465
      },
      {
        direction: "w",
        next_room_id: 398
      }
    ]
  },
  {
    room_id: 439,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(73,57)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "w",
        next_room_id: 430
      }
    ]
  },
  {
    room_id: 440,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(73,61)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 421
      },
      {
        direction: "w",
        next_room_id: 476
      }
    ]
  },
  {
    room_id: 441,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(56,72)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 372
      }
    ]
  },
  {
    room_id: 442,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(60,72)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 347
      }
    ]
  },
  {
    room_id: 443,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(72,58)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 430
      },
      {
        direction: "e",
        next_room_id: 471
      }
    ]
  },
  {
    room_id: 444,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(52,54)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 420
      },
      {
        direction: "w",
        next_room_id: 490
      }
    ]
  },
  {
    room_id: 445,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(52,68)",
    elevation: 0,
    terrain: "CAVE",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 447
      },
      {
        direction: "e",
        next_room_id: 339
      },
      {
        direction: "w",
        next_room_id: 450
      }
    ]
  },
  {
    room_id: 446,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(68,68)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 466
      },
      {
        direction: "w",
        next_room_id: 331
      }
    ]
  },
  {
    room_id: 447,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(52,69)",
    elevation: 0,
    terrain: "CAVE",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 445
      }
    ]
  },
  {
    room_id: 448,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(51,63)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 364
      }
    ]
  },
  {
    room_id: 449,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(56,49)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 341
      }
    ]
  },
  {
    room_id: 450,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(51,68)",
    elevation: 0,
    terrain: "CAVE",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 445
      }
    ]
  },
  {
    room_id: 451,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(52,61)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 402
      },
      {
        direction: "w",
        next_room_id: 453
      }
    ]
  },
  {
    room_id: 452,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(60,74)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 347
      }
    ]
  },
  {
    room_id: 453,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(51,61)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 464
      },
      {
        direction: "e",
        next_room_id: 451
      }
    ]
  },
  {
    room_id: 454,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(52,71)",
    elevation: 0,
    terrain: "CAVE",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 470
      },
      {
        direction: "e",
        next_room_id: 423
      }
    ]
  },
  {
    room_id: 455,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(71,52)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 433
      }
    ]
  },
  {
    room_id: 456,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You notice a cave entrance to the east and cliffside landmark to the west.",
    coordinates: "(52,67)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 275
      },
      {
        direction: "w",
        next_room_id: 499
      }
    ]
  },
  {
    room_id: 457,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(55,73)",
    elevation: 0,
    terrain: "TRAP",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 461
      },
      {
        direction: "s",
        next_room_id: 426
      }
    ]
  },
  {
    room_id: 458,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(54,72)",
    elevation: 0,
    terrain: "CAVE",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 408
      },
      {
        direction: "w",
        next_room_id: 459
      }
    ]
  },
  {
    room_id: 459,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(53,72)",
    elevation: 0,
    terrain: "CAVE",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 458
      }
    ]
  },
  {
    room_id: 460,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(72,53)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "w",
        next_room_id: 433
      }
    ]
  },
  {
    room_id: 461,
    title: "Linh's Shrine",
    description:
      "You are standing before a glowing shrine to a Linh, the Swift. She looks quite fast.",
    coordinates: "(55,74)",
    elevation: 0,
    terrain: "CAVE",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 457
      }
    ]
  },
  {
    room_id: 462,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(67,70)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "w",
        next_room_id: 392
      }
    ]
  },
  {
    room_id: 463,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(67,49)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 468
      },
      {
        direction: "e",
        next_room_id: 362
      }
    ]
  },
  {
    room_id: 464,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(51,60)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 453
      }
    ]
  },
  {
    room_id: 465,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(72,56)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 498
      },
      {
        direction: "w",
        next_room_id: 438
      }
    ]
  },
  {
    room_id: 466,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(69,68)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "s",
        next_room_id: 486
      },
      {
        direction: "e",
        next_room_id: 472
      },
      {
        direction: "w",
        next_room_id: 446
      }
    ]
  },
  {
    room_id: 467,
    title: "Pirate Ry's",
    description:
      "You see a sign before you that reads:\n\n'You have found Pirate Ry's. Send a `change_name` request and I'll change your identity to whatever you wish... for a price.'",
    coordinates: "(68,47)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 399
      }
    ]
  },
  {
    room_id: 468,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(67,48)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 463
      }
    ]
  },
  {
    room_id: 469,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(50,71)",
    elevation: 0,
    terrain: "CAVE",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 425
      }
    ]
  },
  {
    room_id: 470,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(52,72)",
    elevation: 0,
    terrain: "CAVE",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 454
      }
    ]
  },
  {
    room_id: 471,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(73,58)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "w",
        next_room_id: 443
      }
    ]
  },
  {
    room_id: 472,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(70,68)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "w",
        next_room_id: 466
      }
    ]
  },
  {
    room_id: 473,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(66,71)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 494
      },
      {
        direction: "w",
        next_room_id: 424
      }
    ]
  },
  {
    room_id: 474,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(51,69)",
    elevation: 0,
    terrain: "CAVE",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 418
      }
    ]
  },
  {
    room_id: 475,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(64,48)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 371
      },
      {
        direction: "s",
        next_room_id: 484
      }
    ]
  },
  {
    room_id: 476,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(72,61)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 440
      }
    ]
  },
  {
    room_id: 477,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(72,55)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 483
      },
      {
        direction: "w",
        next_room_id: 388
      }
    ]
  },
  {
    room_id: 478,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(51,53)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 351
      }
    ]
  },
  {
    room_id: 479,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(68,63)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "w",
        next_room_id: 205
      }
    ]
  },
  {
    room_id: 480,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(63,47)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 373
      }
    ]
  },
  {
    room_id: 481,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(58,73)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "s",
        next_room_id: 404
      }
    ]
  },
  {
    room_id: 482,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(55,48)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 393
      }
    ]
  },
  {
    room_id: 483,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(73,55)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "w",
        next_room_id: 477
      }
    ]
  },
  {
    room_id: 484,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(64,47)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 475
      }
    ]
  },
  {
    room_id: 485,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(69,50)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "w",
        next_room_id: 352
      }
    ]
  },
  {
    room_id: 486,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(69,67)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 466
      }
    ]
  },
  {
    room_id: 487,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(59,47)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 318
      },
      {
        direction: "s",
        next_room_id: 489
      }
    ]
  },
  {
    room_id: 488,
    title: "A Dark Cave",
    description: "You are standing in a dark cave.",
    coordinates: "(52,65)",
    elevation: 0,
    terrain: "CAVE",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 412
      }
    ]
  },
  {
    room_id: 489,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(59,46)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "n",
        next_room_id: 487
      }
    ]
  },
  {
    room_id: 490,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(51,54)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 444
      },
      {
        direction: "w",
        next_room_id: 493
      }
    ]
  },
  {
    room_id: 491,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(52,52)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 351
      }
    ]
  },
  {
    room_id: 492,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(56,48)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 431
      }
    ]
  },
  {
    room_id: 493,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(50,54)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 490
      }
    ]
  },
  {
    room_id: 494,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(67,71)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "w",
        next_room_id: 473
      }
    ]
  },
  {
    room_id: 495,
    title: "The Transmogriphier",
    description:
      'A strange machine stands in this room.  There is a large opening on the top.  A placard reads, "Test your luck!  One item and one Lambdacoin!"',
    coordinates: "(50,58)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "e",
        next_room_id: 383
      }
    ]
  },
  {
    room_id: 496,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(66,48)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "n",
        next_room_id: 407
      }
    ]
  },
  {
    room_id: 497,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(50,55)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 437
      }
    ]
  },
  {
    room_id: 498,
    title: "A misty room",
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
    coordinates: "(73,56)",
    elevation: 0,
    terrain: "NORMAL",
    items: ["tiny treasure"],
    exits: [
      {
        direction: "w",
        next_room_id: 465
      }
    ]
  },
  {
    room_id: 499,
    title: "Glasowyn's Grave",
    description:
      "You see a moss-topped gravestone which reads: 'Here lies Glasowyn of Web17/Labs12/CS18, who was crushed under the weight of her own gold.' There doesn't seem to be any gold around, but marks in the dirt suggest that someone has knelt there, perhaps in prayer.",
    coordinates: "(51,67)",
    elevation: 0,
    terrain: "NORMAL",
    items: [],
    exits: [
      {
        direction: "e",
        next_room_id: 456
      }
    ]
  }
];

let newMap = {};
map.forEach(room => {
  let roomId = parseInt(room.room_id);
  let coordinates = room.coordinates.split(",");
  let xCoordinate = parseInt(coordinates[0].slice(-2));
  let yCoordinate = parseInt(coordinates[1].slice(0, 2));
  let roomInfo = {
    room_id: room.room_id,
    title: room.title,
    description: room.description,
    coordinates: [xCoordinate, yCoordinate],
    elevation: room.elevation,
    terrain: room.terrain,
    items: room.items
  };
  let roomExits = room.exits;
  let item = {
    roomInfo,
    roomExits
  };
  newMap[roomId] = item;
});

export default newMap;

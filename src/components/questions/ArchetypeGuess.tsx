import React, { useState } from "react";

const AttributeGuess = () => {
	const archetypes = [
		{
			id: 1,
			name: "\"C\"",
		},
		{
			id: 2,
			name: "-Eyes Dragon",
		},
		{
			id: 3,
			name: "@Ignister",
		},
		{
			id: 4,
			name: "A.I.",
		},
		{
			id: 5,
			name: "ABC",
		},
		{
			id: 6,
			name: "Abyss Actor",
		},
		{
			id: 7,
			name: "Abyss Script",
		},
		{
			id: 9,
			name: "Adamancipator",
		},
		{
			id: 10,
			name: "Advanced Crystal Beast",
		},
		{
			id: 11,
			name: "Adventurer Token",
		},
		{
			id: 12,
			name: "Aesir",
		},
		{
			id: 13,
			name: "Aether",
		},
		{
			id: 14,
			name: "Albaz Dragon",
		},
		{
			id: 15,
			name: "Alien",
		},
		{
			id: 16,
			name: "Alligator",
		},
		{
			id: 17,
			name: "Allure Queen",
		},
		{
			id: 18,
			name: "Ally of Justice",
		},
		{
			id: 19,
			name: "Altergeist",
		},
		{
			id: 20,
			name: "Amazement",
		},
		{
			id: 21,
			name: "Amazoness",
		},
		{
			id: 22,
			name: "Amorphage",
		},
		{
			id: 23,
			name: "Ancient Gear",
		},
		{
			id: 24,
			name: "Ancient Warriors",
		},
		{
			id: 25,
			name: "Anti",
		},
		{
			id: 26,
			name: "Apoqliphort",
		},
		{
			id: 27,
			name: "Appliancer",
		},
		{
			id: 28,
			name: "Aquaactress",
		},
		{
			id: 29,
			name: "Aquamirror",
		},
		{
			id: 30,
			name: "Arcana Force",
		},
		{
			id: 31,
			name: "Archfiend",
		},
		{
			id: 32,
			name: "Armed Dragon",
		},
		{
			id: 33,
			name: "Aroma",
		},
		{
			id: 34,
			name: "Artifact",
		},
		{
			id: 35,
			name: "Assault Mode",
		},
		{
			id: 36,
			name: "Atlantean",
		},
		{
			id: 37,
			name: "Attraction",
		},
		{
			id: 38,
			name: "B.E.S.",
		},
		{
			id: 39,
			name: "Bamboo Sword",
		},
		{
			id: 40,
			name: "Barbaros",
		},
		{
			id: 41,
			name: "Barian's",
		},
		{
			id: 42,
			name: "Batteryman",
		},
		{
			id: 43,
			name: "Battleguard",
		},
		{
			id: 44,
			name: "Battlewasp",
		},
		{
			id: 45,
			name: "Battlin' Boxer",
		},
		{
			id: 46,
			name: "Beetrooper",
		},
		{
			id: 47,
			name: "Black Luster Soldier",
		},
		{
			id: 48,
			name: "Blackwing",
		},
		{
			id: 49,
			name: "Blaze Accelerator",
		},
		{
			id: 50,
			name: "Blue-Eyes",
		},
		{
			id: 51,
			name: "Bonding",
		},
		{
			id: 52,
			name: "Book of",
		},
		{
			id: 53,
			name: "Boot-Up",
		},
		{
			id: 54,
			name: "Borrel",
		},
		{
			id: 55,
			name: "Bounzer",
		},
		{
			id: 56,
			name: "Branded",
		},
		{
			id: 57,
			name: "Bridge",
		},
		{
			id: 58,
			name: "Bugroth",
		},
		{
			id: 59,
			name: "Bujin",
		},
		{
			id: 60,
			name: "Burning Abyss",
		},
		{
			id: 61,
			name: "Butterfly",
		},
		{
			id: 62,
			name: "Butterspy",
		},
		{
			id: 63,
			name: "Bystial",
		},
		{
			id: 64,
			name: "Cataclysmic",
		},
		{
			id: 65,
			name: "Celtic Guard",
		},
		{
			id: 66,
			name: "Chaos",
		},
		{
			id: 67,
			name: "Chaos Phantom",
		},
		{
			id: 68,
			name: "Charmer",
		},
		{
			id: 69,
			name: "Chemicritter",
		},
		{
			id: 70,
			name: "Chronomaly",
		},
		{
			id: 71,
			name: "Chrysalis",
		},
		{
			id: 72,
			name: "Cipher",
		},
		{
			id: 73,
			name: "Clear Wing",
		},
		{
			id: 74,
			name: "Cloudian",
		},
		{
			id: 75,
			name: "Code Talker",
		},
		{
			id: 76,
			name: "Codebreaker",
		},
		{
			id: 77,
			name: "Constellar",
		},
		{
			id: 78,
			name: "Contact",
		},
		{
			id: 79,
			name: "Crusadia",
		},
		{
			id: 80,
			name: "Crystal",
		},
		{
			id: 81,
			name: "Crystal Beast",
		},
		{
			id: 82,
			name: "Crystron",
		},
		{
			id: 83,
			name: "Cubic",
		},
		{
			id: 84,
			name: "Cupid",
		},
		{
			id: 85,
			name: "CXyz",
		},
		{
			id: 86,
			name: "Cyber",
		},
		{
			id: 87,
			name: "Cyber Angel",
		},
		{
			id: 88,
			name: "Cyber Dragon",
		},
		{
			id: 89,
			name: "Cyberdark ",
		},
		{
			id: 90,
			name: "Cynet",
		},
		{
			id: 91,
			name: "D.D.",
		},
		{
			id: 92,
			name: "D/D",
		},
		{
			id: 93,
			name: "D/D/D",
		},
		{
			id: 94,
			name: "Danger!",
		},
		{
			id: 95,
			name: "Dark Contract",
		},
		{
			id: 96,
			name: "Dark Magician",
		},
		{
			id: 97,
			name: "Dark Scorpion",
		},
		{
			id: 98,
			name: "Dark World",
		},
		{
			id: 99,
			name: "Darklord",
		},
		{
			id: 100,
			name: "Deep Sea",
		},
		{
			id: 101,
			name: "Demise",
		},
		{
			id: 102,
			name: "Deskbot",
		},
		{
			id: 103,
			name: "Despia",
		},
		{
			id: 104,
			name: "Destiny HERO",
		},
		{
			id: 105,
			name: "Destruction Sword",
		},
		{
			id: 106,
			name: "Dice",
		},
		{
			id: 107,
			name: "Digital Bug",
		},
		{
			id: 108,
			name: "Dinomist",
		},
		{
			id: 109,
			name: "Dinomorphia",
		},
		{
			id: 110,
			name: "Dinowrestler",
		},
		{
			id: 111,
			name: "Divine Dragon",
		},
		{
			id: 112,
			name: "Djinn",
		},
		{
			id: 113,
			name: "Dododo",
		},
		{
			id: 114,
			name: "Dogmatika",
		},
		{
			id: 115,
			name: "Doll",
		},
		{
			id: 116,
			name: "Doodle Beast",
		},
		{
			id: 117,
			name: "Doodlebook",
		},
		{
			id: 118,
			name: "Doriado",
		},
		{
			id: 119,
			name: "Dracoslayer",
		},
		{
			id: 120,
			name: "Dracoverlord",
		},
		{
			id: 121,
			name: "Dragonmaid",
		},
		{
			id: 122,
			name: "Dragunity",
		},
		{
			id: 123,
			name: "Dream Mirror",
		},
		{
			id: 124,
			name: "Drytron",
		},
		{
			id: 125,
			name: "Dual Avatar",
		},
		{
			id: 126,
			name: "Duston",
		},
		{
			id: 127,
			name: "Earthbound",
		},
		{
			id: 128,
			name: "Edge Imp",
		},
		{
			id: 129,
			name: "Egyptian God",
		},
		{
			id: 130,
			name: "Eldlich",
		},
		{
			id: 131,
			name: "Elemental HERO",
		},
		{
			id: 132,
			name: "Elemental Lord",
		},
		{
			id: 133,
			name: "Elementsaber",
		},
		{
			id: 134,
			name: "Empowered Warrior",
		},
		{
			id: 135,
			name: "Endymion",
		},
		{
			id: 136,
			name: "Evil Eye",
		},
		{
			id: 137,
			name: "Evil HERO",
		},
		{
			id: 138,
			name: "Evil★Twin",
		},
		{
			id: 139,
			name: "Evolsaur",
		},
		{
			id: 140,
			name: "Evoltile",
		},
		{
			id: 141,
			name: "Evolzar",
		},
		{
			id: 142,
			name: "Exchange of the Spirit",
		},
		{
			id: 143,
			name: "Exodia",
		},
		{
			id: 144,
			name: "Exosister",
		},
		{
			id: 145,
			name: "Infinitrack",
		},
		{
			id: 146,
			name: "Eyes Restrict",
		},
		{
			id: 147,
			name: "F.A.",
		},
		{
			id: 148,
			name: "Fabled",
		},
		{
			id: 149,
			name: "Fairy",
		},
		{
			id: 150,
			name: "Fire Formation",
		},
		{
			id: 151,
			name: "Fire King",
		},
		{
			id: 152,
			name: "Firewall",
		},
		{
			id: 153,
			name: "Fishborg",
		},
		{
			id: 154,
			name: "Flamvell",
		},
		{
			id: 155,
			name: "Fleur",
		},
		{
			id: 156,
			name: "Floowandereeze",
		},
		{
			id: 157,
			name: "Flower Cardian",
		},
		{
			id: 158,
			name: "Fluffal",
		},
		{
			id: 159,
			name: "Forbidden",
		},
		{
			id: 160,
			name: "Fortune Fairy",
		},
		{
			id: 161,
			name: "Fortune Lady",
		},
		{
			id: 162,
			name: "Fossil",
		},
		{
			id: 163,
			name: "Frightfur",
		},
		{
			id: 164,
			name: "Frog",
		},
		{
			id: 165,
			name: "From the Underworld",
		},
		{
			id: 166,
			name: "Fur Hire",
		},
		{
			id: 167,
			name: "G Golem",
		},
		{
			id: 168,
			name: "Gadget",
		},
		{
			id: 169,
			name: "Gagaga",
		},
		{
			id: 170,
			name: "Gaia The Fierce Knight",
		},
		{
			id: 171,
			name: "Galaxy",
		},
		{
			id: 172,
			name: "Galaxy-Eyes",
		},
		{
			id: 173,
			name: "Gandora",
		},
		{
			id: 174,
			name: "Geargia",
		},
		{
			id: 175,
			name: "Gem-",
		},
		{
			id: 176,
			name: "Generaider",
		},
		{
			id: 177,
			name: "Genex",
		},
		{
			id: 178,
			name: "Ghostrick",
		},
		{
			id: 179,
			name: "Ghoti",
		},
		{
			id: 180,
			name: "Gimmick Puppet",
		},
		{
			id: 181,
			name: "Gishki",
		},
		{
			id: 182,
			name: "Gizmek",
		},
		{
			id: 183,
			name: "Glacial Beast",
		},
		{
			id: 184,
			name: "Gladiator Beast",
		},
		{
			id: 185,
			name: "Gogogo",
		},
		{
			id: 186,
			name: "Golden Castle of Stromberg",
		},
		{
			id: 187,
			name: "Golden Land",
		},
		{
			id: 188,
			name: "Gorgonic",
		},
		{
			id: 189,
			name: "Gouki",
		},
		{
			id: 190,
			name: "Gravekeeper's",
		},
		{
			id: 191,
			name: "Graydle",
		},
		{
			id: 192,
			name: "Greed",
		},
		{
			id: 193,
			name: "Grepher",
		},
		{
			id: 194,
			name: "Guardian",
		},
		{
			id: 195,
			name: "Guardragon",
		},
		{
			id: 196,
			name: "Gunkan",
		},
		{
			id: 197,
			name: "Gusto",
		},
		{
			id: 198,
			name: "Harpie",
		},
		{
			id: 199,
			name: "Hazy",
		},
		{
			id: 200,
			name: "Hellfire",
		},
		{
			id: 201,
			name: "Herald",
		},
		{
			id: 202,
			name: "Heraldic",
		},
		{
			id: 203,
			name: "Heraldry",
		},
		{
			id: 204,
			name: "HERO",
		},
		{
			id: 205,
			name: "Heroic",
		},
		{
			id: 206,
			name: "Hi-Speedroid",
		},
		{
			id: 207,
			name: "Hieratic",
		},
		{
			id: 208,
			name: "Hole",
		},
		{
			id: 209,
			name: "Holy Knight",
		},
		{
			id: 210,
			name: "Horus the Black Flame Dragon",
		},
		{
			id: 211,
			name: "Hyperion",
		},
		{
			id: 212,
			name: "Ice Barrier",
		},
		{
			id: 213,
			name: "Icejade",
		},
		{
			id: 214,
			name: "Igknight",
		},
		{
			id: 215,
			name: "Impcantation",
		},
		{
			id: 216,
			name: "Infernity",
		},
		{
			id: 217,
			name: "Infernoble Knight",
		},
		{
			id: 218,
			name: "Infernoid",
		},
		{
			id: 219,
			name: "Infestation",
		},
		{
			id: 220,
			name: "Infinitrack",
		},
		{
			id: 221,
			name: "Invoked",
		},
		{
			id: 222,
			name: "Inzektor",
		},
		{
			id: 223,
			name: "Iron Chain",
		},
		{
			id: 224,
			name: "Jar",
		},
		{
			id: 225,
			name: "Jester",
		},
		{
			id: 226,
			name: "Jinzo",
		},
		{
			id: 227,
			name: "Junk",
		},
		{
			id: 228,
			name: "Jurrac",
		},
		{
			id: 229,
			name: "Kaiju",
		},
		{
			id: 230,
			name: "Kairyu-Shin",
		},
		{
			id: 231,
			name: "Karakuri",
		},
		{
			id: 232,
			name: "Kashtira",
		},
		{
			id: 233,
			name: "Knight",
		},
		{
			id: 234,
			name: "Knightmare",
		},
		{
			id: 235,
			name: "Koa'ki Meiru",
		},
		{
			id: 236,
			name: "Koala",
		},
		{
			id: 237,
			name: "Kozmo",
		},
		{
			id: 238,
			name: "Krawler",
		},
		{
			id: 239,
			name: "Kuriboh",
		},
		{
			id: 240,
			name: "Labrynth",
		},
		{
			id: 241,
			name: "Lady of Lament",
		},
		{
			id: 242,
			name: "Laval",
		},
		{
			id: 243,
			name: "Legendary Knight",
		},
		{
			id: 244,
			name: "Libromancer",
		},
		{
			id: 245,
			name: "Lightsworn",
		},
		{
			id: 246,
			name: "Lil-la",
		},
		{
			id: 247,
			name: "Live★Twin",
		},
		{
			id: 248,
			name: "Lswarm",
		},
		{
			id: 249,
			name: "Lunalight",
		},
		{
			id: 250,
			name: "Lyrilusc",
		},
		{
			id: 251,
			name: "Machina",
		},
		{
			id: 252,
			name: "Madolche",
		},
		{
			id: 253,
			name: "Madoor",
		},
		{
			id: 254,
			name: "Magical Musket",
		},
		{
			id: 255,
			name: "Magician",
		},
		{
			id: 256,
			name: "Magician Girl",
		},
		{
			id: 257,
			name: "Magikey",
		},
		{
			id: 258,
			name: "Magistus",
		},
		{
			id: 259,
			name: "Magnet Warrior",
		},
		{
			id: 260,
			name: "Majespecter",
		},
		{
			id: 261,
			name: "Majestic",
		},
		{
			id: 262,
			name: "Maju",
		},
		{
			id: 263,
			name: "Malefic",
		},
		{
			id: 264,
			name: "Malicevorous",
		},
		{
			id: 265,
			name: "Man-Eater Bug",
		},
		{
			id: 266,
			name: "Manadome",
		},
		{
			id: 267,
			name: "Marincess",
		},
		{
			id: 268,
			name: "Martial Art Spirit",
		},
		{
			id: 269,
			name: "Mask",
		},
		{
			id: 270,
			name: "Masked HERO",
		},
		{
			id: 271,
			name: "Materiactor",
		},
		{
			id: 272,
			name: "Mathmech",
		},
		{
			id: 273,
			name: "Mayakashi\n Shiranui",
		},
		{
			id: 274,
			name: "Mayakashi",
		},
		{
			id: 275,
			name: "Mecha Phantom Beast",
		},
		{
			id: 276,
			name: "Megalith",
		},
		{
			id: 277,
			name: "Mekk-Knight",
		},
		{
			id: 278,
			name: "Meklord",
		},
		{
			id: 279,
			name: "Melffy",
		},
		{
			id: 280,
			name: "Melodious",
		},
		{
			id: 281,
			name: "Mermail",
		},
		{
			id: 282,
			name: "Metalfoes",
		},
		{
			id: 283,
			name: "Metaphys",
		},
		{
			id: 284,
			name: "Mikanko",
		},
		{
			id: 285,
			name: "Mist Valley",
		},
		{
			id: 286,
			name: "Mokey Mokey",
		},
		{
			id: 287,
			name: "Monarch",
		},
		{
			id: 288,
			name: "Morphtronic",
		},
		{
			id: 290,
			name: "Mystical Beast of the Forest",
		},
		{
			id: 291,
			name: "Myutant",
		},
		{
			id: 292,
			name: "Naturia",
		},
		{
			id: 293,
			name: "Nekroz",
		},
		{
			id: 294,
			name: "Nemeses",
		},
		{
			id: 295,
			name: "Neo Space",
		},
		{
			id: 296,
			name: "Neo-Spacian",
		},
		{
			id: 297,
			name: "Neos",
		},
		{
			id: 298,
			name: "Nephthys",
		},
		{
			id: 299,
			name: "Nimble",
		},
		{
			id: 300,
			name: "Ninja",
		},
		{
			id: 301,
			name: "Ninjitsu Art",
		},
		{
			id: 302,
			name: "Noble Knight",
		},
		{
			id: 303,
			name: "Nordic",
		},
		{
			id: 304,
			name: "Number",
		},
		{
			id: 305,
			name: "Numeron",
		},
		{
			id: 306,
			name: "Odd-Eyes",
		},
		{
			id: 307,
			name: "Ogdoadic",
		},
		{
			id: 308,
			name: "Ojama",
		},
		{
			id: 309,
			name: "Onomat",
		},
		{
			id: 310,
			name: "Orcust",
		},
		{
			id: 311,
			name: "Overlay",
		},
		{
			id: 312,
			name: "P.U.N.K.",
		},
		{
			id: 313,
			name: "Paladins of Dragons",
		},
		{
			id: 314,
			name: "Paleozoic",
		},
		{
			id: 315,
			name: "Parasite",
		},
		{
			id: 316,
			name: "Parshath",
		},
		{
			id: 317,
			name: "Pendulum",
		},
		{
			id: 318,
			name: "Pendulum Dragon",
		},
		{
			id: 319,
			name: "Penguin",
		},
		{
			id: 320,
			name: "Performage",
		},
		{
			id: 321,
			name: "Performapal",
		},
		{
			id: 322,
			name: "Phantasm Spiral",
		},
		{
			id: 323,
			name: "Phantom Knights",
		},
		{
			id: 324,
			name: "Photon",
		},
		{
			id: 325,
			name: "Plunder Patroll",
		},
		{
			id: 326,
			name: "Possessed",
		},
		{
			id: 327,
			name: "Potan",
		},
		{
			id: 328,
			name: "Power Tool",
		},
		{
			id: 329,
			name: "Prank-Kids",
		},
		{
			id: 330,
			name: "Predaplant",
		},
		{
			id: 331,
			name: "Prediction Princess",
		},
		{
			id: 332,
			name: "Priestess",
		},
		{
			id: 333,
			name: "PSY-Frame",
		},
		{
			id: 334,
			name: "Puppet",
		},
		{
			id: 335,
			name: "Purrely",
		},
		{
			id: 336,
			name: "Qli",
		},
		{
			id: 337,
			name: "Raidraptor",
		},
		{
			id: 338,
			name: "Rank-Up-Magic",
		},
		{
			id: 339,
			name: "Red-Eyes",
		},
		{
			id: 340,
			name: "Reptilianne",
		},
		{
			id: 341,
			name: "Rescue-ACE",
		},
		{
			id: 342,
			name: "Resonator",
		},
		{
			id: 343,
			name: "Rikka",
		},
		{
			id: 344,
			name: "Ritual Beast",
		},
		{
			id: 345,
			name: "Roid",
		},
		{
			id: 346,
			name: "Rokket",
		},
		{
			id: 347,
			name: "Roland",
		},
		{
			id: 348,
			name: "Rose",
		},
		{
			id: 349,
			name: "Rose Dragon",
		},
		{
			id: 350,
			name: "Runick",
		},
		{
			id: 351,
			name: "S-Force",
		},
		{
			id: 352,
			name: "Sacred Beast",
		},
		{
			id: 353,
			name: "Salamangreat",
		},
		{
			id: 354,
			name: "Scareclaw",
		},
		{
			id: 355,
			name: "Scrap",
		},
		{
			id: 356,
			name: "Secret Six Samurai",
		},
		{
			id: 357,
			name: "Seven Emperors",
		},
		{
			id: 358,
			name: "Shaddoll",
		},
		{
			id: 359,
			name: "Shark",
		},
		{
			id: 360,
			name: "Shinobird",
		},
		{
			id: 361,
			name: "Shiranui",
		},
		{
			id: 362,
			name: "Silent Magician",
		},
		{
			id: 363,
			name: "Silent Swordsman",
		},
		{
			id: 364,
			name: "Simorgh",
		},
		{
			id: 365,
			name: "Six Samurai",
		},
		{
			id: 366,
			name: "Skull Servant",
		},
		{
			id: 367,
			name: "Sky Scourge",
		},
		{
			id: 368,
			name: "Sky Striker",
		},
		{
			id: 369,
			name: "Slime",
		},
		{
			id: 370,
			name: "Solemn",
		},
		{
			id: 371,
			name: "Solfachord",
		},
		{
			id: 372,
			name: "Speedroid",
		},
		{
			id: 373,
			name: "Spellbook",
		},
		{
			id: 374,
			name: "Sphinx",
		},
		{
			id: 375,
			name: "Spider",
		},
		{
			id: 376,
			name: "Spirit Message",
		},
		{
			id: 377,
			name: "Spiritual Art",
		},
		{
			id: 378,
			name: "Spright",
		},
		{
			id: 379,
			name: "Springans",
		},
		{
			id: 380,
			name: "SPYRAL",
		},
		{
			id: 381,
			name: "Star",
		},
		{
			id: 382,
			name: "Star Seraph",
		},
		{
			id: 383,
			name: "Stardust",
		},
		{
			id: 384,
			name: "Starliege",
		},
		{
			id: 385,
			name: "Starry Knight",
		},
		{
			id: 386,
			name: "Stealth Kragen",
		},
		{
			id: 387,
			name: "Steelswarm",
		},
		{
			id: 388,
			name: "Stellarknight",
		},
		{
			id: 389,
			name: "Subterror",
		},
		{
			id: 390,
			name: "Sunavalon",
		},
		{
			id: 391,
			name: "Sunseed",
		},
		{
			id: 392,
			name: "Sunvine",
		},
		{
			id: 393,
			name: "Super Defense Robot",
		},
		{
			id: 394,
			name: "Super Quant",
		},
		{
			id: 395,
			name: "Superheavy",
		},
		{
			id: 396,
			name: "Superheavy Samurai",
		},
		{
			id: 397,
			name: "Supreme King",
		},
		{
			id: 398,
			name: "Swordsoul",
		},
		{
			id: 399,
			name: "Sylvan",
		},
		{
			id: 400,
			name: "Symphonic",
		},
		{
			id: 401,
			name: "Symphonic Warior",
		},
		{
			id: 402,
			name: "Synchro",
		},
		{
			id: 403,
			name: "Synchron",
		},
		{
			id: 404,
			name: "T.G.",
		},
		{
			id: 405,
			name: "Tearlaments",
		},
		{
			id: 406,
			name: "Tellarknight",
		},
		{
			id: 407,
			name: "Tenyi",
		},
		{
			id: 408,
			name: "The Agent",
		},
		{
			id: 409,
			name: "The Sanctuary in the Sky",
		},
		{
			id: 410,
			name: "The Weather",
		},
		{
			id: 411,
			name: "Therion",
		},
		{
			id: 412,
			name: "Thunder Dragon",
		},
		{
			id: 413,
			name: "Time Thief",
		},
		{
			id: 414,
			name: "Timelord",
		},
		{
			id: 415,
			name: "Tindangle",
		},
		{
			id: 416,
			name: "Toon",
		},
		{
			id: 417,
			name: "Train",
		},
		{
			id: 418,
			name: "Trap Hole",
		},
		{
			id: 419,
			name: "Trap Monster",
		},
		{
			id: 420,
			name: "Traptrix",
		},
		{
			id: 421,
			name: "Tri-Brigade",
		},
		{
			id: 422,
			name: "Triamid",
		},
		{
			id: 423,
			name: "Trickstar",
		},
		{
			id: 424,
			name: "True Draco",
		},
		{
			id: 425,
			name: "U.A.",
		},
		{
			id: 426,
			name: "Umbral Horror",
		},
		{
			id: 427,
			name: "Umi",
		},
		{
			id: 428,
			name: "Unchained",
		},
		{
			id: 429,
			name: "Ursarctic",
		},
		{
			id: 430,
			name: "Utopia",
		},
		{
			id: 431,
			name: "Utopic",
		},
		{
			id: 432,
			name: "Valkyrie",
		},
		{
			id: 433,
			name: "Vampire",
		},
		{
			id: 434,
			name: "Vassal",
		},
		{
			id: 435,
			name: "Vaylantz",
		},
		{
			id: 436,
			name: "Vendread",
		},
		{
			id: 437,
			name: "Venom",
		},
		{
			id: 438,
			name: "Vernusylph",
		},
		{
			id: 439,
			name: "Virtual World",
		},
		{
			id: 440,
			name: "Vision HERO",
		},
		{
			id: 441,
			name: "Void",
		},
		{
			id: 442,
			name: "Volcanic",
		},
		{
			id: 443,
			name: "Vylon",
		},
		{
			id: 444,
			name: "War Rock",
		},
		{
			id: 445,
			name: "Watt",
		},
		{
			id: 446,
			name: "White",
		},
		{
			id: 447,
			name: "Wicked God",
		},
		{
			id: 448,
			name: "Wind-Up",
		},
		{
			id: 449,
			name: "Windwitch",
		},
		{
			id: 450,
			name: "Witchcrafter",
		},
		{
			id: 451,
			name: "World Chalice",
		},
		{
			id: 452,
			name: "World Legacy",
		},
		{
			id: 453,
			name: "Worm",
		},
		{
			id: 454,
			name: "X-Saber",
		},
		{
			id: 455,
			name: "Xyz",
		},
		{
			id: 456,
			name: "Yang Zing",
		},
		{
			id: 457,
			name: "Yosenju",
		},
		{
			id: 458,
			name: "Yubel",
		},
		{
			id: 459,
			name: "Zefra",
		},
		{
			id: 460,
			name: "ZEXAL",
		},
		{
			id: 461,
			name: "Zoodiac",
		},
		{
			id: 462,
			name: "Part of an Archetype",
		},
	];

	const card = JSON.parse(window.localStorage.getItem("card") || "{}");

	const [submittedValue, setSubmittedValue] = useState("");

	const addToQuestionsList = () => {
		let existing = localStorage.getItem("questionsList");
		let currentQuestions = existing !== null ? JSON.parse(existing) : [];
		if (
			card.archetype !== undefined &&
			card.archetype.includes(submittedValue)
		) {
			currentQuestions.push(
				`This card is a part of the ${submittedValue} archetype`
			);
			localStorage.setItem("questionsList", JSON.stringify(currentQuestions));
			alert(`This card is a part of the ${submittedValue} archetype`);
		} else if (card.archetype !== undefined) {
			currentQuestions.push(
				`This card is not a part of the ${submittedValue} archetype`
			);
			localStorage.setItem("questionsList", JSON.stringify(currentQuestions));
			alert(`This card is NOT a part of the ${submittedValue} archetype`);
		} else if (
			submittedValue === "Part of an Archetype" &&
			card.archetype !== undefined
		) {
			currentQuestions.push(`This card is a part of an archetype`);
			localStorage.setItem("questionsList", JSON.stringify(currentQuestions));
			alert(`This card is a part of an archetype`);
		} else if (
			submittedValue === "Part of an Archetype" &&
			card.archetype === undefined
		) {
			currentQuestions.push(`This card is not a part of an archetype`);
			localStorage.setItem("questionsList", JSON.stringify(currentQuestions));
			alert(`This card is NOT a part of an archetype`);
		}
	};

	const qualityLog = (event: any) => {
		setSubmittedValue(event.target.value);
	};

	const qualityCheck = (event: any) => {
		if (card.archetype === undefined) {
			addToQuestionsList();
		} else {
			if (card.archetype.includes(submittedValue)) {
				let existing = localStorage.getItem("createdCard");
				existing = existing ? JSON.parse(existing) : {};
				if (existing != null) {
					existing["archetype"] = `${submittedValue}`;
				}
				localStorage.setItem("createdCard", JSON.stringify(existing));
				addToQuestionsList();
			} else {
				addToQuestionsList();
			}
		}
	};

	return (
		<>
			<input
				list="qualityExamples"
				id="qualityChoice"
				name="qualityChoice"
				onChange={qualityLog}
			></input>
			<datalist id="qualityExamples">
				{archetypes &&
					archetypes.length > 0 &&
					archetypes.map((archetype) => {
						return (
							<option key={archetype.id} value={archetype.name}>
								{archetype?.name}
							</option>
						);
					})}
			</datalist>
			<input onClick={qualityCheck} type="submit" value="Guess" />
		</>
	);
};

export default AttributeGuess;

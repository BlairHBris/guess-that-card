import React, { useState } from "react";

const AttributeGuess = () => {
	const archetypes = [
		{
			id: 1,
			name: "Albaz",
		},
		{
			id: 2,
			name: "Abyss Actor",
		},
		{
			id: 3,
			name: "Adamancipator",
		},
		{
			id: 4,
			name: "Adventurer Token",
		},
		{
			id: 5,
			name: "Aesir",
		},
		{
			id: 6,
			name: "Agent",
		},
		{
			id: 7,
			name: "Alien",
		},
		{
			id: 9,
			name: "Ally of Justice",
		},
		{
			id: 10,
			name: "Altergeist",
		},
		{
			id: 11,
			name: "Amazemment",
		},
		{
			id: 12,
			name: "Amazoness",
		},
		{
			id: 13,
			name: "Amorphage",
		},
		{
			id: 14,
			name: "Ancient Gear",
		},
		{
			id: 15,
			name: "Ancient Warriors",
		},
		{
			id: 16,
			name: "Appliancer",
		},
		{
			id: 17,
			name: "Aquaactress",
		},
		{
			id: 18,
			name: "Arcana Force",
		},
		{
			id: 19,
			name: "Archfiend",
		},
		{
			id: 20,
			name: "Aromage",
		},
		{
			id: 21,
			name: "Assault Mode",
		},
		{
			id: 22,
			name: "Atlantean",
		},
		{
			id: 23,
			name: "A-to-Z",
		},
		{
			id: 24,
			name: "Batteryman",
		},
		{
			id: 25,
			name: "Battlewasp",
		},
		{
			id: 26,
			name: "Battlin Boxer",
		},
		{
			id: 27,
			name: "Beetrooper",
		},
		{
			id: 28,
			name: "Black Luster",
		},
		{
			id: 29,
			name: "Blackwing",
		},
		{
			id: 30,
			name: "Blue-Eyes",
		},
		{
			id: 31,
			name: "Bounzer",
		},
		{
			id: 32,
			name: "Bujin",
		},
		{
			id: 33,
			name: "Burning Abyss",
		},
		{
			id: 34,
			name: "Buster Blader",
		},
		{
			id: 35,
			name: "Butterspy",
		},
		{
			id: 36,
			name: "Bystial",
		},
		{
			id: 37,
			name: "Chaos",
		},
		{
			id: 38,
			name: "Chemicritter",
		},
		{
			id: 39,
			name: "Chronomaly",
		},
		{
			id: 40,
			name: "Chrysalis",
		},
		{
			id: 41,
			name: "Cipher",
		},
		{
			id: 42,
			name: "Cloudian",
		},
		{
			id: 43,
			name: "Code Talker",
		},
		{
			id: 44,
			name: "Constellar",
		},
		{
			id: 45,
			name: "Crusadia",
		},
		{
			id: 46,
			name: "Crystal Beast",
		},
		{
			id: 47,
			name: "Crystron",
		},
		{
			id: 48,
			name: "Cubic",
		},
		{
			id: 49,
			name: "Cyber",
		},
		{
			id: 50,
			name: "Cyberdark",
		},
		{
			id: 51,
			name: "Cyber Dragon",
		},
		{
			id: 52,
			name: "D/D/",
		},
		{
			id: 53,
			name: "Danger!",
		},
		{
			id: 54,
			name: "Darklord",
		},
		{
			id: 55,
			name: "Dark Magician",
		},
		{
			id: 56,
			name: "Dark Scorpion",
		},
		{
			id: 57,
			name: "Dark World",
		},
		{
			id: 58,
			name: "D.D.",
		},
		{
			id: 59,
			name: "Deep Sea",
		},
		{
			id: 60,
			name: "Deskbot",
		},
		{
			id: 61,
			name: "Despia",
		},
		{
			id: 62,
			name: "Destiny Hero",
		},
		{
			id: 63,
			name: "Digital Bug",
		},
		{
			id: 64,
			name: "Dinomist",
		},
		{
			id: 65,
			name: "Dinomorphia",
		},
		{
			id: 66,
			name: "Dinowrestler",
		},
		{
			id: 67,
			name: "Dododo",
		},
		{
			id: 68,
			name: "Dogmatika",
		},
		{
			id: 69,
			name: "Doodle Beast",
		},
		{
			id: 70,
			name: "Dracoslayer",
		},
		{
			id: 71,
			name: "Dragon Ruler",
		},
		{
			id: 72,
			name: "Dragonmaid",
		},
		{
			id: 73,
			name: "Dragunity",
		},
		{
			id: 74,
			name: "Dream Mirror",
		},
		{
			id: 75,
			name: "Drytron",
		},
		{
			id: 76,
			name: "Dual Avatar",
		},
		{
			id: 77,
			name: "Duston",
		},
		{
			id: 78,
			name: "Earthbound Immortal",
		},
		{
			id: 79,
			name: "Edge Imp",
		},
		{
			id: 80,
			name: "Edlich",
		},
		{
			id: 81,
			name: "Elemental Hero",
		},
		{
			id: 82,
			name: "Elementsaber",
		},
		{
			id: 83,
			name: "Empowered Warrior",
		},
		{
			id: 84,
			name: "Endymion",
		},
		{
			id: 85,
			name: "Evil Eye",
		},
		{
			id: 86,
			name: "Evil Hero",
		},
		{
			id: 87,
			name: "Evilswarm",
		},
		{
			id: 88,
			name: "Evoltile",
		},
		{
			id: 89,
			name: "Exosister ",
		},
		{
			id: 90,
			name: "Fabled",
		},
		{
			id: 91,
			name: "Face Cards",
		},
		{
			id: 92,
			name: "F.A.",
		},
		{
			id: 93,
			name: "Fairy Tail",
		},
		{
			id: 94,
			name: "Familiar-Possessed",
		},
		{
			id: 95,
			name: "Brotherhood of the Fire Fist",
		},
		{
			id: 96,
			name: "Fire King",
		},
		{
			id: 97,
			name: "Flamvell",
		},
		{
			id: 98,
			name: "Fleur",
		},
		{
			id: 99,
			name: "Floowandereeze",
		},
		{
			id: 100,
			name: "Flower Cardian",
		},
		{
			id: 101,
			name: "Fluffal",
		},
		{
			id: 102,
			name: "Fortune Fairy",
		},
		{
			id: 103,
			name: "Fortune Lady",
		},
		{
			id: 104,
			name: "Fossil Fusion",
		},
		{
			id: 105,
			name: "Frightfur",
		},
		{
			id: 106,
			name: "Frog",
		},
		{
			id: 107,
			name: "Fur Hire",
		},
		{
			id: 108,
			name: "G Golem",
		},
		{
			id: 109,
			name: "Gadget",
		},
		{
			id: 110,
			name: "Gagaga",
		},
		{
			id: 111,
			name: "Gaia",
		},
		{
			id: 112,
			name: "Galaxy",
		},
		{
			id: 113,
			name: "Ganbara",
		},
		{
			id: 114,
			name: "Geargia",
		},
		{
			id: 115,
			name: "Gem-",
		},
		{
			id: 116,
			name: "Generaider",
		},
		{
			id: 117,
			name: "Genex",
		},
		{
			id: 118,
			name: "Ghostrick",
		},
		{
			id: 119,
			name: "Ghoti",
		},
		{
			id: 120,
			name: "Gimmick Puppet",
		},
		{
			id: 121,
			name: "Gishki",
		},
		{
			id: 122,
			name: "Glacial Beast",
		},
		{
			id: 123,
			name: "Gladiator Beast",
		},
		{
			id: 124,
			name: "Goblin",
		},
		{
			id: 125,
			name: "Gogogo",
		},
		{
			id: 126,
			name: "Gorgonic",
		},
		{
			id: 127,
			name: "Gouki",
		},
		{
			id: 128,
			name: "Goyo",
		},
		{
			id: 129,
			name: "Gravekeeper",
		},
		{
			id: 130,
			name: "Graydle",
		},
		{
			id: 131,
			name: "Gunkan",
		},
		{
			id: 132,
			name: "Gusto",
		},
		{
			id: 133,
			name: "Harpie",
		},
		{
			id: 134,
			name: "Hazy Flame",
		},
		{
			id: 135,
			name: "Heraldic Beast",
		},
		{
			id: 136,
			name: "Heroic",
		},
		{
			id: 137,
			name: "Hieratic",
		},
		{
			id: 138,
			name: "Ice Barrier",
		},
		{
			id: 139,
			name: "Icejade",
		},
		{
			id: 140,
			name: "Igknight",
		},
		{
			id: 141,
			name: "Ignister",
		},
		{
			id: 142,
			name: "Impcantation",
		},
		{
			id: 143,
			name: "Infernity",
		},
		{
			id: 144,
			name: "Infernoid",
		},
		{
			id: 145,
			name: "Infinitrack",
		},
		{
			id: 146,
			name: "Invoked",
		},
		{
			id: 147,
			name: "Inzektor",
		},
		{
			id: 148,
			name: "Iron Chain",
		},
		{
			id: 149,
			name: "Junk",
		},
		{
			id: 150,
			name: "Jurrac",
		},
		{
			id: 151,
			name: "Kaiju",
		},
		{
			id: 152,
			name: "Karakuri",
		},
		{
			id: 153,
			name: "Kashtira",
		},
		{
			id: 154,
			name: "Knightmare",
		},
		{
			id: 155,
			name: "Koa'ki Meiru",
		},
		{
			id: 156,
			name: "Kozmo",
		},
		{
			id: 157,
			name: "Krawler",
		},
		{
			id: 158,
			name: "Kuriboh",
		},
		{
			id: 159,
			name: "Labrynth",
		},
		{
			id: 160,
			name: "Laval",
		},
		{
			id: 161,
			name: "Libromancer",
		},
		{
			id: 162,
			name: "Lightray",
		},
		{
			id: 163,
			name: "Lightsworn",
		},
		{
			id: 164,
			name: "Lswarm",
		},
		{
			id: 165,
			name: "Lunalight",
		},
		{
			id: 166,
			name: "Lyrilusc",
		},
		{
			id: 167,
			name: "Machina",
		},
		{
			id: 168,
			name: "Madolche",
		},
		{
			id: 169,
			name: "Magical Musket",
		},
		{
			id: 170,
			name: "Magician",
		},
		{
			id: 171,
			name: "Magikey",
		},
		{
			id: 172,
			name: "Magistus",
		},
		{
			id: 173,
			name: "Majespecter",
		},
		{
			id: 174,
			name: "Malefic",
		},
		{
			id: 175,
			name: "Marincess",
		},
		{
			id: 176,
			name: "Masked HERO",
		},
		{
			id: 177,
			name: "Mathmech",
		},
		{
			id: 178,
			name: "Mayakashi",
		},
		{
			id: 179,
			name: "Mecha Phantom Beast",
		},
		{
			id: 180,
			name: "Megalith",
		},
		{
			id: 181,
			name: "Mekk-Knight",
		},
		{
			id: 182,
			name: "Meklord",
		},
		{
			id: 183,
			name: "Melffy",
		},
		{
			id: 184,
			name: "Mermail",
		},
		{
			id: 185,
			name: "Metalfoes",
		},
		{
			id: 186,
			name: "Metaphys",
		},
		{
			id: 187,
			name: "Mist Valley",
		},
		{
			id: 188,
			name: "Monarch",
		},
		{
			id: 189,
			name: "Morphtronic",
		},
		{
			id: 190,
			name: "Mystical Beast",
		},
		{
			id: 191,
			name: "Mythical Beast",
		},
		{
			id: 192,
			name: "Myutant",
		},
		{
			id: 193,
			name: "Naturia",
		},
		{
			id: 194,
			name: "Nekroz",
		},
		{
			id: 195,
			name: "Neo-Spacian",
		},
		{
			id: 196,
			name: "Neos",
		},
		{
			id: 197,
			name: "Nemeses",
		},
		{
			id: 198,
			name: "Nephthys",
		},
		{
			id: 199,
			name: "Nimble",
		},
		{
			id: 200,
			name: "Ninja",
		},
		{
			id: 201,
			name: "Noble Knight",
		},
		{
			id: 202,
			name: "Nordic",
		},
		{
			id: 203,
			name: "Number",
		},
		{
			id: 204,
			name: "Numeron",
		},
		{
			id: 205,
			name: "Odd-Eyes",
		},
		{
			id: 206,
			name: "Ogdoadic",
		},
		{
			id: 207,
			name: "Orcust",
		},
		{
			id: 208,
			name: "Ojama",
		},
		{
			id: 209,
			name: "P.U.N.K.",
		},
		{
			id: 210,
			name: "Paleozoic",
		},
		{
			id: 211,
			name: "Parshath",
		},
		{
			id: 212,
			name: "Penguin",
		},
		{
			id: 213,
			name: "Performage",
		},
		{
			id: 214,
			name: "Performapal",
		},
		{
			id: 215,
			name: "Phantasm Spiral",
		},
		{
			id: 216,
			name: "Phantom Beast",
		},
		{
			id: 217,
			name: "Photon",
		},
		{
			id: 218,
			name: "Plunder Patroll",
		},
		{
			id: 219,
			name: "Prank-Kids",
		},
		{
			id: 220,
			name: "Predaplant",
		},
		{
			id: 221,
			name: "Prediction Princess",
		},
		{
			id: 222,
			name: "PSY-Framegear",
		},
		{
			id: 223,
			name: "Psychic",
		},
		{
			id: 224,
			name: "Qli",
		},
		{
			id: 225,
			name: "Raidraptor",
		},
		{
			id: 226,
			name: "Red-Eyes",
		},
		{
			id: 227,
			name: "Reptilianne",
		},
		{
			id: 228,
			name: "Resonator",
		},
		{
			id: 229,
			name: "Rikka",
		},
		{
			id: 230,
			name: "Risebell",
		},
		{
			id: 231,
			name: "Ritual Beast",
		},
		{
			id: 232,
			name: "Roid",
		},
		{
			id: 233,
			name: "Rokket",
		},
		{
			id: 234,
			name: "Rose",
		},
		{
			id: 235,
			name: "Runick",
		},
		{
			id: 236,
			name: "S-Force",
		},
		{
			id: 237,
			name: "Salamangreat",
		},
		{
			id: 238,
			name: "Scareclaw",
		},
		{
			id: 239,
			name: "Scrap",
		},
		{
			id: 240,
			name: "Shaddoll",
		},
		{
			id: 241,
			name: "Shark",
		},
		{
			id: 242,
			name: "Shinobird",
		},
		{
			id: 243,
			name: "Simorgh",
		},
		{
			id: 244,
			name: "Shiranui",
		},
		{
			id: 245,
			name: "Silent Magician",
		},
		{
			id: 246,
			name: "Silent Swordsman",
		},
		{
			id: 247,
			name: "Six Samurai",
		},
		{
			id: 248,
			name: "Skull Servant",
		},
		{
			id: 249,
			name: "Sky Striker",
		},
		{
			id: 250,
			name: "Solfachord",
		},
		{
			id: 251,
			name: "Speedroid",
		},
		{
			id: 252,
			name: "Spellbook",
		},
		{
			id: 253,
			name: "Springan",
		},
		{
			id: 254,
			name: "SPYRAL",
		},
		{
			id: 255,
			name: "Spellcaster",
		},
		{
			id: 256,
			name: "Star Sereph",
		},
		{
			id: 257,
			name: "Starry Knight",
		},
		{
			id: 258,
			name: "Steelswarm",
		},
		{
			id: 259,
			name: "Subterror",
		},
		{
			id: 260,
			name: "Sunavalon",
		},
		{
			id: 261,
			name: "Superheavy Samurai",
		},
		{
			id: 262,
			name: "Supreme King",
		},
		{
			id: 263,
			name: "Swordsoul",
		},
		{
			id: 264,
			name: "Sylvan",
		},
		{
			id: 265,
			name: "Symphonic Warrior",
		},
		{
			id: 266,
			name: "Synchron",
		},
		{
			id: 267,
			name: "Tearlaments",
		},
		{
			id: 268,
			name: "Tenyi",
		},
		{
			id: 269,
			name: "T.G.",
		},
		{
			id: 270,
			name: "The Agent",
		},
		{
			id: 271,
			name: "The Phantom Knights",
		},
		{
			id: 272,
			name: "The Weather",
		},
		{
			id: 273,
			name: "Therion",
		},
		{
			id: 274,
			name: "Thunder Dragon",
		},
		{
			id: 275,
			name: "Time Thief",
		},
		{
			id: 276,
			name: "Timelord",
		},
		{
			id: 277,
			name: "Tindangle",
		},
		{
			id: 278,
			name: "Toon",
		},
		{
			id: 279,
			name: "Traptrix",
		},
		{
			id: 280,
			name: "Triamid",
		},
		{
			id: 281,
			name: "Tri-Brigade",
		},
		{
			id: 282,
			name: "Trickstar",
		},
		{
			id: 283,
			name: "True King",
		},
		{
			id: 284,
			name: "Twilightsworn",
		},
		{
			id: 285,
			name: "U.A.",
		},
		{
			id: 286,
			name: "Unchained",
		},
		{
			id: 287,
			name: "Ursarctic",
		},
		{
			id: 288,
			name: "Utopia",
		},
		{
			id: 290,
			name: "Vampire",
		},
		{
			id: 291,
			name: "Vassal",
		},
		{
			id: 292,
			name: "Vaylantz",
		},
		{
			id: 293,
			name: "Vendread",
		},
		{
			id: 294,
			name: "Venom",
		},
		{
			id: 295,
			name: "Virtual World",
		},
		{
			id: 296,
			name: "Vision HERO",
		},
		{
			id: 297,
			name: "Volcanic",
		},
		{
			id: 298,
			name: "Vylon",
		},
		{
			id: 299,
			name: "War Rock",
		},
		{
			id: 300,
			name: "Watt",
		},
		{
			id: 301,
			name: "Wind-up",
		},
		{
			id: 302,
			name: "Windwitch",
		},
		{
			id: 303,
			name: "Witchcrafter",
		},
		{
			id: 304,
			name: "Chemicritter",
		},
		{
			id: 305,
			name: "World Chalice",
		},
		{
			id: 306,
			name: "World Legacy",
		},
		{
			id: 307,
			name: "Worm",
		},
		{
			id: 308,
			name: "Xtra HERO",
		},
		{
			id: 309,
			name: "X-Saber",
		},
		{
			id: 310,
			name: "Yang Zing",
		},
		{
			id: 311,
			name: "Yosenju",
		},
		{
			id: 312,
			name: "Zefra",
		},
		{
			id: 313,
			name: "Zombie",
		},
		{
			id: 314,
			name: "Zoodiac",
		},
		{
			id: 315,
			name: "Zubaba",
		},
		{
			id: 316,
			name: "ZW -",
		},
	];

	const card = JSON.parse(window.localStorage.getItem("card") || "{}");

	const [submittedValue, setSubmittedValue] = useState("");

	const addToQuestionsList = () => {
		let existing = localStorage.getItem("questionsList");
		let currentQuestions = existing !== null ? JSON.parse(existing) : [];
		if ( card.archetype !== undefined && card.archetype.includes(submittedValue)) {
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
		} else {
			currentQuestions.push(`This card is not a part of an archetype`);
			localStorage.setItem("questionsList", JSON.stringify(currentQuestions));
			alert(`This card is NOT a part of an archetype`);

		}
	};

	const qualityLog = (event: any) => {
		setSubmittedValue(event.target.value);
	};

	const qualityCheck = (event: any) => {
		console.log(card.archetype)
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

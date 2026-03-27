const characters = {
    "Lumison": {
        name: 'Lumison',
        pronouns: 'he/him',
        level: 5,
        xp: 0,
        zenit: 20,
        fabula_points: 3,
        attributes: { DEX: 6, INS: 10, MGT: 6, WLP: 10 },
        derived_stats: {
            max_hp: 35, current_hp: 35, crisis_hp: 17,
            max_mp: 60, current_mp: 60,
            def: 7, mdef: 11, init: -1
        },
        traits: {
            identity: 'Proud Lunar Smuggler',
            theme: 'Hope',
            origin: 'Where the Rivers Fork'
        },
        bonds: [
            { name: '', description: '', score: 1 },
            { name: '', description: '', score: 1 },
            { name: '', description: '', score: 1 },
            { name: '', description: '', score: 1 },
            { name: '', description: '', score: 1 }
        ],
        status_effects: { Poisoned: false, Shaken: false, Dazed: false, Weakened: false, Slowed: false },
        classes: [
            { name: 'Loremaster', level: 3, skills: ["Flash of Insight", "Knowledge is Power", "Trained Memory"] },
            { name: 'Wayfarer', level: 2, skills: ["Faithful Companion", "Well-Traveled"] }
        ],
        equipment: [
            "Tome (x2)",
            "Steel Dagger",
            "Travel Garb",
            "Potion (Minor) (x4)"
        ],
        notes: "Companion: Cat, Level 5, Might d12, Dexterity d12, Insight d8, HP 65. Attacks: Claw, Bite."
    }
};

import images from './Images.js';

const quotes = [
  {
    animeName: 'Fate/stay night: Unlimited Blade Works',
    character: 'Archer',
    quote: 'I am the bone of my sword\nSteel is my body and fire is my blood\nI have created over a thousand blades\nUnknown to Death, Nor known to Life\nHave withstood pain to create many weapons\nYet, those hands will never hold anything\nSo as I pray, Unlimited Blade Works.',
    gif: images[0]
  },
  {
    animeName: "Howl no Ugoku Shiro (Howl's Moving Castle)",
    character: 'Calcifer',
    quote: 'May all your bacon burn',
    gif: images[1]
  },
  {
    animeName: 'Eureka Seven',
    character: 'Charles Beams',
    quote: "Freedom is something that you need to actively acquire. It's not something that's given with no strings attached. To be free means to take responsibility, and to prepare yourself for what's to come.",
    gif: images[2]
  },
  {
    animeName: 'Uchuu Kyoudai (Space Brothers)',
    character: 'Deneil Young',
    quote: 'All we can do is live until the day we die. Control what we can...and fly free!',
    gif: images[3]
  },
  {
    animeName: 'Fairy Tail',
    character: 'Gildarts Clive',
    quote: 'Fear is not evil. It tells you what weakness is. And once you know your weakness, you can become stronger as well as kinder.',
    gif: images[4]
  },
  {
    animeName: 'Fullmetal Alchemist',
    character: 'Edward Elric',
    quote: "A lesson without pain is meaningless. For you cannot gain something without sacrificing something else in return. But once you have recovered it and made it your own... You will gain an irreplaceable Fullmetal heart.",
    gif: images[5]
  },
  {
    animeName: 'Gintama',
    character: 'Gintoki Sakata',
    quote: 'The country? The skies? You can have them. I’m busy just protecting what’s right in front of me. I don’t know what’ll happen to me in the future, but if something has fallen at my feet, then the least I can do is pick it up.',
    gif: images[6]
  },
  {
    animeName: 'One Piece',
    character: 'Hiluluk',
    quote: 'When do you think people die? When they are shot through the heart by the bullet of a pistol? No. When they are ravaged by an incurable disease? No. When they drink a soup made from a poisonous mushroom!? No! It’s when they are forgotten.',
    gif: images[7]
  },
  {
    animeName: 'Rakudai Kishi no Cavalry (Chivalry of a Failed Knight)',
    character: 'Ikki Kurogane',
    quote: 'In order for a mediocre man to defeat a genius, he has to become a monster.',
    gif: images[8]
  },
  {
    animeName: 'Akatsuki no Yona (Yona of the Dawn)',
    character: 'Jae-ha',
    quote: "If you simply obey orders without question to protect your master, that isn't your greatest wish, but your greatest tragedy.",
    gif: images[9]
  },
  {
    animeName: 'Magic Kaitou 1412',
    character: 'Kaitou Kuroba',
    quote: "I'm not here tonight as the son of Touichi Kuroba, your mentor in magic, nor as the second-year high school student you call 'Young Master'. Tonight I'm the one they're all talking about. I'm the villain putting on a show.",
    gif: images[10]
  },
  {
    animeName: 'Rurouni Kenshin: Meiji Kenkaku Romantan',
    character: 'Kenshin Himura',
    quote: "Whatever you lose, you'll find it again. But what you throw away you'll never get back.",
    gif: images[11]
  },
  {
    animeName: 'Hokuto no Ken (Fist of the North Star)',
    character: 'Kenshirou',
    quote: 'You are already dead.',
    gif: images[12]
  },
  {
    animeName: "Kino no Tabi: The Beautiful World (Kino's Journey)",
    character: 'Kino',
    quote: 'The world is not beautiful, and that is why it is beautiful.',
    gif: images[13]
  },
  {
    animeName: 'Haibane Renmei',
    character: 'Kuu',
    quote: "Inside my mind, there's a beautiful cup. A very beautiful, clear cup. And tiny drops kept falling into it, 'drip, drip, drip', slowly but steadily, everyday. And today, I felt the cup had finally become completely full.",
    gif: images[14]
  },
  {
    animeName: 'Shingeki no Kyojin (Attack on Titan)',
    character: 'Mikasa Ackerman',
    quote: 'The world is cruel, but also very beautiful.',
    gif: images[15]
  },
  {
    animeName: 'Slam Dunk',
    character: 'Mitsuyoshi Anzai',
    quote: "When you give up, that's when the game ends.",
    gif: images[16]
  },
  {
    animeName: 'Ghost in the Shell 2: Innocence',
    character: 'Motoko Kusanagi',
    quote: "We weep for the blood of a bird, but not for the blood of a fish. Blessed are those with a voice. If the dolls could speak, no doubt they'd scream, \"I didn't want to become human.",
    gif: images[17]
  },
  {
    animeName: 'Kill la Kill',
    character: 'Satsuki Kiryuuin',
    quote: "Fear is freedom! Subjugation is liberation! Contradiction is truth! Those are the facts of this world! And you will all surrender to them, you pigs in human clothing!",
    gif: images[18]
  },
  {
    animeName: 'Dragon Ball Z',
    character: 'Son Goku',
    quote: "I am the hope of the universe. I am the answer to all living things that cry out for peace. I am protector of the innocent. I am the light in the darkness. I am truth. Ally to good! Nightmare to you!",
    gif: images[19]
  },
  {
    animeName: 'Bishoujo Senshi Sailor Moon',
    character: 'Usagi Tsukino',
    quote: "You can't judge how beautiful a girl really is by the way she looks.",
    gif: images[20]
  },
  {
    animeName: 'ef: A Tale of Memories',
    character: 'Yuu Himura',
    quote: "There are no miracles in this world. There is only coincidence and necessity, and what people make of it.",
    gif: images[21]
  },
  {
    animeName: 'xxxHOLiC',
    character: 'Yuuko Ichihara',
    quote: "There is no such thing as a coincidence in this world. There is only the inevitable.",
    gif: images[22]
  },
  {
    animeName: 'Hachimitsu to Clover (Honey and Clover)',
    character: 'Yuuta Takemoto',
    quote: "As time passes, the day will come when everything will fade to memories. But those miraculous days, when you and I, along with everyone else, searched together for just that one thing, will continue revolving forever somewhere deep in my heart, as my bittersweet memory.",
    gif: images[23]
  },
  {
    animeName: 'Cowboy Bebop',
    character: 'Ending Title Card',
    quote: "You're gonna carry that weight.",
    gif: images[24]
  },
]

export default quotes;

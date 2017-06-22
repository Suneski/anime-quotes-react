const quotes = [
  {
    animeName: 'Fate/stay night: Unlimited Blade Works',
    character: 'Archer',
    quote: 'I am the bone of my sword\nSteel is my body and fire is my blood\nI have created over a thousand blades\nUnknown to Death, Nor known to Life\nHave withstood pain to create many weapons\nYet, those hands will never hold anything\nSo as I pray, Unlimited Blade Works.',
    gif: 'https://myanimelist.cdn-dena.com/s/common/uploaded_files/1458022069-774186ca65ce6ab4be03ef0f8020b6e9.gif'
  },
  {
    animeName: "Howl no Ugoku Shiro (Howl's Moving Castle)",
    character: 'Calcifer',
    quote: 'May all your bacon burn',
    gif: 'https://myanimelist.cdn-dena.com/s/common/uploaded_files/1457926059-04f4b457b99c4f129fd6d0163ab7a17c.gif'
  },
  {
    animeName: 'Eureka Seven',
    character: 'Charles Beams',
    quote: "Freedom is something that you need to actively acquire. It's not something that's given with no strings attached. To be free means to take responsibility, and to prepare yourself for what's to come.",
    gif: 'https://myanimelist.cdn-dena.com/s/common/uploaded_files/1458017289-ab7eec10d9ed7b9f630ab16bea0a50e6.gif'
  },
  {
    animeName: 'Uchuu Kyoudai (Space Brothers)',
    character: 'Deneil Young',
    quote: 'All we can do is live until the day we die. Control what we can...and fly free!',
    gif: 'https://myanimelist.cdn-dena.com/s/common/uploaded_files/1458021294-378238dc04e5b5d76e6bc9d23b64fa48.png'
  },
  {
    animeName: 'Fairy Tail',
    character: 'Gildarts Clive',
    quote: 'Fear is not evil. It tells you what weakness is. And once you know your weakness, you can become stronger as well as kinder.',
    gif: 'https://myanimelist.cdn-dena.com/s/common/uploaded_files/1458018787-b9f502fa1d2b50b32d801836db79f8ee.gif'
  },
  {
    animeName: 'Gintama',
    character: 'Gintoki Sakata',
    quote: 'The country? The skies? You can have them. I’m busy just protecting what’s right in front of me. I don’t know what’ll happen to me in the future, but if something has fallen at my feet, then the least I can do is pick it up.',
    gif: 'https://media.giphy.com/media/3ornk1K9O8HBVk1WOA/giphy.gif'
  },
  {
    animeName: 'One Piece',
    character: 'Hiluluk',
    quote: 'When do you think people die? When they are shot through the heart by the bullet of a pistol? No. When they are ravaged by an incurable disease? No. When they drink a soup made from a poisonous mushroom!? No! It’s when they are forgotten.',
    gif: 'https://myanimelist.cdn-dena.com/s/common/uploaded_files/1457926820-46ed9aad9f7c8f058bc1ce74f376e0db.gif'
  },
  {
    animeName: 'Rakudai Kishi no Cavalry (Chivalry of a Failed Knight)',
    character: 'Ikki Kurogane',
    quote: 'In order for a mediocre man to defeat a genius, he has to become a monster.',
    gif: 'https://media.giphy.com/media/l2YOhkWBeS2hWJuAU/giphy.gif'
  },
  {
    animeName: 'Akatsuki no Yona (Yona of the Dawn)',
    character: 'Jae-ha',
    quote: "If you simply obey orders without question to protect your master, that isn't your greatest wish, but your greatest tragedy.",
    gif: 'https://media.giphy.com/media/3otO6xCDn68aNexuq4/giphy.gif'
  },
  {
    animeName: 'Magic Kaitou 1412',
    character: 'Kaitou Kuroba',
    quote: "I'm not here tonight as the son of Touichi Kuroba, your mentor in magic, nor as the second-year high school student you call 'Young Master'. Tonight I'm the one they're all talking about. I'm the villain putting on a show.",
    gif: 'https://media.giphy.com/media/l2R0b72WOn4JJbeyQ/giphy.gif'
  },
  {
    animeName: 'Rurouni Kenshin: Meiji Kenkaku Romantan',
    character: 'Kenshin Himura',
    quote: "Whatever you lose, you'll find it again. But what you throw away you'll never get back.",
    gif: 'https://media.giphy.com/media/l2YOhIw1laKJGvXeE/giphy.gif'
  },
  {
    animeName: 'Hokuto no Ken (Fist of the North Star)',
    character: 'Kenshirou',
    quote: 'You are already dead.',
    gif: 'https://myanimelist.cdn-dena.com/s/common/uploaded_files/1458019530-0f3dad729447c9a57f9d45b711638148.gif'
  },
  {
    animeName: "Kino no Tabi: The Beautiful World (Kino's Journey)",
    character: 'Kino',
    quote: 'The world is not beautiful, and that is why it is beautiful.',
    gif: 'https://myanimelist.cdn-dena.com/s/common/uploaded_files/1458023036-0cf27bb375b3f4fcc1c3fb0050741125.gif'
  },
  {
    animeName: 'Haibane Renmei',
    character: 'Kuu',
    quote: "Inside my mind, there's a beautiful cup. A very beautiful, clear cup. And tiny drops kept falling into it, 'drip, drip, drip', slowly but steadily, everyday. And today, I felt the cup had finally become completely full.",
    gif: 'https://myanimelist.cdn-dena.com/s/common/uploaded_files/1458013184-3217fd1f562b7632c732e230d089a813.png'
  },
  {
    animeName: 'Shingeki no Kyojin (Attack on Titan)',
    character: 'Mikasa Ackerman',
    quote: 'The world is cruel, but also very beautiful.',
    gif: 'https://myanimelist.cdn-dena.com/s/common/uploaded_files/1458018074-bed5d60fefe2011f0e462b1e61d9657c.gif'
  },
  {
    animeName: 'Slam Dunk',
    character: 'Mitsuyoshi Anzai',
    quote: "When you give up, that's when the game ends.",
    gif: 'https://media.giphy.com/media/3o6j8tuYoUjbvlmpj2/giphy.gif'
  },
  {
    animeName: 'Ghost in the Shell 2: Innocence',
    character: 'Motoko Kusanagi',
    quote: "We weep for the blood of a bird, but not for the blood of a fish. Blessed are those with a voice. If the dolls could speak, no doubt they'd scream, \"I didn't want to become human.",
    gif: 'https://myanimelist.cdn-dena.com/s/common/uploaded_files/1458013730-b49ea656ae118ab3fced450b17a67bb2.gif'
  },
  {
    animeName: 'Kill la Kill',
    character: 'Satsuki Kiryuuin',
    quote: "Fear is freedom! Subjugation is liberation! Contradiction is truth! Those are the facts of this world! And you will all surrender to them, you pigs in human clothing!",
    gif: 'https://myanimelist.cdn-dena.com/s/common/uploaded_files/1458019902-7d4524531d0f203e2b0c4cab0a048cd1.gif'
  },
  {
    animeName: 'Dragon Ball Z',
    character: 'Son Goku',
    quote: "I am the hope of the universe. I am the answer to all living things that cry out for peace. I am protector of the innocent. I am the light in the darkness. I am truth. Ally to good! Nightmare to you!",
    gif: 'https://myanimelist.cdn-dena.com/s/common/uploaded_files/1457923842-5ccefc582411e84a711a8e77f81754c8.gif'
  },
  {
    animeName: 'Bishoujo Senshi Sailor Moon',
    character: 'Usagi Tsukino',
    quote: "You can't judge how beautiful a girl really is by the way she looks.",
    gif: 'https://media.giphy.com/media/l2JJyDbKiD2vpv25a/giphy.gif'
  },
  {
    animeName: 'ef: A Tale of Memories',
    character: 'Yuu Himura',
    quote: "There are no miracles in this world. There is only coincidence and necessity, and what people make of it.",
    gif: 'https://myanimelist.cdn-dena.com/s/common/uploaded_files/1458015996-4780fa833fb54ea2031746987d1b7cb8.gif'
  },
  {
    animeName: 'xxxHOLiC',
    character: 'Yuuko Ichihara',
    quote: "There is no such thing as a coincidence in this world. There is only the inevitable.",
    gif: 'https://myanimelist.cdn-dena.com/s/common/uploaded_files/1457925733-50fa675c541f38978b5aae91ffe64df8.gif'
  },
  {
    animeName: 'Hachimitsu to Clover (Honey and Clover)',
    character: 'Yuuta Takemoto',
    quote: "As time passes, the day will come when everything will fade to memories. But those miraculous days, when you and I, along with everyone else, searched together for just that one thing, will continue revolving forever somewhere deep in my heart, as my bittersweet memory.",
    gif: 'https://media.giphy.com/media/3otO6u9lPP0HyCFZio/giphy.gif'
  },
  {
    animeName: 'Cowboy Bebop',
    character: 'Ending Title Card',
    quote: "You're gonna carry that weight.",
    gif: 'https://myanimelist.cdn-dena.com/s/common/uploaded_files/1458015267-5b32b7af55f5811f6174852480c8c7aa.gif'
  },
]

export default quotes;

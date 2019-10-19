export interface Movie {
  id: string;
  name: string;
  genre: string;
  image: string;
  releaseYear: string;
  description: string;
}

export const movies: Movie[] = [
  {
    id: '1',
    name: 'Dawn of the Planet of the Apes',
    genre: 'Sci-Fi',
    image: 'https://peruzal-parse-media.s3.amazonaws.com/c6b7a11f-d1cb-427f-b784-4475f033fc48_1.jpg',
    releaseYear: '2014',
    description: 'A group of scientists in San Francisco struggle to stay alive in the aftermath of a plague that is wiping out humanity, while Caesar tries to maintain dominance over his community of intelligent apes.'
  },
  {
    id: '2',
    name: 'X-Men: Days of Future Past',
    genre: 'Sci-Fi',
    image: 'https://peruzal-parse-media.s3.amazonaws.com/652565bb-02ad-487f-929e-78308085ca1e_4.jpg',
    releaseYear: '2014',
    description: 'The ultimate X-Men ensemble fights a war for the survival of the species across two time periods as they join forces with their younger selves in an epic battle that must change the past – to save our future.'
  },
  {
    id: '3',
    name: 'Despicable Me 2',
    genre: 'Animation',
    image: 'https://peruzal-parse-media.s3.amazonaws.com/43b8cf94-8074-4e72-b58f-de6a3d067464_11.jpg',
    releaseYear: '2013',
    description: 'Gru is recruited by the Anti-Villain League to help deal with a powerful new super criminal.\n'
  },
  {
    id: '4',
    name: 'A Bugs Life',
    genre: 'Animation',
    image: 'https://peruzal-parse-media.s3.amazonaws.com/92b4aed5-ef06-4065-af9a-1bb65e3d36d5_13.jpg',
    releaseYear: '1998',
    description: 'On behalf of \"oppressed bugs everywhere,\" an inventive ant named Flik hires a troupe of warrior bugs to defend his bustling colony from a horde of freeloading grasshoppers led by the evil-minded Hopper.'
  },
  {
    id: '5',
    name: 'Life of Brian',
    genre: 'Comedy',
    image: 'https://peruzal-parse-media.s3.amazonaws.com/4ba2afbe-61b4-4780-a3d8-9487524cb5c1_14.jpg',
    releaseYear: '1972',
    description: 'A brilliant parody from the British comedy group Monty Python about the history of (not Jesus but the boy born right next door to The Manger, Brian). A Terry Jones directed film from 1979 that has since gained cult status.'
  },
  {
    id: '6',
    name: 'District 9',
    genre: 'Action, Sci-fi, Thriller',
    image: 'https://peruzal-parse-media.s3.amazonaws.com/7a53a11c-9dae-48b4-ac36-38916bcf0096_2.jpg',
    releaseYear: '2009',
    description: 'Aliens land in South Africa and have no way home. Years later after living in a slum and wearing out their welcome the \"Non-Humans\" are being moved to a new tent city overseen by Multi-National United (MNU). The movie follows an MNU employee tasked with leading the relocation and his relationship with one of the alien leaders.'
  },
  {
    id: '7',
    name: 'Transformers: Age of Extinction',
    genre: 'Action, Adventure, Sci-fi',
    image: 'https://peruzal-parse-media.s3.amazonaws.com/b2610bfc-c8b7-48e0-8577-15ed47952a26_3.jpg',
    releaseYear: '2014',
    description: 'As humanity picks up the pieces, following the conclusion of \"Transformers: Dark of the Moon,\" Autobots and Decepticons have all but vanished from the face of the planet. However, a group of powerful, ingenious businessman and scientists attempt to learn from past Transformer incursions and push the boundaries of technology beyond what they can control - all while an ancient, powerful Transformer menace sets Earth in his cross-hairs.'
  },
  {
    id: '8',
    name: 'The Machinist',
    genre: 'Drama, Thriller',
    image: 'https://peruzal-parse-media.s3.amazonaws.com/db4e5018-a345-4535-a99a-b77689f83d0a_5.jpg',
    releaseYear: '2004',
    description: 'The Machinist is the story of Trevor Reznik, a lathe-operator who is dying of insomnia. In a machine shop, occupational hazards are bad enough under normal circumstances; yet for Trevor the risks are compounded by fatigue. Trevor has lost the ability to sleep. This is no ordinary insomnia...'
  },
  {
    id: '9',
    name: 'The Last Samurai',
    genre: 'Action, Drama, History',
    image: 'https://peruzal-parse-media.s3.amazonaws.com/3552b586-2580-4d95-b244-103d520d1cda_6.jpg',
    releaseYear: '2003',
    description: 'Nathan Algren is an American hired to instruct the Japanese army in the ways of modern warfare, which finds him learning to respect the samurai and the honorable principles that rule them. Pressed to destroy the samurais way of life in the name of modernization and open trade, Algren decides to become an ultimate warrior himself and to fight for their right to exist.'
  },
  {
    id: '10',
    name: 'The Amazing Spider-Man 2',
    genre: 'Action, Adventure, Fantasy',
    image: 'https://peruzal-parse-media.s3.amazonaws.com/fc92ca2c-bb7d-4020-b92e-f5fa0915181b_7.jpg',
    releaseYear: '2014',
    description: 'For Peter Parker, life is busy. Between taking out the bad guys as Spider-Man and spending time with the person he loves, Gwen Stacy, high school graduation cannot come quickly enough. Peter has not forgotten about the promise he made to Gwen’s father to protect her by staying away, but that is a promise he cannot keep. Things will change for Peter when a new villain, Electro, emerges, an old friend, Harry Osborn, returns, and Peter uncovers new clues about his past.\n'
  },
  {
    id: '11',
    name: 'Tangled',
    genre: 'Animation, Fantasy',
    image: 'https://peruzal-parse-media.s3.amazonaws.com/7e5d4fec-2f54-4edf-b815-3d58ce2ca188_8.jpg',
    releaseYear: '2010',
    description: "When the kingdom's most wanted-and most charming-bandit Flynn Rider hides out in a mysterious tower, he's taken hostage by Rapunzel, a beautiful and feisty tower-bound teen with 70 feet of magical, golden hair. Flynn's curious captor, who's looking for her ticket out of the tower where she's been locked away for years, strikes a deal with the handsome thief and the unlikely duo sets off on an action-packed escapade, complete with a super-cop horse, an over-protective chameleon and a gruff gang of pub thugs.\n"
  },
  {
    id: '12',
    name: 'Drag Me to Hell',
    genre: 'Horror, Thriller',
    image: 'https://peruzal-parse-media.s3.amazonaws.com/eee9d012-a5c1-42e2-8f38-0efc1729d89b_10.jpg',
    releaseYear: '2009',
    description: "After denying a woman the extension she needs to keep her home, loan officer Christine Brown sees her once-promising life take a startling turn for the worse. Christine is convinced she's been cursed by a Gypsy, but her boyfriend is skeptical. Her only hope seems to lie in a psychic who claims he can help her lift the curse and keep her soul from being dragged straight to hell."
  },

]

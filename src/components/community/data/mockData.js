export const mockLeaderboard = {
  allTime: [
    {
      rank: 1,
      name: "Ella Rose",
      images: "6.408",
      checklists: "654",
      userId: "ella",
    },
    {
      rank: 2,
      name: "Micheal Jim",
      images: "6.408",
      checklists: "654",
      userId: "micheal",
    },
    {
      rank: 3,
      name: "Jane Anne",
      images: "6.408",
      checklists: "654",
      userId: "jane",
    },
    {
      rank: 4,
      name: "Harold Mack",
      images: "6.408",
      checklists: "654",
      userId: "harold",
    },
    {
      rank: 5,
      name: "Silvia Nolan",
      images: "6.408",
      checklists: "654",
      userId: "silvia",
    },
    {
      rank: 6,
      name: "Gladys Edwards",
      images: "6.408",
      checklists: "654",
      userId: "gladys",
    },
    {
      rank: 7,
      name: "Matt Giles",
      images: "6.408",
      checklists: "654",
      userId: "matt",
    },
    {
      rank: 8,
      name: "Ruthie Miles",
      images: "6.408",
      checklists: "654",
      userId: "ruthie",
    },
    {
      rank: 9,
      name: "Frederic Salinas",
      images: "6.408",
      checklists: "654",
      userId: "frederic",
    },
    {
      rank: 10,
      name: "Sarah Krueger",
      images: "6.408",
      checklists: "654",
      userId: "sarah",
    },
  ],

  monthly: [
    {
      rank: 1,
      name: "Micheal Jim",
      images: "6.408",
      checklists: "654",
      userId: "micheal",
    },

    {
      rank: 2,
      name: "Ella Rose",
      images: "6.408",
      checklists: "654",
      userId: "ella",
    },
    {
      rank: 3,
      name: "Jane Anne",
      images: "6.408",
      checklists: "654",
      userId: "jane",
    },
    {
      rank: 4,
      name: "Harold Mack",
      images: "6.408",
      checklists: "654",
      userId: "harold",
    },
    {
      rank: 5,
      name: "Silvia Nolan",
      images: "6.408",
      checklists: "654",
      userId: "silvia",
    },
    {
      rank: 6,
      name: "Gladys Edwards",
      images: "6.408",
      checklists: "654",
      userId: "gladys",
    },
    {
      rank: 7,
      name: "Matt Giles",
      images: "6.408",
      checklists: "654",
      userId: "matt",
    },
    {
      rank: 8,
      name: "Ruthie Miles",
      images: "6.408",
      checklists: "654",
      userId: "ruthie",
    },
    {
      rank: 9,
      name: "Frederic Salinas",
      images: "6.408",
      checklists: "654",
      userId: "frederic",
    },
    {
      rank: 10,
      name: "Sarah Krueger",
      images: "6.408",
      checklists: "654",
      userId: "sarah",
    },
  ],
};

export const mockMembers = Array(16)
  .fill(null)
  .map((_, i) => ({
    id: `user-${i}`,
    name: "John Doe",
    avatar: "/src/assets/images/avatar.png",
    imagesCount: "1.062",
    checklistsCount: "53",
  }));

export const mockMediaList = Array(10)
  .fill(null)
  .map((_, i) => ({
    id: `obs-${i}`,
    url: "/src/assets/images/pitta1.png",
    speciesName: "Hydrornis soror",
    date: "23 Feb 2020",
    author: "John Saint",
    authorId: "john-saint",
  }));

export const mockChecklists = Array(8)
  .fill(null)
  .map((_, i) => ({
    id: `chk-${i}`,
    speciesCount: 19,
    date: "3 Dec 2025",
    time: "9:27 AM",
    location: "Cat Tien National Park",
    userName: "John Doe",
    userId: "john-doe",
  }));

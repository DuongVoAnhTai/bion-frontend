export const mockData = {
  id: 12,
  scientificName: "Hydrornis soror",
  author: "Wardlew/Ramsay 1886",
  status: "Endemic",
  group: "Birds",
  image: "/src/assets/images/species-detail.png",
  taxonomy: ["Animalia", "Chordata", "Avies", "Passentomes", "Iklae"],
  identification: {
    content: [
      "Oligodon macrurus is a small snake with a distinctive long tail, which accounts for one-third of its total body length. Its back and head are grayish, with darker brown stripes extending from the eyes to the fourth and fifth supralabial scales.",
      "A dark brown stripe begins from the occipital region, running down the body but not reaching the ventral scales. It has a dark spot on its forehead and another between the stripes at the back of the head. A dark V-shaped mark is present on the neck, bordered by black edges.",
      "The body displays faint horizontal stripes, with a less pronounced pattern on the flanks. The tail features a lighter dorsal stripe with gray edges, and the ventral side is cream-colored.",
    ],
    conservationSummary: "Habital loss. Vulnerable In Vietnam Red Data Book.",
    image: "/src/assets/images/species-detail.png",
  },
  distribution: {
    content: [
      "Oligodon macrurus has been recorded at elevations below 200 meters above sea level, based on its known coastal range in Vietnam.",
      "Oligodon macrurus is endemic to Vietnam, specifically found in a restricted coastal area between Khanh Hoa and Ninh Thuan Provinces.",
      "There is limited information on the habitat of Oligodon macrurus. It is presumed to inhabit evergreen deciduous forests, sometimes being observed in proximity to human settlements.",
    ],
    hotspots: [
      {
        id: 1,
        name: "Tam Dao National Park",
        type: "Coastal",
        image: "/src/assets/images/cat-ba.png",
      },
      {
        id: 2,
        name: "Sapa-Hoang Lien Son National Park",
        type: "Mountainous",
        image: "/src/assets/images/cuc-phuong.png",
      },
      {
        id: 3,
        name: "Cat Tien National Park",
        type: "Forestry",
        image: "/src/assets/images/cat-ba.png",
      },
      {
        id: 4,
        name: "Cuc Phuong National Park",
        type: "Forestry",
        image: "/src/assets/images/cuc-phuong.png",
      },
    ],

    occurrences: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: { location: "Tam Đảo NP", date: "2024-03-10" },
          geometry: { type: "Point", coordinates: [105.64, 21.45] }, // [Kinh độ, Vĩ độ]
        },
        {
          type: "Feature",
          properties: { location: "Cúc Phương NP", date: "2024-05-22" },
          geometry: { type: "Point", coordinates: [105.71, 20.25] },
        },
        {
          type: "Feature",
          properties: { location: "Cát Tiên NP", date: "2023-11-15" },
          geometry: { type: "Point", coordinates: [107.43, 11.42] },
        },
      ],
    },
  },
  recentSightings: [
    {
      id: 1,
      userId: "john-doe-123",
      speciesCount: 19,
      date: "3 Dec 2025",
      time: "9:27 AM",
      location: "Cat Tien National Park",
      province: "Dong Nai",
      observer: "John Doe",
    },
    {
      id: 2,
      userId: "john-doe-123",
      speciesCount: 19,
      date: "3 Dec 2025",
      time: "9:27 AM",
      location: "Cat Tien National Park",
      province: "Dong Nai",
      observer: "John Doe",
    },
    {
      id: 3,
      userId: "john-doe-123",
      speciesCount: 19,
      date: "3 Dec 2025",
      time: "9:27 AM",
      location: "Cat Tien National Park",
      province: "Dong Nai",
      observer: "John Doe",
    },
  ],

  media: [
    {
      id: 1,
      image: "/src/assets/images/species-detail.png",
      date: "23 Feb 2020",
      author: "John Saint",
      authorId: "john-saint-1",
      location: "Tan Phu Forest Enterprise, Dong Nai, Vietnam",
    },
    {
      id: 2,
      image: "/src/assets/images/species-detail.png",
      date: "23 Feb 2020",
      author: "John Saint",
      authorId: "js1",
      location: "Tan Phu Forest Enterprise, Dong Nai, Vietnam",
    },
    {
      id: 3,
      image: "/src/assets/images/species-detail.png",
      date: "23 Feb 2020",
      author: "John Saint",
      authorId: "js1",
      location: "Tan Phu Forest Enterprise, Dong Nai, Vietnam",
    },
    {
      id: 4,
      image: "/src/assets/images/species-detail.png",
      date: "23 Feb 2020",
      author: "John Saint",
      authorId: "js1",
      location: "Tan Phu Forest Enterprise, Dong Nai, Vietnam",
    },
    {
      id: 5,
      image: "/src/assets/images/species-detail.png",
      date: "23 Feb 2020",
      author: "John Saint",
      authorId: "js1",
      location: "Tan Phu Forest Enterprise, Dong Nai, Vietnam",
    },
    {
      id: 6,
      image: "/src/assets/images/species-detail.png",
      date: "23 Feb 2020",
      author: "John Saint",
      authorId: "js1",
      location: "Tan Phu Forest Enterprise, Dong Nai, Vietnam",
    },
    {
      id: 7,
      image: "/src/assets/images/species-explorer.png",
      date: "23 Feb 2020",
      author: "John Saint",
      authorId: "js1",
      location: "Tan Phu Forest Enterprise, Dong Nai, Vietnam",
    },
  ],

  relatedTours: [
    {
      id: "tour-1",
      title: "[8-Day] Bird Photography Tour – Cat Tien National Park & Dalat",
      location: "Tam Dao National Park",
      image: "/src/assets/images/bird-photograph.png",
    },
    {
      id: "tour-2",
      title: "[8-Day] Bird Photography Tour – Cat Tien National Park & Dalat",
      location: "Tam Dao National Park",
      image: "/src/assets/images/bird-photograph.png",
    },
    {
      id: "tour-3",
      title: "[8-Day] Bird Photography Tour – Cat Tien National Park & Dalat",
      location: "Tam Dao National Park",
      image: "/src/assets/images/bird-photograph.png",
    },
  ],
};

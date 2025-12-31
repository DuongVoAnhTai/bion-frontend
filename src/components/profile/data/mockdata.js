export const mockProfile = {
  name: "Thang Nguyen",
  handle: "thang_nguyen",
  avatar: "/src/assets/images/avatar-2.png",
  banner: "/src/assets/images/background.png",
  followers: "1.208",
  images: "20.980",
  checklists: "410",
};

export const profileStats = {
  species: {
    id: "species",
    count: "4.260",
    label: "Species observed",
    placeholder: "Thang Nguyen’s species...",
  },
  hotspots: {
    id: "hotspots",
    count: "2.604",
    label: "Hotspots checked",
    placeholder: "Thang Nguyen’s hotspot...",
  },
  checklists: {
    id: "checklists",
    count: "460",
    label: "Checklists submitted",
    placeholder: "Thang Nguyen’s checklist destination...",
  },
};

export const userSpecies = Array(15).fill({
  id: 1,
  name: "Striped-bellied Pittas",
  scientificName: "Hynisera Odoriumae Citaris",
  image: "/src/assets/images/pitta1.png",
  imageCount: 422,
});

export const userHotspots = Array(9).fill({
  id: 1,
  name: "Tam Dao National Park",
  location: "Vinh Phuc, Northern Vietnam",
  image: "/src/assets/images/cat-ba.png",
  imageCount: 422,
});

export const userChecklist = Array(12)
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

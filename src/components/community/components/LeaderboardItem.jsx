import { Link } from "react-router-dom";

export default function LeaderboardItem({
  rank,
  name,
  images,
  checklists,
  userId,
}) {
  // Logic xác định Icon và Màu sắc dựa trên hạng (rank)
  let rankIcon = null;
  let nameColor = "text-gray-dark";

  if (rank === 1) {
    rankIcon = (
      <img src={"/src/assets/images/rank-1.png"} alt="Rank 1" className="w-8 h-8 object-contain" />
    );
    nameColor = "text-[#FF7E22]";
  } else if (rank === 2) {
    rankIcon = (
      <img src={"/src/assets/images/rank-2.png"} alt="Rank 2" className="w-8 h-8 object-contain" />
    );
    nameColor = "text-[#5846FB]";
  } else if (rank === 3) {
    rankIcon = (
      <img src={"/src/assets/images/rank-3.png"} alt="Rank 3" className="w-8 h-8 object-contain" />
    );
    nameColor = "text-[#2FBD00]";
  }

  return (
    <div className="flex items-center gap-4 py-2 group">
      {/* Rank Icon hoặc Rank Number */}
      <div className="w-8 flex justify-center shrink-0">
        {rankIcon ? (
          rankIcon
        ) : (
          <span className="text-gray font-poppins font-medium">#{rank}</span>
        )}
      </div>

      {/* Info: Name • Stats */}
      <div className="flex flex-wrap items-center gap-x-2 font-poppins text-[15px]">
        <Link
          to={`/photographers/${userId}`}
          className={`${nameColor} font-bold hover:underline transition-all`}
        >
          {name}
        </Link>
        <span className="text-gray-light">•</span>
        <span className="text-gray">{images} images</span>
        <span className="text-gray-light">•</span>
        <span className="text-gray">{checklists} checklist</span>
      </div>
    </div>
  );
}

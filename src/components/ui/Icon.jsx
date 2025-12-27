// import { iconPaths } from "../../assets/icon";
// import { cn } from "../../lib/utils";


// export const Icon = ({ name, className, size = 24, ...props }) => {
//   const pathData = iconPaths[name];

//   if (!pathData) {
//     console.warn(`Icon "${name}" not found`);
//     return null;
//   }

//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       // LƯU Ý QUAN TRỌNG:
//       // Dựa vào toạ độ lớn nhất trong path (43.5), viewBox chuẩn là "0 0 48 48".
//       // Nếu icon khác của bạn là 24x24 thì cần logic để đổi viewBox.
//       viewBox="0 0 48 48"
//       width={size}
//       height={size}
//       fill="currentColor" // Để đổi màu bằng class text-red-500...
//       className={cn("inline-block shrink-0", className)}
//       {...props}
//     >
//       <path d={pathData} />
//     </svg>
//   );
// };

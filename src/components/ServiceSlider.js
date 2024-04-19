// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FcClapperboard } from "react-icons/fc";

//import swiper Module
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import { register } from "swiper/element/bundle";
import "swiper/css";
register();

// data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxRocket />,
    title: "No Title",
    description: "No Description",
  },
];
const ServiceSlider = () => {
  return (
    <swiper-container
      // init="false"
      slides-per-view="2"
      space-between="20"
      scrollbar-clickable="true"
      mousewheel-invert="true"
      breakpoints={JSON.stringify({
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      })}
      pagination="true"
      navigation="true"
      // change le curseur en une icône pouvant être saisie.
      grab-cursor="true"
      //css
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
    >
      {serviceData.map((item, index) => (
        <swiper-slide key={index}>
          <div className="serviceSlider">
            <div className="icon">{item.icon}</div>
            <div className="title">{item.title}</div>
            <div className="description">{item.description}</div>
          </div>
        </swiper-slide>
      ))}
    </swiper-container>
  );
};

export default ServiceSlider;

//import swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";

// const ServiceSlider = () => {
//   return (
//     <Swiper
//       className="serviceSlider"
//       breakpoints={{
//         320: {
//           slidesPerView: 1,
//           spaceBetween: 15,
//         },
//         640: {
//           slidesPerView: 3,
//           spaceBetween: 15,
//         },
//       }}
//       freeMode={true}
//       pagination={{
//         clickable: true,
//       }}
//       modules={[FreeMode, Pagination]}
//     >
//       {serviceData.map((item, index) => {
//         return (
//           <SwiperSlide key={index}>
//             <div className="one">
//               slide
//               {/* //icone */}
//               <div>{item.icon}</div>
//               {/* title&description */}
//               <div className="two">
//                 <div>{item.title}</div>
//                 <p>{item.description}</p>
//               </div>
//               {/* arrow */}
//               <div>
//                 <RxArrowTopRight />
//               </div>
//             </div>
//           </SwiperSlide>
//         );
//       })}
//     </Swiper>
//   );
// };

// export default ServiceSlider;

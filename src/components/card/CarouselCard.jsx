// import React, { useEffect, useState } from "react";
// import Carousel from "react-simply-carousel";
// import ProjetCard from "./ProjetCard";
// import axios from "axios";
// import CardFlipped from "./CardFlipped";

// // import Carousel from "react-multi-carousel";
// // import "react-multi-carousel/lib/styles.css";

// const CarouselCard = (repo) => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [repos, setRepos] = useState([]);
//   const getRepos = () => {
//     axios
//       .get("https://api.github.com/users/Leroyg-11/repos")
//       .then((res) => {
//         // console.log(res.data);
//         setRepos(res.data);
//       })
//       .catch((error) => console.error(error));
//   };

//   useEffect(() => {
//     getRepos(); // Call the 'getRepos' function when the component mounts
//   }, []);

//   const reposWithOneStar = repos.filter((repo) => repo.stargazers_count === 1);

//   return (
//     <section className="carousel-section">
//       {reposWithOneStar.length > 0 && (
//         <Carousel
//           containerProps={{
//             className: "container-carousel",

//             style: {
//               width: "100%",
//             },
//           }}
//           preventScrollOnSwipe
//           swipeTreshold={60}
//           activeSlideIndex={activeSlide}
//           activeSlideProps={{
//             className: "is-active",

//             style: {
//               background: "",
//             },
//           }}
//           onRequestChange={setActiveSlide}
//           forwardBtnProps={{
//             children: ">",
//             className: "nes-btn is-primary btn-slide right",
//             style: {
//               width: 60,
//               height: 60,
//               minWidth: 60,
//               alignSelf: "center",
//             },
//           }}
//           backwardBtnProps={{
//             children: "<",
//             className: "nes-btn is-primary btn-slide left",

//             style: {
//               width: 60,

//               height: 60,
//               minWidth: 60,
//               alignSelf: "center",
//             },
//           }}
//           dotsNav={{
//             show: true,
//             itemBtnProps: {
//               className: "dot",
//               style: {
//                 height: 16,
//                 width: 16,
//                 borderRadius: "50%",
//                 border: 0,
//               },
//             },
//             activeItemBtnProps: {
//               style: {
//                 height: 16,
//                 width: 16,
//                 borderRadius: "50%",
//                 border: 0,
//                 background: "black",
//               },
//             },
//           }}
//           itemsToShow={2}
//           speed={400}
//           centerMode
//           // Configurations du carousel comme dans votre composant CarouselTest
//         >
//           {reposWithOneStar.map((repo) => {
//             const logoUrl = `https://raw.githubusercontent.com/Leroyg-11/${repo.name}/main/Logo.png`;
//             const slideOne = `https://raw.githubusercontent.com/Leroyg-11/${repo.name}/main/Slide/slide-1.jpeg`;
//             const slideTwo = `https://raw.githubusercontent.com/Leroyg-11/${repo.name}/main/Slide/slide-2.jpeg`;
//             const slideThree = `https://raw.githubusercontent.com/Leroyg-11/${repo.name}/main/Slide/slide-3.jpeg`;

//             return (
//               <div className="not-active" key={repo.id}>
//                 <CardFlipped
//                   name={repo.name}
//                   description={repo.description}
//                   html_url={repo.html_url}
//                   topics={repo.topics}
//                   language={repo.language}
//                   logoUrl={logoUrl}
//                   slideOne={slideOne}
//                   slideTwo={slideTwo}
//                   slideThree={slideThree}
//                 />
//               </div>
//             );
//           })}
//         </Carousel>
//       )}
//     </section>
//     // <section className="carousel-section">
//     //   {reposWithOneStar.length > 0 && (
//     //     <Carousel
//     //       containerProps={{
//     //         className: "container-carousel",

//     //         style: {
//     //           width: "100%",
//     //         },
//     //       }}
//     //       preventScrollOnSwipe
//     //       swipeTreshold={60}
//     //       activeSlideIndex={activeSlide}
//     //       activeSlideProps={{
//     //         className: "is-active",

//     //         style: {
//     //           background: "",
//     //         },
//     //       }}
//     //       onRequestChange={setActiveSlide}
//     //       forwardBtnProps={{
//     //         children: ">",
//     //         className: "nes-btn is-primary btn-slide right",
//     //         style: {
//     //           width: 60,
//     //           height: 60,
//     //           minWidth: 60,
//     //           alignSelf: "center",
//     //         },
//     //       }}
//     //       backwardBtnProps={{
//     //         children: "<",
//     //         className: "nes-btn is-primary btn-slide left",

//     //         style: {
//     //           width: 60,

//     //           height: 60,
//     //           minWidth: 60,
//     //           alignSelf: "center",
//     //         },
//     //       }}
//     //       dotsNav={{
//     //         show: true,
//     //         itemBtnProps: {
//     //           className: "dot",
//     //           style: {
//     //             height: 16,
//     //             width: 16,
//     //             borderRadius: "50%",
//     //             border: 0,
//     //           },
//     //         },
//     //         activeItemBtnProps: {
//     //           style: {
//     //             height: 16,
//     //             width: 16,
//     //             borderRadius: "50%",
//     //             border: 0,
//     //             background: "black",
//     //           },
//     //         },
//     //       }}
//     //       itemsToShow={2}
//     //       speed={400}
//     //       centerMode
//     //       // Configurations du carousel comme dans votre composant CarouselTest
//     //     >
//     //       {reposWithOneStar.map((repo) => {
//     //         const logoUrl = `https://raw.githubusercontent.com/Leroyg-11/${repo.name}/main/Logo.png`;
//     //         const slideOne = `https://raw.githubusercontent.com/Leroyg-11/${repo.name}/main/Slide/slide-1.jpeg`;
//     //         const slideTwo = `https://raw.githubusercontent.com/Leroyg-11/${repo.name}/main/Slide/slide-2.jpeg`;
//     //         const slideThree = `https://raw.githubusercontent.com/Leroyg-11/${repo.name}/main/Slide/slide-3.jpeg`;

//     //         return (
//     //           <div className="not-active" key={repo.id}>
//     //             <CardFlipped
//     //               name={repo.name}
//     //               description={repo.description}
//     //               html_url={repo.html_url}
//     //               topics={repo.topics}
//     //               language={repo.language}
//     //               logoUrl={logoUrl}
//     //               slideOne={slideOne}
//     //               slideTwo={slideTwo}
//     //               slideThree={slideThree}
//     //             />
//     //           </div>
//     //         );
//     //       })}
//     //     </Carousel>
//     //   )}
//     // </section>
//   );
// };

// export default CarouselCard;

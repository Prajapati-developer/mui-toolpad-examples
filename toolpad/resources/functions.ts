// Toolpad queries:

// import { createFunction, createQuery } from '@mui/toolpad/server';
export async function example() {
  return [
    { firstname: 'Nell', lastName: 'Lester' },
    { firstname: 'Keanu', lastName: 'Walter' },
    { firstname: 'Daniella', lastName: 'Sweeney' },
  ];
}


// export const addBook = createQuery(
//    ({ parameters }) => {
//     console.log("parameters", parameters)
//     // let formObj = {
      // title: parameters.title,
      // author: parameters.author,
      // country: parameters.country,
      // imageLink: parameters.imageLink,
      // language: parameters.language,
      // eBookLink: parameters.eBookLink,
      // pages: parameters.pages,
      // year: parameters.year

//     // }

//     // let formObj = {
//     //  parameters.title,
//     //   parameters.author,
//     //   country: parameters.country,
//     //   imageLink: parameters.imageLink,
//     //   language: parameters.language,
//     //   eBookLink: parameters.eBookLink,
//     //   pages: parameters.pages,
//     //   year: parameters.year

//     // }
//     console.log("parameters",parameters)
//     const options={
//       method: "post",
//       body: JSON.stringify({
         
//        parameters
  
//       }),
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       },
//     }

//     return  fetch("http://localhost:3030/books", options)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log("data",data)
//       return data
//     });
//   },
//   {
//     parameters: {
//       author: {
//         type: "string"
//       },
//       country: {
//         type: "string"
//       },
//       imageLink: {
//         type: "string"
//       },
//       language: {
//         type: "string"
//       },
//       eBookLink: {
//         type: "string"
//       },
//       image: {
//         type: "string"
//       },
//       pages: {
//         type: "number"
//       },
//       title: {
//         type: "string"
//       },
//       year: {
//         type: "number"
//       }

//     },
//   },
// );
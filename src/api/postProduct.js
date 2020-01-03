import firebase from "@/configFirebase.js";
// import router from "@/router";

export default (title, image, description, author) => {
  let d = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  // /*eslint-disable */
  // console.log(firebase.db);

  return firebase.db
    .collection("products")
    .add({
      description,
      image,
      title,
      author: `Posted by ${author != "" ? author : "Unknow"} on ${
        days[d.getDay()]
      }`,
      createdAt: new Date().getTime()
    })
    .then(res => {
      return res;
      // router.push({ path: "/" });
    });
};

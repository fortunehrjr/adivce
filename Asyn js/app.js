// // async javascript

console.log("start");

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("i have the data now");
      resolve({ userEmail: email });
    }, 2000);
  });
}
function userVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["video1", "video2", "video3", "video4"]);
    }, 4000);
  });
}
function videoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["title of video"]);
    }, 2000);
  });
}

async function displayUser() {
  const loggedUser = await loginUser("email.com", 12333212);
  const videos = await userVideos(loggedUser.userEmail);
  const details = await videoDetails(videos[0]);
  console.log(details);
}

displayUser();
console.log("finish");

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("got the user");
//     resolve({ user: "Fortune" });
//   }, 2000);
// });

// promise.then((user) => {
//   console.log(user);
// });

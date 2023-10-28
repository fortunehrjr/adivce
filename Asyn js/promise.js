const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("got the user");
    resolve({ user: "ed" });
  }, 3000);
});

promise.then((user) => {
  console.log(user);
});

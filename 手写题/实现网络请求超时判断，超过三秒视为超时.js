const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("成功！！！！");
  }, 4000);
});

const p2 = new Promise((reject) => {
  setTimeout(() => {
    reject("请求失败");
  }, 3000);
});

Promise.race([p1, p2])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

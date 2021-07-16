const data = [
  { userId: 8, title: "title1" },
  { userId: 11, title: "other" },
  { userId: 15, title: null },
  { userId: 19, title: "title2" },
];

const find = function (origin) {
  // your code are here...
  const _this = this;
  let res = [];
  this.where = (obj) => {
    for (let key in obj) {
      origin.forEach((item) => {
        if (obj[key].test(item[key])) {
          res.push(item);
        }
      })
    }
    return _this;
  };
  this.orderBy = (title, bool) => {
    res.sort((pre, next) => {
      if (bool === "desc") {
        return next[title] - pre[title];
      } else {
        return pre[title] - next[title];
      }
    });
    return res;
  };
  return this
};

// 查找 data 中，符合条件的数据，并进行排序
const result = find(data)
  .where({
    title: /\d$/,
  })
  .orderBy("userId", "desc");

console.log(result);
// [{ userId: 19, title: 'title2'}, { userId: 8, title: 'title1' }];

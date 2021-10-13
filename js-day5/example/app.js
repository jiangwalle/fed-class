// 豆瓣电影
const movies = [
  {
    name: "肖生克的救赎",
    score: 9.7,
    year: 1993,
    category: 'story'
  },
  {
    name: "新警察故事",
    score: 8.2,
    year: 2006,
    category: 'action'
  },
  {
    name: "WALLE-E",
    score: 9.7,
    year: 2008,
    category: 'cartoon'
  },
  {
    name: "霸王别姬",
    score: 9.5,
    year: 1993,
    category: 'story'
  },
  {
    name: "疯狂动物城",
    score: 9.4,
    year: 2016,
    category: 'cartoon'
  },
  {
    name: "冰雪奇缘",
    score: 9.1,
    year: 2014,
    category: 'cartoon'
  },
  {
    name: "冰雪奇缘",
    score: 9.1,
    year: 2014,
    category: 'cartoon'
  },
];



// Default params
function add(num1, num2) {
  return num1 + num2;
}

add(1, 2);
add(1);
add();


// Spread in function calls
Math.max(1, 3, 3, 50, 23, 99);

const numbers = [1, 3, 23, 42, 12, 345];
console.log(Math.max(...numbers));

// Spread with arrays
const dogs = ['coco', 'cola'];
const puppies = ['pipi', 'laoqi', 'tofi'];
const allDogs = [...dogs, ...puppies];
const family = [...dogs, ...puppies, 'walle'];

const charaters = [..."hello"];


// Spread with object
const form = { username: 'jack', password: '123', age: 30 };
const form2 = { age: 18, gender: 'male'};

// const formData = {
//   username: form.username,
//   password: form.password,
//   age: form.age,
//   gender: form2.gender
// };

const formData = { ...form, rememberMe: false }; // Adding fields
const newFormData = { ...form, ...form2 }; // Merge two objects

// Rest params
const sumAll = (...nums) => {
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  return total;
}
sumAll(1, 2, 3);
sumAll(1, 3, 34, 453, 22);


// 欢迎多添加一些你们自己喜欢的电影信息到数组里
let movies = [
  {
    name: "肖生克的救赎",
    englishName: "The Shawshank Redemption",
    director: "弗兰克 德拉邦特",
    type: ["剧情", "犯罪"],
    language: "英语",
    releaseYear: 1994,
    releaseCountry: "US",
    runtime: 142, // 片长
    imdbRating: 9.3,
    doubanRating: 9.7
  },
  {
    name: "机器人总动员",
    englishName: "WALL-E",
    director: "安德鲁 斯坦顿",
    type: ["科幻", "动画", "冒险"],
    language: "英语",
    releaseYear: 2008,
    releaseCountry: "US",
    runtime: 98, // 片长 分钟
    imdbRating: 8.4,
    doubanRating: 9.3
  },
  {
    name: "霸王别姬",
    englishName: "Farewell My Concubine",
    director: "陈凯歌",
    type: ["剧情", "爱情", "同性"],
    language: "普通话",
    releaseYear: 1993,
    releaseCountry: "China",
    runtime: 171, // 片长 分钟
    imdbRating: 8.4,
    doubanRating: 9.6
  },
];

// 编写函数打印电影的名字和豆瓣评分。使用forEach
// 例如输出：
// 机器人总动员 - 9.3
// 霸王别姬 - 9.6
function printMovieSummary(movies) {

}

// 函数功能：接受电影数组，给数组中的元素添加新的字段-豆瓣和IMDB的平均分avgRating，豆瓣返回新的数组。
// 推荐使用数组函数：map
function populateMoviesWithAvgRating(movies) {
  
}

// 函数功能：按中文或者英文名称查询电影。
// 推荐使用函数：find
// 例如：查询 WAL, 返回WALL-E的电影信息
function searchMoiveByName(moives, searchText) {

}

// 函数功能：按电影类型查找。
// 例如：查询 动画, 返回所有动画类型的电影
function searchMoiveByMovieType(moives, movieType) {

}

// 函数功能：按电影上映日期查找
// 例如：
// startYear=1994, endYear=1994 返回1994年上映的电影
// startYear=1994, endYear=2008 返回1994到2008年上映的电影
function searchMoiveByYear(moives, startYear, endYear) {

}

// 函数功能：按照电影类型返回电影的豆瓣和IMDB平均分
// 例如：输入 movieType = 动画
// 返回：{ douban: 8.5, imdb: 8.2 }
function getMoiveAvgRatingPerType(moives, movieType) {

}
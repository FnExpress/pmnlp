const fs = require("fs");
const pinyin = require("@napi-rs/pinyin").pinyin;
const yaml = require("js-yaml");
// 修改md文件的路径名为拼音

const postPath = "src/pages/post";
const data = fs.readdirSync(postPath, "utf-8");

const urls = data.map((name) => pinyin(name.slice(0, -3)).join("-"));
const modifyActivityPart = [];
data.forEach((fileName, index) => {
  // read markdown file front_matter
  const content = fs.readFileSync(postPath + "/" + fileName, "utf8");
  let re = /---(.*?)---/gs;
  try {
    let s = re.exec(content)[1];
    let result = yaml.load(s);
    modifyActivityPart[index] = {
      title: result["title"],
      fileName,
      route: urls[index],
      img: result["img"],
      date: result["date"],
    };
  } catch (e) {
    console.log(e);
  }
});
// console.log(modifyActivityPart);
// 读yaml再改
try {
  const doc = yaml.load(fs.readFileSync("config.yaml", "utf8"));
  doc.activity = modifyActivityPart;
  fs.writeFileSync("config.yaml", yaml.dump(doc));
  console.log("文章信息更新完成");
} catch (e) {
  console.log(e);
}

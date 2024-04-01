const fs = require("fs");

// 读取 TypeScript 数据文件
const dataFile = "./src/libraries/frontend.ts"; // 替换为你的数据文件路径

// 读取 TypeScript 文件内容
fs.readFile(dataFile, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  // 使用正则表达式匹配出数据数组部分
  const dataArrayMatch = data.match(/(?:^|\s)(\[[\s\S]*?\])(?:\s|$)/);
  if (!dataArrayMatch) {
    console.error("No data array found in the TypeScript file");
    return;
  }

  // 解析数据数组
  const rawData = eval(dataArrayMatch[0]); // 使用 eval 解析数组
  // 对每个元素进行修改
  const modifiedData = rawData.map((item) => {
    if (item.tags.includes(item.group)) {
      return item;
    }
    const tags = [item.group, item.language, ...item.tags];
    item.tags = tags;
    return item;
  });

  // 将修改后的数据写入新的文件;
  fs.writeFile(
    "./modifiedData.json",
    JSON.stringify(modifiedData, null, 2),
    (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }
      console.log("Modified data has been written to modifiedData.json");
    }
  );
});

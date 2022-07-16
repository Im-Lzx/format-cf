#!/usr/bin/env node

const path = require("path");
const fs = require("fs");

let currentPath = __dirname;
let libsPath = path.resolve(__dirname, "../lib");

console.log("currentPath", currentPath);
console.log("libsPath", libsPath);

/**
 * 查询当前项目根package.json所在的路径
 */
function queryProjectPackagesJsonPath() {
  currentPath = path.resolve(currentPath, "..");
  fs.exists(`${currentPath}/node_modules`, function (exists) {
    if (exists) {
      console.log("文件存在");
      runCopy(currentPath,libsPath);
    }

    if (!exists) {
      queryProjectPackagesJsonPath();
    }
  });
}

/**
 * 进行文件copy
 * @param {string} projPath package.json所在的路径
 */
function runCopy(projPath) {
  let files = fs.readdirSync(libsPath);

  files.forEach((ele) => {
    let orginFile = path.resolve(libsPath, ele);
    let targetFile = path.resolve(projPath, ele);
    fs.copyFile(orginFile, targetFile, function (err) {
      if (err) {
        console.log(err);
        return;
      }

      console.log(`copy ${ele} 成功！`);
    });
  });
}

/**
 * 文件开始执行
 */
function start() {
  queryProjectPackagesJsonPath();
}

start();

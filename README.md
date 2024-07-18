# Tree Shaking Demo

一个简单的 Tree Shaking Demo，执行 `npm run build` 后，打开 `./bundle.js` 查看效果。

默认导出（`default export`）会导致无法进行 Tree Shaking，哪怕我们没有使用 `sub` 函数，但是它仍然被包含在打包后的文件中。

更多内容请见 [elvinn wiki - Tree Shaking](https://elvinn.wiki/frontend-other/tree-shaking.html)。

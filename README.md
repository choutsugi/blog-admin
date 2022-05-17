# blog-admin

## 一、创建项目

创建项目：

```bash
yarn create vite
# 项目名：blog-admin
# 框架：Vue
# 环境：TypeScirpt
```

安装依赖：

```yarn
yarn
```

 运行：

```bash
yarn dev
```

## 二、项目配置

### 2.1 约束代码风格

#### Eslint+Prettier

安装依赖：

```bash
yarn add prettier eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue vue-eslint-parser @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
```

配置文件：.eslintrc.json

```json
{
  "root": true,
  "env": {
    "es2021": true,
    "node": true,
    "browser": true
  },
  "globals": {
    "node": true
  },
  "extends": [
    //    "plugin:vue/essential",
    /** @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#recommended-configs */
    //    "plugin:@typescript-eslint/recommended",
    //    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    /**@see https://github.com/prettier/eslint-plugin-prettier#recommended-configuration */
    "plugin:prettier/recommended"
  ],
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "@typescript-eslint/parser",
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "ignorePatterns": [
    "types/env.d.ts",
    "node_modules/**",
    "**/dist/**"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/no-v-html": "off",
    "vue/multi-word-component-names": "off",
    // "space-before-blocks": "warn",
    // "space-before-function-paren": "error",
    // "space-in-parens": "warn",
    // "no-whitespace-before-property": "off",
    "no-var": "error",
    "prettier/prettier": "error",
    "no-console": "warn",
    // 禁用 debugger
    "no-debugger": "warn",
    // 禁止重复 case 标签
    "no-duplicate-case": "warn",
    // 禁止空语句块
    "no-empty": "warn",
    // 禁止不必要的括号
    "no-extra-parens": "warn",
    // 禁止对 function 声明重新赋值
    "no-func-assign": "warn",
    // 禁止不可达代码
    "no-unreachable": "warn",
    // 强制统一括号风格
    "curly": "warn",
    // 强制 switch 语句中有 default 分支
    "default-case": "warn",
    // 强制使用 . 号
    "dot-notation": "warn",
    // 强制使用===和!==
    "eqeqeq": "warn",
    // 禁止 if 语句中 return 语句之后有 else 块
    "no-else-return": "warn",
    // 禁止空函数
    "no-empty-function": "warn",
    // 禁用不必要的嵌套块
    "no-lone-blocks": "warn",
    // 禁止多个空格
    "no-multi-spaces": "warn",
    // 禁止多次声明同一变量
    "no-redeclare": "warn",
    // 禁止在 return 语句中使用赋值语句
    "no-return-assign": "warn",
    // 禁用不必要的 return await
    "no-return-await": "warn",
    // 禁止自我赋值
    "no-self-assign": "warn",
    // 禁止自身比较
    "no-self-compare": "warn",
    // 禁止不必要的 catch 子句
    "no-useless-catch": "warn",
    // 禁止多余的 return 语句
    "no-useless-return": "warn",
    // 禁止变量声明与外层作用域的变量同名
    "no-shadow": "off",
    // 允许delete变量
    "no-delete-var": "off",
    // 强制数组方括号中使用一致的空格
    "array-bracket-spacing": "warn",
    // 强制在代码块中使用一致的大括号风格
    "brace-style": "warn",
    // 强制使用骆驼拼写法命名约定
    "camelcase": "warn",
    // 强制使用一致的缩进
    "indent": "off",
    // 禁止 if 作为唯一的语句出现在 else 语句中
    "no-lonely-if": "warn",
    // 禁止空格和 tab 的混合缩进
    "no-mixed-spaces-and-tabs": "warn",
    // 禁止出现多行空行
    "no-multiple-empty-lines": "warn",

    "semi": ["error", "always"]
  }
}
```

配置文件：.editorconfig

```
root = true

[*]
charset = utf-8
# end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
ij_html_quote_style = double
max_line_length = 120
tab_width = 2
trim_trailing_whitespace = true
```

配置文件：.prettierrc.json

```json
{
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "vueIndentScriptAndStyle": true,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "bracketSpacing": true,
  "trailingComma": "es5",
  "jsxBracketSameLine": true,
  "jsxSingleQuote": false,
  "arrowParens": "always",
  "insertPragma": false,
  "requirePragma": false,
  "proseWrap": "never",
  "htmlWhitespaceSensitivity": "ignore",
  "endOfLine": "auto",
  "rangeStart": 0
}
```

配置文件：.prettierignore

```
node_modules
dist
```

### 2.2 配置引用别名

安装依赖：

```bash
yarn add @types/node -D
```

配置文件：vite.config.ts

```typescript
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

IDE支持：tsconfig.json

```json
{
  "compilerOptions": {
    "target": "esnext",
    "useDefineForClassFields": true,
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "lib": [
      "esnext",
      "dom"
    ],
    "skipLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.d.ts",
    "src/**/*.tsx",
    "src/**/*.vue"
  ],
  "references": [
    {
      "path": "./tsconfig.node.json"
    }
  ]
}
```
# 说明

##  环境准备

### node环境安装

```shell

yum install -y git
git clone git://github.com/cnpm/nvm.git ~/.nvm && cd ~/.nvm \
  && git checkout `git describe --abbrev=0 --tags`

echo ". ~/.nvm/nvm.sh" >> /etc/profile

source /etc/profile
# vscode shell用
echo  ". ~/.nvm/nvm.sh" >> ~/.bashrc
source ~/.bashrc

nvm list-remote
nvm install v14.18.1
nvm ls

node -v

```

### 本地监听执行

```shell

npm install -g nodemon
# package.json
"scripts": {
  "dev": "nodemon --watch 'src/**/*.ts' --exec ts-node src/main.ts"
}

```

### Typescript添加

```shell
npm install -g typescript ts-node
yarn add typescript @types/node --dev
yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser --dev

```
#### tsconfig.json

```json

{
  "compilerOptions": {
    "strict": true,
    "allowJs": true,
    "target": "esnext",
    "module": "esnext",
    "noImplicitAny": true,
    "outDir": "lib",
    "removeComments": true,
    "preserveConstEnums": true,
    "importHelpers": true,
    "moduleResolution": "node",
    "experimentalDecorators": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "sourceMap": true,
    "baseUrl": ".",
    "types": [
      "node"
    ],
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
    "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ]
  },
  "include": [
    "src/**/*",
    "__test__/**/*"
  ],
  "exclude": [
    "node_modules",
    "**/*.spec.ts"
  ]
}


```

#### .eslintrc.js

```javascript

module.exports = {
  extends: [
    '@tencent/eslint-config-tencent/ts',
    '@tencent/eslint-config-tencent/prettier',
  ],
}


```

#### prettier

```shell
yarn add  prettier eslint-plugin-prettier --dev

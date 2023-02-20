# laravel-vue

## Information may you needed to run this repo
```bash
# node version 14.21.2 and npm version 6.14.17
# check your node and npm version
$ node -version or npm -version
```

## Environment 
- Laravel 8
- Vue Version: 2.6.12
- Default Port: 8000

## Step 1: clone the repository
```bash
$ git clone https://github.com/1st-emperor/laravel-vue.git
# direct to folder after you clone
```

## Step 2: install laravel dependency with composer
```bash
# wait until Publishing complete
$ composer require laravel/installer
```

## Step 3: install node_modules/dependencies
```bash
# you can use npm or yarn
# if you want to use yarn delete package-lock.json
$ yarn install or npm install
```

## Step 4: run this command for dummy api
```bash
# if you fail try to kill port running on 9000
# or you can just replace the port on folder resources->js->store->index.js
$ npx json-server --watch db.json --port 9000
```

## Step 5: after installation is finish run this command
```bash
$ php artisan serve
$ npm run watch
```

# karma-jquery-expect

Framework for [jquery-expect](https://github.com/Codecademy/jquery-expect). A DOM assertion library built on top of jQuery and based on LearnBoost's expect.js

## Installation

The easiest way is to keep `karma-jquery-expect` as a devDependency in your `package.json`.
```json
{
  "devDependencies": {
    "karma": "~0.10",
    "karma-jquery-expect": "~0.1"
  }
}
```
You can simple do it by:
```bash
npm install karma-jquery-expect --save-dev
```
## Configuration

Following code shows the default configuration...
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    framework: ['jquery-expect'],
  });
};
```

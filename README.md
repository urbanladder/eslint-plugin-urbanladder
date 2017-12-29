# eslint-plugin-urbanladder

A set of rules for enforcing naming conventions and coding styles specific to Urban Ladder.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-urbanladder`:

```
$ npm install eslint-plugin-urbanladder --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-urbanladder` globally.

## Usage

Add `urbanladder` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "urbanladder"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "urbanladder/analytics-event-naming": 2
    }
}
```

or you can choose to enable rules for particular files by adding

```js
/* eslint-enable urbanladder/analytics-event-naming */

var foo = 1
...
```


## Supported Rules

* `urbanladder/analytics-event-naming` - Make sure event categories, actions and label literals follow the event naming convention.
Enable this rule in files that contain the categories, actions and labels for it to take effect.

```js
// error
const categories = {
  HOME: 'Home'
}

const categories = {
  HOME: 'home_page'
}

// correct

const categories = {
  HOME: 'home'
}
```

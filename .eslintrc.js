module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "browser": true
    },
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [2, 4],
        "quotes": [2, "single"],
        "linebreak-style": [2, "windows"],
        "semi": [2, "always"],
        "eqeqeq": ["error", "always"],
        "comma-dangle": ["error", "never"]
    },
    "extends": "eslint:recommended"
};

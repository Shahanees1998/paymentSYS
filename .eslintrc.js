module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        'plugin:@next/next/recommended',
        "eslint:recommended", "next"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        "@typescript-eslint/no-misused-promises": [
            "error",
            {
              "checksVoidReturn": false
            }
          ]
        
    },
    "globals": {
        JSX: true,
        React: true
    }
}

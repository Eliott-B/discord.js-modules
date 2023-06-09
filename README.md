# DISCORD.JS MODULES

## DESCRIPTION

This is a collection of modules that I use in my discord bots. I hope you find them useful.

## PREREQUISITES

- [Node.js](https://nodejs.org/en/download/)
- [Discord.js](https://discord.js.org/#/)

## INSTALLATION

1. Clone the repository

```bash
git clone https://github.com/Eliott-B/discord.js-modules.git
```

2. Copy 'modules' folder in your project
3. Call the module in your file

```js
const { Button, Embed } = require('./modules');

const button = new ActionRowBuilder()
            .addComponents(
                button('id','label','type',null ,false) // link, disabled
            );
```

## CONTRIBUTORS

- [Eliott-B](https://github.com/Eliott-B)

## LICENSE

[MIT](https://choosealicense.com/licenses/mit/)

## HELP

If you need help, you can contact me on Discord: `.eliottb`.

## DONATE

If you want to support me, you can donate on [BuyMeACoffee](https://www.buymeacoffee.com/eliottb)

<a href="https://www.buymeacoffee.com/eliottb"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=eliottb&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" /></a>
# onNotifications 
![kanna eat ping](https://user-images.githubusercontent.com/84064124/233832194-41d83ead-f9b2-4a49-b4ce-f45f4d48387c.gif)

A **lightweight** and **fast** javascript wrapper to fetch notifications using [**anilist.co**](https://anilist.co) graphql API.

## Install
### Through terminal
```sh
$ .. install purpleblueslime/onNotifications
```
## import
```js
import notify from 'notifications';
```
## `new notify()`
```js
var notifyBot = new notify();
```

## funcs

## `onReady(..)`
```js
notifyBot.onReady(() => {});
```
By **default** it'll log-
```bash
Ready! uwu
```

## `onNotification(..)`
```js
notifyBot.onNotification((notif) => {..});
```
**SLIME:** func to run on notif.

## `run(..)`
```js
notifyBot.run(token);
```
**SLIME:** token is not optional! *duh dummy.*


## Copy & paste snippet
```js
import notify from 'notifications';

var notifyBot = new notify();

notifyBot.onNotification((notif) =>
  console.log(notif));

notifyBot.run(token); // Your actual freaking token here..

```
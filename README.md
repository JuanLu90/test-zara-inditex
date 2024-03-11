# ZARA WEB CHALLENGE

This is a test to join as Engineer Javascript for Zara - Inditex.

### To run the project
Go into Zara-inditex-test and:

- run: `npm i & npm start`
- for tests run `npm run test`

### Technologies:

- React - create-react-app
- Context-API
- Styled-Components
- Jest y RTL (Testing)
- Eslint (Linter) and Prettier (Code formatter)

------------------------------

####  :exclamation::exclamation::exclamation: IMPORTANT :exclamation::exclamation::exclamation:
This app uses environment variables to make calls to the Marvel API, you will need to be registered and have your own public and private key.
You must configure it in the following way:
- File `.env` with three variables:
    - `REACT_APP_API_KEY_PUBLIC`: your public key
    - `REACT_APP_API_KEY_HASH`: a md5 digest of the ts parameter, your private key and your public key (e.g. md5(ts+privateKey+publicKey)
    - `REACT_APP_API_KEY_TS`: ts parameter (can be 1 for example and works fine)

Info from api documentation :
Authentication for Server-Side Applications
Server-side applications must pass two parameters in addition to the apikey parameter:

ts - a timestamp (or other long string which can change on a request-by-request basis)
hash - a md5 digest of the ts parameter, your private key and your public key (e.g. md5(ts+privateKey+publicKey)
For example, a user with a public key of "1234" and a private key of "abcd" could construct a valid call as follows: http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150 (the hash value is the md5 digest of 1abcd1234)

More info in: https://developer.marvel.com/documentation/authorization

------------------------------

I have use a 'Mobile first' approach, under a structural and creational design, trying to encapsulate the code with a defined purpose.

***services-resolver-hook-component***
First I decided to work with another layer, handle. But once I had the app up and running, I realized that it was too complex for this type of application, and I decided to delete it.

### Structure:
- src: Root folder.
- assets: Static files such as images and icons are stored here.
- components: Contains all the components
- context: React Contexts are defined here to use context API.
- hooks: Custom React Hooks are stored here. Only one was needed to manage the information in the localstorage.
- services: Api calls to get informayion about characters.
- utils: Few utilities to be used throughout the application.
- views: Contains the different and separates views of the app.


### How works:
The app has been structured by a **Nav** and a **Body**.

The nav has two interactive elements:
- the Marvel Logo: Redirect to the main view
- Heart Icon: Go to favorite list. The number next to it gives us information about the number of saved characters as favorites.

The main view displays a list of characters in cards, which shows some info about them, and one button: A heart for saved th character in a favorites list in the localstorage.
At the top there is a filter which allows us filter characters by name.

Clicking on the character card redirect to the character details, where we can find more information about it, and below, a list of comics related to the character.

# Autor

Juan Luis Moreno Calderón

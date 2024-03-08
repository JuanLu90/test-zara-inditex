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

I have use a 'Mobile first' approach, under a structural and creational design, trying to encapsulate the code with a defined purpose.

***services-resolver-hook-component***
First I decided to work with another layer. But once I had the app up and running, I realized that it was too complex for this type of application, and I decided to delete it.


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

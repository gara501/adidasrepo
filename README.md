## Adidas Client App

To develop this App I used create-react-app, reasons: 
- Avoid tedious configurations (webpack, sass support, etc)
- Last characteristics of the framework
- Easy Build Process

## Structure

This app has the following structure:
- Store.js -> General state using "useReducer" and ContextApi.
- App.js -> Using react router and Context Api
- /components -> Different componentes identified in the interface 
- /styles -> Sass implementation using a general project organization, colors and fonts obtained from the original Adidas page.
- /pages/product -> Principal page, render the information from the product service
- /pages/bag -> Secondary page, shopping cart items to checkout

## Problems Found

Due to the problem with the service I used data obtained from Json files, these json's were filled based on the data obtained from Postman.
I tried to implement the Swagger file locally, but I had problems resolving the services.
I Had problems calling the API (I didn't implement checkout methods) I was trying to do the same "process" in my side.

## How to Run this app

1. Download the code from the repo
2. run `npm install`
3. run `npm start`

This app depends of the server app, you will find the .env.development and .env.production files with the services endpoing, my advice is to use production endpoint

## URL'S
You can find the site in the following URL: https://aram-adidasclient.herokuapp.com/

## Continuous Integration

I was thinking to use CircleCI but I didn't find any reason to avoid the current option of Heroku, I implemented Heroku automatic deploy based on the updates to master branch. 


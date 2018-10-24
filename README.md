# GoogleLocation
Know your location is a web application through which you can easily track current locations and also you can search your location base on pin code, city name, area name, etc.

![Screenshot of KnowYourLocation](/src/assets/images/KnowYourLocation-search.png)
![Screenshot of KnowYourLocation](/src/assets/images/KnowYourLocation.png)

## Setup

### Prerequisites

Install Node.js & npm
Update npm using $ npm install npm -g
Install Angular Google Maps
Reference https://angular-maps.com/guides/getting-started/#setting-up-angular-google-maps

1. $ npm install -g @angular/cli
2. $ ng new KnowYourLocation
3. $ cd KnowYourLocation
4. $ npm install
5. $ npm install @agm/core --save
6. $ npm start	

### Running KnowYourLocation
1. Clone this repo or download the .zip here.
2. Navigate to this repo on your terminal and run $ npm install to install all the dependencies.
3. uncomment below code after generating google API key and replace 'YOUR_KEY' with actual key, apiKey: 'YOUR_KEY', (Inside app.module.ts)
4. Run KnowYourLocation on http://localhost:4200/ using $ npm start



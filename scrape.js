// const puppeteer = require('puppeteer');

// async function getLinks(){
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://www.facebook.com/marketplace/sydney/search?query=jeep');

//   const hrefs = await page.$$eval('a', as => as.map(a => a.href));
//   console.log(hrefs);

//   await browser.close();
// }

// getLinks();


////////////////////////////////////////////////////////


// const puppeteer = require('puppeteer');
// const fs = require('fs');

// let arrayOfItems;

// // update with your location reference from step 4
// const locationRef = 'portland';

// // list of terms you want to search for
// const searchTerms = ['Yamaha Guitar', 'Yamaha FG-300'];


// async function getItems(){
//   // open JSON file of past items
//   fs.readFile('./pastItems.json', 'utf-8', function(err, data) {
//     arrayOfItems = JSON.parse(data);
//   });
//   // setting up puppeteer
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   // loop through terms you want to search
//   for (let i = 0; i < searchTerms.length; i++){
//     // create an empty list where we will store item objects
//     const newItems = [];
//     // format any spaces in the search term before inclusion in the search URL
//     const searchTerm = searchTerms[i].replace(/ /g,'%20');
//     console.log(`\nResults for ${searchTerms[i]}:\n`);
//     // direct puppeteer to search URL
//     // the url includes a parameter to only show items listed in the last day
//     await page.goto(`https://www.facebook.com/marketplace/${locationRef}/search/?daysSinceListed=1&sortBy=best_match&query=${searchTerm}&exact=false`)
//     // evaluate the entire page HTML including script tags
//     const bodyHTML = await page.evaluate(() => document.body.outerHTML);
//     // take out the search results and parse it as JSON
//     const searchResult = JSON.parse(bodyHTML.split(/(?:"marketplace_search":|,"marketplace_seo_page")+/)[2]);
//     const items = searchResult["feed_units"]["edges"]
//     // check if there are any search results
//     // loop through each item and create an item object with attributes
//     if (items.length > 1){
//       items.forEach((val, index)=>{
//         const ID = val['node']['listing']['id'];
//         const link = `https://www.facebook.com/marketplace/item/${val['node']['listing']['id']}`;
//         const title = val['node']['listing']['marketplace_listing_title'];
//         const price = val['node']['listing']['listing_price']['formatted_amount'];

//         var item = {title: title, price: price, link: link}
//         // check if item exists in JSON file of pastItems
//         if (arrayOfItems.pastItems.includes(ID)){
//     	  } else {
//           arrayOfItems.pastItems.push(ID)
//           newItems.push(item);  
//           console.log(item);
//         }
//       });
//     }

//   }
//   await browser.close();
//   fs.writeFile('./pastItems.json', JSON.stringify(arrayOfItems), 'utf-8', function (err) {
//     if (err) throw err
//     console.log('Updated past items');
//   });
// }

// getItems();

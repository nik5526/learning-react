//now we dont need mock data anymore because we are fetching data 
// from api so we can delete this file but for future reference we are keeping this file.

const cardData = [
    
  {
    id: 1,
    restaurant_name: "Bella Italia",
    cuisines: ["Italian, Pizza"],
    rating: 4.7,
    delivery_time_minutes: 45,
    photo: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/9d38ad82-f99b-4c57-9f7b-b09c03c0268e_377799.JPG"
  },
  {
    id: 2,
    restaurant_name: "Bella Italia",
    cuisines: ["Italian", "Mediterranean"],
    rating: 4.8,
    review_count: 280,
    delivery_time_minutes: 45,
    price_range: "$$$",
    offers: [{ description: "Free garlic bread on orders above ₹500" }],
    is_open: false,
    photo: "https://imgs.search.brave.com/Mtvm6-yuYYypF8O2Wzz53tuli28FFbOwQs3zBziQ3t8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MDcvZDEvZmYvNzMv/YmVsbGEtaXRhbGlh/LmpwZw",
    location: "Koramangala, Bengaluru",
    for_two: 1500
  },
  {
    id: 3,
    restaurant_name: "Taco Fiesta",
    cuisines: ["Mexican"],
    rating: 4.0,
    review_count: 75,
    delivery_time_minutes: 20,
    price_range: "$",
    offers: [{ description: "Buy 1 Get 1 Free Tacos" }],
    is_open: true,
    photo: "https://imgs.search.brave.com/OhrTwQSmvcT2hgOZoOYYjl9eF8g5BTbW57sXx5aF6F0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90Yi1z/dGF0aWMudWJlci5j/b20vcHJvZC9pbWFn/ZS1wcm9jL3Byb2Nl/c3NlZF9pbWFnZXMv/Y2Q4MzhkZWM3OGU4/NGU1MDYzZTMyOTA2/OTAxZTEyODUvZjZk/ZWIwYWZjMjRmZWU2/ZjRiZDMxYTM1ZTZi/Y2JkNDcuanBlZw",
    location: "Jayanagar, Bengaluru",
    for_two: 400
  },
  {
    id: 4,
    restaurant_name: "Sushi Zen",
    cuisines: ["Japanese", "Seafood"],
    rating: 4.6,
    review_count: 180,
    delivery_time_minutes: 40,
    price_range: "$$$$",
    offers: [],
    is_open: true,
    photo: "https://imgs.search.brave.com/H_eDYo3Ww3lJrOXLw3aPlSJ4N_v8KlrARSy7J7Nj8Ls/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MTYvYTYvMmUvZTUv/c3VzaGktemVuLmpw/Zw",
    location: "Indiranagar, Bengaluru",
    for_two: 2500
  },
  {
    id: 5,
    restaurant_name: "Burger Town",
    cuisines: ["American", "Fast Food"],
    rating: 3.9,
    review_count: 220,
    delivery_time_minutes: 25,
    price_range: "$",
    offers: [{ description: "Free fries with every burger" }],
    is_open: false,
    photo: "https://imgs.search.brave.com/IFvS51iZHmtUa_14cWVb6BaWeidL9r77kT0Qs4EHnLU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ4/MjY1MDI3OC9waG90/by9qdWljeS1ncm91/bmQtcG9yay1hbmQt/YmFjb24tY2hlZXNl/YnVyZ2VyLXdpdGgt/ZnJpZXMuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXdpN3ly/VEdBN01CS1VIRTdi/OHgwWG5FVnIteVlw/ekpZOVhHSDlJd25J/NTg9",
    location: "Whitefield, Bengaluru",
    for_two: 350
  },
  {
    id: 6,
    restaurant_name: "Green Delight",
    cuisines: ["Vegan", "Salads"],
    rating: 4.7,
    review_count: 85,
    delivery_time_minutes: 30,
    price_range: "$$",
    offers: [{ description: "10% off on smoothie bowls" }],
    is_open: true,
    photo: "https://imgs.search.brave.com/wSauJ00SvhhKMKW4vcmvhXPbmMq9VzYe48gjOK8FGns/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Z3JlZW5jdWlzaW5l/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNS8wNS9JTUdf/NDIwNS00MDB4MjUw/LmpwZw",
    location: "HSR Layout, Bengaluru",
    for_two: 700
  },
  {
    id: 7,
    restaurant_name: "Pasta Point",
    cuisines: ["Italian"],
    rating: 4.1,
    review_count: 123,
    delivery_time_minutes: 35,
    price_range: "$$",
    offers: [{ description: "Free drink with pasta orders" }],
    is_open: true,
    photo: "https://imgs.search.brave.com/wLpDW6VblVGH10zKAMuWxZDardIfOulQcQDPJOi66kE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuZXBpY3VyaW91/cy5jb20vcGhvdG9z/LzVkYTBkOWU5MWM0/MGY0MDAwODJlNjU0/MC8xOjEvd18zMjAs/Y19saW1pdC9icm90/aHktcGFzdGEtd2l0/aC1jaGlja3BlYXMt/cmVjaXBlLUJBLTEw/MTExOS5qcGc",
    location: "Marathahalli, Bengaluru",
    for_two: 900
  },
  {
    id: 8,
    restaurant_name: "The Spice Route",
    cuisines: ["Indian", "Asian Fusion"],
    rating: 4.3,
    review_count: 145,
    delivery_time_minutes: 28,
    price_range: "$$$",
    offers: [],
    is_open: true,
    photo: "https://imgs.search.brave.com/2ZviYzIc0I6tj4OXE3C1LG_9-3PB1ceuH8JBcSEmCx4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dG9wMjVyZXN0YXVy/YW50cy5jb20vbWVk/aWEvaW1nLzIwMjMv/MDgvd29ybGRzLWJl/c3QtcmVzdGF1cmFu/dC10aGVfc3BpY2Vf/cm91dGUtZGVsaGku/anBn",
    location: "Koramangala, Bengaluru",
    for_two: 1200
  },
  {
    id: 9,
    restaurant_name: "Dessert Dreams",
    cuisines: ["Desserts", "Cafe"],
    rating: 4.9,
    review_count: 200,
    delivery_time_minutes: 15,
    price_range: "$",
    offers: [{ description: "Free coffee with every cake slice" }],
    is_open: true,
    photo: "https://imgs.search.brave.com/NILyEJ1I6q_7sluj0G-b9YhNq0DMUli0LJMID70VJUo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c3dlZXRkcmVhbXNk/ZXNzZXJ0cy5jby51/ay9pbWcvc3dlZXRf/ZHJlYW1zX3dhZmZs/ZS5qcGc",
    location: "MG Road, Bengaluru",
    for_two: 500
  },
  {
    id: 10,
    "restaurant_name": "Spice Symphony",
  "cuisines": ["Indian", "Chinese", "Continental"],
  "photo": "https://imgs.search.brave.com/dLDSvSk0VWhJwAFEZGmUKc03_aVTVHKYZGQEAow4p8c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kMnM3/NDJpZXQzZDN0MS5j/bG91ZGZyb250Lm5l/dC9yZXN0YXVyYW50/cy9yZXN0YXVyYW50/LTIzNzYwOTAwMDAw/MDAwMDAwMC9yZXN0/YXVyYW50X2xpc3Rf/aW1hZ2VfMTc0MDQ4/OTY0Ni5wbmc",
  "rating": 4.5,
  "review_count": 132,
  "delivery_time_minutes": 30,
  "serving_qty": 1,
  "for_two": 400,
  "serving_unit": "order",
  "serving_weight_grams": 500,
  "price_range": "$$",
  "offers": [
    {"description": "20% off on first order", "code": "FIRST20"},
    {"description": "Free dessert on orders above $25"}
  ]
  },
  {
    id: 11,
    restaurant_name: "Tandoor Royale",
    cuisines: ["North Indian", "Mughlai"],
    rating: 4.7,
    review_count: 210,
    delivery_time_minutes: 35,
    price_range: "$$$",
    offers: [{ description: "15% off on weekend buffet" }],
    is_open: true,
    photo: "https://imgs.search.brave.com/2gdx8iMGLSho6o1CmvjTX9zp4JPm9oS5EGqiGiedUX4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90Yi1z/dGF0aWMudWJlci5j/b20vcHJvZC9pbWFn/ZS1wcm9jL3Byb2Nl/c3NlZF9pbWFnZXMv/NzE3MjEwZTUzYmYw/NDcwOGIxZjVlOGMy/MjdlMjRhYzMvZjZk/ZWIwYWZjMjRmZWU2/ZjRiZDMxYTM1ZTZi/Y2JkNDcuanBlZw",
    location: "MG Road, Bengaluru",
    for_two: 1300
  },
  {
    id: 12,
    restaurant_name: "Malabar Spice",
    cuisines: ["South Indian", "Seafood"],
    rating: 4.4,
    review_count: 180,
    delivery_time_minutes: 40,
    price_range: "$$",
    offers: [{ description: "Free dessert on orders over ₹600" }],
    is_open: false,
    photo: "https://imgs.search.brave.com/eUCfpua2M4VzQKObG_TLnyIcyelg1VeyGK9vfumPBdU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/Y29uY3JldGVwbGF5/Z3JvdW5kLmNvbS9j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wOC9N/YWxhYmFyLURhcmxp/bmdodXJzdC1zdXBw/bGllZC0xLmpwZWc",
    location: "Whitefield, Bengaluru",
    for_two: 900
  }
];

export default cardData;

export const restaurantData = {
  "restaurants": [
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "553371",
        "name": "Chinese Wok",
        "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
        "locality": "C Block",
        "areaName": "Sector 18",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Chinese",
          "Asian",
          "Tibetan",
          "Desserts"
        ],
        "avgRating": 4.1,
        "parentId": "61955",
        "avgRatingString": "4.1",
        "totalRatingsString": "2.0K+",
        "sla": {
          "deliveryTime": 18,
          "lastMileTravel": 1.5,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "1.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-09-12 01:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "android/static-assets/icons/big_rx.png",
              "description": "bolt!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "android/static-assets/icons/big_rx.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹129"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-89db02a2-f53a-47db-959b-830f21c16998"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/noida-1/chinese-wok-c-block-sector-18-rest553371",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "553848",
        "name": "Big Bowl",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_553848.JPG",
        "locality": "C Block",
        "areaName": "Sector 18",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Chinese",
          "Tibetan",
          "Desserts"
        ],
        "avgRating": 4.2,
        "parentId": "434792",
        "avgRatingString": "4.2",
        "totalRatingsString": "1.8K+",
        "sla": {
          "deliveryTime": 18,
          "lastMileTravel": 1.5,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "1.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-09-12 01:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "android/static-assets/icons/big_rx.png",
              "description": "bolt!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "android/static-assets/icons/big_rx.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹129"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-89db02a2-f53a-47db-959b-830f21c16998"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/noida-1/big-bowl-c-block-sector-18-rest553848",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "377799",
        "name": "Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/9d38ad82-f99b-4c57-9f7b-b09c03c0268e_377799.JPG",
        "locality": "Sector 27",
        "areaName": "Sector 18",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 4.3,
        "parentId": "721",
        "avgRatingString": "4.3",
        "totalRatingsString": "4.2K+",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 1,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "1.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-09-12 04:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹99"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.1",
            "ratingCount": "428"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-89db02a2-f53a-47db-959b-830f21c16998"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/noida-1/pizza-hut-sector-27-sector-18-rest377799",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "736176",
        "name": "Olio - The Wood Fired Pizzeria",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6075c5c4-e4d3-43f6-b481-62f9f8cfa2b1_736176.JPG",
        "locality": "D Block",
        "areaName": "Sector 10",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Italian",
          "Fast Food",
          "Snacks",
          "Beverages",
          "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "11633",
        "avgRatingString": "4.4",
        "totalRatingsString": "2.5K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 2.7,
          "serviceability": "SERVICEABLE",
          "slaString": "30-40 mins",
          "lastMileTravelString": "2.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-09-12 05:29:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹99"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-89db02a2-f53a-47db-959b-830f21c16998"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/noida-1/olio-the-wood-fired-pizzeria-d-block-sector-10-rest736176",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "39294",
        "name": "KFC",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/f73dd48f-0ded-4d59-90f5-bdc8c7c756e6_39294.JPG",
        "locality": "Sector 18",
        "areaName": "Sector 18",
        "costForTwo": "₹450 for two",
        "cuisines": [
          "Burgers",
          "Fast Food",
          "Rolls & Wraps"
        ],
        "avgRating": 4.4,
        "parentId": "547",
        "avgRatingString": "4.4",
        "totalRatingsString": "14K+",
        "sla": {
          "deliveryTime": 14,
          "lastMileTravel": 1.3,
          "serviceability": "SERVICEABLE",
          "slaString": "10-15 mins",
          "lastMileTravelString": "1.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-09-12 02:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "android/static-assets/icons/big_rx.png",
              "description": "bolt!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "android/static-assets/icons/big_rx.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹99"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.0",
            "ratingCount": "1.5K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-89db02a2-f53a-47db-959b-830f21c16998"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/noida-1/kfc-sector-18-rest39294",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "21239",
        "name": "Burger King",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/9e14fd7c-0bd4-4f06-86c4-db169bf00998_21239.jpg",
        "locality": "Sector 38",
        "areaName": "Sector 38",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.4,
        "parentId": "166",
        "avgRatingString": "4.4",
        "totalRatingsString": "25K+",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 2.8,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "2.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-09-12 01:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹59"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.7",
            "ratingCount": "45"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-89db02a2-f53a-47db-959b-830f21c16998"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/noida-1/burger-king-sector-38-rest21239",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "323600",
        "name": "Dana Choga",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/29/f74fc994-9230-4a5e-b109-1ff1ce65cd98_323600.JPG",
        "locality": "Golf Course",
        "areaName": "Sector 41",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "North Indian",
          "Indian",
          "Mughlai",
          "Chinese",
          "Biryani",
          "Beverages",
          "Desserts"
        ],
        "avgRating": 4.5,
        "parentId": "5179",
        "avgRatingString": "4.5",
        "totalRatingsString": "9.1K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-09-12 00:30:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-89db02a2-f53a-47db-959b-830f21c16998"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/noida-1/dana-choga-golf-course-sector-41-rest323600",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "999643",
        "name": "Thalaiva Biryani",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/9/94623b31-b11a-46f1-9de5-245b2b3213d0_999643.JPG",
        "locality": "D Block",
        "areaName": "Sector 2, Noida",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Biryani",
          "Mughlai",
          "Lucknowi",
          "Hyderabadi",
          "Kebabs",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.2,
        "parentId": "582792",
        "avgRatingString": "4.2",
        "totalRatingsString": "118",
        "sla": {
          "deliveryTime": 22,
          "lastMileTravel": 2.8,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "2.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-09-11 23:59:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹89"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-89db02a2-f53a-47db-959b-830f21c16998"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/noida-1/thalaiva-biryani-d-block-sector-2-noida-rest999643",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
  ],
  "theme": "SeoRestaurantListingGridWidget"
}

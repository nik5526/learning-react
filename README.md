# Namaste React 🚀.

<!-- {cardData.map((restaurant) => (
                    <Cards key={restaurant.id} restData={restaurant} />
                ))} -->
<!-- by using this we dont have to worry about the cards by increase in no of cards it will set itself and increase automatically 
                without us doing anything if we delete the data it will delete automatically . It is just like we are using loop in the cards  */}

                            {/* or */}
                {/* <Cards restData = {cardData[0]}/>
                <Cards restData = {cardData[1]}/>
                <Cards restData = {cardData[2]}/>
                <Cards restData = {cardData[3]}/>
                <Cards restData = {cardData[4]}/>
                <Cards restData = {cardData[5]}/>
                <Cards restData = {cardData[6]}/>
                <Cards restData = {cardData[7]}/>
                <Cards restData = {cardData[8]}/>
                <Cards restData = {cardData[9]}/>
                <Cards restData = {cardData[10]}/>
                <Cards restData = {cardData[11]}/> -->
React is called a single page component.
# Two types of routing in web apps are
- Client side routing -- in client side routing it does not make a network call because it already has that data(about page ,ContactUs page) inside our app so that's why it is very fast. 

- Server side routing -- in server side routing it relods the whole page and send the network call to the about.html and fetch the data and render it to the webpage.

 # now we will create our own hooks - it is used for optimizing our app.
- First we will delete the function that is fetching the api .
- Then we have to create the component in the utility section and there we have to add our fetch data hook .
- Make sure to initialise the name with the hook name that is best practise.
- Name custom hooks with use word, as react also reccomend us to do that ,we can name it anything but     good practice is to use the (use) keyword at the start of the naming.

# just pasting my css for further use.
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.Header{
    display: flex;
    justify-content: space-between;
    border: 0px solid black;
    align-items: center;
}

#logo{
    width: 150px;
    height: 150px;
}


.nav-bar ul{
    display: flex;
    gap: 6rem;
    padding: 0 20px;
    
}

.nav-bar ul li{
    list-style: none;
    font-size: 25px;
    font-weight: bold;
    text-decoration: none;
    color: black;
}

.login-btn{
    padding: 0.7rem 1.5rem;
    background-color: white;
    border-radius: 0.3rem;
    border: 1.7px solid grey;
    font-weight: bolder;
    font-size: 15px;
    letter-spacing: 1px;
    cursor: pointer;
}

.resturant-card{
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    /* grid-template-columns: repeat(auto-fit, minmax(4, 1fr)); */
    /* grid-template-rows: repeat(2,1fr); */
}

.app-body{
    padding: 1rem;
    width: 100%;
    background: whitesmoke;
}

.Search input{
    width: 20%;
    padding: 0.8rem;
    margin-left: 2.1rem;
}
.filter-btn{
    padding: 0.7rem 1.5rem;
    background-color: white;
    margin: 0 1rem;
    border-radius: 0.3rem;
    color: grey;
    border: 1.7px solid grey;
    font-weight: bolder;
    letter-spacing: 1px;
    cursor: pointer;
}

.search-btn{
    padding: 0.7rem 1rem;
    background-color: white;
    margin: 0 1rem;
    border-radius: 0.3rem;
    color: grey;
    border: 1.7px solid grey;
    font-weight: bolder;
    letter-spacing: 1px;
    cursor: pointer;
}
.card{
    border: 0px solid black;
    width: 310px;
    height: 380px;
    margin: 20px;
    padding: 0.5rem;
    line-height: 2rem;
    background: #dadfea;
    background-image: linear-gradient(-180deg, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%);
    background-blend-mode: lighten;
    box-shadow: 10px 0 13px -4px grey, -12px 0 13px -4px grey;
    transition: all 0.3s linear 0s;
    border-radius: 0.8rem;

    /* text-align: center; */
}
.rest-cuisines{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%; /* or set a max-width as needed */
    display: block;
}
.card:hover{
    transform: scale(1.03);
    box-shadow: 0px 0px 20px black;
    box-shadow: 0px 0px 20px black;
}

.card-image img{
    width: 100%;
    height: 220px;
    border-radius: 0.8rem;
}
.rating{
    display: flex;
    justify-content: space-between;
    color: grey;
}

.shimmer-container{
    display: flex;
    flex-wrap: wrap;
}

.shimmer-card{
    border: 0px solid black;
    width: 320px;
    height: 350px;
    margin: 20px;
    padding: 0.5rem;
    line-height: 2rem;
    background: white;
    background-image: linear-gradient(-180deg, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%);
    background-blend-mode: lighten;
    box-shadow: 10px 0 13px -4px grey, -12px 0 13px -4px grey;
    border: 2px solid rgba(255,255,255,0.6); /* Light semi-transparent border */
    /* border-radius: 16px; */
    transition: all 0.3s linear 0s;
    border-radius: 0.8rem;

    /* text-align: center; */
    animation: shimmer 1.5s infinite;
}

.routing-error{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.contact-page{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.about-page{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.restaurant-details{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.link{
    text-decoration: none;
    color: black;
}
.link:hover{
    color: grey;
}
.user-page{
    width: 25rem;
    margin-top: 1rem;
    padding: 1rem;
    border: 1px solid grey;
    border-radius: 0.5rem;
    background-color: white;
    box-shadow: 0px 0px 10px grey;
}

.offline-message{
    text-align: center;
    margin-top: 2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.5rem;
}
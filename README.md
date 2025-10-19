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

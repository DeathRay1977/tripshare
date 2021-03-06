## Tripshare

Tripshare is a website application created by Andrew Dowell, Norm Fasey, Pablo Dominguez and Jamie Rose.

Technologies Used:

* Ruby On Rails API only backend

* HTML & CSS

* JavaScript and AngularJS

* Google Maps: Places API

* PostgreSQL


# Planning

We created a drawing in draw.io of what we would like the page to look like.

![Imgur](http://i.imgur.com/AIaXC2W.png)

Our initial user stories

```
As a user
So I can post my trips
I would like to be able to sign up

As a user
So I can post new trips
I would like to be able to sign in

As a user
So that I can save my favorites
I would like to be able to add a trip to my favorites trips

As a user
So that I can use the app
I would like to be able to add a new trip

As a user
So that I can use the app
I would like to be able to add a point of interest to my trip

As a user
So that I can find interesting places to visit when I am travelling
I would like to be able to search trips by area

As a user
So that I can find trips which are suitable to me
I would like to be able to filter trips by tag

As a user
So that I can see the most popular trips
I would like to see a list of the best rated trips
```


#How to use:

When you first visit the page at https://tripshare-frontend.herokuapp.com/ you will be greeted by:

![Imgur](http://i.imgur.com/XTTnH3N.png)

To add a trip, click the top button for add trip

![Imgur](http://i.imgur.com/XTTnH3N.png)

Enter a title and a location of the trip destination.  You can search for places to add to your trip by using the search bar at the top of the screen (this is the Google Maps Places API).

![Imgur](http://i.imgur.com/F0nV59n.png)

Press enter to search: this will display up to 20 search results.

![Imgur](http://i.imgur.com/6nIEQrw.png)

Add points of interest to your trip by clicking the add button on the search results.

![Imgur](http://i.imgur.com/Psz09sw.png)

Once you are happy with your trip, click submit and the screen will clear.

![Imgur](http://i.imgur.com/9zl7PKD.png)

Visit the homepage and you will see your added trip there, listing all locations.  This data is persistent and is saved on an external server.

![Imgur](http://i.imgur.com/9zl7PKD.png)


##EXTERNAL SERVER:

The server is a Rails app which is configured to respond only in JSON.  When you visit the backend server at https://tripshare-server.herokuapp.com/trips you will see the JSON data which it returns to the frontend.

![Imgur](http://i.imgur.com/8u9NMa6.png)

You can nest your search to view individual records by using the route ID. e.g. https://tripshare-server.herokuapp.com/trips/2

This will return the data (including points of interest data) which is relevant to the ID of that particular trip.

![Imgur](http://i.imgur.com/4jP2yaE.png)


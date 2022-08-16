//page 1 for zomato
>list of cities
>> (GET)http://localhost:11001/location
>>(LIVE)https://foodwebpag.herokuapp.com/location
>list of restaurents
>> (GET)http://localhost:11001/restaurants
>>(LIVE)https://foodwebpag.herokuapp.com/restaurants
>menu basics of city
>> (GET)http://localhost:11001/restaurants?stateId=1
>>(LIVE)https://foodwebpag.herokuapp.com/restaurants?stateId=1
>List of QuickSerach
>> (GET)http://localhost:11001/mealtype
>>(LIVE)https://foodwebpag.herokuapp.com/mealType

//page 2
>List of restaurents basics of mealType
>>(GET)http://localhost:11001/restaurants
>>(LIVE)https://foodwebpag.herokuapp.com/restaurants
>Filter on basis of cuisine
>> (GET)http://localhost:11001/filter/1?cuisineId=2 
>>(LIVE)https://foodwebpag.herokuapp.com/filter/1?cuisineId=2
>Filter on basis of cost
>> (GET)http://localhost:11001/filter/1?lcost=700&hcost=1200 
>>(LIVE)https://foodwebpag.herokuapp.com/filter/1?lcost=700&hcost=1200
>Sort on basis of cost
>> (GET)http://localhost:11001/filter/1?lcost=500&hcost=1200&sort=-1
>>(LIVE)https://foodwebpag.herokuapp.com/filter/1?lcost=500&hcost=1200&sort=-1

//page 3
>Details of restaurent
>> (GET)http://localhost:11001/details/2
>>(LIVE)https://foodwebpag.herokuapp.com/details/2
>Menu of the restaurent
>> (GET)http://localhost:11001/menu/4
>>(LIVE)https://foodwebpag.herokuapp.com/menu/4

//page 4
>Menu details of selected items
(POST)http://localhost:11001/menuItems
>>(LIVE)https://foodwebpag.herokuapp.com/menuItems
pass[1,3,4,5]//json file
>option to place order
(POST)http://localhost:11001/placeOrder
>>(LIVE)https://foodwebpag.herokuapp.com/placeOrder

//page 5
>List of order placed
(GET)http://localhost:11001/orders
>>(LIVE)https://foodwebpag.herokuapp.com/orders
>list of order placed of perticular user
(GET)http://localhost:11001/orders?satheeshsathish1234@gmail.com
>>(LIVE)https://foodwebpag.herokuapp.com/orders?satheeshsathish1234@gmail.com
>update order status
(PUT)http://localhost:11001/updateorder/1
>>(LIVE)
////other api's
>Delete order
(DELETE)http://localhost:11001/updateorder/1
>>(LIVE)

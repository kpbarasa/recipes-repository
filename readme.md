<h4>Project: User manager :<h4>

<p>
This is ab simple ack-end user manager is a system built using the model viewer controller frame work using Node js, Express js and Mongo Atlas DB. The system exposes endpoints that allow for user access control, password recovery, Session management, user data management (CRUD operations on user data). The endpoints are secured using middleware and session cookies to authorize access. 
</p>

The system should expose endpoints that provide the following services:
</br>

1. Save recipe: 
        @ recipe
</br>
        @ steps
</br>
        @ nutrition
</br>
        @ ingridients
</br>
        @ tools
</br>
        @ cuisine
</br>
        @ Diet
</br>
        @ Category
</br>
        @ Sub Category
</br>

   
2. Delete recipe,
</br>
        @ steps
</br>
        @ nutrition
</br>
        @ ingridients
</br>
        @ tools
</br>
        @ cuisine
</br>
        @ Diet
</br>


3. Fetch recipes, Filter:
</br>
        @ recipe id
</br>
        @ ingridients
</br>
        @ cuisine
</br>
        @ Diet
</br>
        @ tags
</br>


5. Access control (route authentication through sessions)
</br>


6. Reporting (morgan)


<h5>Software ======================================================================================================================================================= </h5>

1. Node js 
2. Express js

<h5>Libraries =======================================================================================================================================================</h5>

Dev dependences:
1.  nodemon 

Dependences:
1.  body-parser
2.  cors
3.  dotenv
5.  express
6.  express-fileupload
8.  mongoose
9.  morgan

<h5>Database</h5>
•	Mongo DB 

<h4>Components
=================================================================================================================================================</h4>

<h5>1  Server(server.js) ============================================================================</h5>
<h5>2  App(app.js) ==================================================================================</h5>



<h5>3 models (Data models)  =========================================================================</h5>

      Recipe Models:
</br>

      1.  Recipe  (recipe.model.js)       
</br>
      2.  Recipe  (recipe_steps.model.js)
</br>
      3.  Recipe  (recipe-tags.model.js)
</br>
      4.  Recipe  (recipe-tools.model.js)
</br>
      5.  Recipe  (recipe-ingridients.model.js)
</br>
      6.  Recipe  (recipe-cuisine.model.js)
</br>
      7.  Recipe  (recipe-nutrition.model.js)
</br>
      8.  Recipe  (categories.model.js)
</br>
      9.  Recipe  (recipe-sub-categories.model.js)
</br>
      10. Recipe  (recipe-steps.model.js)
</br>
      11. Recipe  (recipe-reviews.model.js)
</br>
      12. Recipe  (recipe-diet.model.js)
</br>
      13. Recipe  (recipe-alergies.model.js)
<br>  

      Recipe user Models:
</br>

      1.  User  (account-user-session.model.js)
</br>
      2.  User  (account-user.model.js)
</br>
      3.  User  (user-recipe-alergies.model.js)
</br>
      4.  User  (user-recipe-collections.model.js)
</br>
      5.  User  (user-recipe-cuisine.model.js)
</br>
      6.  User  (user-recipe-diet.model.js)
</br>
      7.  User  (user-recipe-ingridients.model.js)
</br>
      8.  User  (user-recipes.model.js)
</br>


<h5>4 Config files  =================================================================================</h5>

1. .Config.env:

# Node Config
NODE_ENV="development"
PORT = 5000
PROD_PORT = 
ATLAS_URI = 
<br> 

2. db.js:
3. passport.js
</br>

<h5>5 Controllers  ==============================================================================</h5>

1.  (admin.controllers.js)
<ul>
	<li>
		@controller  test 
<br> 
	    @desc    test usrl
<br> 
        @route   GET: /test
	</li>
</ul>

2.  (recipe.controllers.js)
<ul>
	<li>
		@controller  register 
<br> 
	    @desc    Register user 
<br> 
        @route   POST: /register
<br> 
        @Model   /models/user.data.model
	</li>
</ul>

<br> 


<h5> 6 error handlers(handlers)  ===================================================================== </h5> 

1. errorHandler.js
<ul>
	<li>
	catchErrors
	</li>
	<li>
	    mongoseErrors
	</li>
	<li>
	    developmentErrors
	</li>
	<li>
	    productionErrors
	</li>
	<li>
	    notFound
	</li>
	<li>
	    MongoServerSelectionError
	</li>
</ul>


<h5> 7 middleware  ==================================================================================== </h5> 
	auth-session.middleware:
<br> 
   "Authenticates users account  end points using session variables"
<br> 

<h5> 8 Git ignore files =============================================================================== </h5> 

1.    /node_module
2.    /config/config.env


<h5> 9 Config files  =================================================================================</h5>

1.    /db.js
2.    /config/config.env


<h5> 10 Assets  ======================================================================================</h5>

  

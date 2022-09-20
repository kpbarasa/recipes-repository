# Project: User manager :

<p>
This is ab simple ack-end user manager is a system built using the model viewer controller frame work using Node js, Express js and Mongo Atlas DB. The system exposes endpoints that allow for user access control, password recovery, Session management, user data management (CRUD operations on user data). The endpoints are secured using middleware and session cookies to authorize access. 
</p>

The system should expose endpoints that provide the following services:
</br>

1. Save recipe: 
             recipe
            </br>
             steps
            </br>
             nutrition
            </br>
             ingridients
            </br>
             tools
            </br>
             cuisine
            </br>
             Diet
            </br>
             Category
            </br>
             Sub Category
            </br>

   
2. Delete recipe:
            </br>
             steps
            </br>
             nutrition
            </br>
             ingridients
            </br>
             tools
            </br>
             cuisine
            </br>
             Diet
            </br>


3. Fetch/Cache recipes, Filter recipes:
            </br>
             recipe id
            </br>
             ingridients
            </br>
             cuisine
            </br>
             Diet
            </br>
             tags     


5. Access control (route authentication through sessions)



6. Reporting (morgan)


# Software 

1. Node js 
2. Express js

# Libraries 

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
10. redis
11. ioredis

<h5>Database</h5>
•	Mongo DB 

# Components

# 1  Server(server.js) 

# 2  App(app.js) 

# 3 models (Data models)  
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


# 4 Config files  

1. Config.env:

<b>Node Config</b>
    NODE_ENV="development"
    PORT = 5000
    PROD_PORT = 
    ATLAS_URI = 
<br> 

2. db.js:
3. passport.js
</br>

# 5 Controllers  

1.  GET RECIPE CONTROLLS (recipe.controllers.js)
<ul>
	<li>
		controller:  getRecipes 
<br>	desc:        get all recipes
<br>    route:       GET: /get/recipes
	</li>
	<li>
		controller:  getRecipe 
<br>	desc:        get recipe via request parameter  recipe id
<br>    route:       GET: /get/recipe/:id
	</li>
	<li>
		controller:  getRecipeCat 
<br>	desc:        get recipe via request parameter  recipe category id
<br>    route:       GET: /get/recipes/cat/:id
	</li>
	<li>
		controller:  getRecipeSubCat 
<br>	desc:        get recipe via request parameter  recipe sub-category id
<br>    route:       GET: /get/recipes/subcat/:id
	</li>
	<li>
		controller:  getRecipeTag 
<br>	desc:        get recipe via request parameter  recipe tag id
<br>    route:       GET: /get/recipes/tag/:id
	</li>
	<li>
		controller:  getRecipeCuisine 
<br>	desc:        get recipe via request parameter  recipe cuisine id
<br>    route:       GET: /get/recipes/cuisine/:id
	</li>
	<li>
		controller:  getRecipeDiet 
<br>	desc:        get recipe via request parameter recipe diet id
<br>    route:       GET: /get/recipes/diet/:id
	</li>
</ul>

2.  RECIPE CATEGORIES CONTROLLS (recipe.controllers.js)
<ul>
	<li>
		controller:  getAllCats 
<br>	desc:        get all recipe categories
<br>    route:       GET: /get/cats
	</li>
	<li>
		controller:  getCat 
<br>	desc:        get category
<br>    route:       GET: /get/cat/:id
	</li>
	<li>
		controller:  getAllSubCats 
<br>	desc:        get all recipe sub categories
<br>    route:       GET: /get/sub-cats
	</li>
	<li>
		controller:  getSubCat 
<br>	desc:        get all recipe sub category
<br>    route:       GET: /get/sub-cat/:id
	</li>
</ul>

3.  RECIPE TAGS CONTROLLS  (recipe.controllers.js)
<ul>
	<li>
		controller:  getAllTags 
<br>	desc:        get all recipe tags
<br>    route:       GET: /get/tags
	</li>
	<li>
		controller:  getTag 
<br>	desc:        get all recipe tag
<br>    route:       GET: /get/tag/:id
	</li>
</ul>

4.  RECIPE CUISINE CONTROLLS  (recipe.controllers.js)
<ul>
	<li>
		controller:  getAllCuisines 
<br>	desc:        get all cuisines
<br>    route:       GET: /get/cuisines
	</li>
	<li>
		controller:  getCuisine 
<br>	desc:        get  cuisine
<br>    route:       GET: /get/cuisines/:id
	</li>
</ul>

4.  RECIPE DIETS CONTROLLS  (recipe.controllers.js)
<ul>
	<li>
		controller:  getAllCuisines 
<br>	desc:        get all diets
<br>    route:       GET: /get/diets
	</li>
	<li>
		controller:  getCuisine 
<br>	desc:        get  diet
<br>    route:       GET: /get/diet/:id
	</li>
</ul>

5.  RECIPE STEPS, TOOLS, INGRIDIENTS, NUTRITION, CONTROLLS  (recipe.controllers.js)
<ul>
	<li>
		controller:  getRecipeSteps 
<br>	desc:        get recipe steps
<br>    route:       GET: /get/steps/:id
	</li>
	<li>
		controller:  getRecipeIngridient 
<br>	desc:        get recipe ingridient
<br>    route:       GET: /get/ingridients/:id
	</li>
	<li>
		controller:  getAllIngridients 
<br>	desc:        get recipe ingridients
<br>    route:       GET: /get/ingridients
	</li>
	<li>
		controller:  getRecipeTools 
<br>	desc:        get recipe tool
<br>    route:       GET: /get/tools/:id'
	</li>
	<li>
		controller:  getAllTools 
<br>	desc:        get recipe tools
<br>    route:       GET: /get/tools
	</li>
	<li>
		controller:  getALLNutrition 
<br>	desc:        get recipe nutrition 
<br>    route:       GET: /test
	</li>
	<li>
		controller:  getRecipeNutrition 
<br>	desc:        get recipe nutrition 
<br>    route:       GET: /get/nutrition/:id
	</li>
</ul>

<br> 

6.  ADMIN RECIPE CONTROLLS  (admin.controllers.js)
<ul>
	<li>
		controller:  saveRecipe 
<br>	desc:        add new recipe
<br>    route:       POST: /post/recipe
	</li>
	<li>
		controller:  updateRecipe 
<br>	desc:        update recipe
<br>    route:       POST: /update/recipe/:id
	</li>
	<li>
		controller:  deleteRecipe 
<br>	desc:        delete recipe
<br>    route:       POST: /del/recipe/:id'
	</li>

</ul>

7.  ADMIN RECIPE CATEGORIES CONTROLLS  (admin.controllers.js)
<ul>
	<li>
		controller:  saveRecipeCat 
<br>	desc:        add new recipe category
<br>    route:       POST: /post/cat
	</li>
	<li>
		controller:  saveRecipeSubCat 
<br>	desc:        add new recipe sub-category
<br>    route:       POST: /del/cat/:id
	</li>
	<li>
		controller:  deleteRecipeCat 
<br>	desc:        delete recipe category
<br>    route:       POST: /delete/cat/:id
	</li>
	<li>
		controller:  deleteRecipeSubCat 
<br>	desc:        delete recipe category
<br>    route:       POST: /del/sub-cat/:id
	</li>
</ul>

8.  ADMIN RECIPE TAGS CONTROLLS  (admin.controllers.js)
<ul>
	<li>
		controller:  saveRecipeTag 
<br>	desc:        add new recipe tag
<br>    route:       POST: /post/tags
	</li>
	<li>
		controller:  deleteRecipeTag 
<br>	desc:        delete recipe tag
<br>    route:       POST: /del/tags/:id
	</li>
</ul>

9.  ADMIN RECIPE TAGS CONTROLLS  (admin.controllers.js)
<ul>
	<li>
		controller:  saveIngridient 
<br>	desc:        add new recipe ingridient
<br>    route:       POST: /post/tags
	</li>
	<li>
		controller:  deleteIngridient 
<br>	desc:        delete recipe ingridient
<br>    route:       POST: /del/tags/:id
	</li>
</ul>

10.  ADMIN RECIPE CUISINE CONTROLLS  (admin.controllers.js)
<ul>
	<li>
		controller:  saveCuisine 
<br>	desc:        add new recipe cuisine
<br>    route:       POST: /post/cuisine
	</li>
	<li>
		controller:  deleteCuisine 
<br>	desc:        delete recipe cuisine
<br>    route:       POST: /del/cuisine/:id
	</li>
</ul>

10.  ADMIN RECIPE DIET CONTROLLS  (admin.controllers.js)
<ul>
	<li>
		controller:  saveDiet 
<br>	desc:        add new recipe diet
<br>    route:       POST: /post/diet
	</li>
	<li>
		controller:  deleteDiet 
<br>	desc:        delete recipe diet
<br>    route:       POST: /del/diet/:id
	</li>
</ul>

10.  ADMIN RECIPE TOOLS CONTROLLS  (admin.controllers.js)
<ul>
	<li>
		controller:  saveTools 
<br>	desc:        add new recipe tool
<br>    route:       POST: /post/tool
	</li>
	<li>
		controller:  deleteTool 
<br>	desc:        delete recipe tool
<br>    route:       POST: /del/tool/:id
	</li>
</ul>

<br> 


# 6 error handlers(handlers)  

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


# 7 middleware  
auth-session.middleware.js
<br> 
Description: "Authenticates users account  end points using session variables"
<br> 

# 8 Git ignore files

1.    /node_module
2.    /config/config.env


# 9 Config files  

1.    /db.js
2.    /config/config.env



  

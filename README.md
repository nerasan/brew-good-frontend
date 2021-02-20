# brew good: frontend

### update log

feb 10
* created react app and installed dependencies

feb 11
* added in yelp api
* configured yelp api cors issue, usestate/useffect, etc
* renders list of results

feb 20
* added chakra

components (view)
* home
* register
* log in
* cafe list - render list of cafe from search
* cafe container - each cafe card/info
* user profile
* favorites form
* favorites card - render all of the user's favorites on their profile
* edit

components/common
* layout
* formgroup - if needed
* buttonspinner

notes/to debug
* need to configure how to get current user with flask
* also for the purposes of the layout view depending if logged in or not
* user to search based by location (city, address, etc.) not lat/lon
* might try to add "nonprofit" in the search term `term` along with `coffee` since that is how it is searched on yelp? cannot do attributes but nonprofit is not in here anyway
* 403 forbidden error with yelp api?
* FormHelperText gives a useStyles error

to-do
* login/register pages and connecting to backend
* any user can search and view cafes
* alert to login or redirect to login if they try to add to favorites
* allow clicking a result and having the specific cafe info pop out
# brew good: frontend

### update log

feb 10
* created react app and installed dependencies

feb 11
* added in yelp api
* configured yelp api cors issue, usestate/useffect, etc
* renders list of results


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

to-do while api down
* login/register pages and connecting to backend
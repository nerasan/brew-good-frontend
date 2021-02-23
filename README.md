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

feb 21
* yelp search in homepage works (remember to cors-anywhere and allow it to work temporarily)
* testing if the useEffect can run when it updates based on a change in `location` rather than `searchTerm` because the latter takes too many requests
* it did render into the results page (but the wrong cafe data, but images loaded, etc)
* the main issue seems to be that it cannot set the location, but somehow able to set the searchTerm
* if this takes too long, figure out auth and then go back and use dummy data (or a hardcoded location to pull results for example/presentation purposes)
* TOO MANY REQUESTS YELP API
* consider having a homepage that leads to a page to search and then results render within that page (so no need for redirecting - might solve setlocation case because it can be based on location or search results change?)

feb 22
* added a defaultCafes api call for useEffect purposes in the show page
* results come up but need to look into why setCafes/set any state doesn't work right away but when calling `cafes` in the results it shows up
* wrote auth codes to connect frontend to backend for register/login - register not working through form

components (view)
* home
* show cafes
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
* have the search results render in a new page with cafe cards


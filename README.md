## Problem

- create the following app
- the template for the app is provided `here`
- Here is a video explaining the problem and the template code
-
- you need to fetch a list of candidates from the following API:
  - `https://json-server-mocker-masai.herokuapp.com/cities`
- `IMPORTANT: THE API WILL HAVE RATE LIMITS, SO IT WILL THROW ERRORS`
- SO PLEASE USE THE DATA ON YOUR LOCAL `JSON-SERVER`
- [`countries.json`](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-06-12/countries_463932.json)
- `PLEASE MAKE SURE YOU CHANGE IT BACK TO THIS URL WHEN SUBMITTING` `https://json-server-mocker-masai.herokuapp.com/cities`
- Schema

```
 {
  "name": "Palm Bay",
  "population": 55744,
  "country": "Guinea-Bissau",
  "id": "1"
 },

/**
    Paginate
    Use _page and optionally _limit to paginate returned data.

    In the Link header you'll get first, prev, next and last links.

    GET /posts?_page=7
    GET /posts?_page=7&_limit=20

    Sort
    Add _sort and _order (ascending order by default)
    ASC and DESC are case sensitive!!!

    GET /posts?_sort=views&_order=ASC
    GET /posts/1/comments?_sort=votes&_order=ASC
 */

```

1. By default it will be in ascending order of population of each city
1. Apply pagination and Limit the responses by `10 items per page`
1. There should be three buttons
1. a Previous button
   - text is `Previous`
   - it should be disabled in the first page
   - when enabled, and clicked on it, it will show up a loading indicator
1. a Next button
   - text is `Next`
   - when clicked, it will show up the loading indicator
   - it will load the next set of items
1. By default the order of the cities should be in ascending order of Population
1. Sorting button which will have the following text `Sort by Descending Population`
   - when a user clicks on it, it will show the loading indicator
   - the text will change to `Sort by Ascending Population`
   - you will need to fetch the API in the descending order of salaries now
   - Note: `ASC and DESC are case sensitive!!!`
1. You need to ensure that the sorting and pagination works together
1. Whenever an api is called, the loading indicator should be called
1. When there is a failure, show an element with an error message saying Something went wrong!
1. There are 2 Components already made for you
   - Button
   - CityRow
   - The styles are already provided for you
   - You need to provide the correct properties and manage state in your application
   - useState, and useEffect achieve your final output
1. Marks are provided for each of the functionality above, some have more than the others
1. Ensure the ids and data-testid attributes are not changed
1. Make sure to use the components provided

#### Submission

- use the github repo provided by masai in masai-course
- submit the github link to the root folder of the project
  - please ensure the correct link is provided here
- there will be two problems, agianst this problem, submit the github repo
- submit the deployment link on the next problem
  - please ensure that the correct link is provided
  - please submit netlify links only
  - please ensure you login to netlify and the links are valid ( if you dont login, it gets expired in 24 hours )

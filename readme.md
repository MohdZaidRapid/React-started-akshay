# npm full form 

# package.json is a configuration for packages
# most important package is bundler -->bundle file in one file
# dev dependency -D 
# parcel is a beast

# transitive dependecy -> dependency for packages

# npx parcel index.html

# npx node package executer

# content key de1e4a02ec63c4eb to exist rm rm .parcel-cache
# hot relaoding done by parcel

# Parcel Done
- Dev Build
- local Server
- HMR = Hot module Replacement 
- file watching algorithm -written in c++ for HMR
- Caching - Faster build
- Image optimization
- Minification
- Bundle
- Compressing
- consistent hashing
- code splitting
- Differential bundling //support older browser
- Diagnostic
- Error Handling
- Https feature
- Tree Shaking - removed unused code for you
- Differential dev and prod bundles

<!-- Prod build -->
npx parcel build index.html
remove main in pkg.json


npm run start
npm run build

<!-- basic -->
create element
create root 
render


<!-- Props -->
props are normal arguements to our function
passing props === passing arguements

<!--  jargon-->
confing driven ui

<!-- key -->
why we need keys
stop rerender
never use index as key
index as an key in anti-pattern



<!-- structure of food app  -->
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *    - Search
 *    - Carts
 *    - RestaurantContainer
 *      - ReastuarantCard
 *        - Img
 *        - Name of Res  ,Start Rating,cuisine,,delivery cart,etc
 *    - RestaurantCard
 * Footer
 *  - CopyRight
 *  - Links
 *  - Addrress
 *  - Contact
 */

 JSX =>babel transpile => React.createElement=> ReactElement.JS object=> HTMLElement(render)


 <!-- React hooks -->
 <!-- normal JS utility functions - React hooks -->
 - useState()  - Super power state variable in react 
 - useEffect() - 
 - 
whenever a state variable is changes it re render the component


<!-- Reconciliation algorithm (ReactFiber) -->
# we have a dom 

<!-- res-container -->
res-container have 
    - 7 Rescards


<!-- how react fetch data -->
<!-- 1  -->
as soon as page loads we will make an api call wait for data come and make  api call and render the ui
<!-- 2 -->
as soon as page loads we will render the ui now we will make an api call we will now re-reneder data with api 

### react user second approach 
# gives better ux

# first body will render then useEffect will be called

body -> useEffect

<!--when you change state it update component  -->

const [header,setHeader]  = useState("");

setHeader("hello");
it will rerender header component and this time value of header was hello so  it will update it


<!-- Routing -->
<!-- div deeper in useeffect hooks -->
 # use Effect called after render of every component 
 # if no dependency array => useEffect is called on every render
 # if dependency array is empty = [] => useEffect called once


<!-- Routing configuration -->
<!-- crete browser will take a route in array of object  -->
<!-- it is a object -->
<!-- PRovide this configuration to Provider -->
<!-- Outlet we can  -->


# 2 types Routing in web apps
- Client Side Routing
- Server Side Routing

Link is sepcial component behind the scene it is using <a> anchor tag

#the component is able to inherit the properties of the parent component and also access the new props that have been passed in.

loading a class base component
whenever you creating a class instance a constructor is called
this is best place to create based variable


never update state variable directly
this.state.count = this.state.count + 1;

<!-- Lifecycle in react -->
when parent component render  start rendering jsx 
when it sees children component it start loading it
when childClass init it constructor is called and thensrender method is called

<!-- how it render -->
<!-- Parent Constructor
 Parent render
 Child Contructor
Child Render -->

construcor 
render
component did mount

parent constructor 
parent render
child constructor
child render
child component did mount
parent component did mount

why we make api call in component did mount


parent constructor
parent render
    - zaid constructor
    - zaid render
    - 
    - 
    - zaid2  constructor
    - zaid2  render
    - 

    <!-- batch together -->
    <!-- DOM updated in single batch -->
    - zaid comdidmount 
    - zaid2 comdidmount
- Parent ComponentDidMount 

as Class component is call constructor will called it will initialise state as soon as constructor called  component render with dummy data  and componentdidmount will called and api called was made it called setState and we will see updated cycle  and render happend because state change with updated value 

/**
 *
 * Mounting life cycle
 * Constructor
 * Render (dummy)
 *      <html> has dummy data
 *  component did mount is called
 *      <API called>
 *  this.setState()
 * 
 * ---UPDATE cycle
 * 
 * Render method with api data in setState 
 *  <HTML (new API data>)
 * component did update
 */



Single responsiblilty principle
each component should have single responsibilty

git add . && git commit -m "updating" && git push origin main

hooks is just a utility functions 

<!-- bundling types -->
Chunking
Code Splitting
lazy loading
ondemand loading
Dynamic Bundling
dynamic import

<!-- why  lazy loading throw an error-->
load this page we only have one file 
and does not have grocery code
react throw error beacuse grocery code was not there  react throw an error
to solve this we use suspense
Suspense is an component
what should reat render when code was nothere threr we will use fallback inside suspense

postcssrc will use tailwind to understand parcel

<!-- controlled component -->
when we control child compoenent state from parent component it is known as controlled component 

<!--Redux-->
redux work in data layer

<!-- Redux Toolkit -->
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- useSelector  
- when you are subscribing to store 
- subscribe bto store


# Types of testing developer can do
- Unit Testing
- Integration testing
- End to End (e2e) testing


<!-- Unit testing  -->
- Unit testing means u test component in isolation

<!-- Integration testing -->
- Testing the integration of the component


# Setting up testing
- install react Testing library
- Installed jest
- Installed babel dependencies
- Configure babel  
- Configure parcel Config file to disable default  babel tranpilation
# jest configuration
npx jest --init
jsdom is browser with test cases give super power of browser
install jsdom library
install @babel/preset-react to make jsx work in these component test
@babel/preset-react include inside babel config
babel converting component code to html code to run test easily
Install @testing-library/jest-dom

npm i -D @testing-library/jest-dom


when you pdate state in test wrap test in act component
act comes from react-dom/test-utils
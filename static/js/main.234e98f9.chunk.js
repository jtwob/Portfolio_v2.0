(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),i=a(3),r=a.n(i),c=(a(10),a(4)),o=(a.p,a(11),a(0)),l=function(e){var t=function(t){t.preventDefault(),e.setpath({path:t.target.attributes.data.value}),console.log(t.target.attributes.data.value)};return Object(o.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"/",children:"James Totah"}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(o.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("button",{onClick:function(e){return t(e)},data:"/",className:"btn",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("button",{onClick:function(e){return t(e)},data:"/portfolio",className:"btn",children:"Portfolio"})})]})})]})},d=a(5),h=function(e){return Object(o.jsxs)("div",{className:"container",style:Object(d.a)({},e.style),children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-md-9",children:[Object(o.jsx)("h1",{id:"title",children:"About Me"}),Object(o.jsx)("hr",{}),Object(o.jsx)("img",{className:"wrap-text",style:{width:"200px"},src:e.image,alt:e.altText}),Object(o.jsx)("p",{children:e.text})]})}),Object(o.jsx)("div",{className:"card",style:{width:"30rem",border:"none"},children:Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("div",{className:"card-title",children:"Contact Information"}),Object(o.jsx)("div",{className:"card-subtitle mb-2 text-muted",children:"+ relevant links"}),Object(o.jsx)("hr",{}),Object(o.jsx)("p",{className:"card-text",children:e.name}),Object(o.jsxs)("p",{className:"card-text",children:["Email: ",e.email]}),Object(o.jsxs)("p",{className:"card-text",children:["Cell: ",e.cell]}),Object(o.jsx)("a",{className:"card-link",href:e.linkedIn,children:"LinkedIn Profile"}),Object(o.jsx)("a",{href:e.github,className:"card-link",children:"GitHub Profile"}),Object(o.jsx)("a",{className:"card-link",href:"./assets/James_Totah_Resume.pdf",download:!0,children:"Resume"})]})})]})},b=function(e){return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"card mb-3",style:{maxWidth:"1000px",marginTop:"25px"},children:Object(o.jsxs)("div",{className:"row no-gutters",children:[Object(o.jsx)("div",{className:"col-md-6",children:Object(o.jsx)("img",{className:"card-img",src:e.image,alt:e.altText})}),Object(o.jsx)("div",{className:"col-md-6",children:Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h4",{className:"card-title",style:{fontSize:"large"},children:e.title}),Object(o.jsx)("p",{className:"card-text",children:e.text}),Object(o.jsx)("a",{href:e.repo,children:"Github Repo"}),Object(o.jsx)("a",{href:e.live,children:"Live Deployed App"})]})})]})})})},m=function(e){return Object(o.jsx)("div",{children:e.projects.map((function(e){var t=e.image,a=e.altText,s=e.title,n=e.text,i=e.repo,r=e.live;return Object(o.jsx)(b,{image:t,altText:a,title:s,text:n,repo:i,live:r})}))})},p=function(){return Object(o.jsx)("footer",{className:"footer",style:{marginTop:"25px",backgroundColor:"white",padding:"10px"},children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("span",{className:"text-muted",children:"Designed by James Totah"})})})};var u=function(){var e=Object(s.useState)({path:"/"}),t=Object(c.a)(e,2),a=t[0],n=t[1],i="./assets/images/Portrait.jpg",r="James-Totah-Headshot",d="Hello! My name is James Totah and I am 22 years old. I have been a Computer Science Major at the University of San Francisco for 3 years now, and have opted to partake in a UC Berkeley Web Development bootcamp to polish off my web dev skills. I'm well versed in Python, Java, and C, with some experience in functional languages like Haskell and Racket. Recently I've learned JavaScript, along with a few relevent libraries. I have lived in San Francisco my whole life, and have always been a fan of tinkering with technology. I suppose it only makes sense since the bay area is currently the tech capital of the world. I hope to finish my CS degree as soon as remote learning is no longer necessary, and move on to bigger and better things!",b="James Totah",u="jtotah@usfca.edu",j="415-418-8719",g="https://www.linkedin.com/in/james-totah-337714188/",x="https://github.com/jtwob",v=[{image:"./assets/images/uConnect.jpg",altText:"uConnect.jpg",title:"Project: uConnect",text:"The uConnect app is a platform for those seeking to buy and sell professional introductions. The app allows the user to create a profile and to create sellable connections. uConnect is hosted on heroku, and features numerous technologies, including but not limited to; a sequelize handled database, user-data encryption, user session tracking, express servers, and more. The frontend of the website is designed with Materialize components on a handlebars.js framework. This application represents a minimum viable product with future development in progress.",repo:"https://github.com/jtwob/uConnect",live:"https://uconnect-project2.herokuapp.com"},{image:"./assets/images/Travel_Almanac.gif",altText:"Travel_Almanac.gif",title:"Project: Travel Almanac",text:"This application combines country data and weather data to create a travel almanac. It's meant to help weary COVID-19 survivors fantasize about all the places they would go if not stuck at home.",repo:"https://github.com/jtwob/Travel_Almanac",live:"https://jtwob.github.io/Travel_Almanac/"},{image:"./assets/images/Quiz.gif",altText:"Quiz.gif",title:"Project: Coding Quiz",text:"The main script focuses on dynamically building the HTML for the quiz, adding and removing elements as necessary, while the secondary js file handles the highscores. Using a combination of bootstrap and css for visuals, and jquery for easy HTML creation and alteration. I am glad it all came together.",repo:"https://github.com/jtwob/Coding_Quiz",live:"https://jtwob.github.io/Coding_Quiz/"},{image:"./assets/images/Weather_App.png",altText:"Weather_App.png",title:"Project: Weather Dashboard",text:"This app features a search bar with interactive history elements that can be used to re run a previous query, on mouseover these elements are highlighted. Exhibiting the weather data is a banner/panel that shows today's weather. This app also includes a simplified five day forecast, with date, weather icon, temperature, and humidity.",repo:"https://github.com/jtwob/Weather_App",live:"https://jtwob.github.io/Weather_App/"},{image:"./assets/images/burger-app.png",altText:"burger-app.png",title:"Project: Eat Da Burger",text:"This is a full-stack application that uses MySQL, Node, Express, Handlebars and a homemade ORM. It allows users to add a new burger to a database, and to devour the burger, rendering it disabled. Not much to the functionality portion but it's got a lot going on behing the scenes!",repo:"https://github.com/jtwob/burger",live:"https://eat-da-burger-jtwob.herokuapp.com/"}],f=function(){var e;switch(a.path){case"/":e=Object(o.jsx)(h,{style:{backgroundColor:"white",marginTop:"25px",padding:"10px"},image:i,altText:r,text:d,name:b,email:u,cell:j,linkedIn:g,github:x});break;case"/portfolio":e=Object(o.jsx)(m,{projects:v})}return e};return Object(s.useEffect)((function(){return function(){f()}}),[f,a]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{setpath:n}),Object(o.jsx)("div",{className:"container",children:f()}),Object(o.jsx)(p,{})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),i(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),j()}},[[13,1,2]]]);
//# sourceMappingURL=main.234e98f9.chunk.js.map
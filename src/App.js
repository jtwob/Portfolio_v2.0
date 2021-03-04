import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import Footer from "./Components/Footer/Footer";

function App() {
  const info = {
    image: "/assets/images/Portrait.jpg",
    altText: "James-Totah-Headshot",
    text:
      "Hello! My name is James Totah and I am 22 years old. I have been a Computer Science Major at the University of San Francisco for 3 years now, and have opted to partake in a UC Berkeley Web Development bootcamp to polish off my web dev skills. I'm well versed in Python, Java, and C, with some experience in functional languages like Haskell and Racket. Recently I've learned JavaScript, along with a few relevent libraries. I have lived in San Francisco my whole life, and have always been a fan of tinkering with technology. I suppose it only makes sense since the bay area is currently the tech capital of the world. I hope to finish my CS degree as soon as remote learning is no longer necessary, and move on to bigger and better things!",
    name: "James Totah",
    email: "jtotah@usfca.edu",
    cell: "415-418-8719",
    linkedIn: "https://www.linkedin.com/in/james-totah-337714188/",
    github: "https://github.com/jtwob",
  };

  const projects = [
    {
      image: "/assets/images/uConnect.jpg",
      altText: "uConnect.jpg",
      title: "Project: uConnect",
      text:
        "The uConnect app is a platform for those seeking to buy and sell professional introductions. The app allows the user to create a profile and to create sellable connections. uConnect is hosted on heroku, and features numerous technologies, including but not limited to; a sequelize handled database, user-data encryption, user session tracking, express servers, and more. The frontend of the website is designed with Materialize components on a handlebars.js framework. This application represents a minimum viable product with future development in progress.",
      repo: "https://github.com/jtwob/uConnect",
      live: "https://uconnect-project2.herokuapp.com",
    },
    {
      image: "/assets/images/Travel_Almanac.gif",
      altText: "Travel_Almanac.gif",
      title: "Project: Travel Almanac",
      text:
        "This application combines country data and weather data to create a travel almanac. It's meant to help weary COVID-19 survivors fantasize about all the places they would go if not stuck at home.",
      repo: "https://github.com/jtwob/Travel_Almanac",
      live: "https://jtwob.github.io/Travel_Almanac/",
    },
    {
      image: "/assets/images/Quiz.gif",
      altText: "Quiz.gif",
      title: "Project: Coding Quiz",
      text:
        "The main script focuses on dynamically building the HTML for the quiz, adding and removing elements as necessary, while the secondary js file handles the highscores. Using a combination of bootstrap and css for visuals, and jquery for easy HTML creation and alteration. I am glad it all came together.",
      repo: "https://github.com/jtwob/Coding_Quiz",
      live: "https://jtwob.github.io/Coding_Quiz/",
    },
    {
      image: "/assets/images/Weather_App.png",
      altText: "Weather_App.png",
      title: "Project: Weather Dashboard",
      text:
        "This app features a search bar with interactive history elements that can be used to re run a previous query, on mouseover these elements are highlighted. Exhibiting the weather data is a banner/panel that shows today's weather. This app also includes a simplified five day forecast, with date, weather icon, temperature, and humidity.",
      repo: "https://github.com/jtwob/Weather_App",
      live: "https://jtwob.github.io/Weather_App/",
    },
    {
      image: "/assets/images/burger-app.png",
      altText: "burger-app.png",
      title: "Project: Eat Da Burger",
      text:
        "This is a full-stack application that uses MySQL, Node, Express, Handlebars and a homemade ORM. It allows users to add a new burger to a database, and to devour the burger, rendering it disabled. Not much to the functionality portion but it's got a lot going on behing the scenes!",
      repo: "https://github.com/jtwob/burger",
      live: "https://eat-da-burger-jtwob.herokuapp.com/",
    },
  ];
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <Router>
          <Switch>
            <Route exact path={"/Portfolio_v2.0/"}>
              <Index
                style={{
                  backgroundColor: "white",
                  marginTop: 25 + "px",
                  padding: 10 + "px",
                }}
                image={info.image}
                altText={info.altText}
                text={info.text}
                name={info.name}
                email={info.email}
                cell={info.cell}
                linkedIn={info.linkedIn}
                github={info.github}
              />
            </Route>
            <Route path={"/Portfolio_v2.0/portfolio"}>
              <Portfolio projects={projects} />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;

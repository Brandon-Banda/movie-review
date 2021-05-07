import "./styles.scss";
import Rate from "./Rate";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Activity from "./Activity";
import * as htmlToImage from "html-to-image";
import Navy from "./pages/Navy";
import Images from "./images";
function App() {
  var shareUrl = sessionStorage.getItem("export-url");
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/navy' component={Navy} />
          <div>
            <Nav />
            <Route path='/activity' component={Activity} />
            <Route path='/' exact component={Home} />
            <Route exact path='/test/:rateValue' component={Home} />
            <Route exact path={`/share/${shareUrl}`} component={Export} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

const Home = () => <Movies />;

function Export() {
  var imgSrc = sessionStorage.getItem("export-rating");
  return (
    <div className='export-page'>
      <div className='share-container'>
        <img className='share-img' src={imgSrc} alt='YEP' />
      </div>
    </div>
  );
}

const Movies = () => {
  function snap() {
    Share();
    // Screenshot
    var node = document.getElementById("main");
    htmlToImage
      .toPng(node)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        sessionStorage.setItem("export-rating", dataUrl);
        //document.body.appendChild(img);

        // var shareImg = document.getElementById("share");
        // shareImg.src = dataUrl;
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  }

  function Share() {
    const random = (length = 8) => {
      return Math.random().toString(16).substr(2, length);
    };
    // Generate a string to copy to clipboard
    var export_url = random();
    console.log(export_url);
    var siteUrl = "localhost:3000"; // Later change to firebase
    var copyText = `${siteUrl}/share/${export_url}`;
    navigator.clipboard.writeText(copyText);
    sessionStorage.setItem("export-url", export_url);
  }

  function removeMovies() {
    var removeIdx = 1;
    console.log(Images[removeIdx].title);
    Images[removeIdx].title.replace(Images[removeIdx].title, "");
    console.log(`Removed movie in row ${removeIdx}`);
    //functionality to remove the img, title, lnk.
  }

  function addMovies() {
    //functionality to add a dropdown list to add a movie
    //var RandomMovie = [];
    console.log("Added dropdown for Movie selection to replace movie idx X");
    // for now: functionality to reAdd inception data
  }

  var tempPic = "https://cdn.onlinewebfonts.com/svg/img_51677.png";

  return (
    <div>
      <div className='main' id='main'>
        {Images.map(({ img, title, idx, lnk }) => (
          <div className='container'>
            <div className='imgContainer'>
              <img
                id={`moviePic${idx}`}
                key={idx}
                src={img ? img : tempPic}
                alt='YE'
              />
            </div>
            <h3>
              {idx}.{" "}
              <a href={lnk} target='_blank' rel='noreferrer'>
                {title ? (
                  title
                ) : (
                  <div className='menu'>
                    <button> Movie 1 </button>
                    <button> Movie 2 </button>
                    <button> Movie 3 </button>
                  </div>
                )}
              </a>
            </h3>
            <div className='change-btn'>
              {title ? (
                <div className='input-group-button'>
                  <button
                    type='button'
                    className='button hollow circle'
                    data-quantity='minus'
                    data-field='quantity'
                    onClick={removeMovies}
                  >
                    <i className='fa fa-minus' aria-hidden='true'></i>
                  </button>
                </div>
              ) : (
                <div className='input-group-button'>
                  <button
                    type='button'
                    className='button hollow circle'
                    data-quantity='plus'
                    data-field='quantity'
                    onClick={addMovies}
                  >
                    <i className='fa fa-plus' aria-hidden='true'></i>
                  </button>
                </div>
              )}
            </div>
            <div className='rate-container'>
              <Rate key={idx} />
            </div>
          </div>
        ))}
      </div>
      <button className='btn' onClick={snap}>
        Share
      </button>
    </div>
  );
};
export default App;

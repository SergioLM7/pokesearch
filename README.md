<a id="readme-top"></a>
# Pokesearch
<a href="https://pokesearchslm.netlify.app/" target="_blank" align="center"/> <img src="./src/assets/bannerpokemon.jpg" alt="banner readme"/></a> 


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
      <ul>
        <li><a href="#project-structure">Project Structure</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

**Link**: https://pokesearchslm.netlify.app/

Pokesearch allows you to search your favorites Pokemon by their name or ID since the first generation to the last one. You can also see their detailed stats and, furthermore, create your own Pokemons. Catch 'em all!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="40" height="40"/>&nbsp;
* <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg"  title="CSS3" alt="CSS" width="40" height="40"/>&nbsp;
* <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;
* <img src="https://github.com/devicons/devicon/blob/master/icons/express/express-original.svg" title="express" alt="express" width="40" height="40"/>&nbsp;
* <img src="https://github.com/devicons/devicon/blob/master/icons/postman/postman-original-wordmark.svg" title="postman" alt="postman" width="40" height="40"/>&nbsp;
* <img src="https://github.com/devicons/devicon/blob/master/icons/github/github-original-wordmark.svg" title="github" alt="github" width="40" height="40"/>&nbsp;
* <img src="https://github.com/devicons/devicon/blob/master/icons/axios/axios-plain-wordmark.svg" title="axios" alt="axios" width="40" height="40"/>&nbsp;

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Project Structure

```sh
pokesearch/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer/
│   │   ├── Header/
│   │   │   └── Nav/
│   │   └── Main/
│   │       ├── Home/
│   │       │   ├── ListPokemon/
│   │       │   │   └── Card/
│   │       │   └── Search/
│   │       ├── Details/
│   │       └── New/
│   ├── context/
│   ├── fonts/
│   └── styles/
│       ├── components/
│       ├── utils/
│       └── views/

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

**Landing page**
<br/>
  -Pokesearch app shows the first 50 pokemon from PokeAPI in card format.
<br/>
![](https://github.com/SergioLM7/pokesearch/blob/main/src/assets/landing.gif)

**Searching for any Pokemon by its name/ID**
<br/>
  -You can search any Pokemon of every generation by its name or ID (uppercase sensitive, please, search in lowercase).
<br/>
![](https://github.com/SergioLM7/pokesearch/blob/main/src/assets/search.gif)

**Detailed view**
<br/>
  -Click on each pokemon to see more details from it.
<br/>
![](https://github.com/SergioLM7/pokesearch/blob/main/src/assets/details.gif)

**Create new Pokemon**
<br/>
  -You can create your own pokemon or even use a picture of yourself as a special pokemon. It will be showed with your searches after yhe form.
<br/>
![](https://github.com/SergioLM7/pokesearch/blob/main/src/assets/new.gif)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

If you want to try it yourself, please feel free to do it following the next steps. You will run the project locally and will be able to make any changes.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/SergioLM7/pokesearch/
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run project
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

**Sergio Lillo, Full Stack Developer**
<a href="https://www.linkedin.com/in/lillosergio/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png" width=30px, height=30px/></a> - sergiolillom@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Font Awesome](https://fontawesome.com)
* [PokeAPI](https://pokeapi.co)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# Movie Database

Welcome to the **Movie Database** project, a web application built with React that allows users to explore and search for movies. The application utilizes The Movie Database (TMDb) API to fetch and display movie information, including titles, genres, directors, and actors.

## Features

- **Movie Discovery**: Browse a list of popular movies sorted by popularity.
- **Search Functionality**: Search for movies by title.
- **Movie Details**: View additional details such as directors, actors, and genres for each movie.
- **Pagination**: Navigate through multiple pages of movie results.
- **Responsive Design**: The application is fully responsive and works well on various screen sizes.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **CSS**: For styling the application.
- **TMDb API**: For fetching movie data.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/moviedatabase.git
   cd moviedatabase

2.Install dependencies:

bash

npm install

3.Start the development server:

bash

npm start

4.Open your browser and navigate to http://localhost:3000.

API Key

To use the TMDb API, you will need an API key. You can sign up for an account on TMDb and create an API key. Once you have your key, replace the placeholder in the code where the API URL is defined.



const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=YOUR_API_KEY";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=YOUR_API_KEY&query=";


Usage

To search for a movie, enter the title in the search bar and press Enter.

Click on a movie card to view its details, including the director and main actors.

Use the pagination buttons to navigate between pages of results.


Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments

The Movie Database for providing the movie API.
Icons and images used in the project.

Notes:
Make sure to replace yourusername in the clone command with your actual GitHub username.
If there are specific installation steps or unique features in your project that need highlighting, feel free to add or modify the content.



### Key Changes Made:
- Corrected some formatting for code blocks and lists for better readability.
- Ensured proper indentation and spacing for clarity.
- Minor grammatical adjustments for smoother reading.

Overall, it's a comprehensive and user-friendly README. Feel free to further customize it based on your project specifics!

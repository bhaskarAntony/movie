import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const movies = [
    {
      id: 1,
      title: "Inception",
      overview: "A skilled thief is offered a chance to erase his criminal record by performing an impossible heist: planting an idea in someone's subconscious.",
      genre_ids: [28, 878, 18],
      release_date: "2010-07-16",
      rating: 8.8,
      poster_path: "https://qqcdnpictest.mxplay.com/pic/8d10e6e723ac95001c0d7f0324a467cb/en/2x3/320x480/test_pic1729492845204_badged_1729492862869.webp",
      cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
      duration: "148 min",
      showtimes: ["14:00", "17:00", "20:00"]
    },
    {
      id: 2,
      title: "The Dark Knight",
      overview: "Batman faces the Joker, a criminal mastermind wreaking havoc on Gotham City.",
      genre_ids: [28, 80, 18],
      release_date: "2008-07-18",
      rating: 9.0,
      poster_path: "https://qqcdnpictest.mxplay.com/pic/55e8687b4891c058605c3dcd63bc271f/en/2x3/320x480/test_pic1729516261389_badged_1729516265501.webp",
      cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      duration: "152 min",
      showtimes: ["13:00", "16:30", "19:30"]
    },
    {
      id: 3,
      title: "Interstellar",
      overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      genre_ids: [12, 18, 878],
      release_date: "2014-11-07",
      rating: 8.6,
      poster_path: "https://qqcdnpictest.mxplay.com/pic/61fa0eecb139dcb3d653998359b698a2/en/2x3/320x480/test_pic1728904952526_badged_1728904958930.webp",
      cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
      duration: "169 min",
      showtimes: ["15:00", "18:30", "22:00"]
    },
    {
      id: 4,
      title: "The Matrix",
      overview: "A hacker discovers the world is a simulated reality and joins a rebellion to free humanity.",
      genre_ids: [28, 878],
      release_date: "1999-03-31",
      rating: 8.7,
      poster_path: "https://qqcdnpictest.mxplay.com/pic/94024bd72b6fd665c8ff8e65212e6254/en/2x3/320x480/test_pic1729491921134_badged_1729491932171.webp",
      cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
      duration: "136 min",
      showtimes: ["12:00", "15:30", "19:00"]
    },
    {
      id: 5,
      title: "The Godfather",
      overview: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
      genre_ids: [80, 18],
      release_date: "1972-03-24",
      rating: 9.2,
      poster_path: "https://qqcdnpictest.mxplay.com/pic/930c17ac43f44c7722681655bfb9c1ef/en/2x3/320x480/test_pic1725888996426.webp",
      cast: ["Marlon Brando", "Al Pacino", "James Caan"],
      duration: "175 min",
      showtimes: ["14:30", "18:00", "21:30"]
    },
    {
      id: 6,
      title: "The Shawshank Redemption",
      overview: "Two imprisoned men bond over years, finding solace and redemption through acts of decency.",
      genre_ids: [18, 80],
      release_date: "1994-09-22",
      rating: 9.3,
      poster_path: "https://qqcdnpictest.mxplay.com/pic/c946c8d776bcfb66b73330f2f590c81a/en/2x3/320x480/test_pic1725885013173_badged_1727154016084.webp",
      cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
      duration: "142 min",
      showtimes: ["16:00", "19:30", "23:00"]
    },
    {
      id: 7,
      title: "Pulp Fiction",
      overview: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine.",
      genre_ids: [80, 53, 18],
      release_date: "1994-10-14",
      rating: 8.9,
      poster_path: "https://qqcdnpictest.mxplay.com/pic/6cd0bb2e1c321c81e579275efa38ccd2/en/2x3/320x480/test_pic1726300407522.webp",
      cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
      duration: "154 min",
      showtimes: ["14:00", "17:30", "21:00"]
    },
    {
      id: 8,
      title: "Fight Club",
      overview: "An insomniac office worker forms an underground fight club as an escape from his drab life.",
      genre_ids: [18, 53],
      release_date: "1999-10-15",
      rating: 8.8,
      poster_path: "https://qqcdnpictest.mxplay.com/pic/4427b696f812fbf4aadc14559f8995fc/en/2x3/320x480/4b278501b4080f45f01a07d5ba8f99a1_1280x1920.webp",
      cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
      duration: "139 min",
      showtimes: ["12:30", "15:30", "19:00"]
    },
    {
      id: 9,
      title: "Forrest Gump",
      overview: "The story of a man with low intelligence who unwittingly influences some of the most significant events in history.",
      genre_ids: [35, 18, 10749],
      release_date: "1994-07-06",
      rating: 8.8,
      poster_path: "https://qqcdnpictest.mxplay.com/pic/f4b655bb875cafdcdf6a2a6494061b87/en/2x3/320x480/test_pic1727115079941.webp",
      cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
      duration: "142 min",
      showtimes: ["13:00", "16:30", "20:00"]
    },
    {
      id: 10,
      title: "Gladiator",
      overview: "A former Roman General seeks revenge against the corrupt emperor who murdered his family and sent him into slavery.",
      genre_ids: [28, 18],
      release_date: "2000-05-05",
      rating: 8.5,
      poster_path: "https://qqcdnpictest.mxplay.com/pic/d146c3f5bc6a16390d2886b885a497ce/en/2x3/320x480/test_pic1725636751261.webp",
      cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
      duration: "155 min",
      showtimes: ["14:00", "17:30", "21:00"]
    },
    {
        id: 11,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        overview: "A young hobbit embarks on a journey to destroy a powerful ring.",
        genre_ids: [12, 18, 14],
        release_date: "2001-12-19",
        rating: 8.8,
        poster_path: "https://qqcdnpictest.mxplay.com/pic/42e586d6bbecde9aa889bb43c18dfc07/en/2x3/320x480/test_pic1729492057716.webp",
        cast: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
        duration: "178 min",
        showtimes: ["11:00", "15:00", "19:00"]
      },
      {
        id: 12,
        title: "The Lord of the Rings: The Two Towers",
        overview: "The fellowship is divided as they continue their quest to destroy the One Ring.",
        genre_ids: [12, 14, 28],
        release_date: "2002-12-18",
        rating: 8.7,
        poster_path: "https://qqcdnpictest.mxplay.com/pic/fa545619f885bf6f277e58b0d01a7e3a/en/2x3/320x480/test_pic1725551714800.webp",
        cast: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
        duration: "179 min",
        showtimes: ["12:00", "16:30", "20:30"]
      },
      {
        id: 13,
        title: "The Lord of the Rings: The Return of the King",
        overview: "The final battle for Middle-earth begins, and Frodo reaches Mordor to destroy the One Ring.",
        genre_ids: [12, 18, 28],
        release_date: "2003-12-17",
        rating: 8.9,
        poster_path: "https://qqcdnpictest.mxplay.com/pic/ddf3d9efef26616864b7991cd94b8aa1/en/2x3/320x480/test_pic1725887104223.webp",
        cast: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
        duration: "201 min",
        showtimes: ["13:30", "17:30", "21:30"]
      },
      {
        id: 14,
        title: "The Silence of the Lambs",
        overview: "A young FBI agent seeks the help of a brilliant cannibalistic serial killer to catch another killer.",
        genre_ids: [80, 18, 53],
        release_date: "1991-02-14",
        rating: 8.6,
        poster_path: "https://qqcdnpictest.mxplay.com/pic/d33b68e4cf071fce2e7b95629dc17ebb/hi/2x3/320x480/test_pic1729062174396_badged_1729659612625.webp",
        cast: ["Jodie Foster", "Anthony Hopkins", "Scott Glenn"],
        duration: "118 min",
        showtimes: ["14:00", "18:00", "22:00"]
      },
      {
        id: 15,
        title: "Schindler's List",
        overview: "In Nazi-occupied Poland, a businessman becomes an unlikely savior of Jews during the Holocaust.",
        genre_ids: [18, 36],
        release_date: "1993-12-15",
        rating: 9.0,
        poster_path: "https://qqcdnpictest.mxplay.com/pic/73e65cfd170a2a6295738ef7e85c1542/en/2x3/320x480/3715e6d5c477cd69b77c5acb2fcdf7a8_1280x1920_badged_1729918909278.webp",
        cast: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
        duration: "195 min",
        showtimes: ["12:30", "17:00", "21:30"]
      },
      {
        id: 16,
        title: "The Lion King",
        overview: "A lion cub named Simba is exiled after his father's murder and returns to reclaim his throne.",
        genre_ids: [16, 18, 10751],
        release_date: "1994-06-24",
        rating: 8.5,
        poster_path: "https://qqcdnpictest.mxplay.com/pic/0824b942cecba2886443004138a8e860/en/2x3/320x480/test_pic1727114728298_badged_1729918897019.webp",
        cast: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
        duration: "88 min",
        showtimes: ["10:00", "13:00", "16:00"]
      },
      {
        id: 17,
        title: "Saving Private Ryan",
        overview: "During WWII, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper.",
        genre_ids: [28, 18, 36],
        release_date: "1998-07-24",
        rating: 8.6,
        poster_path: "https://qqcdnpictest.mxplay.com/pic/5718b304e9e69a0cce823b450ebe6103/en/2x3/320x480/test_pic1658147154080.webp",
        cast: ["Tom Hanks", "Matt Damon", "Tom Sizemore"],
        duration: "169 min",
        showtimes: ["11:30", "15:30", "19:30"]
      },
      {
        id: 18,
        title: "The Green Mile",
        overview: "A death row corrections officer discovers a man with a mysterious gift.",
        genre_ids: [80, 18, 14],
        release_date: "1999-12-10",
        rating: 8.6,
        poster_path: "https://qqcdnpictest.mxplay.com/pic/ee5f8ba6d087fc47627c1bb41bd9916d/en/2x3/320x480/test_pic1691748644938.webp",
        cast: ["Tom Hanks", "Michael Clarke Duncan", "David Morse"],
        duration: "189 min",
        showtimes: ["12:00", "16:30", "21:00"]
      },
      {
        id: 19,
        title: "Braveheart",
        overview: "Scottish warrior William Wallace leads a revolt against England.",
        genre_ids: [18, 36, 10752],
        release_date: "1995-05-24",
        rating: 8.3,
        poster_path: "https://qqcdnpictest.mxplay.com/pic/1a9a8ebf62df05e913ce23f67d954e02/en/2x3/320x480/test_pic1726299406419.webp",
        cast: ["Mel Gibson", "Sophie Marceau", "Patrick McGoohan"],
        duration: "178 min",
        showtimes: ["11:00", "15:00", "19:00"]
      },
      {
        id: 20,
        title: "Avatar",
        overview: "A paraplegic Marine is dispatched to Pandora and becomes torn between following orders and protecting the world he feels is his home.",
        genre_ids: [28, 12, 878],
        release_date: "2009-12-18",
        rating: 7.8,
        poster_path: "https://qqcdnpictest.mxplay.com/pic/07fe6b61a6c3dea88f619e8e5f032b74/en/7764cfef55/2x3/320x480/test_pic1688629160764.webp",
        cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
        duration: "162 min",
        showtimes: ["13:00", "17:00", "21:00"]
      },
      {
        id: 21,
        title: "Avengers: Endgame",
        overview: "The Avengers assemble once more to reverse the devastation caused by Thanos.",
        genre_ids: [28, 12, 878],
        release_date: "2019-04-26",
        rating: 8.4,
        poster_path: "https://qqcdnpictest.mxplay.com/pic/a7ecc11b9b963301b5821065b08bba2e/en/2x3/320x480/test_pic1695926240884.webp",
        cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
        duration: "181 min",
        showtimes: ["12:30", "16:30", "20:30"]
      },
      {
        id: 22,
        title: "Jurassic Park",
        overview: "A theme park with genetically engineered dinosaurs turns into a nightmare when the creatures break loose.",
        genre_ids: [28, 12, 878],
        release_date: "1993-06-11",
        rating: 8.1,
        poster_path: "https://qqcdnpictest.mxplay.com/pic/ec1a249f6d62063699a4d2085c51b61a/en/2x3/320x480/test_pic1727955362225.webp",
        cast: ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
        duration: "127 min",
        showtimes: ["10:00", "14:00", "18:00"]
      },
      {
        id: 23,
        title: "Back to the Future",
        overview: "A teenager is sent back in time and accidentally interferes with his parents' romance.",
        genre_ids: [12, 35, 878],
        release_date: "1985-07-03",
        rating: 8.5,
        poster_path: "https://qqcdnpictest.mxplay.com/pic/acd57a0d68a77c63e5d7682a8532ef92/en/2x3/320x480/test_pic1727273749109.webp",
        cast: ["Michael J. Fox", "Christopher Lloyd", "Lea Thompson"],
        duration: "116 min",
        showtimes: ["11:30", "15:30", "19:30"]
      },
      {
        id: 24,
        title: "Toy Story",
        overview: "A cowboy doll feels threatened when a new spaceman toy arrives.",
        genre_ids: [16, 10751, 35],
        release_date: "1995-11-22",
        rating: 8.3,
        poster_path: "https://qqcdnpictest.mxplay.com/pic/d1924002234d9096126aaee2ff997632/en/2x3/320x480/test_pic1719561453926_badged_1720936339156.webp",
        cast: ["Tom Hanks", "Tim Allen", "Don Rickles"],
        duration: "81 min",
        showtimes: ["10:30", "13:30", "16:30"]
      },
      {
        id: 25,
        title: "The Departed",
        overview: "Two men from opposite sides of the law go undercover to expose each other's organization.",
        genre_ids: [80, 18, 53],
        release_date: "2006-10-06",
        rating: 8.5,
        poster_path: "https://qqcdnpictest.mxplay.com/pic/9a81821d69b14900212475df2a723cc1/en/2x3/320x480/test_pic1574753557066.webp",
        cast: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"],
        duration: "151 min",
        showtimes: ["14:00", "17:30", "21:00"]
      },
      {
        id: 26,
        title: "Whiplash",
        overview: "A promising young drummer enrolls in a cutthroat music conservatory where his dreams are mentored by an instructor who will stop at nothing.",
        genre_ids: [18, 10402],
        release_date: "2014-10-10",
        rating: 8.5,
        poster_path: "https://qqcdnpictest.mxplay.com/pic/8095452c9f27aa14058a713da98e222f/en/2x3/320x480/test_pic1576232589579.webp",
        cast: ["Miles Teller", "J.K. Simmons", "Paul Reiser"],
        duration: "106 min",
        showtimes: ["13:30", "16:30", "20:00"]
      },
      {
        id: 27,
        title: "The Prestige",
        overview: "Two magicians become rivals, each determined to create the ultimate illusion.",
        genre_ids: [18, 53, 9648],
        release_date: "2006-10-20",
        rating: 8.5,
        poster_path: "https://qqcdnpictest.mxplay.com/pic/8ad69469355a916a761b826a210533bf/en/2x3/320x480/f709316775ce583c7f70ad8d9a984e46_1280x1920_badged_1729573214708.webp",
        cast: ["Christian Bale", "Hugh Jackman", "Scarlett Johansson"],
        duration: "130 min",
        showtimes: ["15:00", "18:30", "22:00"]
      },
      {
        id: 28,
        title: "Goodfellas",
        overview: "The story of Henry Hill and his life in the mob.",
        genre_ids: [80, 18],
        release_date: "1990-09-19",
        rating: 8.7,
        poster_path: "https://qqcdnpictest.mxplay.com/pic/67f83bc812b652bb475b7c8b358582f7/en/2x3/320x480/5cd29c172033d38a77e73e213d08b9c4_1280x1920.webp",
        cast: ["Robert De Niro", "Ray Liotta", "Joe Pesci"],
        duration: "146 min",
        showtimes: ["12:00", "16:00", "20:00"]
      },
      {
        id: 29,
        title: "The Shining",
        overview: "A man becomes influenced by a supernatural presence in an isolated hotel, descending into violence.",
        genre_ids: [27, 53],
        release_date: "1980-05-23",
        rating: 8.4,
        poster_path: "https://qqcdnpictest.mxplay.com/pic/2b1585e87da1e8deac286a0efe9ec9aa/en/2x3/320x480/2bce71b39a23cb676e24321d91298f2b_1280x1920.webp",
        cast: ["Jack Nicholson", "Shelley Duvall", "Danny Lloyd"],
        duration: "146 min",
        showtimes: ["13:00", "17:00", "21:00"]
      },
      {
        id: 30,
        title: "Parasite",
        overview: "A poor family schemes to become employed by a wealthy family, leading to a series of unexpected events.",
        genre_ids: [35, 18, 53],
        release_date: "2019-05-30",
        rating: 8.6,
        poster_path: "https://qqcdnpictest.mxplay.com/pic/425934c18f7cdd79f24f4c54c2d5e1d1/en/2x3/320x480/test_pic1728988167557.webp",
        cast: ["Kang-ho Song", "Sun-kyun Lee", "Yeo-jeong Jo"],
        duration: "132 min",
        showtimes: ["12:30", "16:30", "20:30"]
      }
  ];
  
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
//   const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY');
//   const data = await response.json();
  return movies;
});

const movieSlice = createSlice({
  name: 'movies',
  initialState: { list: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;

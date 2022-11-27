export async function getMoviesFromApi() {
    try {
      let response = await fetch('https://facebook.github.io/react-native/movies.json');
      let responseJson = await response.json();
      console.log('response');
      return responseJson.movies;
     } catch(error) {
      console.error(error);
    }
  }
export default function GetProfileImage(){
    return 'https://lh3.googleusercontent.com/azuVWnYtKD4D00SC7xLCnfBVJqKIZkuvvgIII27WeQnW-a1n0AFr7sdMN76DYsRGw_HcPT1CLIOp2pT98-_f0szBTetNQBshHndgsMqyk0CPxje-rdZYifEtrjY-V_bC9teh3XfT=w2400';
}

export function GetProfileName(){
    return 'userName'
}

var dict = {};

export function SetCurrentEventPageInfo(){
    dict['event_name'] = 'Test';
}

export function GetCurrentEventPageInfo(){
    return dict;
}
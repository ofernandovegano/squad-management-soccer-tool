// import dotenv from "dotenv";
// dotenv.config()
// console.log(process.env)
// const REACT_APP_FOOTBALL_KEY = process.env.REACT_APP_FOOTBALL_KEY
export const FETCH_API = 'FETCH_API';
export const ADD_TEAM = 'ADD_TEAM';

const myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", `${process.env.REACT_APP_FOOTBALL_KEY}`);
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

export function fetchApi() {
  const promise = fetch("https://v3.football.api-sports.io/teams?league=71&season=2020", requestOptions)
  .then(response => response.json())

 return {
   type: FETCH_API,
   payload: promise // Will be resolved by redux-promise
 };
}

export function addTeam(teams, team) {
  teams.push(team)
  return {
    type: ADD_TEAM,
    payload: teams
  }
}



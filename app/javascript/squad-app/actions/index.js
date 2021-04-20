// TODO: add and export your own actions
export const ADD_TEAM = 'ADD_TEAM';

export function addTeam(teams, team) {
  teams.push(team)
  return {
    type: ADD_TEAM,
    payload: teams
  }
}

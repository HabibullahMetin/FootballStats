export const fetchTournaments = async () => {
  const response = await fetch("https://stroccoli-futbol-science-v1.p.rapidapi.com/s1/tournaments", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "stroccoli-futbol-science-v1.p.rapidapi.com",
		"x-rapidapi-key": "4ce371a3a4msh9553c63153a21f5p1ccfbcjsn60f8b10805e7"
	}});
  const request = response.json();
  return request;
};

export const fetchLiveResults = async () => {
  const response = await fetch("https://stroccoli-futbol-science-v1.p.rapidapi.com/s2/live", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "stroccoli-futbol-science-v1.p.rapidapi.com",
		"x-rapidapi-key": "4ce371a3a4msh9553c63153a21f5p1ccfbcjsn60f8b10805e7"
	}});
  const request = response.json();
  return request;
};

export const fetchResults = async (startDate ,endDate ,leagueName) => {
  const response = await fetch("https://stroccoli-futbol-science-v1.p.rapidapi.com/s1/results/"+startDate+"/"+endDate+"?tournament_name="+leagueName, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "stroccoli-futbol-science-v1.p.rapidapi.com",
		"x-rapidapi-key": "4ce371a3a4msh9553c63153a21f5p1ccfbcjsn60f8b10805e7"
	}});
  const request = response.json();
  return request;
};

export const fetchCalendars = async (startDate ,endDate ,leagueName) => {
  const response = await fetch("https://stroccoli-futbol-science-v1.p.rapidapi.com/s1/calendar/"+startDate+"/"+endDate+"?tournament_name="+leagueName, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "stroccoli-futbol-science-v1.p.rapidapi.com",
		"x-rapidapi-key": "4ce371a3a4msh9553c63153a21f5p1ccfbcjsn60f8b10805e7"
	}});
  const request = response.json();
  return request;
};


// export const fetchWorldCupResults = async() => {
//   const response = await fetch("https://stroccoli-futbol-science-v1.p.rapidapi.com/world_cup/results/2014", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "stroccoli-futbol-science-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "4ce371a3a4msh9553c63153a21f5p1ccfbcjsn60f8b10805e7"
// 	}}).then(response => response.json()).then(data => {console.log(data)}).catch(err => {console.log(err)});
// };
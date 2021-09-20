//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName,managerAge,currentTeam,trophiesWon)
{
  var a=[managerName,managerAge,currentTeam,trophiesWon];
  return a;
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation)
{
  if (formation.length===0)
  {
    return null;
  }
  var ans={
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2]
  }
  return ans;
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterdebut(y)
{
  var arr=[];
  var a=0;
  for(let i=0;i<players.length;i++)
  {
    if(players[i]["debut"]===y)
    {
      arr[a]=players[i];
      a=a+1;
    }
  }
  return arr;
}

//Progression 4 - Filter players that play at the position _______
function filterposition(pos)
{
  var arr=[];
  var a=0;
  for(let i=0;i<players.length;i++)
  {
    if(players[i]["position"]===pos)
    {
      arr[a]=players[i];
      a=a+1;
    }
  }
  return arr;
}
//Progression 5 - Filter players that have won ______ award
function filterByAward(award)
{
  var arr=[];
  var a=0;
  for(let i=0;i<players.length;i++)
  {
    for(let j=0;j<players[i]["awards"].length;j++)
    if(players[i]["awards"][j]["name"]===award)
    {
      arr[a]=players[i];
      a=a+1;
    }
  }
  return arr;
}

//Progression 6 - Filter players that won ______ award ____ times
function filterAwardxTimes(award,times)
{
  var arr=[];
  var a=0;
  for(let i=0;i<players.length;i++)
  {
    var p=0;
    for(let j=0;j<players[i]["awards"].length;j++)
    {
      if(players[i]["awards"][j]["name"]===award)
      {
        p=p+1;
      }
    }
    if(p===times)
    {
      arr[a]=players[i];
      a=a+1;
    }
  }
  return arr;
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterAwardxCountry(award, country)
{
  var arr=[];
  var a=0;
  for(let i=0;i<players.length;i++)
  {
    var p=0;
    for(let j=0;j<players[i]["awards"].length;j++)
    {
      if(players[i]["awards"][j]["name"]===award)
      {
        p=p+1;
      }
    }
    if(p!=0 && players[i]["country"]===country)
    {
      arr[a]=players[i];
      a=a+1;
    }
  }
  return arr;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterNoOfAwardsxTeamxAge(times, team, age)
{
  var arr=[];
  var a=0;
  for(let i=0;i<players.length;i++)
  {
    if(players[i]["awards"].length>=times && players[i]["team"]===team && players[i]["age"]<age)
    {
      arr[a]=players[i];
      a=a+1;
    }
  }
  return arr;
}
//Progression 9 - Sort players in descending order of their age
function SortAgeDesc()
{
  var arr=[];
  for(let i=0;i<players.length;i++)
  {
    arr[i]=players[i];
  }
  for(let i=0;i<arr.length;i++)
  {
    for(let j=0;j<arr.length-i-1;j++)
    {
      if(arr[j]["age"]<arr[j+1]["age"])
      {
      let tmp=arr[i];
      arr[i]=arr[j];
      arr[j]=tmp;
      }
    }
  }
  return arr;
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterTeamxSortNoOfAwards()
{
  var arr=[];
  for(let i=0;i<players.length;i++)
  {
    arr[i]=players[i];
  }
  for(let i=0;i<arr.length;i++)
  {
    for(let j=0;j<arr.length-i-1;j++)
    {
      if(arr[j]["awards"].length<arr[j+1]["awards"].length)
      {
      let t=arr[i];
      arr[i]=arr[j];
      arr[j]=t;
      }
    }
  }
  return arr;
}


//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortNamexAwardxTimes(awardName, noOfTimes, country)
{
  let arr=[]
  for(let i=0;i<players.length;i++)
  {
    if(player[i]["country"]===country)
    {
      let p=0;
      for(let j=0;j<players[i]["awards"].length;j++)
      {
        if(player[i]["awards"]["name"]===awardName)
        {
          p=p+1;
        }
      }
      if(p===noOfTimes)
      {
        arr[i]=players[i];
      }
    }
  }

    arr.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
  })
  return arr;
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortNamexOlderThan(age)
{
  let arr=[]
  for(let i=0;i<players.length;i++)
  {
    if(players[i]["age"]>age)
    {
      arr[i]=players[i];
    }
  }
  for(let i=0;i<arr.length;i++)
  {
    for(let j=0;j<arr[i]["awards"].length;j++)
    {
      for(let k=0;k<arr[i]["awards"].length-j-1;j++)
      {
        if(arr[i]["awards"][k]["year"]>arr[i]["awards"][k+1]["year"])
        {
          let t=arr[i]["awards"][j];
          arr[i]["awards"][k]=arr[i]["awards"][j];
          arr[i]["awards"][j]=t;
        }
      }
    }
  }
  return arr;
}
const { State } = require('../models');

const stateData = [
{  //1
    state_name: "Alabama",
},
{   //2
    state_name: "Arizona",
},
{   //3
    state_name: "Arkansas",
},
{   //4
    state_name: "California",
},
{   //5
    state_name: "Colorado",
},
{   //6
    state_name: "Connecticut",
},
{   //7
    state_name: "Delaware",
},
{   //8
    state_name: "Florida",
},
{   //9
    state_name: "Georgia",
},
{   //10
    state_name: "Idaho",
},
{   //11
    state_name: "Illinois",
},
{   //12
    state_name: "Indiana",
},
{   //13
    state_name: "Iowa",
},
{   //14
    state_name: "Kansas",
},
{   //15
    state_name: "Kentucky",
},
{   //16
    state_name: "Louisiana",
},
{   //17
    state_name: "Maine",
},
{   //18
    state_name: "Maryland",
},
{   //19
    state_name: "Massachusetts",
},
{   //20
    state_name: "Michigan",
},
{   //21
    state_name: "Minnesota",
},
{   //22
    state_name: "Mississippi",
},
{   //23
    state_name: "Missouri",
},
{   //24
    state_name: "Montana",
},
{   //25
    state_name: "Nebraska",
},
{   //26
    state_name: "Nevada",
},
{   //27
    state_name: "New Hampshire",
},
{   //28
    state_name: "New Jersey",
},
{   //29
    state_name: "New Mexico",
},
{   //30
    state_name: "New York",
},
{   //31
    state_name: "North Carolina",
},
{   //32
    state_name: "North Dakota",
},
{   //33
    state_name: "Ohio",
},
{   //34
    state_name: "Oklahoma",
},
{   //35
    state_name: "Oregon",
},
{   //36
    state_name: "Pennsylvania",
},
{   //37
    state_name: "Rhode Island"
},
{   //38
    state_name: "South Carolina",
},
{   //39
    state_name: "South Dakota",
},
{   //40
    state_name: "Tennessee",
},
{   //41
    state_name: "Texas",
},
{   //42
    state_name: "Utah",
},
{   //43
    state_name: "Vermont",
},
{   //44
    state_name: "Virginia",
},
{   //45
    state_name: "Washington",
},
{   //46
    state_name: "West Virginia",
},
{   //47
    state_name: "Wisconsin",
},
{   //48
    state_name: "Wyoming",
}
];

const seedState = () => Shop.bulkCreate(stateData);

module.exports = seedState;

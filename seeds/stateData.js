const { State } = require("../models");

const stateData = [
  {
    code: "US.AL",
    state_name: "Alabama",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Alabama.png",
  },
  {
    code: "US.AZ",
    state_name: "Arizona",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Arizona.png",
  },
  {
    code: "US.AR",
    state_name: "Arkansas",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Arkansas.png",
  },
  {
    code: "US.CA",
    state_name: "California",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_California.png",
  },
  {
    code: "US.CO",
    state_name: "Colorado",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Colorado.png",
  },
  {
    code: "US.CT",
    state_name: "Connecticut",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Connecticut.png",
  },
  {
    code: "US.DE",
    state_name: "Delaware",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Delaware.png",
  },
  {
    code: "US.FL",
    state_name: "Florida",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Florida.png",
  },
  {
    code: "US.GA",
    state_name: "Georgia",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Georgia.png",
  },
  {
    code: "US.ID",
    state_name: "Idaho",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Idaho.png",
  },
  {
    code: "US.IL",
    state_name: "Illinois",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Illinois.png",
  },
  {
    code: "US.IN",
    state_name: "Indiana",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Indiana.png",
  },
  {
    code: "US.IA",
    state_name: "Iowa",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Iowa.png",
  },
  {
    code: "US.KS",
    state_name: "Kansas",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Kansas.png",
  },
  {
    code: "US.KY",
    state_name: "Kentucky",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Kentucky.png",
  },
  {
    code: "US.LA",
    state_name: "Louisiana",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Louisiana.png",
  },
  {
    code: "US.ME",
    state_name: "Maine",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Maine.png",
  },
  {
    code: "US.MD",
    state_name: "Maryland",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Maryland.png",
  },
  {
    code: "US.MA",
    state_name: "Massachusetts",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Massachusetts.png",
  },
  {
    code: "US.MI",
    state_name: "Michigan",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Michigan.png",
  },
  {
    code: "US.MN",
    state_name: "Minnesota",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Minnesota.png",
  },
  {
    code: "US.MS",
    state_name: "Mississippi",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Mississippi.png",
  },
  {
    code: "US.MO",
    state_name: "Missouri",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Missouri.png",
  },
  {
    code: "US.MT",
    state_name: "Montana",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Montana.png",
  },
  {
    code: "US.NE",
    state_name: "Nebraska",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Nebraska.png",
  },
  {
    code: "US.NV",
    state_name: "Nevada",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Nevada.png",
  },
  {
    code: "US.NH",
    state_name: "New Hampshire",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_New_Hampshire.png",
  },
  {
    code: "US.NJ",
    state_name: "New Jersey",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_New_Jersey.png",
  },
  {
    code: "US.NM",
    state_name: "New Mexico",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_New_Mexico.png",
  },
  {
    code: "US.NY",
    state_name: "New York",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_New_York.png",
  },
  {
    code: "US.NC",
    state_name: "North Carolina",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_North_Carolina.png",
  },
  {
    code: "US.ND",
    state_name: "North Dakota",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_North_Dakota.png",
  },
  {
    code: "US.OH",
    state_name: "Ohio",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Ohio.png",
  },
  {
    code: "US.OK",
    state_name: "Oklahoma",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Oklahoma.png",
  },
  {
    code: "US.OR",
    state_name: "Oregon",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Oregon.png",
  },
  {
    code: "US.PA",
    state_name: "Pennsylvania",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Pennsylvania.png",
  },
  {
    code: "US.RI",
    state_name: "Rhode Island",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Rhode_Island.png",
  },
  {
    code: "US.SC",
    state_name: "South Carolina",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_South_Carolina.png",
  },
  {
    code: "US.SD",
    state_name: "South Dakota",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_South_Dakota.png",
  },
  {
    code: "US.TN",
    state_name: "Tennessee",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Tennessee.png",
  },
  {
    code: "US.TX",
    state_name: "Texas",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Texas.png",
  },
  {
    code: "US.UT",
    state_name: "Utah",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Utah.png",
  },
  {
    code: "US.VT",
    state_name: "Vermont",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Vermont.png",
  },
  {
    code: "US.VA",
    state_name: "Virginia",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Virginia.png",
  },
  {
    code: "US.WA",
    state_name: "Washington",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Washington.png",
  },
  {
    code: "US.WV",
    state_name: "West Virginia",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_West_Virginia.png",
  },
  {
    code: "US.WI",
    state_name: "Wisconsin",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Wisconsin.png",
  },
  {
    code: "US.WY",
    state_name: "Wyoming",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Wyoming.png",
  },
  {
    code: "US.AK",
    state_name: "Alaska",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Alaska.png",
  },
  {
    code: "US.HI",
    state_name: "Hawaii",
    flag: "http://static.anychart.com/images/maps_samples/States_of_United_States_Dashboard_with_MultiSelect/Flag_of_Hawaii.png",
  },
];

const seedState = () => State.bulkCreate(stateData);

module.exports = seedState;

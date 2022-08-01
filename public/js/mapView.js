var mapSeries;
var mapChart;
var dataSet;
var populationChart;
var areaChart;
var houseSeatsChart;


anychart.onDocumentReady(async function () {
  // The data used in this sample can be obtained from the CDN
  // https://cdn.anychart.com/samples/maps-in-dashboard/states-of-united-states-dashboard-with-multi-select/data.json
  anychart.data.loadJsonFile(
    //"https://cdn.anychart.com/samples/maps-in-dashboard/states-of-united-states-dashboard-with-multi-select/data.json",
    "/api/data/states",
    function (data) {
      console.log(data);
      // pre-processing of the data
      for (var i = 0; i < data.length; i++) {
        data[i].id = data[i].code;
        data[i].name = data[i].state_name;
        data[i].value = data[i].shop_count;
        data[i].short = data[i].code;
      }
      dataSet = anychart.data.set(data);
      mapChart = drawMap();

      // Setting layout table
      var layoutTable = anychart.standalones.table();
      layoutTable.cellBorder(null);
      layoutTable.container("container");
      layoutTable.draw();

      async function apiQuery(apiPath, params) {
          let url = new URL(`${window.location.origin}/api/${apiPath}`);
          
          params.forEach((p) => url.searchParams.append(p.name, p.value));
            // console.log('apiQuery: url: ', url);
          return await fetch(url).then((res) => res.json());
      }

    
      

      //
      async function changeContent(ids) {
        // console.log("changeContent(): ids:", ids);
        // let url = new URL(window.location.origin + "/api/data/shopsInStates");
        // ids.forEach((id) => {
        //   // appending state codes
        //   // server side interpretation to resolve the string into an array
        //   // stateCodes[] forces it to be an array server side
        //   url.searchParams.append("stateCodes[]", getDataId(id).code);
        //   console.log(getDataId(id));
        //   //     console.log(getDataId(id));
        //   // //   getDataId.getDataId(id);
        // });

        let shops = (ids && ids.length > 0)
            ? await apiQuery('data/shopsInStates', ids.map((id) => ({ name: 'stateCodes[]', value: getDataId(id).code })))
            : [];
        // console.log(shops);

        function req(event, data='', method='GET',url='/shop/:id') {
            // console.debug(event);
            event.preventDefault();
            fetch(url, {method: "POST"}).then(() => {
                location.href = event.target.href;
            });
        }
        

        let tbody = $("table.shops tbody");
        tbody.empty();

        shops.forEach(async (shop) => {
         let comments =  await apiQuery('data/shopComments', [ { name: 'shopId', value: shop.id } ]);
         let [state] = await apiQuery('data/state', [ { name: 'stateId', value: shop.state_id } ]);
         console.log('shop, state:', shop, state);
          tbody.append(`<tr>
            <td><img src="${state.flag}"/></td>
            <td><a href='/shop/${shop.id}' onclick="req(event, 'name=vmode&value=full','POST','/cookie')"> ${shop.shop_name} </a></td>
            <td><a> ${comments.length} </a></td>
            </tr>`);
        });
      }

      function drawMap() {
        var map = anychart.map();
        // set map title settings using html
        map.title().padding(10, 0, 10, 0).margin(0).useHtml(true);
        map.title("Repair Shops in the United States");
        map.padding([0, 0, 10, 0]);


        map.background().fill({
            keys: ["#ddd8d7"],
        })
        .stroke({
            color: "black",
            thickness: 0
        })
        .cornerType("round")
        .corners(5);
        // set map Geo data
        map.geoData("anychart.maps.united_states_of_america");

        map.listen("pointsSelect", function (e) {
          var selected = [];
          var selectedPoints = e.seriesStatus[0].points;
          for (var i = 0; i < selectedPoints.length; i++) {
            selected.push(selectedPoints[i].id);
          }
          changeContent(selected);
        });

        mapSeries = map.choropleth(dataSet);
        mapSeries.labels(null);
        mapSeries.tooltip().useHtml(true);
        mapSeries.tooltip().title().useHtml(true);
        mapSeries.tooltip().titleFormat(function () {
          return this.name;
        });
        mapSeries.tooltip().format(function () {
          var data = getDataId(this.id);
          return `<span style="font-size: 12px; color: #b7b7b7">Number of Shops: </span>${data.shop_count}`;
        });
        var scale = anychart.scales.ordinalColor([
          { less: 0 },
          { from: 1, to: 2 },
          { from: 3, to: 4 },
          { from: 5, to: 6 },
          { from: 7, to: 8 },
          { from: 9, to: 10 },
          { greater: 11 },
        ]);
        scale.colors([
          "#eee",
          "#4fc3f7",
          "#29b6f6",
          "#039be5",
          "#0288d1",
          "#0277bd",
          "#01579b",
        ]);
        mapSeries.hovered().fill("#f06292");
        mapSeries
          .selected()
          .fill("#c2185b")
          .stroke(anychart.color.darken("#c2185b"));
        mapSeries.colorScale(scale);

        mapSeries.stroke(function () {
          this.iterator.select(this.index);
          var pointValue = this.iterator.get(this.referenceValueNames[1]);
          var color = this.colorScale.valueToColor(pointValue);
          return anychart.color.darken(color);
        });

        var colorRange = map.colorRange();
        colorRange.enabled(true);
        colorRange
          .ticks()
          .stroke("3 #ffffff")
          .position("center")
          .length(20)
          .enabled(true);
        colorRange.colorLineSize(5);
        colorRange
          .labels()
          .fontSize(11)
          .padding(0, 0, 0, 0)
          .format(function () {
            var range = this.colorRange;
            var name;
            if (isFinite(range.start + range.end)) {
              name = range.start + " - " + range.end;
            } else if (isFinite(range.start)) {
              name = "Greater Than"  + range.start;
            } else {
              name = "" + range.end;
            }
            return name;
          });
        return map;
      }

      // Creates general layout table with two inside layout tables
      function fillInMainTable(flag) {
        if (flag === "wide") {
          layoutTable.contents([[mapChart]], true);
          layoutTable.getRow(0).height(null);
        } else {
          layoutTable.contents([[mapChart]], true);
          layoutTable.getRow(0).height(350);
        }
        layoutTable.draw();
      }

      if (window.innerWidth > 768) fillInMainTable("wide");
      else {
        fillInMainTable("slim");
      }
      mapSeries.select(1);
      changeContent(["US.AZ"]);

      // On resize changing layout to mobile version or conversely
      window.onresize = function () {
        if (layoutTable.colsCount() === 1 && window.innerWidth > 767) {
          fillInMainTable("wide");
        } else if (layoutTable.colsCount() === 2 && window.innerWidth <= 767) {
          fillInMainTable("slim");
        }
      };

      function getDataId(id) {
        for (var i = 0; i < data.length; i++) {
          if (data[i].id === id) return data[i];
        }
      }

      function getDataSum(field) {
        var result = 0;
        for (var i = 0; i < data.length; i++) {
          result += parseInt(data[i][field]);
        }
        return result;
      }
    }
  );
});

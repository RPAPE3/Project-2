var mapSeries;
var mapChart;
var tableCharts;
var dataSet;
var tableChart;
var populationChart;
var areaChart;
var houseSeatsChart;

anychart.onDocumentReady(async function () {
  // The data used in this sample can be obtained from the CDN
  // https://cdn.anychart.com/samples/maps-in-dashboard/states-of-united-states-dashboard-with-multi-select/data.json
  anychart.data.loadJsonFile(
      //"https://cdn.anychart.com/samples/maps-in-dashboard/states-of-united-states-dashboard-with-multi-select/data.json",
      '/api/data/states',
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
      tableChart = getTableChart();
      mapChart = drawMap();
      //   tableCharts = getTableCharts();

      // Setting layout table
      var layoutTable = anychart.standalones.table();
      layoutTable.cellBorder(null);
      layoutTable.container("container");
      layoutTable.draw();

      function getTableChart() {
        var table = anychart.standalones.table();
        table.cellBorder(null);
        table.fontSize(11).vAlign("middle").fontColor("#212121");
        table
          .getCell(0, 0)
          .colSpan(8)
          .fontSize(14)
          .vAlign("top")
          .border()
          .bottom("1px #dedede")
          .fontColor("#7c868e");
        table
          .useHtml(true)
          .contents([
            ["Selected States Data"],
            [
              null,
              "Name",
              "# Shops",
            ],
            [null],
          ]);
        table.getRow(1).cellBorder().bottom("2px #dedede").fontColor("#7c868e");
        table.getRow(0).height(45).hAlign("center");
        table.getRow(1).height(35);
        table.getCol(0).width(25);
        table.getCol(1).hAlign("left");
        table.getCol(2).hAlign("left");
        table.getCol(2).width(50);
        return table;
      }

      function changeContent(ids) {
        var i;
        var contents = [
          ["Selected States"],
          [
            null,
            "Name",
            "Shops",
          ],
        ];
        for (i = 0; i < ids.length; i++) {
          var data = getDataId(ids[i]);
console.log('i:', i, 'id:', ids[i], 'data:', data);
          var label = anychart.standalones.label();
          label
            .width("100%")
            .height("100%")
            .text("")
            .background()
            .enabled(true)
            .fill({
              src: data.flag,
              mode: "fit",
            });
          contents.push([
            label,
            data.name,
            data.value
          ]);
        }

        tableChart.contents(contents);
        for (i = 0; i < ids.length; i++) {
          tableChart.getRow(i + 2).maxHeight(35);
        }
      }

      function drawMap() {
        var map = anychart.map();
        // set map title settings using html
        map.title().padding(10, 0, 10, 0).margin(0).useHtml(true);
        map.title("Repair Shops in the United States");
        map.padding([0, 0, 10, 0]);

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
        mapSeries.tooltip().titleFormat(function() {
           return this.name;
        });
        mapSeries.tooltip().format(function() {
          var data = getDataId(this.id);
          return `<span style="font-size: 12px; color: #b7b7b7">Number of Shops: </span>${data.shop_count}`;
        });
        var scale = anychart.scales.ordinalColor([
          { less: 0 },
          { from: 0, to: 1 },
          { from: 2, to: 3 },
          { from: 4, to: 5 },
          { from: 6, to: 7 },
          { from: 8, to: 9 },
          { greater: 9 },
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
              name = "After " + range.start;
            } else {
              name = "Before " + range.end;
            }
            return name;
          });
        return map;
      }

      // Creates general layout table with two inside layout tables
      function fillInMainTable(flag) {
        if (flag === "wide") {
          layoutTable.contents([[mapChart], [tableChart]], true);
          layoutTable.getRow(0).height(null);
        } else {
          layoutTable.contents([[mapChart], [tableChart]], true);
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

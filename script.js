

// Small Graphs

// Small Graph 1

var options = {
  series: [{
  data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
}],
  chart: {
  type: 'line',
  width: 100,
  height: 35,
  sparkline: {
    enabled: true
  }
},
tooltip: {
  fixed: {
    enabled: false
  },
  x: {
    show: false
  },
  y: {
    title: {
      formatter: function (seriesName) {
        return ''
      }
    }
  },
  marker: {
    show: false
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart-1"), options);
chart.render();

 // Small Graph 2
 
 var options = {
  colors : ['#f787b4'],
  series: [{
  data: [34, 12, 2, 78, 45, 15, 47, 65, 65, 19, 14]
}],
  chart: {
  type: 'line',
  width: 100,
  height: 35,
  colors: ['#546E7A'],
  sparkline: {
    enabled: true
  }
},
tooltip: {
  fixed: {
    enabled: false
  },
  x: {
    show: false
  },
  y: {
    title: {
      formatter: function (seriesName) {
        return ''
      }
    }
  },
  marker: {
    show: false
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart-2"), options);
chart.render();

// Small Graph 3

var options = {
  colors : ['#7ECAE7'],
  series: [{
  data: [34, 12, 2, 78, 45, 15, 47, 65, 65, 19, 14]
}],
  chart: {
  type: 'line',
  width: 100,
  height: 35,
  colors: ['#546E7A'],
  sparkline: {
    enabled: true
  }
},
tooltip: {
  fixed: {
    enabled: false
  },
  x: {
    show: false
  },
  y: {
    title: {
      formatter: function (seriesName) {
        return ''
      }
    }
  },
  marker: {
    show: false
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart-3"), options);
chart.render();

// Small graph 4
var options = {
  colors : ['#1ABC9C'],
  series: [{
  data: [34, 12, 2, 78, 45, 15, 47, 65, 65, 19, 14]
}],
  chart: {
  type: 'line',
  width: 100,
  height: 35,
  colors: ['#546E7A'],
  sparkline: {
    enabled: true
  }
},
tooltip: {
  fixed: {
    enabled: false
  },
  x: {
    show: false
  },
  y: {
    title: {
      formatter: function (seriesName) {
        return ''
      }
    }
  },
  marker: {
    show: false
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart-4"), options);
chart.render();

// Radar Chart

var options = {
  series: [{
  name: 'Series 1',
  data: [80, 50, 30, 40, 100, 20],
}, {
  name: 'Series 2',
  data: [20, 30, 40, 80, 20, 80],
}, {
  name: 'Series 3',
  data: [44, 76, 78, 13, 43, 10],
}],
  chart: {
  height: 350,
  type: 'radar',
  dropShadow: {
    enabled: true,
    blur: 1,
    left: 1,
    top: 1
  }
},
title: {
  text: 'Radar Chart - Multi Series'
},
stroke: {
  width: 2
},
fill: {
  opacity: 0.1
},
markers: {
  size: 0
},
xaxis: {
  categories: ['2011', '2012', '2013', '2014', '2015', '2016']
}
};

var chart = new ApexCharts(document.querySelector("#chart-5"), options);
chart.render();

// Area chart

var options = {
  series: [{
  name: 'series1',
  data: [31, 40, 28, 51, 42, 109, 100]
}, {
  name: 'series2',
  data: [11, 32, 45, 32, 34, 52, 41]
}],
  chart: {
  height: 350,
  type: 'area'
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
xaxis: {
  type: 'datetime',
  categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
},
tooltip: {
  x: {
    format: 'dd/MM/yy HH:mm'
  },
},
};

var chart = new ApexCharts(document.querySelector("#chart-6"), options);
chart.render();

// Bar Graph

var options = {
  series: [{
  name: 'Net Profit',
  data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
}],
  chart: {
  type: 'bar',
  height: 350
},
plotOptions: {
  bar: {
    horizontal: false,
    columnWidth: '50%',
    endingShape: 'rounded'
  },
},
dataLabels: {
  enabled: false
},
stroke: {
  show: true,
  width: 2,
  colors: ['transparent']
},
xaxis: {
  categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
},
yaxis: {
  title: {
    text: '$ (thousands)'
  }
},
fill: {
  opacity: 1
},
tooltip: {
  y: {
    formatter: function (val) {
      return "$ " + val + " thousands"
    }
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart-7"), options);
chart.render();

// Donut Graph
var options = {
  series: [44, 55, 41, 17, 15],
  chart: {
  type: 'donut',
},
responsive: [{
  breakpoint: 1300,
  options: {
    chart: {
      width: 300
    },
    legend: {
      position: 'right'
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#donut"), options);
chart.render();

// Inventory Graphs

// Inventory Donut Graph
var options = {
  series: [44, 55, 41, 17, 15],
  chart: {
  type: 'donut',
},
responsive: [{
  breakpoint: 1300,
  options: {
    chart: {
      width: 300
    },
    legend: {
      position: 'right'
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#donut-inv"), options);
chart.render();

        // Small Graph 1

var options = {
  series: [{
  data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
}],
  chart: {
  type: 'line',
  width: 100,
  height: 35,
  sparkline: {
    enabled: true
  }
},
tooltip: {
  fixed: {
    enabled: false
  },
  x: {
    show: false
  },
  y: {
    title: {
      formatter: function (seriesName) {
        return ''
      }
    }
  },
  marker: {
    show: false
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart-1-inv"), options);
chart.render();

 // Small Graph 2
 
 var options = {
  colors : ['#f787b4'],
  series: [{
  data: [34, 12, 2, 78, 45, 15, 47, 65, 65, 19, 14]
}],
  chart: {
  type: 'line',
  width: 100,
  height: 35,
  colors: ['#546E7A'],
  sparkline: {
    enabled: true
  }
},
tooltip: {
  fixed: {
    enabled: false
  },
  x: {
    show: false
  },
  y: {
    title: {
      formatter: function (seriesName) {
        return ''
      }
    }
  },
  marker: {
    show: false
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart-2-inv"), options);
chart.render();

// Small Graph 3

var options = {
  colors : ['#7ECAE7'],
  series: [{
  data: [34, 12, 2, 78, 45, 15, 47, 65, 65, 19, 14]
}],
  chart: {
  type: 'line',
  width: 100,
  height: 35,
  colors: ['#546E7A'],
  sparkline: {
    enabled: true
  }
},
tooltip: {
  fixed: {
    enabled: false
  },
  x: {
    show: false
  },
  y: {
    title: {
      formatter: function (seriesName) {
        return ''
      }
    }
  },
  marker: {
    show: false
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart-3-inv"), options);
chart.render();

// Small graph 4
var options = {
  colors : ['#1ABC9C'],
  series: [{
  data: [34, 12, 2, 78, 45, 15, 47, 65, 65, 19, 14]
}],
  chart: {
  type: 'line',
  width: 100,
  height: 35,
  colors: ['#546E7A'],
  sparkline: {
    enabled: true
  }
},
tooltip: {
  fixed: {
    enabled: false
  },
  x: {
    show: false
  },
  y: {
    title: {
      formatter: function (seriesName) {
        return ''
      }
    }
  },
  marker: {
    show: false
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart-4-inv"), options);
chart.render();

// Sales Graph

// Small Graph 1

var options = {
  series: [{
  data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
}],
  chart: {
  type: 'line',
  width: 100,
  height: 35,
  sparkline: {
    enabled: true
  }
},
tooltip: {
  fixed: {
    enabled: false
  },
  x: {
    show: false
  },
  y: {
    title: {
      formatter: function (seriesName) {
        return ''
      }
    }
  },
  marker: {
    show: false
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart-1-sales"), options);
chart.render();

 // Small Graph 2
 
 var options = {
  colors : ['#f787b4'],
  series: [{
  data: [34, 12, 2, 78, 45, 15, 47, 65, 65, 19, 14]
}],
  chart: {
  type: 'line',
  width: 100,
  height: 35,
  colors: ['#546E7A'],
  sparkline: {
    enabled: true
  }
},
tooltip: {
  fixed: {
    enabled: false
  },
  x: {
    show: false
  },
  y: {
    title: {
      formatter: function (seriesName) {
        return ''
      }
    }
  },
  marker: {
    show: false
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart-2-sales"), options);
chart.render();

// Small Graph 3

var options = {
  colors : ['#7ECAE7'],
  series: [{
  data: [34, 12, 2, 78, 45, 15, 47, 65, 65, 19, 14]
}],
  chart: {
  type: 'line',
  width: 100,
  height: 35,
  colors: ['#546E7A'],
  sparkline: {
    enabled: true
  }
},
tooltip: {
  fixed: {
    enabled: false
  },
  x: {
    show: false
  },
  y: {
    title: {
      formatter: function (seriesName) {
        return ''
      }
    }
  },
  marker: {
    show: false
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart-3-sales"), options);
chart.render();

// Small graph 4
var options = {
  colors : ['#1ABC9C'],
  series: [{
  data: [34, 12, 2, 78, 45, 15, 47, 65, 65, 19, 14]
}],
  chart: {
  type: 'line',
  width: 100,
  height: 35,
  colors: ['#546E7A'],
  sparkline: {
    enabled: true
  }
},
tooltip: {
  fixed: {
    enabled: false
  },
  x: {
    show: false
  },
  y: {
    title: {
      formatter: function (seriesName) {
        return ''
      }
    }
  },
  marker: {
    show: false
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart-4-sales"), options);
chart.render();

        // Bar Graph

        var options = {
  series: [{
  name: 'Net Profit',
  data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
}],
  chart: {
  type: 'bar',
  height: 350
},
plotOptions: {
  bar: {
    horizontal: false,
    columnWidth: '50%',
    endingShape: 'rounded'
  },
},
dataLabels: {
  enabled: false
},
stroke: {
  show: true,
  width: 2,
  colors: ['transparent']
},
xaxis: {
  categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
},
yaxis: {
  title: {
    text: '$ (Channel wise sales performance)'
  }
},
fill: {
  colors:['#00FF00']
},
tooltip: {
  y: {
    formatter: function (val) {
      return "$ " + val + " thousands"
    }
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart-7-sales-1"), options);
chart.render();
// Bar Graph

var options = {
  series: [{
  name: 'Net Profit',
  data: [44, 45, 57, 56, 87, 58, 63, 60, 66]
}],
  chart: {
  type: 'bar',
  height: 350
},
plotOptions: {
  bar: {
    horizontal: false,
    columnWidth: '50%',
    endingShape: 'rounded'
  },
},
dataLabels: {
  enabled: false
},
stroke: {
  show: true,
  width: 2,
  colors: ['transparent']
},
xaxis: {
  categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
},
yaxis: {
  title: {
    text: '$ (Channel wise sale revenue)'
  }
},
fill: {
  opacity: 1
},
tooltip: {
  y: {
    formatter: function (val) {
      return "$ " + val + " thousands"
    }
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart-7-sales-2"), options);
chart.render();

        // Bar Graph

        var options = {
  series: [{
  name: 'Net Profit',
  data: [56, 87, 34, 45, 61, 58, 63, 60, 66]
}],
  chart: {
  type: 'bar',
  height: 350
},
plotOptions: {
  bar: {
    horizontal: false,
    columnWidth: '50%',
    endingShape: 'rounded'
  },
},
dataLabels: {
  enabled: false
},
stroke: {
  show: true,
  width: 2,
  colors: ['transparent']
},
xaxis: {
  categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
},
yaxis: {
  title: {
    text: '$ (Channel wise order item)'
  }
},
fill: {
  colors:['#f00']
},
tooltip: {
  y: {
    formatter: function (val) {
      return "$ " + val + " thousands"
    }
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart-7-sales-3"), options);
chart.render();

var options = {
  series: [44, 55, 41, 17, 15],
  chart: {
  type: 'donut',
},
responsive: [{
  breakpoint: 1300,
  options: {
    chart: {
      width: 300
    },
    legend: {
      position: 'right'
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#donut-sales-1"), options);
chart.render();

var options = {
  
  series: [60, 30, 20],
  chart: {
  type: 'donut',
},
responsive: [{
  breakpoint: 1300,
  options: {
    chart: {
      width: 300
    },
    legend: {
      position: 'right'
    }
  }
},]
};

var chart = new ApexCharts(document.querySelector("#donut-sales-2"), options);
chart.render();

var options = {
  series: [17, 55, 41, 44, 15],
  chart: {
  type: 'donut',
},
responsive: [{
  breakpoint: 1300,
  options: {
    chart: {
      width: 300
    },
    legend: {
      position: 'right'
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#donut-sales-3"), options);
chart.render();

// Returns graphs

// Small Graph 1

var options = {
    series: [{
    data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
  }],
    chart: {
    type: 'line',
    width: 100,
    height: 35,
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart-1-return"), options);
  chart.render();
  
   // Small Graph 2
   
   var options = {
    colors : ['#f787b4'],
    series: [{
    data: [34, 12, 2, 78, 45, 15, 47, 65, 65, 19, 14]
  }],
    chart: {
    type: 'line',
    width: 100,
    height: 35,
    colors: ['#546E7A'],
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart-2-return"), options);
  chart.render();
  
  // Small Graph 3
  
  var options = {
    colors : ['#7ECAE7'],
    series: [{
    data: [34, 12, 2, 78, 45, 15, 47, 65, 65, 19, 14]
  }],
    chart: {
    type: 'line',
    width: 100,
    height: 35,
    colors: ['#546E7A'],
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart-3-return"), options);
  chart.render();
  
  // Small graph 4
  var options = {
    colors : ['#1ABC9C'],
    series: [{
    data: [34, 12, 2, 78, 45, 15, 47, 65, 65, 19, 14]
  }],
    chart: {
    type: 'line',
    width: 100,
    height: 35,
    colors: ['#546E7A'],
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart-4-return"), options);
  chart.render();

  var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
    type: 'donut',
  },
  responsive: [{
    breakpoint: 1300,
    options: {
      chart: {
        width: 300
      },
      legend: {
        position: 'right'
      }
    }
  }]
  };
  
  var chart = new ApexCharts(document.querySelector("#donut-return"), options);
  chart.render();

  var options = {
    series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '50%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    title: {
      text: '$ (Channel wise sales performance)'
    }
  },
  fill: {
    colors:['#00FF00']
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart-7-return-1"), options);
  chart.render();
  // Bar Graph
  
  var options = {
    series: [{
    name: 'Net Profit',
    data: [44, 45, 57, 56, 87, 58, 63, 60, 66]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '50%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    title: {
      text: '$ (Channel wise sale revenue)'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart-7-return-2"), options);
  chart.render();

//   Fullfilment Graphs

var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
    type: 'donut',
  },
  responsive: [{
    breakpoint: 1300,
    options: {
      chart: {
        width: 300
      },
      legend: {
        position: 'right'
      }
    }
  }]
  };
  
  var chart = new ApexCharts(document.querySelector("#donut-full-1"), options);
  chart.render();

  var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
    type: 'donut',
  },
  responsive: [{
    breakpoint: 1300,
    options: {
      chart: {
        width: 300
      },
      legend: {
        position: 'right'
      }
    }
  }]
  };
  
  var chart = new ApexCharts(document.querySelector("#donut-full-2"), options);
  chart.render();

  var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
    type: 'donut',
  },
  responsive: [{
    breakpoint: 1300,
    options: {
      chart: {
        width: 300
      },
      legend: {
        position: 'right'
      }
    }
  }]
  };
  
  var chart = new ApexCharts(document.querySelector("#donut-full-3"), options);
  chart.render();

  var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
    type: 'donut',
  },
  responsive: [{
    breakpoint: 1300,
    options: {
      chart: {
        width: 300
      },
      legend: {
        position: 'right'
      }
    }
  }]
  };
  
  var chart = new ApexCharts(document.querySelector("#donut-full-4"), options);
  chart.render();

  var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
    type: 'donut',
  },
  responsive: [{
    breakpoint: 1300,
    options: {
      chart: {
        width: 300
      },
      legend: {
        position: 'right'
      }
    }
  }]
  };
  
  var chart = new ApexCharts(document.querySelector("#donut-full-5"), options);
  chart.render();

  // Small Graph 1

var options = {
    series: [{
    data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
  }],
    chart: {
    type: 'line',
    width: 100,
    height: 35,
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart-1-full"), options);
  chart.render();
  
   // Small Graph 2
   
   var options = {
    colors : ['#f787b4'],
    series: [{
    data: [34, 12, 2, 78, 45, 15, 47, 65, 65, 19, 14]
  }],
    chart: {
    type: 'line',
    width: 100,
    height: 35,
    colors: ['#546E7A'],
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart-2-full"), options);
  chart.render();
  
  // Small Graph 3
  
  var options = {
    colors : ['#7ECAE7'],
    series: [{
    data: [34, 12, 2, 78, 45, 15, 47, 65, 65, 19, 14]
  }],
    chart: {
    type: 'line',
    width: 100,
    height: 35,
    colors: ['#546E7A'],
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart-3-full"), options);
  chart.render();
  
  // Small graph 4
  var options = {
    colors : ['#1ABC9C'],
    series: [{
    data: [34, 12, 2, 78, 45, 15, 47, 65, 65, 19, 14]
  }],
    chart: {
    type: 'line',
    width: 100,
    height: 35,
    colors: ['#546E7A'],
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart-4-full"), options);
  chart.render();

  // Bar Graph

var options = {
    series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '50%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    title: {
      text: '$ (thousands)'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart-7-full"), options);
  chart.render();

//   Purchase Graphs

// Small Graph 1

var options = {
    series: [{
    data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
  }],
    chart: {
    type: 'line',
    width: 100,
    height: 35,
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart-1-pur"), options);
  chart.render();
  
   // Small Graph 2
   
   var options = {
    colors : ['#f787b4'],
    series: [{
    data: [34, 12, 2, 78, 45, 15, 47, 65, 65, 19, 14]
  }],
    chart: {
    type: 'line',
    width: 100,
    height: 35,
    colors: ['#546E7A'],
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart-2-pur"), options);
  chart.render();
  
  // Small Graph 3
  
  var options = {
    colors : ['#7ECAE7'],
    series: [{
    data: [34, 12, 2, 78, 45, 15, 47, 65, 65, 19, 14]
  }],
    chart: {
    type: 'line',
    width: 100,
    height: 35,
    colors: ['#546E7A'],
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart-3-pur"), options);
  chart.render();
  
  // Small graph 4
  var options = {
    colors : ['#1ABC9C'],
    series: [{
    data: [34, 12, 2, 78, 45, 15, 47, 65, 65, 19, 14]
  }],
    chart: {
    type: 'line',
    width: 100,
    height: 35,
    colors: ['#546E7A'],
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart-4-pur"), options);
  chart.render();

  var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
    type: 'donut',
  },
  responsive: [{
    breakpoint: 1300,
    options: {
      chart: {
        width: 300
      },
      legend: {
        position: 'right'
      }
    }
  }]
  };
  
  var chart = new ApexCharts(document.querySelector("#donut-pur"), options);
  chart.render();

  // Bar Graph

var options = {
    series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '50%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    title: {
      text: '$ (thousands)'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart-7-pur-1"), options);
  chart.render();

  // Bar Graph

var options = {
    series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '50%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    title: {
      text: '$ (thousands)'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart-7-pur-2"), options);
  chart.render();

//   Payments Graphs

// Small Graph 1

var options = {
    series: [{
    data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
  }],
    chart: {
    type: 'line',
    width: 100,
    height: 35,
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart-1-pay"), options);
  chart.render();
  
   // Small Graph 2
   
   var options = {
    colors : ['#f787b4'],
    series: [{
    data: [34, 12, 2, 78, 45, 15, 47, 65, 65, 19, 14]
  }],
    chart: {
    type: 'line',
    width: 100,
    height: 35,
    colors: ['#546E7A'],
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart-2-pay"), options);
  chart.render();
  
  // Small Graph 3
  
  var options = {
    colors : ['#7ECAE7'],
    series: [{
    data: [34, 12, 2, 78, 45, 15, 47, 65, 65, 19, 14]
  }],
    chart: {
    type: 'line',
    width: 100,
    height: 35,
    colors: ['#546E7A'],
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart-3-pay"), options);
  chart.render();
  
  // Small graph 4
  var options = {
    colors : ['#1ABC9C'],
    series: [{
    data: [34, 12, 2, 78, 45, 15, 47, 65, 65, 19, 14]
  }],
    chart: {
    type: 'line',
    width: 100,
    height: 35,
    colors: ['#546E7A'],
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart-4-pay"), options);
  chart.render();
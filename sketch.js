//data variables
let myTable;
let datapoint = 0;
let pm1_data;
let pm25_data;
let pm10_data;

var counter =0;

// animation variables
var fr = 2;
var currentframe = 0;
var heartbeat = 0;
var haschanged = true;
var rhythm;
var up;
var down;
var forward = true;
var ash_fwd = true;
var ash_beat = 0;
var ash_up;
var ash_down;

// arrays for images at each level
var clouds = Array(6); // sky
var shocobody = Array(2); // shoco eyes
var shocoeyes = Array(11); // shoco eyes
var cadushinan = Array(4); // cactuses
var hills = Array(6); //hills
var shoco_index;
var eyes_index;
var bump_index = 0;
var bump = Array(48);
var ash_index = 0;
var ash_max = 1;
var ash_min = 0;
var ash = Array(42);

// arrays for numbers of each for various pm levels
cacti = [10,8,4,2,1,0];
trees = [10,8,4,2,0,0];
houses = [0,1,2,4,8,10];
hotels = [0,0,1,2,4,8];
factories = [0,0,0,1,2,5];

  // number of random values to generate for placing objects
elements = 100;

//width of screen
var res;

// arrays to store randomly generated positions for land elements
px = Array(elements);
py = Array(elements);

//cactuses
cx = Array(elements);
cy = Array(elements);
rc = Array(elements);

// the incoming data
var pm10_url = 'https://io.adafruit.com/api/v2/metabolic/feeds/sb-particulates10/data/';
var pm25_url = 'https://io.adafruit.com/api/v2/metabolic/feeds/sb-particulates25/data/';
var pm1_url = 'https://io.adafruit.com/api/v2/metabolic/feeds/sb-particulates1/data/';
var pm10 = 0;
var pm25 = 0;
var pm1 = 0;

//associated danger levels
var pm10_lev = 1;
var pm25_lev = 1;
var pm1_lev = 1;
var prev10 = 1;
var prev25 = 1;
var prev1 = 1;

//set some standard scales
var small = 1/5;
var med = 1/2;
var big = 1;
  
// initiate slider interface for pre-data testing
let gui;

// set slider ranges with magic variables
var pm10Min = 1;
var pm10Max = 600;
var pm25Min = 1;
var pm25Max = 400;
var pm1Min = 1;
var pm1Max = 150;

//var bump;

//load images into variables
function preload() {
  
  //some data
  //myTable = loadTable("data.csv", "csv", "header");
  
  //arrays of images for different levels
  clouds[0] = loadImage('graphics/aruba_clouds0.png');
  clouds[1] = loadImage('graphics/aruba_clouds1.png');
  clouds[2] = loadImage('graphics/aruba_clouds2.png');
  clouds[3] = loadImage('graphics/aruba_clouds4.png');
  clouds[4] = loadImage('graphics/aruba_clouds5.png');
  clouds[5] = loadImage('graphics/aruba_clouds6.png');

  shocobody[0] = loadImage('graphics/shoco/shocobody0.png');
  shocobody[1] = loadImage('graphics/shoco/shocobody1.png');

  shocoeyes[0] = loadImage('graphics/shoco/shocoeyes0.png');
  shocoeyes[1] = loadImage('graphics/shoco/shocoeyes1.png');
  shocoeyes[2] = loadImage('graphics/shoco/shocoeyes2.png');
  shocoeyes[3] = loadImage('graphics/shoco/shocoeyes3.png');
  shocoeyes[4] = loadImage('graphics/shoco/shocoeyes4.png');
  shocoeyes[5] = loadImage('graphics/shoco/shocoeyes5.png');
  shocoeyes[6] = loadImage('graphics/shoco/shocoeyes6.png');
  shocoeyes[7] = loadImage('graphics/shoco/shocoeyes7.png');
  shocoeyes[8] = loadImage('graphics/shoco/shocoeyes8.png');
  shocoeyes[9] = loadImage('graphics/shoco/shocoeyes9.png');
  shocoeyes[10] = loadImage('graphics/shoco/shocoeyes10.png');
  
  
  bump[0] = loadImage('graphics/bump/fistbump0.png');
  bump[1] = loadImage('graphics/bump/fistbump1.png');
  bump[2] = loadImage('graphics/bump/fistbump2.png');
  bump[3] = loadImage('graphics/bump/fistbump3.png');
  bump[4] = loadImage('graphics/bump/fistbump4.png');
  bump[5] = loadImage('graphics/bump/fistbump5.png');
  bump[6] = loadImage('graphics/bump/fistbump6.png');
  bump[7] = loadImage('graphics/bump/fistbump7.png');
  bump[8] = loadImage('graphics/bump/fistbump8.png');
  bump[9] = loadImage('graphics/bump/fistbump9.png');
  bump[10] = loadImage('graphics/bump/fistbump10.png');
  bump[11] = loadImage('graphics/bump/fistbump11.png');
  bump[12] = loadImage('graphics/bump/fistbump12.png');
  bump[13] = loadImage('graphics/bump/fistbump13.png');
  bump[14] = loadImage('graphics/bump/fistbump14.png');
  bump[15] = loadImage('graphics/bump/fistbump15.png');
  bump[16] = loadImage('graphics/bump/fistbump16.png');
  bump[17] = loadImage('graphics/bump/fistbump17.png');
  bump[18] = loadImage('graphics/bump/fistbump18.png');
  bump[19] = loadImage('graphics/bump/fistbump19.png');
  bump[20] = loadImage('graphics/bump/fistbump20.png');
  bump[21] = loadImage('graphics/bump/fistbump21.png');
  bump[22] = loadImage('graphics/bump/fistbump22.png');
  bump[23] = loadImage('graphics/bump/fistbump23.png');
  bump[24] = loadImage('graphics/bump/fistbump24.png');
  bump[25] = loadImage('graphics/bump/fistbump25.png');
  bump[26] = loadImage('graphics/bump/fistbump26.png');
  bump[27] = loadImage('graphics/bump/fistbump27.png');
  bump[28] = loadImage('graphics/bump/fistbump28.png');
  bump[29] = loadImage('graphics/bump/fistbump29.png');
  bump[30] = loadImage('graphics/bump/fistbump30.png');
  bump[31] = loadImage('graphics/bump/fistbump31.png');
  bump[32] = loadImage('graphics/bump/fistbump32.png');
  bump[33] = loadImage('graphics/bump/fistbump33.png');
  bump[34] = loadImage('graphics/bump/fistbump34.png');
  bump[35] = loadImage('graphics/bump/fistbump35.png');
  bump[36] = loadImage('graphics/bump/fistbump36.png');
  bump[37] = loadImage('graphics/bump/fistbump37.png');
  bump[38] = loadImage('graphics/bump/fistbump38.png');
  bump[39] = loadImage('graphics/bump/fistbump39.png');
  bump[40] = loadImage('graphics/bump/fistbump40.png');
  bump[41] = loadImage('graphics/bump/fistbump41.png');
  bump[42] = loadImage('graphics/bump/fistbump42.png');
  bump[43] = loadImage('graphics/bump/fistbump43.png');
  bump[44] = loadImage('graphics/bump/fistbump44.png');
  bump[45] = loadImage('graphics/bump/fistbump45.png');
  bump[46] = loadImage('graphics/bump/fistbump46.png');
  bump[47] = loadImage('graphics/bump/fistbump47.png');
  
  ash[0] = loadImage('graphics/ash/ash0.png');
  ash[1] = loadImage('graphics/ash/ash1.png');
  ash[2] = loadImage('graphics/ash/ash2.png');
  ash[3] = loadImage('graphics/ash/ash3.png');
  ash[4] = loadImage('graphics/ash/ash4.png');
  ash[5] = loadImage('graphics/ash/ash5.png');
  ash[6] = loadImage('graphics/ash/ash6.png');
  ash[7] = loadImage('graphics/ash/ash7.png');
  ash[8] = loadImage('graphics/ash/ash8.png');
  ash[9] = loadImage('graphics/ash/ash9.png');
  ash[10] = loadImage('graphics/ash/ash10.png');
  ash[11] = loadImage('graphics/ash/ash11.png');
  ash[12] = loadImage('graphics/ash/ash12.png');
  ash[13] = loadImage('graphics/ash/ash13.png');
   
  cactus1 = loadImage('graphics/cactusA.png');
  cactus2 = loadImage('graphics/cactusB.png');
  cactus3 = loadImage('graphics/cactusC.png');
  cactus4 = loadImage('graphics/cactusD.png');
  cactuses = loadImage('graphics/aruba_cacti.png');
  cadushinan = [cactus1, cactus2, cactus3];
  
  hills[0] = loadImage('graphics/aruba_hills0.png');
  hills[1] = loadImage('graphics/aruba_hills1.png');
  hills[2] = loadImage('graphics/aruba_hills2.png');
  hills[3] = loadImage('graphics/aruba_hills3.png');
  hills[4] = loadImage('graphics/aruba_hills4.png');
  hills[5] = loadImage('graphics/aruba_hills5.png');
  
  house = loadImage('graphics/house0.png');
  house2 = loadImage('graphics/house1.png');
  
  sky = loadImage('graphics/aruba_sky.png');
  //hills = loadImage('graphics/aruba_hills.png');
  beach = loadImage('graphics/aruba_beach.png');
  sea = loadImage('graphics/aruba_sea.png');

}


function setup() {
  
  clear();
  res = windowWidth;
  createCanvas(res, res*0.5625);
  frameRate(fr);

  // start the slider interface
  //gui = createGui('Air Quality');
  //gui.addGlobals('pm10', 'pm25', 'pm1');

  //up = random(2) + 1;
  //down = random(2) + 4;
  
  // loop to create random locations
  for (let i = 0; i < elements; i++) {
      px[i] = random(width-50);
      py[i] = random((height)/20)+(8*height)/16;
    
      cx[i] = random(width-50);
      cy[i] = random((height)/30)+(11*height)/16;
      rc[i] = round(random(2.5)-0.5);
    
      
  }
  //noLoop();
}

function getData(){

  httpGet(pm1_url, 'json', function(response) {
  pm1 = response[0].value;
  console.log(pm1);
  });

  httpGet(pm25_url, 'json', function(response) {
  pm25 = response[0].value;
  console.log(pm25);
  });
  
  httpGet(pm10_url, 'json', function(response) {
  pm10 = response[0].value;
  console.log(pm10);
  });

}

function draw() {
  
  //data reading
  //if (counter % 180 == 0) {
   getData(); // function for calling data
  //}
  counter++;
  
  //datapoint++;
  
  //if( datapoint > myTable.getColumn(2).length){
  //    datapoint=0;
  //}
  
  //pm1 = myTable.get(1,datapoint);
  //pm25 = myTable.get(2,datapoint);
  //pm10 = myTable.get(3,datapoint);
  
  currentframe++;
  heartbeat++;
  ash_beat++;
  
  // cover whatever is already drawn with a solid background colour
  background(166,218,242);  
  //image(bg, 0, 0, width, height);
  image(sky, 0, 0, width, height);
  image(beach, 0, 0, width, height);
  image(sea, 0, 0, width, height);
  scaled = width/beach.width;
  
  // assign quality levels based on pm levels
  // 5 = hazardous; 4 = very unhealthy; 3 = unhealthy; 2 = unhealthy for sensitive groups; 1 = moderate; 0 = good
  //for pm10 and pm2.5 these values are defined by the AQI
  // for pm1 there are currently no standardized levels so 
  // right now they've been freestyled
  
  //store previous states
  prev10 = pm10_lev;
  prev25 = pm25_lev;
  prev1 = pm1_lev;
  
  if (pm10 > 424) {
    pm10_lev = 5;
  } else if (pm10 > 355) {
    pm10_lev = 4;
  } else if (pm10 > 255) {
    pm10_lev = 3;
  } else if (pm10 > 155) {
    pm10_lev = 2;
  } else if (pm10 > 55) {
    pm10_lev = 1;
  } else {
    pm10_lev = 0;
  }
    if (pm25 > 250.5) {
    pm25_lev = 5;
  } else if (pm25 > 150.5) {
    pm25_lev = 4;
  } else if (pm25 > 55.5) {
    pm25_lev = 3;
  } else if (pm25 > 35.5) {
    pm25_lev = 2;
  } else if (pm25 > 12.1) {
    pm25_lev = 1;
  } else {
    pm25_lev = 0;
  }
  if (pm1 > 125) {
    pm1_lev = 5;
  } else if (pm1 > 40) {
    pm1_lev = 4;
  } else if (pm1 > 25) {
    pm1_lev = 3;
  } else if (pm1 > 10) {
    pm1_lev = 2;
  } else if (pm1 > 5) {
    pm1_lev = 1;
  } else {
    pm1_lev = 0;
  }

  if (prev10 != pm10_lev || prev25 != pm25_lev || prev1 != pm1_lev) {
    haschanged = true;
    currentframe = 0;
  } else {
    haschanged = false;
  }
  
// PM1 based changes
// values and images are based on levels defined above
  
  // draw haze over the sky
  noStroke();
  fill(255, 155, 0, 60*(pm1_lev-2));
  rect(0, 0, width, height/2);
  
  // draw the clouds on top
  image(clouds[pm1_lev], 0, 0, width, height);
  
  // draw a lighter haze over the clouds
  noStroke();
  fill(255, 155, 0, 10*(pm1_lev-2));
  rect(0, 0, width, 2*height/2);

  
// PM10 based changes
// ocean colour changes from aruba blue to sargasso brown
// shoco's eyes close and dust mask goes on
  
  // make the ocean (and the beach) brown
  noStroke();
  fill(150, 75, 0, 30*pm10_lev);
  rect(0, height/2, width, height/2);
  
  
// PM2.5 based changes
// numbers of cactuses and buildings change
// ground colour changes from green to brown
  
  image(hills[pm25_lev], 0, 0, width, height);
  // make the land brown
  // noStroke();
  // fill(239, 211, 170, 50*pm25_lev);
  // rect(0, 2*height/5, width, 3*height/10);
  

  
  // placing land elements
  //image(cactuses, 0, 0, width, height);
  
  for (let i = 0; i < cacti[pm25_lev]; i++) {
    image(cadushinan[rc[i]], cx[i], cy[i]-scaled*cadushinan[rc[i]].height, scaled*cadushinan[rc[i]].width,scaled*cadushinan[rc[i]].height);
  }
  for (let i = 0; i < houses[pm25_lev]; i++) {
    image(house, px[i+cacti[pm25_lev]], py[i+cacti[pm25_lev]], house.width*small, house.height*small);
  }

  
  //fistbump animation
  if (pm10_lev == 0 && pm25_lev ==0 && pm1_lev == 0) {
    image(bump[bump_index], 0, 0, scaled*bump[bump_index].width,scaled*bump[bump_index].height);
  } else if (pm10_lev != 0 || pm1_lev != 0) {
    ash_max = 3;
    ash_min = 0;
  } 
  
  if (forward == true) {
    bump_index++;
  } else {
    bump_index--;
  }
  if (bump_index == 47) {
    forward = false;
  } else if (bump_index == 0) {
    forward = true;
  }
  
  

      // two frame variable animation
    // if (ash_beat < ash_up) {
    //   ash_index = 2 + pm25_lev;
    // } else if (ash_beat < ash_down) {
    //   ash_index = 3 + pm25_lev;
    // } else {
    //   ash_beat = 0;
    //   ash_up = random(40) + 40;
    //   ash_down = random(40) + 120;
    // }
    // image(ash[ash_index], 0, 0, scaled*ash[ash_index].width,scaled*ash[ash_index].height);
      
  if (pm25_lev == 1) {
    ash_max = 3;
    ash_min = 0;
  } else if (pm25_lev == 2) {
    ash_max = 5;
    ash_min = 4;
  } else if (pm25_lev == 3) {
    ash_max = 6;
    ash_min = 5;
  } else if (pm25_lev == 4) {
    ash_max = 8;
    ash_min = 6;
  } else if (pm25_lev == 5) {
    ash_max = 12;
    ash_min = 8;
  }

    if (ash_fwd == true) {
      ash_index++;
    } else {
      ash_index--;
    }
    if (ash_index == ash_max || ash_index > ash_max) {
      ash_index = ash_max;
      ash_fwd = false;
    } else if (ash_index == ash_min || ash_index < ash_min) {
      ash_index = ash_min;
      ash_fwd = true;
    }
  
  

  if (pm10_lev == 0) { 
    if (pm1_lev == 1) {
      eyes_index = 3;
    } else if (pm1_lev == 2) {
      eyes_index = 5;
    } else if (pm1_lev == 3) {
      eyes_index = 7;
    } else if (pm1_lev == 4) {
      eyes_index = 9;
    } else if (pm1_lev == 5) {
      eyes_index = 10;
    }
  }
  
  if (pm10_lev == 0) {
    if (pm25_lev == 1) {
      eyes_index = 2;
    } else if (pm25_lev == 2) {
      eyes_index = 4;
    } else if (pm25_lev == 3) {
      eyes_index = 6;
    } else if (pm25_lev == 4) {
      eyes_index = 8;
    } else if (pm25_lev == 5) {
      eyes_index = 10;
    }
  }
  

  if (pm10_lev == 1) {
    eyes_index = 2;
  } else if (pm10_lev == 2) {
    eyes_index = 3;
  } else if (pm10_lev == 3) {
    eyes_index = 5;
  } else if (pm10_lev == 4) {
    eyes_index = 7;
  } else if (pm10_lev == 5) {
    eyes_index = 9;
  }
  
  if (pm10_lev != 0 || pm25_lev != 0 || pm1_lev != 0) {
    image(ash[ash_index], 0, 0, scaled*ash[ash_index].width,scaled*ash[ash_index].height);
  
  // two frame variable animation
  if (heartbeat < up) {
    shoco_index = 0;
  } else if (heartbeat < down) {
    shoco_index = 1;
  } else {
    shoco_index = 0;
    heartbeat = 0;
    up = random(2) + 1;
    down = random(2) + 5;
  }
  image(shocobody[shoco_index], 0, 0, scaled*shocobody[shoco_index].width, scaled*shocobody[shoco_index].height);
  image(shocoeyes[eyes_index], 0, 0, scaled*shocoeyes[eyes_index].width, scaled*shocoeyes[eyes_index].height);
  }
    

}

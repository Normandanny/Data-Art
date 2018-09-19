function setup() {
    createCanvas(400, 400);
    // v4 Callback way
    d3.csv('', (error, data) => {
      if (error) throw error
      console.log(data)
    })
    
    // v5 Promises way
    // d3.csv('').then(data => {}) 
  }
  
  function draw() {
    background(220);
  }
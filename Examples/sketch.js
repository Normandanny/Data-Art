function setup() {
    createCanvas(800, 800);
    // v4 Callback way
    d3.csv('', (error, data) => {
      if (error) throw error
      console.log(data)
    })
    
    // v5 Promises way
    // d3.csv('').then(data => {
    // console.log(data)
    // }).catch(e => {consolg.log(e)})
    // }) 

    // Promise.all(
    //     [
    //         d3.csv(''),
    //         d3.csv(''),
    //     ]
    // )
  }
  
  function draw() {
    background(220);
  }

  function processData(data) {
      const mapped = data.map(d=>{
          return {
              'country': d['country/region'],
              'population': +d['estimate'].replace(/, /g, ''),
              'marginOfError': +d.marginOfError
          }
      })

      const regionsToFilter = [];

      const noRegions = mapped.filter (d => {
          return regionsToFilter.every( region => {
              return d.country.indexOf(region) 
          })
      })
  }
//Use the D3 library to read in samples.json from the URL
const samples = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
data = d3.json(samples)

//test that import worked
data.then(function(data)
    {console.log(data.samples[0].sample_values.slice(0,10));});


//create initial bar chart based on sample 0
function init() {
    let sample = data.samples[0]
    let values = sample.sample_values.slice(0,10)
    let labels = sample.otu_ids.slice(0,10)
    let hovertext = sample.otu_labels.slice(0,10)
  
    
    let data = [{
        values: values,
        labels: labels,
        text: hovertext,
        type: "bar"
    }]
    let layout = {
        height: 600,
        width: 800
    };
    Plotly.newPlot("bar", data, layout)};
      
//Create a horizontal bar chart with a dropdown menu to display 
//the top 10 OTUs found in that individual.
    //Use sample_values as the values for the bar chart.
    //Use otu_ids as the labels for the bar chart.
    //Use otu_labels as the hovertext for the chart.

//Create a bubble chart that displays each sample.
    //Use otu_ids for the x values.
    //Use sample_values for the y values.
    //Use sample_values for the marker size.
    //Use otu_ids for the marker colors.
    //Use otu_labels for the text values.

//Display the sample metadata, i.e., an individual's demographic information.

//Display each key-value pair from the metadata JSON object somewhere on the page.

//Update all the plots when a new sample is selected. 

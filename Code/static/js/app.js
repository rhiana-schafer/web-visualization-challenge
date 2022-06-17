//Use the D3 library to read in samples.json from the URL
const samples = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

d3.json(samples).then(function(data) {
    //create visualizations based on first sample
    bar(data.samples[0]);
    bubble(data.samples[0]);
    metadata(data.metadata[0]);
    //create dropdown
    let dropDown = d3.selectAll("#selDataset");
    let dropdown_options = data.names;
    for (let i = 0; i < dropdown_options.length; i++) {
        dropDown.append("option").text(dropdown_options[i])
      };
    //update charts based on dropdown selections
    dropDown.on("change", optionChanged);
  });

//update with dropdown selection -- this doesnt work yet!!
function optionChanged(sample_id) {
    console.log(sample_id);
    let samples = data.samples;
    let meta_info = data.metadata;
    for (let i = 0; i < samples.length; i++) {
        if (sample.id === sample_id) {
            bar(samples[i]);
            bubble(samples[i])
            metadata(meta_info[i])
        };
    };
};

function bar(sample) {
    let bardata = [{
        type: 'bar',
        x: sample.sample_values.slice(0,10).reverse(),
        y: sample.otu_ids.slice(0,10).map(id=>"OTU"+id).reverse(),
        hovertext: sample.otu_labels.slice(0,10).reverse(),
        orientation: 'h'
    }];
    Plotly.newPlot("bar", bardata);
};

function bubble(sample){
    let trace1 = {
        x: sample.otu_ids,
        y: sample.sample_values,
        text: sample.otu_labels,
        mode: 'markers',
        marker: {
          size: sample.sample_values,
          color: sample.otu_ids}
    };
    let data = [trace1];
    let layout = {
        height: 600,
        width: 1000,
        xaxis: {title: {text: 'OTU'}},
    };
    Plotly.newPlot('bubble', data, layout);    
};

function metadata(sample){
    let meta_info = d3.selectAll(".panel-body");
    meta_info.html(`id: ${sample.id} <br> ethnicity: ${sample.ethnicity}<br> gender: 
        ${sample.gender} <br> age: ${sample.age}<br> location: ${sample.location}<br> bbtype: 
        ${sample.bbtype}<br> wfreq: ${sample.wfreq}`);
};
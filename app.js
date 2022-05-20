//import  {api_class}  from "./api.js";
var api_class = require('./api.js');
curr_api = new api_class.api_class();
console.log(curr_api.readJSON('topology.json'));

// pass the id 
curr_api.writeJSON('top1');

// output all toplogies that i have now in memory
let topologies = curr_api.queryTopologies();
for(var x of topologies) console.log(x);

// output all devices that the json file have
let devices = curr_api.queryDevices('top1');
for(var x of devices) console.log(x);

// output all devices which have netlist value = n1
let devices_with_netlist = curr_api.queryDevicesWithNetlistNode('top1','n1');
for(var x of devices_with_netlist) console.log(x);

// output all devices which have netlist value = vin
devices_with_netlist = curr_api.queryDevicesWithNetlistNode('top1','vin');
for(var x of devices_with_netlist) console.log(x);
// delete toplogy from memory
let check = curr_api.deleteTopology('top1');
console.log(check);


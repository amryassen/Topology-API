//import {topology}  from "./topology.js";
var topology = require('./topology.js');
//const  topology = require('./topology.js')
//import fs from 'fs';
class api_class{
    constructor(){
        this.topologies=[];
    }
    readJSON(filepath){
        let inputJSON;
        var fs = require('fs');
        inputJSON = JSON.parse(fs.readFileSync(filepath));
        this.topologies.push(new topology.topology(inputJSON['id'],inputJSON['components']));
        return inputJSON;
    }

    queryTopologies(){
        return this.topologies;
    }
    writeJSON(topid) {
        let cur_top = this.topologies.filter(v => v['id'] == topid);
        let x = JSON.stringify(cur_top);
        var fs = require('fs');
        fs.writeFileSync('topology' + topid + '.json', x);
    }

    deleteTopology(topid) {
        this.topologies = this.topologies.filter(v => v['id'] != topid);
        return true;
    }
    queryDevices(topid){
        try {
            let cur_top = this.topologies.filter(v => v['id'] == topid);
            let val = cur_top[0];
            if(val == null){
                console.log("Topology " + topid + " not found, ");
                return [];
            }
            else {
                return val.get_devices();
            }
        }
        catch(err){
            console.error(err);
            return [];
        }
    }

    queryDevicesWithNetlistNode(topid, netlist_id) {
        let target_devices=[]
        let cur_top = this.topologies.filter(v => v['id'] == topid);
        let devices = this.queryDevices(cur_top['id']);
        for (var x of devices) {
            if (x.net_list_check_val(NetlistNodeID) == true) {
                target_devices.push(x);
            }
        }
        return target_devices;
    }
}
module.exports={
    api_class
} 
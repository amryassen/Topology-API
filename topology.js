//import  {device}  from "./device.js";
var device = require('./device.js');
class topology{
    constructor(id,devices){
        this.id = id;
        this.devices_array=[];
        this.setdevices(devices);
    }
    setdevices(devices){
        for(let dv of devices){
            let keys = Object.keys(dv).filter(key => key!='type' && key != 'id' && key!='netlist');
            this.devices_array.push(new device.device(
                dv['type'],
                dv['id'],
                dv[keys],
                keys,
                dv['netlist']
            ))
        }
    }

    get_devices(){
        return this.devices_array;
    }
}
module.exports={
    topology
} 

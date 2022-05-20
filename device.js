 class device{
    constructor(type,id,arguments_val,argument_key,netlist){
        this['type'] = type;
        this['id'] = id;
        this[argument_key]=arguments_val;
        this['netlist']=netlist;
    }

    net_list_check_val(val){
        for(let x of Object.keys(this['netlist'])){
            if(this['netlist'][x] == val){
                return true;
            }
        }
        return false;
    }
}
module.exports={
    device
} 

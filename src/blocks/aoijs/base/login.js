import * as Blockly from "blockly/core";

const blockName = "s4d_login";

const blockData = {
    "type": "block_type",
    "message0": "%{BKY_LOGIN}",
    "args0": [
        {
            "type": "input_value",
            "name": "TOKEN",
            "check": "String"
        },
        {
            "type": "input_value",
            "name": "PREFIX",
            "check": "String"
        }
    ],
    "colour": "#F46580",
    "tooltip": "%{BKY_LOGIN_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const token = Blockly.JavaScript.valueToCode(block, "TOKEN", Blockly.JavaScript.ORDER_ATOMIC);
    const prefix = Blockly.JavaScript.valueToCode(block, "PREFIX", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `await s4d.client = new aoijs.Bot({token: ${token}, prefix: ${prefix}})\ns4d.client.onMessage()\n`;
    return code;
};

import * as Blockly from "blockly";

const blockName = "s4d_on_message";

const blockData = {
    "message0": "%{BKY_ON_MESSAGE}",
    "colour": "#F5AB1A",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
        },
        {
            "type": "input_value",
            "name": "NAME",
            "check": "String" 
        }
    ]
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const name = Blockly.JavaScript.statementToCode(block, "NAME");
    const code = `s4d.client.command({name:${name}\ncode:\`${statements}\`});\n`;
    return code;
};

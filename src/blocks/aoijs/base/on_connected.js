import Blockly from "blockly/core";

const blockName = "s4d_on_connected";

const blockData = {
    "message0": "%{BKY_ON_CONNECTED}",
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
            "name": "CHANNEL",
            "check": "String"
        },
    ],
    "tooltip": "%{BKY_ON_CONNECTED_TOOLTIP}"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const channel = Blockly.JavaScript.valueToCode(block, "CHANNEL", Blockly.JavaScript.ORDER_ATOMIC);
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `bot.readyCommand({channel: ${channel}, code: \`${statements}\`})\n`;
    return code;
};

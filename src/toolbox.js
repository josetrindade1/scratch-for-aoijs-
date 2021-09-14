export default (Blockly) => {
    return (`
    <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
        <category name="{{ TOOLBOX_LOGIC }}" colour="#5b80a5">
        </category>
        <category name="{{ TOOLBOX_LOOPS }}" colour="#5ba55b">
        </category>
        <category name="{{ TOOLBOX_MATH }}" colour="#5b67a5">>
        </category>
        <category name="{{ TOOLBOX_TEXT }}" colour="#5ba58c">
            <block type="text">
                <field name="TEXT" />
            </block>
        </category>
        <category name="{{ TOOLBOX_LISTS }}" colour="#745ba5">
        </category>
        <category name="{{ TOOLBOX_COLORS }}" colour="#a5745b">
            <block type="colour_picker">
                <field name="COLOUR">#ff0000</field>
            </block>
            <block type="colour_random" />
            <block type="colour_rgb">
                <value name="RED">
                    <shadow type="math_number">
                        <field name="NUM">100</field>
                    </shadow>
                </value>
                <value name="GREEN">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
                <value name="BLUE">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>
            <block type="colour_blend">
                <value name="COLOUR1">
                    <shadow type="colour_picker">
                        <field name="COLOUR">#ff0000</field>
                    </shadow>
                </value>
                <value name="COLOUR2">
                    <shadow type="colour_picker">
                        <field name="COLOUR">#3333ff</field>
                    </shadow>
                </value>
                <value name="RATIO">
                    <shadow type="math_number">
                        <field name="NUM">0.5</field>
                    </shadow>
                </value>
            </block>
        </category>
        <sep />
        <category name="{{ TOOLBOX_VARIABLES }}" colour="#a55b80" custom="VARIABLE" />
        <category name="{{ TOOLBOX_FUNCTIONS }}" colour="#995ba5" custom="PROCEDURE" />
        <category name="{{ TOOLBOX_OTHER }}" colour="#D14081">
            <block type="s4d_current"></block>
            <block type="s4d_run_save_output"></block>
            <block type="s4d_wait_seconds">
                <value name="TIME">
                    <shadow type="math_number">
                        <field name="NUM">2</field>
                    </shadow>
                </value>
            </block>
        </category>
        <sep />
        <category name="{{ TOOLBOX_BASE }}" colour="#F46580">
        <label text="%{BKY_MANDATORY_BLOCKS}" web-class="boldtext"></label>
            <block type="s4d_login">
                <value name="TOKEN">
                    <block type="text">
                        <field name="TEXT">Your bot token</field>
                    </block>
                </value>
            </block>
            <label text="%{BKY_BASE_BLOCKS}"></label>
            <block type="s4d_on_connected"></block>
            <label text="%{BKY_BOT_INFORMATIONS}"></label>
            <block type="s4d_bot_ping"></block>
            <block type="s4d_bot_server_count"></block>
            <label text="%{BKY_BOT_ACTIONS}"></label>
            <block type="s4d_set_bot_game"></block>
        </category>
        <category name="{{ TOOLBOX_E_MESSAGES }}" colour="#41AAC0">
            <label text="%{BKY_MESSAGE_RELATED_BLOCKS}" web-class="boldtext"></label>
            <label text="%{BKY_DETECT_MESSAGES}"></label>
            <block type="s4d_on_message"></block>
            <label text="%{BKY_MESSAGE_INFORMATIONS}"></label>
            <block type="s4d_message_content"></block>
            <block type="s4d_message_id"></block>
            <block type="s4d_message_author"></block>
            <block type="s4d_mentioned_member"></block>
            <label text="%{BKY_LABEL_MESSAGE_CONTEXT}"></label>
            <block type="s4d_message_channel"></block>
            <block type="s4d_message_guild"></block>
            <label text="%{BKY_RELATED_TO_MESSAGE_STRINGS}"></label>
            <block type="s4d_message_author_raw"></block>
            <block type="s4d_message_channel_raw"></block>
            <block type="s4d_message_guild_raw"></block>
            <label text="%{BKY_MESSAGE_ACTIONS}"></label>
            <block type="s4d_reply">
                <value name="CONTENT">
                    <shadow type="text">
                        <field name="TEXT">{{ REPLY_EXAMPLE }}</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_delete"></block>
            <block type="s4d_add_reaction">
                <value name="REACTION">
                    <shadow type="text">
                        <field name="TEXT">👍</field>
                    </shadow>
                </value>
            </block>
            <label text="%{BKY_TOOLS}"></label>
            <block type="s4d_message_embed"></block>
        </category>
        <category name="{{ TOOLBOX_E_JOINS }}" colour="#EABB11">
            <label text="%{BKY_JOINS_RELATED_BLOCKS}" web-class="boldtext"></label>
            <label text="%{BKY_DETECT_JOINS}"></label>
            <block type="s4d_on_member_join"></block>
            <label text="%{BKY_JOINING_MEMBER_INFORMATIONS}"></label>
            <block type="s4d_joining_member"></block>
            <block type="s4d_joining_guild"></block>
            <label text="%{BKY_RELATED_TO_JOIN_STRINGS}"></label>
            <block type="s4d_joining_member_raw"></block>
            <block type="s4d_joining_guild_raw"></block>
        </category>
        <category name="{{ TOOLBOX_E_LEAVES }}" colour="#778899">
            <label text="%{BKY_LEAVES_RELATED_BLOCKS}" web-class="boldtext"></label>
            <label text="%{BKY_DETECT_LEAVES}"></label>
            <block type="s4d_on_member_leave"></block>
            <label text="%{BKY_LEAVING_MEMBER_INFORMATIONS}"></label>
            <block type="s4d_leaving_guild"></block>
            <label text="%{BKY_RELATED_TO_LEAVE_STRINGS}"></label>
            <block type="s4d_leaving_member_raw"></block>
            <block type="s4d_leaving_guild_raw"></block>
        </category>
        <category name="{{ TOOLBOX_E_REACTIONS }}" colour="#89674A">
            <label text="%{BKY_REACT_RELATED_BLOCKS}" web-class="boldtext"></label>
            <label text="%{BKY_DETECT_REACT}"></label>
            <block type="s4d_on_react_added"></block>
            <block type="s4d_on_react_removed"></block>
            <label text="%{BKY_REACT_INFORMATIONS}"></label>
            <block type="s4d_react_message_id"></block>
            <block type="s4d_react_emoji"></block>
            <block type="s4d_react_member"></block>
        </category>
        <sep />
        <category name="{{ TOOLBOX_SERVER }}" colour="#D85E47">
            <label text="%{BKY_FIND_SERVER}"></label>
            <block type="s4d_get_server"></block>
            <label text="%{BKY_LABEL_SERVER_INFOS}"></label>
            <block type="s4d_server_name"></block>
            <block type="s4d_member_count"></block>
            <block type="s4d_icon_url"></block>
            <block type="s4d_boost_level"></block>
            <block type="s4d_server_owner"></block>
            <label text="%{BKY_LABEL_MODIFY_SERVER}"></label>
            <block type="s4d_set_server_name"></block>
        </category>
        <category name="{{ TOOLBOX_CHANNELS }}" colour="#a55b80">
            <label text="%{BKY_FIND_CHANNEL}"></label>
            <block type="s4d_get_channel"></block>
            <label text="%{BKY_SEND_CHANNEL_LABEL}"></label>
            <block type="s4d_send_channel"></block>
            <label text="%{BKY_FORMS}"></label>
            <block type="s4d_send_wait_reply">
                <value name="CONTENT">
                    <shadow type="text">
                        <field name="TEXT">{{ SEND_WAIT_REPLY_EXAMPLE }}</field>
                    </shadow>
                </value>
                <value name="TIME">
                    <shadow type="math_number">
                        <field name="NUM">5</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_send_wait_reply_value"></block>

            <label text="%{BKY_CHANNEL_MESSAGE_ACTIONS}"></label>
             <block type="s4d_purge">
                <value name="AMOUNT">
                    <shadow type="math_number">
                        <field name="NUM">2</field>
                    </shadow>
                </value> 
            </block>

            <label text="%{BKY_CHANNEL_ACTIONS}"></label>
            <block type="s4d_create_channel"></block>
        </category>
        <category name="{{ TOOLBOX_ROLES }}" colour="#2EB66B">
            <label text="%{BKY_FIND_ROLE}"></label>
            <block type="s4d_get_role"></block>
            <label text="%{BKY_ROLE_ASSIGNMENT}"></label>
            <block type="s4d_add_role"></block>
            <block type="s4d_remove_role"></block>
        </category>
        <category name="{{ TOOLBOX_MEMBERS }}" colour="#187795">
            <label text="%{BKY_FIND_MEMBER}"></label>
            <block type="s4d_get_member"></block>
            <label text="%{BKY_MEMBER_INFORMATIONS}"></label>
            <block type="s4d_member_id"></block>
            <block type="s4d_member_discriminator"></block>
            <block type="s4d_member_tag"></block>
            <block type="s4d_member_username"></block>
            <block type="s4d_member_has_permission"></block>
            <block type="s4d_member_is_bot"></block>
            <label text="%{BKY_LABEL_MEMBER_ACTIONS}"></label>
            <block type="s4d_kick_member"></block>
            <block type="s4d_ban_member"></block>

            <block type="s4d_send_member"></block>

            <block type="s4d_set_member_nickname"></block>
        </category>
    </xml>
`.replace(/{{\s([A-z]{3,})\s}}/g, (x) => {
    return Blockly.Msg[x.replace("{{ ", "").replace(" }}", "")];
}))};
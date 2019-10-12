var define_car = function () {
    Blockly.Python.definitions_.pty = "from VI_Car import WD_Car"
};
Blockly.Blocks['car_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("初始化小车");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5AC900");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['car_init'] = function(block) {
  // TODO: Assemble Python into code variable.
  define_car;
  var code = 'car=WD_Car()\n';
  return code;
};

Blockly.Blocks['car_run'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("小车运动");
    this.appendValueInput("left")
        .setCheck("Number")
        .appendField("左轮速度");
    this.appendValueInput("right")
        .setCheck("Number")
        .appendField("右轮速度");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5AC900");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['car_run'] = function(block) {
  var value_left = Blockly.Python.valueToCode(block, 'left', Blockly.Python.ORDER_ATOMIC);
  var value_right = Blockly.Python.valueToCode(block, 'right', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'car.run_speed('+value_left+','+value_right+')\n';
  return code;
};
Blockly.Blocks['car_us'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("小车超声波");
    this.setOutput(true, "Number");
    this.setColour("#5AC900");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['car_us'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'car.distance_avoid()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Blocks['car_ir'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("红外巡线传感器");
    this.setOutput(true, "Array");
    this.setColour("#5AC900");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['car_ir'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'car.infrared_line()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

var define_td = function () {
    Blockly.Python.definitions_.td = "from Dejavu import *"
};
Blockly.defineBlocksWithJsonArray([
    {
        "type": "spawn_td",
        "message0": "识别器实例 %1",
        "args0": [
            {
                "type": "field_variable",
                "name": "instant_td",
                "variable": "%{BKY_VARIABLES_DEFAULT_NAME}"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    }
])

Blockly.Python['spawn_td'] = function(block) {
    var value_instant_td = Blockly.Python.variableDB_.getName(block.getFieldValue("instant_td"), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble JavaScript into code variable.
    define_td();
    var code = value_instant_td+'=TrafficDetector()\n'+
    value_instant_td+".set_sign_list()\n";
    return code;
};

Blockly.Blocks['subcam'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("订阅摄像头");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Python['subcam'] = function(block) {
    // TODO: Assemble Python into code variable.
    define_td();
    var code = 'subscribe_camera()\n';
    return code;
};

Blockly.Blocks['unsubcam'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("取消订阅摄像头");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Python['unsubcam'] = function(block) {
    // TODO: Assemble Python into code variable.
    define_td();
    var code = 'unsubscirbe_cam()\n';
    return code;
};

Blockly.defineBlocksWithJsonArray([
    {
        "type": "td_sign",
        "message0": "识别标志 %1 %2",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "field_variable",
                "name": "instant_td",
                "variable": "%{BKY_VARIABLES_DEFAULT_NAME}"
            }
        ],
        "output": "Array",
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    }
])

Blockly.Python['td_sign'] = function(block) {
    var value_name = Blockly.Python.variableDB_.getName(block.getFieldValue("instant_td"), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble Python into code variable.
    var code = value_name+'.recognize_sign()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.defineBlocksWithJsonArray([
    {
        "type": "td_light",
        "message0": "识别信号灯 %1 %2",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "field_variable",
                "name": "instant_td",
                "variable": "%{BKY_VARIABLES_DEFAULT_NAME}"
            }
        ],
        "output": "Boolean",
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    }
])

Blockly.Python['td_light'] = function(block) {
    var value_name = Blockly.Python.variableDB_.getName(block.getFieldValue("instant_td"), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble Python into code variable.
    var code = value_name+'.recognize_light()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.defineBlocksWithJsonArray([
    {
        "type": "td_cm",
        "message0": "自定义识别器 %1 路径 %2 识别器实例 %3",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "input_value",
                "name": "path",
                "check": "String",
                "align": "RIGHT"
            },
            {
                "type": "field_variable",
                "name": "instant_td",
                "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
                "align": "RIGHT"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    }
])
Blockly.Python['td_cm'] = function(block) {
    var value_path = Blockly.Python.valueToCode(block, 'path', Blockly.Python.ORDER_ATOMIC);
    var value_inst = Blockly.Python.variableDB_.getName(block.getFieldValue("instant_td"), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble Python into code variable.
    define_td();
    var code = value_inst+'=CustomModel(path='+value_path+')\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return code;
};

Blockly.defineBlocksWithJsonArray([
    {
        "type": "td_cm_run",
        "message0": "是否检测到 %1 识别器实例 %2",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "field_variable",
                "name": "instant_td",
                "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
                "align": "RIGHT"
            }
        ],
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    }
])

Blockly.Python['td_cm_run'] = function(block) {
    var value_inst = Blockly.Python.variableDB_.getName(block.getFieldValue("instant_td"), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble Python into code variable.
    define_td();
    var code = value_inst+'.reco()';
    console.log(code);
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};
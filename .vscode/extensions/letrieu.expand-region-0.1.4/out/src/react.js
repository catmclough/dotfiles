"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseexpander_1 = require("./baseexpander");
const ex = require("./child/_expand_all");
const html_1 = require("./html");
const javascript_1 = require("./javascript");
class react extends javascript_1.javascript {
    constructor() {
        super(...arguments);
        this.htmlExp = new html_1.html();
        this.javascriptExp = new javascript_1.javascript();
    }
    expand(text, start, end) {
        let selection_is_in_string = ex.expand_to_quotes(text, start, end);
        if (selection_is_in_string) {
            let string_result = this.expand_agains_string(selection_is_in_string.selectionText, start - selection_is_in_string.end, end - selection_is_in_string.end);
            if (string_result) {
                string_result.end = string_result.end + selection_is_in_string.end;
                string_result.start = string_result.start + selection_is_in_string.end;
                string_result.selectionText = text.substring(string_result.end, string_result.start);
                return string_result;
            }
        }
        if (!baseexpander_1.selection_contain_linebreaks(text, start, end)) {
            let line = baseexpander_1.get_line(text, start, end);
            let line_string = text.substring(line.start, line.end);
            let line_result = this.expand_agains_line(line_string, start - line.start, end - line.start);
            if (line_result) {
                line_result.end = line_result.end + line.start;
                line_result.start = line_result.start + line.start;
                line_result.selectionText = text.substring(line_result.end, line_result.start);
                return line_result;
            }
        }
        let result;
        let expand_stack = [];
        expand_stack.push("xml_node");
        console.log(expand_stack);
        result = ex.expand_to_xml_node(text, start, end);
        if (result) {
            result["expand_stack"] = expand_stack;
            return result;
        }
        result = ex.expand_to_semantic_unit(text, start, end);
        if (result) {
            result["expand_stack"] = expand_stack;
            return result;
        }
        expand_stack.push("symbols");
        result = ex.expand_to_symbols(text, start, end);
        if (result) {
            result["expand_stack"] = expand_stack;
            return result;
        }
        return null;
    }
}
exports.react = react;
//# sourceMappingURL=react.js.map
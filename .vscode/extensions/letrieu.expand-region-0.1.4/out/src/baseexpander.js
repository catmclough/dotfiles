"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
class BaseExpander {
    expand(text, startIndex, endIndex) {
        vscode.commands.executeCommand("editor.action.smartSelect.expand");
        return null;
    }
    ;
}
exports.BaseExpander = BaseExpander;
exports.LanguageType = {
    JAVA_SCRIPT: 'javascript',
    TYPE_SCRIPT: 'typescript',
    HTML: 'html',
    PHP: 'php',
    Text: 'plaintext'
};
class IResultSelection {
}
exports.IResultSelection = IResultSelection;
class ILine {
}
exports.ILine = ILine;
function getResult(start, end, text, type) {
    return { end: start, start: end, selectionText: text.substring(start, end), type: type };
}
exports.getResult = getResult;
function get_line(text, startIndex, endIndex) {
    const linebreakRe = /\n/;
    var newStartIndex = 0, newEndIndex = 0;
    var searchIndex = startIndex - 1;
    while (true) {
        if (searchIndex < 0) {
            newStartIndex = searchIndex + 1;
            break;
        }
        let char = text.substring(searchIndex, searchIndex + 1);
        if (linebreakRe.test(char)) {
            newStartIndex = searchIndex + 1;
            break;
        }
        else {
            searchIndex -= 1;
        }
    }
    searchIndex = endIndex;
    while (true) {
        if (searchIndex > text.length - 1) {
            newEndIndex = searchIndex;
            break;
        }
        let char = text.substring(searchIndex, searchIndex + 1);
        if (linebreakRe.test(char)) {
            newEndIndex = searchIndex;
            break;
        }
        else {
            ;
            searchIndex += 1;
        }
    }
    return { "start": newStartIndex, "end": newEndIndex };
}
exports.get_line = get_line;
function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
exports.escapeRegExp = escapeRegExp;
function trim(text) {
    const regStart = /^[ \t\n]*/;
    const regEnd = /[ \t\n]*$/;
    let rS = regStart.exec(text);
    let rE = regEnd.exec(text);
    let start = 0, end = text.length;
    if (rS) {
        start = rS[0].length;
    }
    if (rE) {
        end = rE.index;
    }
    if (rS && rE) {
        return { start: start, end: end };
    }
    return null;
}
exports.trim = trim;
function selection_contain_linebreaks(text, startIndex, endIndex) {
    let linebreakRe = /\n/;
    let part = text.substring(startIndex, endIndex);
    return linebreakRe.test(part);
}
exports.selection_contain_linebreaks = selection_contain_linebreaks;
//# sourceMappingURL=baseexpander.js.map
// Force inline const enum. Terser >= 4.2.1 obsoleted reduce_funcs.
const { transformSource } = require('./transform-source');

const CONST_OBJ_REG = /^[ \t]*\/\*@__DROP_PURE_EXPORT__\*\/[\w\s]*?\s+([A-Za-z_$][0-9A-Za-z_$]*)\s*=\s*({[\n\s\S]*?})/gm;
const CONST_NUM_REG = /^[ \t]*const[ \t]+([A-Z_$][0-9A-Z_$]*)[ \t]*=[ \t]*(\d{1,2});?$/gm;

exports.inlineEnum = function (filename, options) {
    return transformSource(filename, options, function (content, edited) {
        content.replace(CONST_OBJ_REG, function (match, objectName, body) {
            let values;
            try {
                values = Function(`return ${body}`)();
            } catch (error) {
                throw new Error(`Failed to inline property "${objectName}" in "${filename}", ${error}`);
            }
            for (const key in values) {
                const reg = new RegExp(`\\b${objectName}\\.${key}\\b`, 'g');
                content.replace(reg, function (reference, offset) {
                    edited.overwrite(offset, offset + reference.length, String(values[key]));
                    return reference;
                });
            }
            return match;
        });
    });
};

exports.inlineConst = function (filename, options) {
    return transformSource(filename, options, function (content, edited) {
        content.replace(CONST_NUM_REG, function (declaration, name, value) {
            // 保持现有规则：跳过声明/赋值、对象键和 typeof 操作数。
            const reg = new RegExp(`([{,]\\s*|\\btypeof[ \\t]+)?(\\b${name}\\b)(?![ \\t]*=)`, 'g');
            content.replace(reg, function (match, prefix, identifier, offset) {
                if (match === identifier) edited.overwrite(offset, offset + match.length, value);
                return match;
            });
            return declaration;
        });
    });
};

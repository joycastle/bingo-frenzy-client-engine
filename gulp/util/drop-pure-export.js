
//  Drop unused `export` syntax to indicate that the object will only be used inside the module at runtime.
//  So the expression can be evaluated by uglify.
//
//  Replace:
//      /*@__DROP_PURE_EXPORT__*/
//      export xxx
//  As:
//      /*@__DROP_PURE_EXPORT__*/
//      xxx

const { COMMENT_ANNOTATION, transformSource } = require('./transform-source');
const REG = /(\/\*@__DROP_PURE_EXPORT__\*\/\s*)(export\s+)?/g;

module.exports = function (filename, options) {
    return transformSource(filename, options, function (content, edited) {
        content.replace(REG, function (match, annotation, exportSyntax, offset) {
            if (!exportSyntax) {
                throw new Error(`Uncaptured comment annotation "${COMMENT_ANNOTATION}" in "${filename}", please use it in the correct way.`);
            }
            edited.remove(offset + annotation.length, offset + match.length);
            return match;
        });
    });
};

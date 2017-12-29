module.exports = {
  meta: {
    docs: {
      description: "enforce analytice event naming convention",
      category: "Stylistic Issues",
      recommended: false
    },

    schema: [
      {
        type: "object",
        properties: {
          properties: {
            enum: ["always", "never"]
          }
        },
        additionalProperties: false
      }
    ]
  },

  create(context) {
    /**
     * Reports an AST node as a rule violation.
     * @param {ASTNode} node The node to report.
     * @returns {void}
     * @private
     */
    function report(node, message) {
      console.log("reported", node);
      context.report({ node, message: message, data: { name: node.key.name } });
    }

    return {
      Property(node) {
        if (node.value.type === "Literal") {
          const literalValue = node.value.value;
          if (literalValue.toLowerCase() !== literalValue) {
            report(node, "The value of event field {{name}} should use lowercase lettering");
          } else if (/[_.-/]/.test(literalValue)) {
            report(node, "The value of event field {{name}} should use only space for separators");
          }
        }
      }
    };
  }
};

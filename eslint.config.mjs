import antfu from "@antfu/eslint-config"

export default antfu({
  formatters: true,
  react: true,
  stylistic: {
    quotes: "double",
  },
  rules: {
    "eslint-comments/no-unlimited-disable": "off",
    "style/member-delimiter-style": "off",
    "node/prefer-global/process": "off",
  },
})

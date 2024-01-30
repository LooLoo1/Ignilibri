### A small instruction

1. pnpm install
2. pnpm run link-cli

// Or use pnpm
- pnpm unlink frost-gem
- pnpm link frost-gem

// Or use npm
- npm unlink frost-gem
- npm link frost-gem

---

"link-cli": "pnpm unlink frost-gem && pnpm link frost-gem"
or
"link-cli": "pnpm --global unlink frost-gem && pnpm --global link frost-gem"
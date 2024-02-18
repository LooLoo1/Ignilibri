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




// const COMMANDS = {
// 	"--v, --version": // callback       // fg --v 
	
// 	"--h, --help": // callback          // fg --h
	
// 	// Тут описується тільки перший параметр, треба обробляти декілька у калбеку першого
// 	"--history": // callback            // fg --history      /Example/   |id|date-time|command|      frost-gem.cli.history.log
// 	"--history -d": // callback         // fg --history -d <id> 
// 	"--history -show": // callback      // fg --history -show | fg --history -show <id> 
	
// 	"g <templateName>": // callback     // fg g <templateName>

// 	"--show <templateName>": // callback     // fg --show <templateName> // List of templates
// }





// const PATHS = {
// 	"<templateName>": [
// 		"fsd, FSD" // ${ROOT_APP_PATH}/src/templates/.FSD/Layers/WithOptional
// 	] 
// }

// "g fsd" | "g fsd default" // ${ROOT_APP_PATH}/src/templates/.FSD/Layers/WithoutOptional
// "g fsd optional" // ${ROOT_APP_PATH}/src/templates/.FSD/Layers/WithOptional
// "g fsd indexed" // ${ROOT_APP_PATH}/src/templates/.FSD/Layers/Indexed

// "g fsd segment" // ${ROOT_APP_PATH}/src/templates/.FSD/Segments

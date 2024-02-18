#!/usr/bin/env node
import { log } from "console"
import path from "path"
import { controller } from "./controllers/folder-gem.controller"

process.env.ROOT_APP_PATH = path.resolve(__dirname, "..")
process.env.WORKING_DIRECTORY = process.cwd()
// const {ROOT_APP_PATH} = process.env.ROOT_APP_PATH = path.resolve(__dirname, "..")
// path.parse(process.mainModule.filename).dir
// global.appRoot = path.resolve(__dirname);

// const args:Array<string> = process.argv.slice(2)
const args:Array<string> = ["g", "fsd"]
// const workingDirectory:string = process.cwd()


//await new PackageJSON().get("version") 
type CommandsHandler = ((argv: Array<string>) => void) // Можливо треба зробити ені тип
type CommandsStorage = {
	[key: string]: CommandsStorage | CommandsHandler
};

class CLI {
	public argv: Array<string> = []
	private commands:CommandsStorage = {}
	private parsedCommands:Array<Array<Array<string>>> = []
	constructor(private name: string){}

	addCommand(args: Array<string>, callback: CommandsHandler){
		const parsedCommands:Array<Array<string>> = []

		args.map((unParsCommand, i)=>{
			const commands:Array<string> = []
			
			const isEnumeration:boolean = unParsCommand.includes(", ")
			if (isEnumeration) commands.push(...unParsCommand.split(", "))
			if (!isEnumeration) commands.push(unParsCommand)
			
			parsedCommands[i] = []
			parsedCommands[i].push(...commands)

		})

		this.parsedCommands.push(parsedCommands) // Ненада
		this.generateMap(parsedCommands, callback)

		return this
	}
	
	private generateMap(parsedCommands: Array<Array<string>>, callback:CommandsHandler): void {
		// this.commands

		const listOfLinks: Array<Object> = [] 
		const backlistOfLinks: Array<Object> = [] 
		function addToObject(root: CommandsStorage, objLink: Array<Object>, params: Array<string>){
			log("=== addToObject ===")

			if(objLink.length === 0){
				params.map((param, i) => {
					listOfLinks[i] = {[param]: {}}
					return listOfLinks[i]
				})
				log(listOfLinks) 
				return
			}

			backlistOfLinks.length = 0
			backlistOfLinks.push(...listOfLinks)
			listOfLinks.length = 0


			params.forEach((param, i) => backlistOfLinks.forEach((el, index) => {
				Object.keys(el)
				listOfLinks[i] = {[param]: {}}
			}))
		}

		parsedCommands.forEach((commandList, i, arr) => {

			addToObject(this.commands, listOfLinks, commandList)
			log("\n\n\n") 

			// if (arr.length === i + 1) {}

		})


		// log(this.parsedCommands)
		
	}

	generateCombinations(array: string[][]): string[] {
		if (array.length === 1) {
			return array[0].map((element) => element);
		}
	
		const firstArray = array[0];
		const remainingArrays = array.slice(1);
	
		const combinations = [];
		for (const element of firstArray) {
			const remainingCombinations = this.generateCombinations(remainingArrays);
			combinations.push(...remainingCombinations.map((remainingCombination) => `${element} ${remainingCombination}`));
		}
	
		return combinations;
	}
	
	// const array = [["a", "b"], ["c", "d"], ["e", "f"]];
	// const combinations = generateCombinations(array);
	// console.log(combinations); // ["а с", "а d", "а е", "а f", "b c", "b d", "b е", "b f"]

	timeToParse(argv: Array<string>){
		
		this.argv = argv
		log(this.commands)
	}
}



const Commander = new CLI("💎 Frost Gem 🧊")
	.addCommand(["--v", "--v2, --version2", "--v3, --version3"], controller.version)
	
	// .addCommand(["--v, --version"], ()=>{})
	.addCommand(["--h, --help"], ()=>{})

	.addCommand(["--history"], ()=>{})
	.addCommand(["--history", "-d"], ()=>{})
	.addCommand(["--history", "-show"], ()=>{})

	.addCommand(["g", "<templateName>"], ()=>{})

	.addCommand(["--show", "<templateName>"], ()=>{})

	.timeToParse(["g", "fsd"] /* process.argv.slice(2) */)
	

// const args:Array<string> = process.argv.slice(2)
// const args:Array<string> = ["g", "fsd"]

// {
// 	"--v": {
// 		callback: ()=>{}
// 	}
// 	"--version"

// }





//TODO - Later will be implement responsive `--help` base on size of terminal.
// console.log('Terminal size: ' + process.stdout.columns + 'x' + process.stdout.rows);
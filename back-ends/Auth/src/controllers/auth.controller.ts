import { Request, Response } from 'express'

class AuthController {
	async registration(req: Request, res: Response): Promise<void>{
		try {
			
		} catch (error) {
			
		}
	}
	
	async login(req: Request, res: Response): Promise<void>{
		try {
			
		} catch (error) {
			
		}
	}
	
	async getUsers(req: Request, res: Response): Promise<void>{
		try {
			res.json("Server work") // http://localhost:PORT/auth/users 
		} catch (error) {
			
		}
	}
	
}

export const authController = new AuthController()
import * as fs from 'fs/promises'
import path from "path"

export class PackageJSON {
  private static instance: PackageJSON;
  private data: Record<string, any> | null = null;
  private initializing: boolean = false;

	constructor() {
		if (PackageJSON.instance) {
				return PackageJSON.instance;
		}
		PackageJSON.instance = this;
    this.init()
	}

  // public get(key: keyof typeof PackageJSON.prototype.data | string): string | Record<string, unknown> | undefined {
  //   return this.data?.[key];
  // }

  public async get(key: keyof typeof PackageJSON.prototype.data | string): Promise<string | Record<string, unknown> | undefined> {
    await this.init(); 
    return this.data?.[key];
  }

  private async init(): Promise<void> {
    if (!this.initializing || !this.data) {
      this.initializing = true;
      try {
        await this.parsePackageJson(path.resolve(process.env.ROOT_APP_PATH || '', 'package.json'));
      } finally {
        this.initializing = false;
      }
    }
  }
  private async parsePackageJson(filePath: string): Promise<void> {
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      this.data = JSON.parse(content);
    } catch (error) {
      console.error('Error parsing package.json:', error);
    }
  }

}

// Example usage
// const packageJsonInstance1:PackageJSON = new PackageJSON();
// const packageJsonInstance2:PackageJSON = new PackageJSON();
// console.log(packageJsonInstance1 === packageJsonInstance2); // true

import { Injectable } from "@nestjs/common";


export interface IEnvironmentHelper {
    readonly AppPort: string;
    readonly DbHost: string;
    readonly DbPort: number;
    readonly DbUsername: string;
    readonly DbPassword: string;
    readonly DbDatabase: string;
  } 

@Injectable()
export class EnvironmentHelper implements IEnvironmentHelper {
    // private properties
    private readonly _env: NodeJS.ProcessEnv = process.env;

    private _AppEnv<T>(name: string): T | never {
        const value = this._env[name];
        if (value === undefined) {
            throw new Error(`Environment variable ${name} is not set`);
        }
        return value as T;
    }

    // public methods
    get AppPort(): string {
        return this._AppEnv<string>('PORT');
    }
    get DbHost(): string {
        return this._AppEnv<string>('DB_HOST');
    }
    get DbPort(): number {
        return this._AppEnv<number>('DB_PORT');
    }
    get DbUsername(): string {
        return this._AppEnv<string>('DB_USERNAME');
    }
    get DbPassword(): string {
        return this._AppEnv<string>('DB_PASSWORD');
    }
    get DbDatabase(): string {
        return this._AppEnv<string>('DB_DATABASE');
    }
}
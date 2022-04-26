export class Cuenta {
    private _IBAN: string;
    private _nombre: string;
    private _apellidos: string;
    private _saldo: number;
    constructor(IBAN: string, nombre: string, apellidos: string, saldo: number){
        this._IBAN = IBAN;
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._saldo = saldo;
    }
    public get IBAN(): string {
        return this._IBAN;
    }
    public set IBAN(value: string) {
        this._IBAN = value;
    }
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    public get apellidos(): string {
        return this._apellidos;
    }
    public set apellidos(value: string) {
        this._apellidos = value;
    }
    public get saldo(): number {
        return this._saldo;
    }
    public set saldo(value: number) {
        this._saldo = value;
    }
}

export const cuentas_banco = [
    {
        IBAN: "ES2114650100722030876293",
        nombre: "Dolores",
        apellidos: "Guijarro",
        saldo: 12380
    },
    {
        IBAN: "ES2113650100722036875993",
        nombre: "Isidoro",
        apellidos: "Granado Gonçales",
        saldo: 6271
    },
    {
        IBAN: "ES2114640199721030276343",
        nombre: "Fernando",
        apellidos: "Roque de la Fuente",
        saldo: 267890
    }
]
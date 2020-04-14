import { ConsoleCode } from "./consoleCode.enum";

export class ConsoleHelper {
    public static error(text: string): void {
        console.log(ConsoleCode.FgRed, text);
    }
}
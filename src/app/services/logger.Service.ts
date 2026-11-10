import { Service } from "@angular/core";

@Service()
export class LoggerService {
  constructor() {
    console.log('cc je suis une nouvelle instance de loggerService');

  }
  log(message: unknown): void {
    console.log('From Logger');
    console.log({message});
  }
}

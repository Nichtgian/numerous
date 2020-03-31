import { Type } from "./injectable.decorator";

export const Inject = new class {
    resolve<T>(target: Type<any>): T {
        const tokens = Reflect.getMetadata("design:paramtypes", target) || [];
        const injections = tokens.map(token => Inject.resolve<any>(token));
        return new target(...injections);
      }
};
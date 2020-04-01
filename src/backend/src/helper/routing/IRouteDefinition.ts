import { HttpMethod } from "../enum/httpMethod.enum";

export interface IRouteDefinition {
    path: string;
    method: HttpMethod.Get | HttpMethod.Post;
    name: string;
}
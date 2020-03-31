import { HttpMethod } from "../enum/httpMethod.enum";

export interface IRouteDefinition {
    url: string;
    method: HttpMethod.Get | HttpMethod.Post;
    name: string;
}
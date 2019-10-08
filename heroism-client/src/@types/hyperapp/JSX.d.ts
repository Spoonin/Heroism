import { VNode } from "hyperapp";
// /** @namespace [JSX] */
declare global {
    namespace JSX {
        interface Element extends VNode<any> { }
        interface IntrinsicElements {
            [elemName: string]: any;
        }
    }
}

declare module "sky-utils" {
	export function supportCurrentScript(): boolean;
	export function supportProto(): boolean;
	export function supportSymbol(): boolean;

	export function overload(args: ArrayLike<any>, thisVal: any): any;
	export function overload(checks: ((arg: any) => boolean)[], thisVal: any, target: Function): void;
	/**
	 * 判断是否是类似数组类型
	 * @description 如string、Arguments、NodeList等带有length都是arraylike类型。建议使用isArrayLikeObject排除string
	 * @param {*} value
	 * @returns {boolean}
	 */
	export function isArrayLike(arg: any): arg is (ArrayLike<any> | string);
	/**
	* 判断是否是类似数组对象
	* @description 如Arguments、NodeList等带有length都是arraylike类型。string不会被认为是ArrayLikeObject
	* @param {*} value
	* @returns {boolean}
	*/
	export function isArrayLikeObject(arg: any): arg is ArrayLike<any>;
	export function isDate(arg: any): arg is Date;
	export function isRegExp(arg: any): arg is RegExp;
	export function isString(arg: any): arg is (String | string);
	export function isFunction(arg: any): arg is Function;
	export function isNumber(arg: any): arg is (Number | number);
	export function isObject(arg: any): arg is Object;
	export function isDefined(arg?: any): arg is any;
	export function isWindow(arg: any): arg is Window;
	export function isPlainObject(arg: any): arg is Record<any, any>;
	export function isNumeric(arg: any): arg is number;
	export function isElement(obj: Node): obj is Element;
	export function isInput(obj: Element): obj is HTMLInputElement;

	export function noop(...args: any[]): void;
	export function times(n: number, iteratee: Function, args?: any[]): any[];

	export function random(a: number, b: number): number;
	export function round(num: number, len: number): number;
	export function ceil(num: number, len: number): number;
	export function floor(num: number, len: number): number;

	export function escapeString(value: string): string;
	export function escapeHtml(value: string): string;
	export function escapeAttribute(value: string): string;
	export function escape(value: string): string;
	export function unescape(value: string): string;
	export function escapeRegExp(value: string): string;
	export function replaceAll(str: string, find: string, replace: string, ignoreCase?: boolean): string;
	export function toString(value: any): string;

	export function padIntrger(value: number): string | number;

	export function findIndex(arr: Record<string, any>[], key: string, value: any): number;
	export function findLastIndex(arr: Record<string, any>[], key: string, value: any): number;
	export function findLast(arr: Record<string, any>[], key: string, value: any): any;
	export function find(arr: Record<string, any>[], key: string, value: any): any;
	export function sortBy(arr: Record<string, any>[], key: string): Record<string, any>[];
	export function pluck(arr: Record<string, any>[], key: string): Record<string, any>[];
	export function sortedIndex(arr: any[], value: any): number;
	export function sortedLastIndex(arr: any[], value: any): number;
	export function shuffle<T>(arr: T[]): T[];
	export function shuffle(arr: any[]): any[];
	export function union(...args: any[][]): any[];
	export function difference(arr: any[], arr2: any[]): any[];
	export function intersection(...args: any[][]): any[];

	export function forIn<T>(obj: any, callback: (this: T, value: any, key: string) => void, thisArg?: T): void;
	export function forOwn<T>(obj: any, callback: (this: T, value: any, key: string) => void, thisArg?: T): void;
	export function pick(obj: object, keys: string[]): Record<string, any>;
	export function omit(obj: object, keys: string[]): Record<string, any>;
	export function inherits(subClass: any, superClass: any): void;

	export function getCurrentScript(): HTMLScriptElement;
	export function getCurrentPath(): string;
	export function getScript(src: string, func: Function, charset?: string): HTMLScriptElement;

	export function attachEvent<K extends keyof DocumentEventMap>(ele: Document, evt: K, func: (this: Document, ev: DocumentEventMap[K]) => any, useCapture?: boolean): void;
	export function attachEvent<K extends keyof WindowEventMap>(ele: Window, evt: K, func: (this: Window, ev: WindowEventMap[K]) => any, useCapture?: boolean): void;
	export function attachEvent<K extends keyof HTMLElementEventMap>(ele: HTMLElement, evt: K, func: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, useCapture: boolean): void;
	export function attachEvent<K extends keyof ElementEventMap>(ele: Element, evt: K, func: (this: Element, ev: ElementEventMap[K]) => any, useCapture: boolean): void;
	export function attachEvent(ele: EventTarget, evt: string, func: Function): void;
	export function detachEvent(ele: EventTarget, evt: string, func: Function, useCapture?: boolean): void;
	export function fireEvent(ele: EventTarget, evt: string, props: {
		[key: string]: any,
		bubbles?: boolean,
		cancelable?: boolean,
	}): void;


	export function getCookie(key: string, value: string): void;
	export function setCookie(key: string, value: string, timeout?: number, path?: string, domain?: string): void;
}
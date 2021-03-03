# sky-utils

JavaScript utility functions

## Usage

```
import { noop } from "sky-utils";
noop();
```

## Remove Unuse Function

Use rollup-plugin-import remove unuse function

```
import importPlugin from "rollup-plugin-import";
importPlugin({
	libraryName: "sky-utils",
	libraryDirectory: "lib"
})
```

## Build diffrent environment version

You can build diffrent environment version by alias plugin.

- compat:ie6/ie7/ie8/WSH/Rhino
- modern:ie9+/firefox 3+/chrome 4+/Nashorn
- module:browser which support script type="module"
- universal:all those environment

## Api

### Brower Support

- function supportCurrentScript(): boolean;
- function supportProto(): boolean;
- function supportSymbol(): boolean;

### Type Check

- function isArrayLike(arg: any): arg is (ArrayLike<any> | string);
- function isArrayLikeObject(arg: any): arg is ArrayLike<any>;
- function isDate(arg: any): arg is Date;
- function isRegExp(arg: any): arg is RegExp;
- function isString(arg: any): arg is (String | string);
- function isFunction(arg: any): arg is Function;
- function isNumber(arg: any): arg is (Number | number);
- function isObject(arg: any): arg is Object;
- function isDefined(arg?: any): arg is any;
- function isWindow(arg: any): arg is Window;
- function isPlainObject(arg: any): arg is Record<any, any>;
- function isNumeric(arg: any): arg is number;
- function isElement(obj: Node): obj is Element;
- function isInput(obj: Element): obj is HTMLInputElement;

### Function

- function overload(args: ArrayLike<any>, thisVal: any): any;
- function overload(checks: ((arg: any) => boolean)[], thisVal: any, target: Function): void;
- function noop(...args: any[]): void;
- function times(n: number, iteratee: Function, args?: any[]): any[];

### Number

- function random(a: number, b: number): number;
- function round(num: number, len: number): number;
- function ceil(num: number, len: number): number;
- function floor(num: number, len: number): number;

### String

- function escapeString(value: string): string;
- function escapeHtml(value: string): string;
- function escapeAttribute(value: string): string;
- function escape(value: string): string;
- function unescape(value: string): string;
- function escapeRegExp(value: string): string;
- function replaceAll(str: string, find: string, replace: string, ignoreCase?: boolean): string;
- function toString(value: any): string;

### Array

- function findIndex(arr: Record<string, any>[], key: string, value: any): number;
- function findLastIndex(arr: Record<string, any>[], key: string, value: any): number;
- function findLast(arr: Record<string, any>[], key: string, value: any): any;
- function find(arr: Record<string, any>[], key: string, value: any): any;
- function sortBy(arr: Record<string, any>[], key: string): Record<string, any>[];
- function pluck(arr: Record<string, any>[], key: string): Record<string, any>[];
- function sortedIndex(arr: any[], value: any): number;
- function sortedLastIndex(arr: any[], value: any): number;
- function shuffle<T>(arr: T[]): T[];
- function shuffle(arr: any[]): any[];
- function union(...args: any[][]): any[];
- function difference(arr: any[], arr2: any[]): any[];
- function intersection(...args: any[][]): any[];

### Object

- function forIn<T>(obj: any, callback: (this: T, value: any, key: string) => void, thisArg?: T): void;
- function forOwn<T>(obj: any, callback: (this: T, value: any, key: string) => void, thisArg?: T): void;
- function pick(obj: object, keys: string[]): Record<string, any>;
- function omit(obj: object, keys: string[]): Record<string, any>;
- function inherits(subClass: any, superClass: any): void;

### Script

- function getCurrentScript(): HTMLScriptElement;
- function getCurrentPath(): string;
- function getScript(src: string, func: Function, charset?: string): HTMLScriptElement;

### Event

- function attachEvent<K extends keyof DocumentEventMap>(ele: Document, evt: K, func: (this: Document, ev: DocumentEventMap[K]) => any, useCapture?: boolean): void;
- function attachEvent<K extends keyof WindowEventMap>(ele: Window, evt: K, func: (this: Window, ev: WindowEventMap[K]) => any, useCapture?: boolean): void;
- function attachEvent<K extends keyof HTMLElementEventMap>(ele: HTMLElement, evt: K, func: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, useCapture: boolean): void;
- function attachEvent<K extends keyof ElementEventMap>(ele: Element, evt: K, func: (this: Element, ev: ElementEventMap[K]) => any, useCapture: boolean): void;
- function attachEvent(ele: EventTarget, evt: string, func: Function): void;
- function detachEvent(ele: EventTarget, evt: string, func: Function, useCapture?: boolean): void;
- function fireEvent(ele: EventTarget, evt: string, props: {
		[key: string]: any,
		bubbles?: boolean,
		cancelable?: boolean,
	}): void;

### Cookie

- function getCookie(key: string, value: string): void;
- function setCookie(key: string, value: string, timeout?: number, path?: string, domain?: string): void;
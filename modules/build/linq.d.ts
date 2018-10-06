declare namespace data.sprintf {
    class match {
        match: string;
        left: boolean;
        sign: string;
        pad: string;
        min: string;
        precision: string;
        code: string;
        negative: boolean;
        argument: string;
        toString(): string;
    }
    /**
     * 格式化占位符
     *
     * Possible format values:
     *
     * + ``%%`` – Returns a percent sign
     * + ``%b`` – Binary number
     * + ``%c`` – The character according to the ASCII value
     * + ``%d`` – Signed decimal number
     * + ``%f`` – Floating-point number
     * + ``%o`` – Octal number
     * + ``%s`` – String
     * + ``%x`` – Hexadecimal number (lowercase letters)
     * + ``%X`` – Hexadecimal number (uppercase letters)
     *
     * Additional format values. These are placed between the % and the letter (example %.2f):
     *
     * + ``+``      (Forces both + and – in front of numbers. By default, only negative numbers are marked)
     * + ``–``      (Left-justifies the variable value)
     * + ``0``      zero will be used for padding the results to the right string size
     * + ``[0-9]``  (Specifies the minimum width held of to the variable value)
     * + ``.[0-9]`` (Specifies the number of decimal digits or maximum string length)
     *
    */
    const placeholder: RegExp;
    function parseFormat(string: string, arguments: string[]): {
        matches: match[];
        convCount: number;
        strings: string[];
    };
    /**
     * ### Javascript sprintf
     *
     * > http://www.webtoolkit.info/javascript-sprintf.html#.W5sf9FozaM8
     *
     * Several programming languages implement a sprintf function, to output a
     * formatted string. It originated from the C programming language, printf
     * function. Its a string manipulation function.
     *
     * This is limited sprintf Javascript implementation. Function returns a
     * string formatted by the usual printf conventions. See below for more details.
     * You must specify the string and how to format the variables in it.
    */
    function doFormat(format: string, ...argv: string[]): string;
    /**
     * 进行格式化占位符对格式化参数的字符串替换操作
    */
    function doSubstitute(matches: sprintf.match[], strings: string[]): string;
    function convert(match: sprintf.match, nosign?: boolean): string;
}
/**
 * Provides a set of static (Shared in Visual Basic) methods for querying
 * objects that implement ``System.Collections.Generic.IEnumerable<T>``.
 *
 * (这个枚举器类型是构建出一个Linq查询表达式所必须的基础类型，这是一个静态的集合，不会发生元素的动态添加或者删除)
*/
declare class IEnumerator<T> {
    /**
     * The data sequence with specific type.
    */
    protected sequence: T[];
    /**
     * 获取序列的元素类型
    */
    readonly ElementType: TypeInfo;
    /**
     * The number of elements in the data sequence.
    */
    readonly Count: number;
    /**
     * Get the element value at a given index position
     * of this data sequence.
     *
     * @param index index value should be an integer value.
    */
    ElementAt(index?: string | number): T;
    /**
     * 可以从一个数组或者枚举器构建出一个Linq序列
     *
     * @param source The enumerator data source, this constructor will perform
     *       a sequence copy action on this given data source sequence at here.
    */
    constructor(source: T[] | IEnumerator<T>);
    indexOf(x: T): number;
    /**
     * Get the first element in this sequence
    */
    readonly First: T;
    /**
     * Get the last element in this sequence
    */
    readonly Last: T;
    /**
     * Projects each element of a sequence into a new form.
     *
     * @typedef TOut The type of the value returned by selector.
     *
     * @param selector A transform function to apply to each element.
     *
     * @returns An ``System.Collections.Generic.IEnumerable<T>``
     *          whose elements are the result of invoking the
     *          transform function on each element of source.
    */
    Select<TOut>(selector: (o: T, i: number) => TOut): IEnumerator<TOut>;
    /**
     * Groups the elements of a sequence according to a key selector function.
     * The keys are compared by using a comparer and each group's elements
     * are projected by using a specified function.
     *
     * @param compares 注意，javascript在进行中文字符串的比较的时候存在bug，如果当key的类型是字符串的时候，
     *                 在这里需要将key转换为数值进行比较，遇到中文字符串可能会出现bug
    */
    GroupBy<TKey>(keySelector: (o: T) => TKey, compares: (a: TKey, b: TKey) => number): IEnumerator<Group<TKey, T>>;
    /**
     * Filters a sequence of values based on a predicate.
     *
     * @param predicate A test condition function.
     *
     * @returns Sub sequence of the current sequence with all
     *     element test pass by the ``predicate`` function.
    */
    Where(predicate: (e: T) => boolean): IEnumerator<T>;
    /**
     * Get the min value in current sequence.
     * (求取这个序列集合的最小元素，使用这个函数要求序列之中的元素都必须能够被转换为数值)
    */
    Min(project?: (e: T) => number): T;
    /**
     * Get the max value in current sequence.
     * (求取这个序列集合的最大元素，使用这个函数要求序列之中的元素都必须能够被转换为数值)
    */
    Max(project?: (e: T) => number): T;
    /**
     * 求取这个序列集合的平均值，使用这个函数要求序列之中的元素都必须能够被转换为数值
    */
    Average(project?: (e: T) => number): number;
    /**
     * 求取这个序列集合的和，使用这个函数要求序列之中的元素都必须能够被转换为数值
    */
    Sum(project?: (e: T) => number): number;
    /**
     * Sorts the elements of a sequence in ascending order according to a key.
     *
     * @param key A function to extract a key from an element.
     *
     * @returns An ``System.Linq.IOrderedEnumerable<T>`` whose elements are
     *          sorted according to a key.
    */
    OrderBy(key: (e: T) => number): IEnumerator<T>;
    /**
     * Sorts the elements of a sequence in descending order according to a key.
     *
     * @param key A function to extract a key from an element.
     *
     * @returns An ``System.Linq.IOrderedEnumerable<T>`` whose elements are
     *          sorted in descending order according to a key.
    */
    OrderByDescending(key: (e: T) => number): IEnumerator<T>;
    /**
     * 取出序列之中的前n个元素
    */
    Take(n: number): IEnumerator<T>;
    /**
     * 跳过序列的前n个元素之后返回序列之中的所有剩余元素
    */
    Skip(n: number): IEnumerator<T>;
    /**
     * 序列元素的位置反转
    */
    Reverse(): IEnumerator<T>;
    /**
     * Returns elements from a sequence as long as a specified condition is true.
     * (与Where类似，只不过这个函数只要遇到第一个不符合条件的，就会立刻终止迭代)
    */
    TakeWhile(predicate: (e: T) => boolean): IEnumerator<T>;
    /**
     * Bypasses elements in a sequence as long as a specified condition is true
     * and then returns the remaining elements.
    */
    SkipWhile(predicate: (e: T) => boolean): IEnumerator<T>;
    /**
     * 判断这个序列之中的所有元素是否都满足特定条件
    */
    All(predicate: (e: T) => boolean): boolean;
    /**
     * 判断这个序列之中的任意一个元素是否满足特定的条件
    */
    Any(predicate?: (e: T) => boolean): boolean;
    /**
     * 对序列中的元素进行去重
    */
    Distinct(key?: (o: T) => string): IEnumerator<T>;
    /**
     * 将序列按照符合条件的元素分成区块
     *
     * @param isDelimiter 一个用于判断当前的元素是否是分割元素的函数
     * @param reserve 是否保留下这个分割对象？默认不保留
    */
    ChunkWith(isDelimiter: (x: T) => boolean, reserve?: boolean): IEnumerator<T[]>;
    /**
     * Performs the specified action for each element in an array.
     *
     * @param callbackfn  A function that accepts up to three arguments. forEach
     * calls the callbackfn function one time for each element in the array.
     *
    */
    ForEach(callbackfn: (x: T, index: number) => void): void;
    /**
     * Contract the data sequence to string
     *
     * @param deli Delimiter string that using for the string.join function
     * @param toString A lambda that describ how to convert the generic type object to string token
     *
     * @returns A contract string.
    */
    JoinBy(deli: string, toString?: (x: T) => string): string;
    /**
     * 如果当前的这个数据序列之中的元素的类型是某一种元素类型的集合，或者该元素
     * 可以描述为另一种类型的元素的集合，则可以通过这个函数来进行降维操作处理。
     *
     * @param project 这个投影函数描述了如何将某一种类型的元素降维至另外一种元素类型的集合。
     * 如果这个函数被忽略掉的话，会尝试强制将当前集合的元素类型转换为目标元素类型的数组集合。
    */
    Unlist<U>(project?: (obj: T) => U[]): IEnumerator<U>;
    /**
     * This function returns a clone copy of the source sequence.
    */
    ToArray(): T[];
    /**
     * 将当前的这个不可变的只读序列对象转换为可动态增添删除元素的列表对象
    */
    ToList(): List<T>;
    /**
     * 将当前的这个数据序列对象转换为键值对字典对象，方便用于数据的查找操作
    */
    ToDictionary<K, V>(keySelector: (x: T) => string, elementSelector?: (x: T) => V): Dictionary<V>;
    /**
     * 将当前的这个数据序列转换为包含有内部位置指针数据的指针对象
    */
    ToPointer(): Pointer<T>;
    /**
     * 将当前的这个序列转换为一个滑窗数据的集合
    */
    SlideWindows(winSize: number, step?: number): IEnumerator<data.SlideWindow<T>>;
}
declare namespace Linq.TsQuery {
    const handler: {
        /**
         * HTML document query handler
        */
        string: () => stringEval;
        /**
         * Create a linq object
        */
        array: () => arrayEval<{}>;
    };
    interface IEval<T> {
        doEval(expr: T, type: TypeInfo): any;
    }
    /**
     * 字符串格式的值意味着对html文档节点的查询
    */
    class stringEval implements IEval<string> {
        doEval(expr: string, type: TypeInfo): any;
    }
    /**
     * Create a Linq Enumerator
    */
    class arrayEval<V> implements IEval<V[]> {
        doEval(expr: V[], type: TypeInfo): any;
    }
}
/**
 * 通用数据拓展函数集合
*/
declare module DataExtensions {
    function getCook(cookiename: string): string;
    /**
     * 将URL查询字符串解析为字典对象
     *
     * @param queryString URL查询参数
     * @param lowerName 是否将所有的参数名称转换为小写形式？
     *
     * @returns 键值对形式的字典对象
    */
    function parseQueryString(queryString: string, lowerName?: boolean): object;
    /**
     * 尝试将任意类型的目标对象转换为数值类型
     *
     * @returns 一个数值
    */
    function as_numeric(obj: any): number;
    /**
     * 因为在js之中没有类型信息，所以如果要取得类型信息必须要有一个目标对象实例
     * 所以在这里，函数会需要一个实例对象来取得类型值
    */
    function AsNumeric<T>(obj: T): (x: T) => number;
}
/**
 * TypeScript string helpers
*/
declare module Strings {
    const x0: number;
    const x9: number;
    /**
     * @param text A single character
    */
    function isNumber(text: string): boolean;
    /**
     * 将字符串转换为一个实数
    */
    function Val(str: string): number;
    /**
     * 将文本字符串按照newline进行分割
    */
    function lineTokens(text: string): string[];
    /**
     * 如果不存在``tag``分隔符，则返回来的``tuple``里面，``name``是输入的字符串，``value``则是空字符串
     *
     * @param tag 分割name和value的分隔符，默认是一个空白符号
    */
    function GetTagValue(str: string, tag?: string): NamedValue<string>;
    /**
     * Removes the given chars from the begining of the given
     * string and the end of the given string.
     *
     * @param chars A collection of characters that will be trimmed.
    */
    function Trim(str: string, chars: string | number[]): string;
    /**
     * Determine that the given string is empty string or not?
     * (判断给定的字符串是否是空值？)
     *
     * @param stringAsFactor 假若这个参数为真的话，那么字符串``undefined``也将会被当作为空值处理
    */
    function Empty(str: string, stringAsFactor?: boolean): boolean;
    /**
     * Determine that the whole given string is match a given regex pattern.
    */
    function IsPattern(str: string, pattern: RegExp): boolean;
    /**
     * Remove duplicate string values from JS array
     *
     * https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
    */
    function uniq(a: string[]): string[];
    /**
     * 将字符串转换为字符数组
     *
     * @description > https://jsperf.com/convert-string-to-char-code-array/9
     *    经过测试，使用数组push的效率最高
     *
     * @returns A character array, all of the string element in the array
     *      is one character length.
    */
    function ToCharArray(str: string): string[];
    /**
     * Measure the string length, a null string value or ``undefined``
     * variable will be measured as ZERO length.
    */
    function Len(s: string): number;
    function CompareTo(s1: string, s2: string): number;
    const sprintf: typeof data.sprintf.doFormat;
}
/**
 * 类似于反射类型
*/
declare class TypeInfo {
    /**
     * 直接使用系统内置的``typeof``运算符得到的结果
     *
     * This property have one of the values in these strings:
     * ``string object|string|number|boolean|symbol|undefined|function|array``
    */
    typeOf: string;
    /**
     * 类型class的名称，例如TypeInfo, IEnumerator等。
     * 如果这个属性是空的，则说明是js之中的基础类型
    */
    class: string;
    namespace: string;
    /**
     * class之中的字段域列表
    */
    property: string[];
    /**
     * 函数方法名称列表
    */
    methods: string[];
    /**
     * 是否是js之中的基础类型？
    */
    readonly IsPrimitive: boolean;
    readonly IsArray: boolean;
    readonly IsEnumerator: boolean;
    IsArrayOf(genericType: string): boolean;
    /**
     * 获取某一个对象的类型信息
    */
    static typeof<T>(obj: T): TypeInfo;
    /**
     * 获取object对象上所定义的所有的函数
    */
    static GetObjectMethods<T>(obj: T): string[];
    toString(): string;
    /**
     * 利用一个名称字符串集合创建一个js对象
     *
     * @param names object的属性名称列表
     * @param init 使用这个函数为该属性指定一个初始值
    */
    static EmptyObject<V>(names: string[] | IEnumerator<string>, init: () => V): object;
    /**
     * 从键值对集合创建object对象，键名或者名称属性会作为object对象的属性名称
    */
    static CreateObject<V>(nameValues: NamedValue<V>[] | IEnumerator<NamedValue<V>> | Map<string, V>[] | IEnumerator<Map<string, V>>): object;
    /**
     * MetaReader对象和字典相似，只不过是没有类型约束，并且为只读集合
    */
    static CreateMetaReader<V>(nameValues: NamedValue<V>[] | IEnumerator<NamedValue<V>>): TsLinq.MetaReader;
}
/**
 * 对于这个函数的返回值还需要做类型转换
*/
declare function $ts<T>(any: (() => void) | T | T[]): IEnumerator<T> & any;
/**
 * ### Javascript sprintf
 *
 * > http://www.webtoolkit.info/javascript-sprintf.html#.W5sf9FozaM8
 *
 * Several programming languages implement a sprintf function, to output a
 * formatted string. It originated from the C programming language, printf
 * function. Its a string manipulation function.
 *
 * This is limited sprintf Javascript implementation. Function returns a
 * string formatted by the usual printf conventions. See below for more details.
 * You must specify the string and how to format the variables in it.
*/
declare const sprintf: typeof data.sprintf.doFormat;
/**
 * Linq数据流程管线的起始函数
 *
 * @param source 需要进行数据加工的集合对象
*/
declare function From<T>(source: T[] | IEnumerator<T>): IEnumerator<T>;
declare function CharEnumerator(str: string): IEnumerator<string>;
/**
 * 判断目标对象集合是否是空的？
 *
 * @param array 如果这个数组对象是空值或者未定义，都会被判定为空，如果长度为零，则同样也会被判定为空值
*/
declare function IsNullOrEmpty<T>(array: T[] | IEnumerator<T>): boolean;
declare function isNullOrUndefined(obj: any): boolean;
/**
 * HTML/Javascript: how to access JSON data loaded in a script tag.
*/
declare function LoadJson(id: string): any;
declare function LoadText(id: string): string;
/**
 * Quick Tip: Get URL Parameters with JavaScript
 *
 * > https://www.sitepoint.com/get-url-parameters-with-javascript/
 *
 * @param url get query string from url (optional) or window
*/
declare function getAllUrlParams(url?: string): Dictionary<string>;
/**
 * http://www.rfc-editor.org/rfc/rfc4180.txt
*/
declare namespace csv {
    /**
     * ``csv``文件模型
    */
    class dataframe extends IEnumerator<csv.row> {
        /**
         * Csv文件的第一行作为header
        */
        readonly headers: IEnumerator<string>;
        /**
         * 获取除了第一行作为``header``数据的剩余的所有的行数据
        */
        readonly contents: IEnumerator<row>;
        constructor(rows: row[] | IEnumerator<row>);
        /**
         * 获取指定列名称的所有的行的列数据
         *
         * @param name csv文件的列名称，第一行之中的文本数据的内容
         *
         * @returns 该使用名称所指定的列的所有的内容字符串的枚举序列对象
        */
        Column(name: string): IEnumerator<string>;
        /**
         * 向当前的数据框对象之中添加一行数据
        */
        AppendLine(line: row): dataframe;
        /**
         * 向当前的数据框对象之中添加多行数据
        */
        AppendRows(data: IEnumerator<row> | row[]): dataframe;
        /**
         * 将当前的这个数据框对象转换为csv文本内容
        */
        buildDoc(): string;
        /**
         * 使用反射操作将csv文档转换为特定类型的对象数据序列
         *
         * @param fieldMaps 这个参数是一个对象，其描述了如何将csv文档之中在js之中
         *     的非法标识符转换为合法的标识符的映射
         * @param activator 这个函数指针描述了如何创建一个新的指定类型的对象的过程，
         *     这个函数指针不可以有参数的传递。
         *
         * @returns 这个函数返回类型约束的对象Linq序列集合
        */
        Objects<T>(fieldMaps?: object, activator?: () => T): IEnumerator<T>;
        private static ensureMapsAll;
        /**
         * 使用ajax将csv文件保存到服务器
         *
         * @param url csv文件数据将会被通过post方法保存到这个url所指定的网络资源上面
         * @param callback ajax异步回调，默认是打印返回结果到终端之上
         *
        */
        save(url: string, callback?: (response: string) => void): void;
        /**
         * 使用ajax GET加载csv文件数据，不推荐使用这个方法处理大型的csv文件数据
         *
         * @param callback 当这个异步回调为空值的时候，函数使用同步的方式工作，返回csv对象
         *                 如果这个参数不是空值，则以异步的方式工作，此时函数会返回空值
        */
        static Load(url: string, tsv?: boolean, callback?: (csv: dataframe) => void): dataframe;
        /**
         * 将所给定的文本文档内容解析为数据框对象
         *
         * @param tsv 所需要进行解析的文本内容是否为使用``<TAB>``作为分割符的tsv文本文件？
         *   默认不是，即默认使用逗号``,``作为分隔符的csv文本文件。
        */
        static Parse(text: string, tsv?: boolean): dataframe;
    }
}
declare namespace csv {
    /**
     * 将对象序列转换为``dataframe``对象
     *
     * 这个函数只能够转换object类型的数据，对于基础类型将不保证能够正常工作
     *
     * @param data 因为这个对象序列对象是具有类型约束的，所以可以直接从第一个
     *    元素对象之中得到所有的属性名称作为csv文件头的数据
    */
    function toDataFrame<T>(data: IEnumerator<T>): dataframe;
}
declare namespace csv.HTML {
    /**
     * 将数据框对象转换为HTMl格式的表格对象的html代码
     *
     * @param tblClass 所返回来的html表格代码之中的table对象的类型默认是bootstrap类型的，
     * 所以默认可以直接应用bootstrap的样式在这个表格之上
     *
     * @returns 表格的HTML代码
    */
    function toHTMLTable(data: dataframe, tblClass?: string[]): string;
    function createHTMLTable<T>(data: IEnumerator<T>, tblClass?: string[]): string;
}
declare namespace csv {
    /**
     * 一行数据
    */
    class row extends IEnumerator<string> {
        /**
         * 当前的这一个行对象的列数据集合
         *
         * 注意，你无法通过直接修改这个数组之中的元素来达到修改这个行之中的值的目的
         * 因为这个属性会返回这个行的数组值的复制对象
        */
        readonly columns: string[];
        /**
         * 这个只读属性仅用于生成csv文件
        */
        readonly rowLine: string;
        constructor(cells: string[] | IEnumerator<string>);
        /**
         * Returns the index of the first occurrence of a value in an array.
         *
         * 函数得到指定的值在本行对象之中的列的编号
         *
         * @param value The value to locate in the array.
         * @param fromIndex The array index at which to begin the search. If ``fromIndex`` is omitted,
         *      the search starts at index 0.
         *
         * @returns 如果这个函数返回-1则表示找不到
        */
        indexOf(value: string, fromIndex?: number): number;
        ProjectObject(headers: string[] | IEnumerator<string>): object;
        private static autoEscape;
        static Parse(line: string): row;
        static ParseTsv(line: string): row;
    }
}
/**
 * A data sequence object with a internal index pointer.
*/
declare class Pointer<T> extends IEnumerator<T> {
    /**
     * The index pointer of the current data sequence.
    */
    i: number;
    /**
     * The index pointer is at the end of the data sequence?
    */
    readonly EndRead: boolean;
    /**
     * Get the element value in current location i;
    */
    readonly Current: T;
    /**
     * Get current index element value and then move the pointer
     * to next position.
    */
    readonly Next: T;
    constructor(src: T[] | IEnumerator<T>);
    /**
     * Just move the pointer to the next position and then
     * returns current pointer object.
    */
    MoveNext(): Pointer<T>;
}
declare namespace csv {
    /**
     * 通过Chars枚举来解析域，分隔符默认为逗号
     * > https://github.com/xieguigang/sciBASIC/blame/701f9d0e6307a779bb4149c57a22a71572f1e40b/Data/DataFrame/IO/csv/Tokenizer.vb#L97
     *
    */
    function CharsParser(s: string, delimiter?: string, quot?: string): string[];
}
declare namespace TsLinq {
    class MetaReader {
        private readonly meta;
        constructor(meta: object);
        /**
         * Read meta object value by call name
         *
         * > https://stackoverflow.com/questions/280389/how-do-you-find-out-the-caller-function-in-javascript
        */
        GetValue(key?: string): any;
    }
}
declare namespace TsLinq {
    class PriorityQueue<T> extends IEnumerator<QueueItem<T>> {
        private events;
        /**
         * 队列元素
        */
        readonly Q: QueueItem<T>[];
        constructor(events: any);
        enqueue(obj: T): void;
        extract(i: number): QueueItem<T>;
        dequeue(): QueueItem<T>;
    }
    class QueueItem<T> {
        value: T;
        below: QueueItem<T>;
        above: QueueItem<T>;
        constructor(x: T);
        toString(): string;
    }
}
declare namespace data {
    /**
     * 一个数值范围
    */
    class NumericRange implements DoubleRange {
        /**
         * 这个数值范围的最大值
        */
        max: number;
        /**
         * 这个数值范围的最小值
        */
        min: number;
        constructor(min: number, max: number);
        readonly Length: number;
        /**
         * 从一个数值序列之中创建改数值序列的值范围
        */
        static Create(numbers: number[] | IEnumerator<number>): NumericRange;
        /**
         * 判断目标数值是否在当前的这个数值范围之内
        */
        IsInside(x: number): boolean;
        /**
         * Get a numeric sequence within current range with a given step
         *
         * @param step The delta value of the step forward,
         *      by default is 10% of the range length.
        */
        PopulateNumbers(step?: number): number[];
        /**
         * Display the range in format ``[min, max]``
        */
        toString(): string;
    }
}
declare namespace data {
    class SlideWindow<T> extends IEnumerator<T> {
        /**
         * 这个滑窗对象在原始的数据序列之中的最左端的位置
        */
        index: number;
        constructor(index: number, src: T[] | IEnumerator<T>);
        /**
         * 创建指定片段长度的滑窗对象
         *
         * @param winSize 滑窗片段的长度
         * @param step 滑窗的步进长度，默认是一个步进
        */
        static Split<T>(src: T[] | IEnumerator<T>, winSize: number, step?: number): IEnumerator<SlideWindow<T>>;
    }
}
declare class StringBuilder {
    private buffer;
    private newLine;
    readonly Length: number;
    constructor(str?: string | StringBuilder, newLine?: string);
    Append(text: string): StringBuilder;
    AppendLine(text: string): StringBuilder;
    toString(): string;
}
declare namespace TsLinq {
    /**
     * 性能计数器
    */
    class Benchmark {
        readonly start: number;
        private lastCheck;
        constructor();
        Tick(): CheckPoint;
    }
    /**
     * 单位都是毫秒
    */
    class CheckPoint {
        start: number;
        time: number;
        sinceLastCheck: number;
        sinceFromStart: number;
        /**
         * 获取从``time``到当前时间所流逝的毫秒计数
        */
        readonly elapsedMilisecond: number;
    }
}
declare namespace CanvasHelper {
    /**
     * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
     *
     * @param {String} text The text to be rendered.
     * @param {String} font The css font descriptor that text is to be rendered with (e.g. "bold 14px verdana").
     *
     * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
     *
     */
    function getTextWidth(text: string, font: string): number;
    class fontSize {
        point: number;
        pixel: number;
        em: number;
        percent: number;
        readonly sizes: fontSize[];
    }
}
declare module HttpHelpers {
    /**
     * 这个函数只会返回200成功代码的响应内容，对于其他的状态代码都会返回null
     * (这个函数是同步方式的)
    */
    function GET(url: string): string;
    /**
     * 使用异步调用的方式进行数据的下载操作
    */
    function GetAsyn(url: string, callback: (response: string, code: number) => void): void;
    function POST(url: string, postData: PostData, callback: (response: string, code: number) => void): void;
    /**
     * 使用multipart form类型的数据进行文件数据的上传操作
     *
     * @param url 函数会通过POST方式将文件数据上传到这个url所指定的服务器资源位置
     *
    */
    function UploadFile(url: string, postData: PostData, callback: (response: string, code: number) => void): void;
    class PostData {
        /**
         * content type
        */
        type: string;
        /**
         * 将要进行POST上传的数据包
        */
        data: any;
        toString(): string;
    }
}
/**
 * 序列之中的元素下标的操作方法集合
*/
declare namespace Which {
    /**
     * 查找出所给定的逻辑值集合之中的所有true的下标值
    */
    function Is(booleans: boolean[] | IEnumerator<boolean>): IEnumerator<number>;
    /**
     * 默认的通用类型的比较器对象
    */
    class DefaultCompares<T> {
        /**
         * 一个用于比较通用类型的数值转换器对象
        */
        private as_numeric;
        compares(a: T, b: T): number;
        static default<T>(): (a: T, b: T) => number;
    }
    /**
     * 查找出序列之中最大的元素的序列下标编号
     *
     * @param x 所给定的数据序列
     * @param compare 默认是将x序列之中的元素转换为数值进行大小的比较的
    */
    function Max<T>(x: IEnumerator<T>, compare?: (a: T, b: T) => number): number;
    /**
     * 查找出序列之中最小的元素的序列下标编号
     *
     * @param x 所给定的数据序列
     * @param compare 默认是将x序列之中的元素转换为数值进行大小的比较的
    */
    function Min<T>(x: IEnumerator<T>, compare?: (a: T, b: T) => number): number;
}
/**
 * Binary tree implements
*/
declare namespace algorithm.BTree {
    /**
     * 用于进行数据分组所需要的最基础的二叉树数据结构
    */
    class binaryTree<T, V> {
        /**
         * 根节点，根节点的key值可能会对二叉树的构建造成很大的影响
        */
        root: node<T, V>;
        /**
         * 这个函数指针描述了如何对两个``key``之间进行比较
         *
         * 返回结果值：
         *
         * + ``等于0`` 表示二者相等
         * + ``大于0`` 表示a大于b
         * + ``小于0`` 表示a小于b
        */
        compares: (a: T, b: T) => number;
        /**
         * 构建一个二叉树对象
         *
         * @param comparer 这个函数指针描述了如何进行两个对象之间的比较操作，如果这个函数参数使用默认值的话
         *                 则只能够针对最基本的数值，逻辑变量进行操作
        */
        constructor(comparer?: (a: T, b: T) => number);
        /**
         * 向这个二叉树对象之中添加一个子节点
        */
        add(term: T, value?: V): void;
        /**
         * 根据key值查找一个节点，然后获取该节点之中与key所对应的值
         *
         * @returns 如果这个函数返回空值，则表示可能未找到目标子节点
        */
        find(term: T): V;
        /**
         * 将这个二叉树对象转换为一个节点的数组
        */
        ToArray(): node<T, V>[];
        /**
         * 将这个二叉树对象转换为一个Linq查询表达式所需要的枚举器类型
        */
        AsEnumerable(): IEnumerator<node<T, V>>;
    }
}
declare namespace algorithm.BTree {
    /**
     * data extension module for binary tree nodes data sequence
    */
    module binaryTreeExtensions {
        /**
         * Convert a binary tree object as a node array.
        */
        function populateNodes<T, V>(tree: node<T, V>): node<T, V>[];
    }
}
declare namespace algorithm.BTree {
    /**
     * A binary tree node.
    */
    class node<T, V> {
        key: T;
        value: V;
        left: node<T, V>;
        right: node<T, V>;
        constructor(key: T, value?: V, left?: node<T, V>, right?: node<T, V>);
        toString(): string;
    }
}
declare namespace TsLinq {
    class StackFrame {
        caller: string;
        file: string;
        memberName: string;
        line: number;
        column: number;
        toString(): string;
        static Parse(line: string): StackFrame;
        private static getFileName;
    }
}
declare namespace TsLinq {
    class StackTrace extends IEnumerator<StackFrame> {
        constructor(frames: IEnumerator<StackFrame> | StackFrame[]);
        static Dump(): StackTrace;
        static GetCallerMember(): StackFrame;
        toString(): string;
    }
}
/**
 * 键值对映射哈希表
*/
declare class Dictionary<V> extends IEnumerator<Map<string, V>> {
    private maps;
    /**
     * 如果键名称是空值的话，那么这个函数会自动使用caller的函数名称作为键名进行值的获取
     *
     * https://stackoverflow.com/questions/280389/how-do-you-find-out-the-caller-function-in-javascript
     *
     * @param key 键名或者序列的索引号
    */
    Item(key?: string | number): V;
    /**
     * 获取这个字典对象之中的所有的键名
    */
    readonly Keys: IEnumerator<string>;
    /**
     * 获取这个字典对象之中的所有的键值
    */
    readonly Values: IEnumerator<V>;
    /**
     * 将目标对象转换为一个类型约束的映射序列集合
    */
    constructor(maps: object | Map<string, V>[] | IEnumerator<Map<string, V>>);
    static FromMaps<V>(maps: Map<string, V>[] | IEnumerator<Map<string, V>>): Dictionary<V>;
    /**
     * 将目标对象转换为一个类型约束的映射序列集合
    */
    static ObjectMaps<V>(maps: object | Map<string, V>[] | IEnumerator<Map<string, V>>): Map<string, V>[];
    /**
     * 查看这个字典集合之中是否存在所给定的键名
    */
    ContainsKey(key: string): boolean;
    /**
     * 向这个字典对象之中添加一个键值对，请注意，如果key已经存在这个字典对象中了，这个函数会自动覆盖掉key所对应的原来的值
    */
    Add(key: string, value: V): Dictionary<V>;
    /**
     * 删除一个给定键名所指定的键值对
    */
    Delete(key: string): Dictionary<V>;
}
/**
 * The linq pipline implements at here. (在这个模块之中实现具体的数据序列算法)
*/
declare module Enumerable {
    /**
     * 进行数据序列的投影操作
     *
    */
    function Select<T, TOut>(source: T[], project: (e: T, i: number) => TOut): IEnumerator<TOut>;
    /**
     * 进行数据序列的排序操作
     *
    */
    function OrderBy<T>(source: T[], key: (e: T) => number): IEnumerator<T>;
    function OrderByDescending<T>(source: T[], key: (e: T) => number): IEnumerator<T>;
    function Take<T>(source: T[], n: number): IEnumerator<T>;
    function Skip<T>(source: T[], n: number): IEnumerator<T>;
    function TakeWhile<T>(source: T[], predicate: (e: T) => boolean): IEnumerator<T>;
    function Where<T>(source: T[], predicate: (e: T) => boolean): IEnumerator<T>;
    function SkipWhile<T>(source: T[], predicate: (e: T) => boolean): IEnumerator<T>;
    function All<T>(source: T[], predicate: (e: T) => boolean): boolean;
    function Any<T>(source: T[], predicate: (e: T) => boolean): boolean;
    /**
     * Implements a ``group by`` operation by binary tree data structure.
    */
    function GroupBy<T, TKey>(source: T[], getKey: (e: T) => TKey, compares: (a: TKey, b: TKey) => number): IEnumerator<Group<TKey, T>>;
}
/**
 * 按照某一个键值进行分组的集合对象
*/
declare class Group<TKey, T> extends IEnumerator<T> {
    /**
     * 当前的分组之中的值所都共有的键值对象
    */
    Key: TKey;
    /**
     * Group members, readonly property.
    */
    readonly Group: T[];
    constructor(key: TKey, group: T[]);
    /**
     * 创建一个键值对映射序列，这些映射都具有相同的键名
    */
    ToMaps(): Map<TKey, T>[];
}
/**
 * 表示一个动态列表对象
*/
declare class List<T> extends IEnumerator<T> {
    constructor(src?: T[] | IEnumerator<T>);
    /**
     * 可以使用这个方法进行静态代码的链式添加
    */
    Add(x: T): List<T>;
    /**
     * 批量的添加
    */
    AddRange(x: T[] | IEnumerator<T>): List<T>;
    /**
     * 查找给定的元素在当前的这个列表之中的位置，不存在则返回-1
    */
    IndexOf(x: T): number;
    /**
     * 返回列表之中的第一个元素，然后删除第一个元素，剩余元素整体向前平移一个单位
    */
    Pop(): T;
}
/**
 * 描述了一个键值对集合
*/
declare class Map<K, V> {
    /**
     * 键名称，一般是字符串
    */
    key: K;
    /**
     * 目标键名所映射的值
    */
    value: V;
    /**
     * 创建一个新的键值对集合
     *
    */
    constructor(key?: K, value?: V);
    toString(): string;
}
/**
 * 描述了一个带有名字属性的变量值
*/
declare class NamedValue<T> {
    /**
     * 变量值的名字属性
    */
    name: string;
    /**
     * 这个变量值
    */
    value: T;
    constructor(name?: string, val?: T);
    /**
     * 获取得到变量值的类型定义信息
    */
    readonly TypeOfValue: TypeInfo;
    /**
     * 这个之对象是否是空的？
    */
    readonly IsEmpty: boolean;
    toString(): string;
}
/**
 * HTML文档操作帮助函数
*/
declare namespace Linq.DOM {
    /**
     * 向指定id编号的div添加select标签的组件
    */
    function AddSelectOptions(items: Map<string, string>[], div: string, selectName: string, className?: string): void;
    /**
     * 向给定编号的div对象之中添加一个表格对象
     *
     * @param headers 表头
     * @param div 新生成的table将会被添加在这个div之中
     * @param attrs ``<table>``的属性值，包括id，class等
    */
    function AddHTMLTable(rows: object[], headers: string[] | IEnumerator<string> | IEnumerator<Map<string, string>> | Map<string, string>[], div: string, attrs?: node): void;
    /**
     * Execute a given function when the document is ready.
     *
     * @param fn A function that without any parameters
    */
    function ready(fn: () => void): void;
    /**
     * 向一个给定的HTML元素或者HTML元素的集合之中的对象添加给定的事件
     *
     * @param el HTML节点元素或者节点元素的集合
     * @param type 事件的名称字符串
     * @param fn 对事件名称所指定的事件进行处理的工作函数，这个工作函数应该具备有一个事件对象作为函数参数
    */
    function addEvent(el: any, type: string, fn: (event: Event) => void): void;
}
declare namespace Linq.DOM {
    class DOMEnumerator<T extends HTMLElement> extends IEnumerator<T> {
        constructor(elements: T[] | IEnumerator<T> | NodeListOf<T>);
        private static ensureElements;
        /**
         * @param value 如果需要批量清除节点之中的值的话，需要传递一个空字符串，而非空值
        */
        val(value?: string | string[] | IEnumerator<string>): IEnumerator<string>;
        AddClass(className: string): DOMEnumerator<T>;
        AddEvent(eventName: string, handler: (event: Event) => void): void;
        onChange(handler: (event: Event) => void): void;
        RemoveClass(className: string): DOMEnumerator<T>;
        hide(): DOMEnumerator<T>;
        show(): DOMEnumerator<T>;
        /**
         * 将所选定的节点批量删除
        */
        Delete(): void;
    }
}
declare namespace Linq.DOM {
    /**
     * HTML文档节点的查询类型
    */
    enum QueryTypes {
        NoQuery = 0,
        /**
         * 表达式为 #xxx
         * 按照节点的id编号进行查询
         *
         * ``<tag id="xxx">``
        */
        id = 1,
        /**
         * 表达式为 .xxx
         * 按照节点的class名称进行查询
         *
         * ``<tag class="xxx">``
        */
        class = 10,
        /**
         * 表达式为 xxx
         * 按照节点的名称进行查询
         *
         * ``<xxx ...>``
        */
        tagName = -100
    }
    class Query {
        type: QueryTypes;
        singleNode: boolean;
        /**
         * Name of the return value is the trimmed expression
        */
        expression: string;
        static parseQuery(expr: string): Query;
        /**
         * by node id
        */
        private static getById;
        /**
         * by class name
        */
        private static getByClass;
        /**
         * by tag name
        */
        private static getByTag;
        /**
         * create new node
        */
        private static createElement;
        private static isSelectorQuery;
        private static parseExpression;
    }
}
declare namespace Linq.DOM {
    class node {
        tagName: string;
        id: string;
        classList: string[];
        attrs: NamedValue<string>[];
        static FromNode(htmlNode: HTMLElement): node;
        static tokenList(tokens: DOMTokenList): string[];
        static nameValueMaps(attrs: NamedNodeMap): NamedValue<string>[];
    }
}
declare namespace Linq.DOM {
    const attrs: RegExp;
    function ParseNodeDeclare(expr: string): {
        tag: string;
        attrs: NamedValue<string>[];
    };
}
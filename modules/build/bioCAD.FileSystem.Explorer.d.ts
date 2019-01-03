/// <reference path="linq.d.ts" />
/// <reference path="bioCAD.core.d.ts" />
declare enum bioClassType {
    /**
     * The unknown class type
    */
    unknown = 0,
    /**
     * General text file
    */
    text = 1,
    /**
     * Image file
    */
    image = 2,
    /**
     * The data table is a kind of numeric matrix for gene expression data, or something.
    */
    matrix = 3,
    /**
     * The biological sequence data type, like fasta sequence file.
    */
    bioSequence = 4,
}
declare module bioMimeTypes {
    /**
     * bio class type to font-awsome icon name
     *
     * ## 2018-08-15 typescript 的枚举类型目前还不可以使用select进行选择
     * 所以在这里使用if进行数据的获取
    */
    function classToFontAwsome(cls: bioClassType): string[];
}
/**
 * 文件数据模型
*/
declare class bioCADFile {
    /**
     * 在数据库之中的唯一编号
    */
    id: number;
    /**
     * 显示的文件名
    */
    fileName: string;
    /**
     * 文件大小，单位为``B``
    */
    size: number;
    /**
     * 文件的格式信息描述
    */
    mime: bioCADmimeType;
    constructor(data: object, types: Dictionary<bioCADmimeType>);
    toString(): string;
}
/**
 * 对文件格式信息的简要描述
*/
declare class bioCADmimeType {
    /**
     * 这种文件格式在数据库之中的唯一编号
    */
    classID: number;
    /**
     * 对文件内容的摘要描述信息
    */
    contentType: string;
    /**
     * 详细的描述信息
    */
    description: string;
    constructor(data: object);
    toString(): string;
}
declare const containerClassName: string;
/**
 * 文件浏览器的模型，这个对象是一个文件的集合
*/
declare class Explorer {
    /**
     * 文件列表
    */
    files: FileHandle[];
    /**
     * 用于显示文件列表的div容器的编号
    */
    divId: string;
    /**
     * div容器对象
    */
    container: HTMLDivElement;
    constructor(div: HTMLDivElement, files: FileHandle[]);
    /**
     * 将文件显示在html用户界面之上
     *
     * @param divId 文件浏览器将会显示在这个div之中
     * @param icons 将文件的mime type转换为大分类的映射数组
    */
    static show(divId: string, files: bioCADFile[], icons?: Map<string, bioClassType>[]): Explorer;
    /**
     * 加载script标签之中的json数据然后解析为所需要的映射关系
    */
    static getFaMaps(idClassTypes: string): Map<string, bioClassType>[];
    /**
     * 加载script标签之中的json数据然后解析为文件数据模型
    */
    static getFiles(idFiles: string, idClassTypes: string): bioCADFile[];
}
/**
 * 将文件呈现给用户的UI代码部分
*/
declare class FileHandle {
    divId: string;
    /**
     * 目标文件的数据模型对象
    */
    file: bioCADFile;
    div: HTMLDivElement;
    /**
     * ``[svg, color]``
    */
    mimeIcon: string[];
    readonly fileId: string;
    constructor(file: bioCADFile, icon: string[]);
    static classNames: string[];
    private footer();
    private actionButtons();
    /**
     * @returns UI html string
    */
    toString(): string;
}
declare namespace DisplayAdapters {
    abstract class IDisplay {
        /**
         * Show on a specific div element
         *
         * @param div The id of the div element
         * @param file 需要进行显示的文件的网络资源URL
        */
        abstract show(div: string, file: string): void;
    }
}
declare namespace DisplayAdapters {
    /**
     * 不适合显示超大的fasta序列文件
    */
    class Fasta extends IDisplay {
        colors: Dictionary<string>;
        show(div: string, file: string): void;
        /**
         * 将颜色配置数据转换为用于支持颜色高亮的CSS样式
        */
        private colorCSS();
        /**
         * 将fasta数据模型对象转换为对每一个符号进行颜色高亮的html代码
        */
        private renderOne(fa);
        static NuclFasta(): Fasta;
        static ProtColors(): Fasta;
    }
}
declare namespace DisplayAdapters {
    /**
     * 在div之中显示图像
    */
    class Image extends IDisplay {
        show(div: string, file: string): void;
    }
}
declare namespace DisplayAdapters {
    class Matrix extends IDisplay {
        show(div: string, file: string): void;
    }
}
declare namespace DisplayAdapters {
    /**
     * 读取文本文件然后显示出来
    */
    class Text extends IDisplay {
        show(div: string, file: string): void;
    }
}
declare module Browser {
    /**
     * Feature detection for drag&drop upload
    */
    function isAdvancedUpload(): boolean;
}
/**
 * 在这里进行自定义的成功以及失败事件的处理工作
*/
declare class EventHandler {
    /**
     * 上传开始的时间
    */
    ot: number;
    /**
     * 已经上传的文件大小
    */
    oloaded: number;
    onLoadStart(): void;
    private complete;
    private failed;
    constructor(complete: (xhr: XMLHttpRequest, event: Event) => any, failed: (xhr: XMLHttpRequest, event: ErrorEvent) => any);
    /**
     * 请求完成
    */
    UploadComplete(xhr: XMLHttpRequest, event: Event): any;
    /**
     * 请求失败
    */
    UploadFailed(xhr: XMLHttpRequest, event: ErrorEvent): any;
    /**
     * 【上传进度调用方法实现】
    */
    ProgressFunction(xhr: XMLHttpRequest, evt: ProgressEvent): any;
}
/**
 * 在这个模块之中处理HTML上传事件
*/
declare module UploadHandler {
    /**
     * @param inputId input html element id.
    */
    function upload(url: string, handler: EventHandler, inputId?: string): void;
}
declare module Uploader {
    function hasDroppedFiles(): boolean;
    function DroppedFiles(): FileList;
    /**
     * Applying the effect for every form
     *
     * @param divId 上传模块将会显示在这个div容器之中
     * @param api 这个url是数据上传的数据api url
     * @param upload 这个对象描述了如何处理上传过程之中的完成以及失败的事件
    */
    function Register(divId: string, api: string, upload: EventHandler): void;
}
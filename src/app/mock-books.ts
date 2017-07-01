import { Book } from "./book";

// for state
// 0: unread/recommand
// 1: to read
// 2: reading
// 3: read

export const BOOKS: Book[] = [
    { id: 0, name: "图解HTTP", star: 4, description: "172张图轻松入门HTTP协议：从基础知识到最新动向，一本书掌握HTTP协议。", state: 3, author: "上野宣" },
    { id: 1, name: "学习JavaScript数据结构和算法", star: 0, description: "本书介绍了JavaScript基础知识，然后讨论了数组、栈、队列、链表、集合等数据结构，还探讨各种排序和搜索算法及相关知识。", state: 2, author: "Loiane Groner" },
    { id: 2, name: "深入浅出NodeJS", star: 0, description: "本书从不同视角介绍了Node内在的特点和结构。", state: 1, author: "朴灵" },
    { id: 3, name: "程序员的思维修炼——开发认知潜能的九堂课", star: 0, description: "本书解释了为什么软件开发是一种精神活动，思考如何解决问题，并就开发人员如何能更好地开发软件进行了讨论。", state: 0, author: "Andy Hunt" },
    { id: 4, name: "JavaScript语言精粹", star: 5, description: "本书的目标是帮助你学习JavaScript的编程思想，展示这门语言的精华。", state: 3, author: "Douglas Crockford" },
    { id: 5, name: "JavaScript模式", star: 0, description: "本书包含了实现每个讨论的模式的实践建议，同时能学到一些反模式，常见的编程方式等。", state: 2, author: "Stoyan Stefanov" },
    { id: 6, name: "揭秘Angular2", star: 0, description: "作为一部系统讲解流行前端框架Angular2的权威著作，本书覆盖入门，进阶和实战三大主题。", state: 2, author: "广发证券互联网金融技术团队" }
];
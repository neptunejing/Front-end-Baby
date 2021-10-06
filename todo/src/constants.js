class Todo {
  constructor(time, desc, isDone = false) {
    this.time = time;
    this.desc = desc;
    this.isDone = isDone;
  }
}

const template = [
	new Todo('7:00', '起床'),
	new Todo('8:00', '吃饭'),
	new Todo('9:00', '打豆豆'),
	new Todo('10:00', '敲代码'),
];

export const initLists = [
	{
		title: 'Monday',
		list: template.slice(),
	},
	{
		title: 'Tuesday',
		list: template.slice(),
	},
	{
		title: 'Wednesday',
		list: template.slice(),
	},
];

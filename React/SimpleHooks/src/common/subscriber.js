export class Subscriber {
    constructor(sourceURL) {
        this.sourceURL = sourceURL;
        this.timer = null;
    }

    subscribe(callback) {
        // 模拟每 2.5s 推送新闻
        this.timer = setInterval(() => {
            let now = new Date(Date.now());
            let news = `${now.toLocaleTimeString()} from ${this.sourceURL}`;
            callback(news);
        }, 2500);
    }

    unsubscribe() {
        // 取消订阅
        clearInterval(this.timer);
        this.timer = null;
    }
}
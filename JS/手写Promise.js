class myPromise {
    constructor(fn) {
            // 三个状态
            this.state = 'pending'
            this.value = undefined
            this.reason = undefined
            let resolve = value => {
                if (this.state === 'pending') {
                    this.state = 'fulfilled'
                    this.value = value
                }
            }
            let reject = value => {
                    if (this.state === 'pending') {
                        this.state = 'rejected'
                        this.reason = value
                    }
                }
                // 自动执行函数
            try {
                fn(resolve, reject)
            } catch (e) {
                reject(e)
            }
        },
        // then
        then(onFulfilled, onRejected) {
            switch (this.state) {
                case 'fulfilled':
                    onFulfilled(this.value)
                    break
                case 'rejected':
                    onRejected(this.reason)
                    break
                default:
            }
        }
}
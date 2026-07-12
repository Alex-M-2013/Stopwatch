const timer = document.getElementById("timer")

let elapsed_time = 0
let start_time
let interval

function start() {
    clearInterval(interval)
    
    start_time = Date.now() - elapsed_time
    
    function update() {
        elapsed_time = Date.now() - start_time
        timer.innerHTML = format_time()
    }

    interval = setInterval(update, 1)
}

function stop() {
    clearInterval(interval)
}

function reset() {
    clearInterval(interval)
    timer.innerHTML = "00:00:00.00"
    elapsed_time = 0
}

function format_time() {
    const milliseconds = Math.floor((elapsed_time % 1000) / 10)
    const seconds = Math.floor((elapsed_time % (1000 * 60)) / 1000)
    const minutes = Math.floor((elapsed_time % (1000 * 60 * 60)) / (1000 * 60))
    const hours = Math.floor(elapsed_time / (1000 * 60 * 60))

    const ms = String(milliseconds).padStart(2, '0');
    const s = String(seconds).padStart(2, '0');    
    const m = String(minutes).padStart(2, '0');
    const h = String(hours).padStart(2, '0');
    
    return `${h}:${m}:${s}.${ms}`
}
$(document).ready(function () {
    $("#flashcall").submit(function () {
        // const requestURL = 'http://localhost/api/apps/flash/calls/flash'
        const requestURL = 'https://www.unibell.ru/api/apps/flash/calls/flash'

        const code = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
        var number = $('#flashcall input[name=phone]').val();
        $('#number').html(number);
        $('#code').html(code);
        number = number.replace(/\D/g, '');

        function sendRequest(method, url, body = null) {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest()

                xhr.open(method, url)

                xhr.responseType = 'json'
                xhr.setRequestHeader('Content-Type', 'application/json')
                xhr.setRequestHeader("Authorization", "AccessKey 2b6667e1e842fe794e7d65179a154026");

                xhr.onload = () => {
                    if (xhr.status >= 400) {
                        reject(xhr.response)
                    } else {
                        resolve(xhr.response)
                    }
                }

                xhr.onerror = () => {
                    reject(xhr.response)
                }

                xhr.send(JSON.stringify(body))
            })
        }

        sendRequest('POST', requestURL)
            .then(data => console.log(data))
            .catch(err => console.log(err))

        const body = {
            "number": number,
            "code": code
        }

        sendRequest('POST', requestURL, body)
            .then(data => console.log(data))
            .catch(err => console.log(err))

        $('.result .btn').prop('disabled', true);
        $('#flashcall').hide();
        $('.result').show();
        timer();
        return false;
    });

    function timer() {
        var timeoutHandle;

        function countdown(minutes, seconds) {
            function tick() {
                var counter = document.getElementById("timer");
                counter.innerHTML =
                    minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
                seconds--;
                if (seconds >= 0) {
                    timeoutHandle = setTimeout(tick, 1000);
                } else {
                    if (minutes >= 1) {
                        setTimeout(function () {
                            countdown(minutes - 1, 59);
                        }, 1000);
                    }
                }
            }
            tick();
        }
        countdown(0, 30);

        window.setTimeout(disabledFalse, 30000);

        function disabledFalse() {
            $('.result .btn').prop('disabled', false);
        }
    }
    $('.result .btn').click(function () {
        $(this).parent().prev().show();
        $('.result').hide();
    })

    // show ivr

    $("#show-ivr").submit(function () {
        // const requestURL = 'http://localhost/api/apps/activate'
        const requestURL = 'https://www.unibell.ru/api/apps/activate'

        var number = $('#show-ivr input[name=phone]').val();
        number = number.replace(/\D/g, '');

        function sendRequest(method, url, body = null) {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest()

                xhr.open(method, url)

                xhr.responseType = 'json'
                xhr.setRequestHeader('Content-Type', 'application/json')
                xhr.setRequestHeader("X-Authorization", "AccessKey 48359ff087ce3bec7640943fe08a4eab");

                xhr.onload = () => {
                    if (xhr.status >= 400) {
                        reject(xhr.response)
                    } else {
                        resolve(xhr.response)
                    }
                }

                xhr.onerror = () => {
                    reject(xhr.response)
                }

                xhr.send(JSON.stringify(body))
            })
        }

        sendRequest('POST', requestURL)
            .then(data => console.log(data))
            .catch(err => console.log(err))

        const body = {
            "reference": "1",
            "sourceAddr": "78002220480",
            "destAddr": number,
            "scenarioData": ""
        }
        console.log(body);
        sendRequest('POST', requestURL, body)
            .then(data => console.log(data))
            .catch(err => console.log(err))

        $('.result .btn').prop('disabled', true);
        $('#show-ivr').hide();
        $('.result').show();
        timer();
        return false;
    });

    // text-to-speach

    $("#text-speach").submit(function () {
        // const requestURL = 'http://localhost/api/apps/activate'
        const requestURL = 'https://www.unibell.ru/api/apps/activate'

        var number = $('#text-speach input[name=phone]').val();
        number = number.replace(/\D/g, '');
        var text = $('#text-speach textarea[name=message]').val();

        function sendRequest(method, url, body = null) {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest()

                xhr.open(method, url)

                xhr.responseType = 'json'
                xhr.setRequestHeader('Content-Type', 'application/json')
                xhr.setRequestHeader("X-Authorization", "AccessKey f7278016379d306b044fb9301b59327d");

                xhr.onload = () => {
                    if (xhr.status >= 400) {
                        reject(xhr.response)
                    } else {
                        resolve(xhr.response)
                    }
                }

                xhr.onerror = () => {
                    reject(xhr.response)
                }

                xhr.send(JSON.stringify(body))
            })
        }

        sendRequest('POST', requestURL)
            .then(data => console.log(data))
            .catch(err => console.log(err))

        const body = {
            "reference": "1",
            "sourceAddr": "78002220480",
            "destAddr": number,
            "scenarioData": "text=" + text
        }
        console.log(body);
        sendRequest('POST', requestURL, body)
            .then(data => console.log(data))
            .catch(err => console.log(err))

        $('.result .btn').prop('disabled', true);
        $('#text-speach').hide();
        $('.result').show();
        timer();
        return false;
    });

    $("#voice-password").submit(function () {
        // const requestURL = 'http://localhost/api/apps/activate'
        const requestURL = 'https://www.unibell.ru/api/apps/activate'

        const code = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
        var number = $('#voice-password input[name=phone]').val();
        $('#number').html(number);
        $('#code').html(code);
        number = number.replace(/\D/g, '');

        function sendRequest(method, url, body = null) {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest()

                xhr.open(method, url)

                xhr.responseType = 'json'
                xhr.setRequestHeader('Content-Type', 'application/json')
                xhr.setRequestHeader("X-Authorization", "AccessKey f7278016379d306b044fb9301b59327d");

                xhr.onload = () => {
                    if (xhr.status >= 400) {
                        reject(xhr.response)
                    } else {
                        resolve(xhr.response)
                    }
                }

                xhr.onerror = () => {
                    reject(xhr.response)
                }

                xhr.send(JSON.stringify(body))
            })
        }

        sendRequest('POST', requestURL)
            .then(data => console.log(data))
            .catch(err => console.log(err))

        const body = {
            "reference": "1",
            "destAddr": number,
            "sourceAddr": "78002220480",
            "scenarioData": "text=Ваш код:" + code
        }

        sendRequest('POST', requestURL, body)
            .then(data => console.log(data))
            .catch(err => console.log(err))

        $('.result .btn').prop('disabled', true);
        $('#voice-password').hide();
        $('.result').show();
        timer();
        return false;
    });

});


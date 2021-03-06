(function (window) {
    try{
        document.addEventListener("DOMContentLoaded", function (e) {
            const searchUI = document.querySelector(".searchUI")
            const addUI = document.querySelector(".form")
            var text = ''
            // window.speechSynthesis = null
            const container = document.querySelector('#tabContent')
            if(!location.hash){
                location.hash = "#search"
            }
            const label = document.querySelector(location.hash)
            const forName = label.getAttribute("for")
            const input = document.querySelector(`#${forName}`)
            input.setAttribute("checked", true)
            if (location.hash === "#add") {
                searchUI.classList.add("displayUI")
                addUI.classList.remove("displayUI")
                // container.innerHTML = addUI;
            } else {
                // container.innerHTML = searchUI;
                searchUI.classList.remove("displayUI")
                addUI.classList.add("displayUI")
            }
    
    
            document.querySelector("#search").addEventListener("click", function (e) {
                window.history.pushState({ a: 1 }, 'searchUI', '#search')
                // container.innerHTML = searchUI;
                searchUI.classList.remove("displayUI")
                addUI.classList.add("displayUI")
    
            })
            document.querySelector("#add").addEventListener("click", function (e) {
                window.history.pushState({ a: 1 }, 'addUI', '#add')
                // container.innerHTML = addUI;
                searchUI.classList.add("displayUI")
                addUI.classList.remove("displayUI")
            })
            const voicesDropdown = document.querySelector('[name="voice"]')
            let voices = [{ id: 0, name: "度小宇" }, { id: 1, name: "度小美" }, { id: 2, name: "度逍遥" }, { id: 3, name: "度丫丫" }]
            var synth = null, msg = null;
            if (!window.speechSynthesis) {
                synth = window.speechSynthesis
                msg = new SpeechSynthesisUtterance()
    
                synth.addEventListener('voiceschanged', getSupportVoices)
                function getSupportVoices() {
                    voices = synth.getVoices()
                    voices.forEach(function (e) {
                        const option = document.createElement('option')
                        option.value = e.lang
                        option.text = e.name
                        voicesDropdown.appendChild(option)
                    })
                }
            } else {
                voices.forEach(function (e) {
                    const option = document.createElement('option')
                    option.value = e.id
                    option.text = e.name
                    voicesDropdown.appendChild(option)
                })
            }
    
            const speakText = document.querySelector("#speakContent")
            const speakButton = document.querySelector("#play")
            const searchButton = document.querySelector("#search")
    
            const audio = new Audio();
            const source = document.createElement("source")
            source.setAttribute("type", "audio/mpeg")
            audio.appendChild(source)
            speakButton.addEventListener('click', throttle(handleSpeak, 1000))
            speakText.addEventListener("change", handleChange)
    
    
            function handleSpeak(e) {
                if (synth) {
                    msg.lang = voicesDropdown.selectedOptions[0].value
                    synth.speak(msg)
                } else {
                    source.setAttribute("src", "https://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=5&&text=" + text.trim());
                    audio.load();
                    audio.play();
                }
            }
    
            function handleChange(e) {
                if (synth) {
                    msg[this.name] = this.value
                } else {
                    text = this.value
                }
            }
            function throttle(fn, delay) {
                let last = 0
                return function () {
                    const now = new Date()
                    if (now - last > delay) {
                        fn.apply(this, arguments)
                        last = now
                    }
                }
            }
    
            /**
            * 文本框根据输入内容自适应高度
            * @param  {HTMLElement}   输入框元素
            * @param  {Number}        设置光标与输入框保持的距离(默认0)
            * @param  {Number}        设置最大高度(可选)
            */
            var autoTextarea = function (elem, extra, maxHeight) {
                extra = extra || 0;
                var isFirefox = !!document.getBoxObjectFor || 'mozInnerScreenX' in window,
                    isOpera = !!window.opera && !!window.opera.toString().indexOf('Opera'),
                    addEvent = function (type, callback) {
                        elem.addEventListener ?
                            elem.addEventListener(type, callback, false) :
                            elem.attachEvent('on' + type, callback);
                    },
                    getStyle = elem.currentStyle ? function (name) {
                        var val = elem.currentStyle[name];
    
                        if (name === 'height' && val.search(/px/i) !== 1) {
                            var rect = elem.getBoundingClientRect();
                            return rect.bottom - rect.top -
                                parseFloat(getStyle('paddingTop')) -
                                parseFloat(getStyle('paddingBottom')) + 'px';
                        };
    
                        return val;
                    } : function (name) {
                        return getComputedStyle(elem, null)[name];
                    },
                    minHeight = parseFloat(getStyle('height'));
    
                elem.style.resize = 'none';
    
                var change = function () {
                    var scrollTop, height,
                        padding = 0,
                        style = elem.style;
    
                    if (elem._length === elem.value.length) return;
                    elem._length = elem.value.length;
    
                    if (!isFirefox && !isOpera) {
                        padding = parseInt(getStyle('paddingTop')) + parseInt(getStyle('paddingBottom'));
                    };
                    scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    
                    elem.style.height = minHeight + 'px';
                    if (elem.scrollHeight > minHeight) {
                        if (maxHeight && elem.scrollHeight > maxHeight) {
                            height = maxHeight - padding;
                            style.overflowY = 'auto';
                        } else {
                            height = elem.scrollHeight - padding;
                            style.overflowY = 'hidden';
                        };
                        style.height = height + extra + 'px';
                        scrollTop += parseInt(style.height) - elem.currHeight;
                        document.body.scrollTop = scrollTop;
                        document.documentElement.scrollTop = scrollTop;
                        elem.currHeight = parseInt(style.height);
                    };
                };
    
                addEvent('propertychange', change);
                addEvent('input', change);
                addEvent('focus', change);
                change();
            };
    
            autoTextarea(speakText);// 调用
            searchButton.addEventListener('click', handleSearch);
    
            function handleSearch(e) {
    
            }
    
            const submit = document.querySelector("#submit")
            submit.addEventListener('click', function(e){
                var obj = {};
                var word = document.querySelector("#word").value.trim();
                var pronunce = document.querySelector("#pronunce").value.trim();
                var translate = document.querySelector("#translate").value.trim();
                obj = {
                    word,
                    pronunce,
                    translate
                }
                alert(JSON.stringify(obj))
            })
    
        })
    }catch(e){
        alert(e)
    }
})(window)
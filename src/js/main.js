(function (window) {
try {
    

    const text = '测试文字'
    // const testAudio = new Audio()
    // alert(testAudio)
    // testAudio.muted = false
    // var audio = document.createElement('audio');
    // audio.setAttribute('id', 'audio');
    // audio.setAttribute('autoplay', 'autoplay');
    // audio.setAttribute('loop', 'loop');
    // audio.innerHTML = '<source src="https://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=5&&text=你好" type="audio/mpeg">';
    // audio.setAttribute("src", 'https://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=5&&text=' + text)
    //将audio节点追加到dom
    // document.body.appendChild(audio);
    // audio.load();
    
	//iOS Safari可能是出于防止骚扰用户的考虑，首次非用户触发的play不会生效
    // audio.play();

    // const synth = window.speechSynthesis
    // const msg = new SpeechSynthesisUtterance()
    // let voices = []
    // const speakText = document.querySelector("#speakContent");
    // const voicesDropdown = document.querySelector('[name="voice"]')
    // // const options = document.querySelectorAll('[type="range"], [name="text"]')
    const speakButton = document.querySelector("#play")
    // const searchButton = document.querySelector("#search")


    speakButton.addEventListener('click', handleSpeak)
    // speakText.addEventListener("change", handleChange)
    // synth.addEventListener('voiceschanged', getSupportVoices)
    // function getSupportVoices() {
    //     voices = synth.getVoices()
    //     voices.forEach(function (e) {
    //         const option = document.createElement('option')
    //         option.value = e.lang
    //         option.text = e.name
    //         if(e.lang === ""){}
    //         voicesDropdown.appendChild(option)
    //     })
    // }

    function handleSpeak(e) {
        // msg.lang = voicesDropdown.selectedOptions[0].value
        // synth.speak(msg)
        // alert("sadfa")
        // testAudio.load();
        // testAudio.play()
        // document.getElementById("play1").muted = false
        document.getElementById("play1").load();
        document.getElementById("play1").play();
        // alert("sadfasdasdasd")
    }

    document.addEventListener("touchstart", handleSpeak)

    // function handleChange(e) {
    //     msg[this.name] = this.value
    // }
    function throttle(fn, delay) {
        let last = 0
        return function () {
            const now = new Date()
            if (now - last > delay) {
                fn.apply(this, arguments)
                last = now
            }
        }
    }}
    catch(e){
        alert(e)
    }

    // /**
    // * 文本框根据输入内容自适应高度
    // * @param  {HTMLElement}   输入框元素
    // * @param  {Number}        设置光标与输入框保持的距离(默认0)
    // * @param  {Number}        设置最大高度(可选)
    // */
    // var autoTextarea = function (elem, extra, maxHeight) {
    //     extra = extra || 0;
    //     var isFirefox = !!document.getBoxObjectFor || 'mozInnerScreenX' in window,
    //         isOpera = !!window.opera && !!window.opera.toString().indexOf('Opera'),
    //         addEvent = function (type, callback) {
    //             elem.addEventListener ?
    //                 elem.addEventListener(type, callback, false) :
    //                 elem.attachEvent('on' + type, callback);
    //         },
    //         getStyle = elem.currentStyle ? function (name) {
    //             var val = elem.currentStyle[name];

    //             if (name === 'height' && val.search(/px/i) !== 1) {
    //                 var rect = elem.getBoundingClientRect();
    //                 return rect.bottom - rect.top -
    //                     parseFloat(getStyle('paddingTop')) -
    //                     parseFloat(getStyle('paddingBottom')) + 'px';
    //             };

    //             return val;
    //         } : function (name) {
    //             return getComputedStyle(elem, null)[name];
    //         },
    //         minHeight = parseFloat(getStyle('height'));

    //     elem.style.resize = 'none';

    //     var change = function () {
    //         var scrollTop, height,
    //             padding = 0,
    //             style = elem.style;

    //         if (elem._length === elem.value.length) return;
    //         elem._length = elem.value.length;

    //         if (!isFirefox && !isOpera) {
    //             padding = parseInt(getStyle('paddingTop')) + parseInt(getStyle('paddingBottom'));
    //         };
    //         scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

    //         elem.style.height = minHeight + 'px';
    //         if (elem.scrollHeight > minHeight) {
    //             if (maxHeight && elem.scrollHeight > maxHeight) {
    //                 height = maxHeight - padding;
    //                 style.overflowY = 'auto';
    //             } else {
    //                 height = elem.scrollHeight - padding;
    //                 style.overflowY = 'hidden';
    //             };
    //             style.height = height + extra + 'px';
    //             scrollTop += parseInt(style.height) - elem.currHeight;
    //             document.body.scrollTop = scrollTop;
    //             document.documentElement.scrollTop = scrollTop;
    //             elem.currHeight = parseInt(style.height);
    //         };
    //     };

    //     addEvent('propertychange', change);
    //     addEvent('input', change);
    //     addEvent('focus', change);
    //     change();
    // };

    // autoTextarea(speakText);// 调用
    // searchButton.addEventListener('click', handleSearch);

    // function handleSearch(e) {

    // }

})(window)
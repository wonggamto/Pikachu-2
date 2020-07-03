const string =   `.skin * {box-sizing: border-box;margin: 0;padding: 0;}
    
    .skin *::before, .skin *::after {box-sizing: border-box;}
    
    
    .skin {
        background: #fae234;
        position: relative;
        min-height: 50vh;
    }
    
    .nose {
        border: 10px solid black;
        border-color: black transparent transparent;
        border-bottom: none;
        width: 0px;
        height: 0px;
        position: relative;
        left: 50%;
        top: 150px;
        margin-left: -10px;
        z-index: 10;
    }
    
    .circle {
        /* border: 1px solid black; */
        position: absolute;
        width: 20px;
        height: 6px;
        top: -16px;
        left: -10px;
        border-radius: 10px 10px 0 0;
        background: black;
    }
    
    .eye {
        border: 2px solid black;
        width: 64px;
        height: 64px;
        left: 50%;
        top: 100px;
        margin-left: -32px;
        position: absolute;
        background: #2e2e2e;
        border-radius: 50%;
    }
    
    .eye::before {
        content: '';
        display: block;
        position: relative;
        border: 3px solid #000;
        width: 25px;
        height: 25px;
        background: #fff;
        border-radius: 50%;
        left: 8px;
        top: 2px;
    }
    
    .eye.left {
        transform: translateX(-100px);
    }
    
    .eye.right {
        transform: translateX(100px);
    }
    
    .mouth {
        /* border: 1px solid red; */
        width: 200px;
        height: 200px;
        position: absolute;
        left: 50%;
        top: 175px;
        margin-left: -100px;
    }
    
    .mouth .up {
        position: relative;
        top: -20px;
    }
    
    .mouth .up .lip {
        border: 3px solid black;
        height: 30px;
        width: 100px;
        border-top-color: transparent;
        border-right-color: transparent;
        position: absolute;
        left: 50%;
        margin-left: -50px;
        z-index: 1;
        background: #fae234;
    }
    
    .mouth .up .lip.left {
        border-radius: 0 0 0 50px;
        transform: rotate(-22deg) translateX(-53px);
    }
    
    .mouth .up .lip::before {
        content: '';
        display: block;
        width: 7px;
        height: 30px;
        /* border: 1px solid green; */
        position: absolute;
        bottom: 0;
        background: #fae234;
    }
    
    .mouth .up .lip.left::before {
        right: -6px;
    }
    
    .mouth .up .lip.right {
        border-radius: 0 0 50px 0;
        transform: rotate(22deg) translateX(56px);
    }
    
    .mouth .up .lip.right::before {
        left: -6px;
    }
    
    .mouth .down {
        /* border: 3px solid red; */
        height: 180px;
        position: absolute;
        top: 10px;
        width: 100%;
        overflow: hidden;
    }
    
    .mouth .down .circle1 {
        border: 3px solid black;
        width: 150px;
        left: 50%;
        margin-left: -75px;
        position: absolute;
        bottom: 0;
        height: 1000px;
        border-radius: 75px / 300px;
        background: #831d12;
        overflow: hidden;
    }
    
    .mouth .down .circle2 {
        /* border: 1px solid green; */
        height: 300px;
        width: 200px;
        position: absolute;
        bottom: -155px;
        background: #ea5156;
        left: 50%;
        margin-left: -100px;
        border-radius: 100px;
    }
    
    .face {
        position: absolute;
        left: 50%;
        border: 3px solid black;
        width: 88px;
        height: 88px;
        top: 200px;
        margin-left: -44px;
        z-index: 3;
    }
    
    .face>img {
        /* border: 1px solid red; */
        position: absolute;
        top: 50%;
        left: 50%;
    }
    
    .face.left>img {
        transform-origin: 0 0;
        transform: rotateY(180deg);
    }
    
    .face.left {
        transform: translateX(-180px);
        border-radius: 50%;
        background: #e83217;
    }
    
    .face.right {
        transform: translateX(180px);
        border-radius: 50%;
        background: #e83217;
    }
    
    @keyframes wave {
        0% {
            transform: rotate(0deg);
    }
        33% {
            transform: rotate(3deg);
    }
        66% {
            transform: rotate(-3deg);
    }
        100% {
            transform: rotate(0deg);
    }
    }
    
    .nose:hover {
        transform-origin: 50% 100%;
        animation: wave .3s infinite linear;
    }
    
    `
export default string
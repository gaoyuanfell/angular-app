//图片压缩
async function compressImg(blob, config?: any) {
    config = config || {
            wh: 200,
            quality: 1,
            type: blob.type || 'image/jpeg'
        }
    let $canvas = document.createElement("canvas");
    $canvas.style.display = 'none';
    document.body.appendChild($canvas);
    config.start && config.start();
    let result = await readBlobAsDataURL(blob);
    let bold = await canvasToImg($canvas, result, config);
    config.end && config.end();
    document.body.removeChild($canvas);
    return bold;
}

export function readBlobAsDataURL(blob) {
    return new Promise((resolve, reject) => {
        let a = new FileReader();
        a.onload = function (e: any) {
            resolve(e.target.result)
        };
        a.readAsDataURL(blob);
    })
}

function canvasToImg($canvas, result, config) {
    let canvas = $canvas.getContext('2d');
    let img = new Image();
    return new Promise((resolve, reject) => {
        img.onload = function () {
            let width = img.width;
            let height = img.height;
            $canvas.width = config.wh;
            $canvas.height = config.wh;
            if (width > height) {
                let w = width / (height / config.wh);
                canvas.drawImage(img, 0, 0, width, height, -(w - config.wh) / 2, 0, w, config.wh);
            } else {
                let h = height / (width / config.wh);
                canvas.drawImage(img, 0, 0, width, height, 0, -(h - config.wh) / 2, config.wh, h);
            }
            let bold = dataURLtoBlob($canvas.toDataURL(config.type, config.quality));
            resolve && resolve(bold);
        };
        img.src = result;
    })
}

function dataURLtoBlob(dataurl) {
    let arr = dataurl.split(',');
    let mime = arr[0].match(/:(.*?);/)[1];
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {
        type: mime
    });
}

export default compressImg;

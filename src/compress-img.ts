//图片压缩
export interface compressConfig {
    w?: number;
    h?: number;
    sw?: number;
    sh?: number;
    dx?: number;
    dy?: number;
    quality?: number;
    type?: string;
    rotate?: 0 | 1 | 2 | 3;
    start?: Function;
    end?: Function;
}

export async function compressImg(blob, config?: compressConfig) {
    config = config || {
            w: 1080,
            h: 1080,
            sw: 0,
            sh: 0,
            dx: 0,
            dy: 0,
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

export function readBlobAsDataURL(blob):any {
    return new Promise((resolve, reject) => {
        let a = new FileReader();
        a.onload = function (e: any) {
            resolve(e.target.result)
        };
        a.readAsDataURL(blob);
    })
}

function canvasToImg($canvas, result, config: compressConfig):Promise<Blob> {
    let canvas = $canvas.getContext('2d');
    let img = new Image();
    return new Promise((resolve, reject) => {
        img.onload = function () {
            let width = img.width;
            let height = img.height;
            $canvas.width = config.w;
            $canvas.height = config.h;
            let isRotate = false;
            if (config.rotate) {
                isRotate = true;
                canvas.save();
                canvas.translate(config.w / 2, config.h / 2);
                canvas.rotate(config.rotate * 90 * Math.PI / 180);
            }
            if (width > height) {
                let w = width / (height / config.h);
                let dx = -(w - config.w) / 2;
                let dy = 0;
                if (isRotate) {
                    dx += -config.w / 2;
                    dy += -config.h / 2;
                }
                canvas.drawImage(img, 0, 0, width, height, dx, dy, w, config.h);
            } else {
                let h = height / (width / config.w);
                let dx = 0;
                let dy = -(h - config.h) / 2;
                if (isRotate) {
                    dx += -config.w / 2;
                    dy += -config.h / 2;
                }
                canvas.drawImage(img, 0, 0, width, height, dx, dy, config.w, h);
            }
            canvas.restore();
            let bold = dataURLtoBlob($canvas.toDataURL(config.type, config.quality));
            resolve && resolve(bold);
        };
        img.src = result;
    })
}

export function imgOption(url:string | Blob):Promise<HTMLImageElement>{
    return new Promise((resolve, reject) => {
        let img = new Image();
        if(url instanceof Blob){
            img.src = URL.createObjectURL(url)
        }else{
            img.src = url;
        }
        img.onload = function () {
            resolve(img)
        }
    })
}

export function dataURLtoBlob(dataurl) {
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

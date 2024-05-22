const url =
  "https://mars-dev-persistent.oss-cn-hangzhou.aliyuncs.com/mars-file/660410797238878209/91f9af2b-bf34-48c8-84f5-1648430b7ca6/1707118208382apple1.jpeg";

const image2Base64 = (url) =>
  new Promise((resolve, reject) => {
    if (!url) {
      resolve("");
      return;
    }
    const img = new Image();
    img.crossOrigin = "anonymous";

    img.src = url;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(img, 0, 0);
      const data = canvas.toDataURL();

      resolve(data);
    };
    img.onerror = () => {
      reject("");
    };
  });

image2Base64(url).then((res) => {
  console.log(res);
});

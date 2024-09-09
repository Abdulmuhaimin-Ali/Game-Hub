// Date: 03/08/2021
// Description: Service for cropping image url
// Optimizing images for the web is a common practice to improve the performance of a website.
const getCroppedImage = (url: string) => {
  const target = "media/";

  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImage;

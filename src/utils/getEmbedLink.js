export default function getEmbedLink(link) {
  if (link.indexOf('youtube.com/watch?v=') !== -1) {
    let videoId = link.split('youtube.com/watch?v=')[1].substring(0, 11);
    return `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0`;
  } else if (link.indexOf('youtu.be/') !== -1) {
    let videoId = link.split('youtu.be/')[1].substring(0, 11);
    return `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0`;
  } else {
    return `https://www.youtube.com/embed/${link}?modestbranding=1&rel=0`;
  }
}

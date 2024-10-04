import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const MyImageGallery = () => {
  const images = [
    { original: 'https://via.placeholder.com/600x400?text=Image+1', thumbnail: 'https://via.placeholder.com/150x100?text=Image+1' },
    { original: 'https://via.placeholder.com/600x400?text=Image+2', thumbnail: 'https://via.placeholder.com/150x100?text=Image+2' },
    { original: 'https://via.placeholder.com/600x400?text=Image+3', thumbnail: 'https://via.placeholder.com/150x100?text=Image+3' },
    { original: 'https://via.placeholder.com/600x400?text=Image+4', thumbnail: 'https://via.placeholder.com/150x100?text=Image+4' },
  ];

  return <ImageGallery items={images} />;
};

export default MyImageGallery;


'use client';

import React, { useEffect, useState } from 'react';
import { getDownloadURL, ref } from 'firebase/storage';

import Image from 'next/image';
import { storage } from '@/lib/utils/firebase';

export default function FirebaseImage({ path, alt = 'Image', width = 922, height = 816 }) {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const storageRef = ref(storage, path);
        const downloadUrl = await getDownloadURL(storageRef);
        setUrl(downloadUrl);
      } catch (error) {
        console.error('Erreur de chargement Firebase image:', error);
      }
    };

    fetchUrl();
  }, [path]);

  if (!url) {
    return <p>Chargement de l’image...</p>;
  }

  return (
    <Image
      src={url}
      alt={alt}
      width={width}
      height={height}
      className="w-full object-cover"
    />
  );
}

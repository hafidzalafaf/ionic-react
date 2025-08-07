import { useState, useEffect } from 'react';
import { isPlatform } from '@ionic/react';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';


export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

const PHOTO_STORAGE = 'photos';

export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

  const takePhoto = async () => {
    try{
      const photo = await Camera.getPhoto({
        quality: 100,
        resultType: CameraResultType.Uri,
          source: CameraSource.Camera,
      });

      const fileName = Date.now() + '.jpeg';
      const savedFileImage = await savePicture(photo, fileName);
      const newPhotos = [savedFileImage, ...photos];
      setPhotos(newPhotos);
      Preferences.set({
        key: PHOTO_STORAGE,
        value: JSON.stringify(newPhotos)
      });
      console.log('Saved photos:', newPhotos);
    } catch (error) {
      console.error('Error taking photo:', error);
    }
  };

  const savePicture = async(photo : Photo, fileName: string): Promise<UserPhoto> => {
    let base64Data: string | Blob;

    if (isPlatform('hybrid')) {
      const file = await Filesystem.readFile({ path: photo.path! });
      base64Data = file.data;
    } else {
      base64Data = await base64FromPath(photo.webPath!);
    }

    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    })

    if (isPlatform('hybrid')) {
      return {
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri)
      };
    } else {
      return {
        filepath: fileName,
        webviewPath: photo.webPath
      };
    }
  }

  const base64FromPath = async (path: string): Promise<string> => {
    const response = await fetch(path);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        if(typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject(new Error('FileReader result is not a string'));
        }
      }
      reader.readAsDataURL(blob);
    });
  }


  const loadSaved = async () => {
    const {value} = await Preferences.get({key: PHOTO_STORAGE})
    const photosInPreferences = (value ? JSON.parse(value) : []) as UserPhoto[];

    if(!isPlatform('hybrid')) {
      for (let photo of photosInPreferences) {
        const file = await Filesystem.readFile({
          path: photo.filepath,
          directory: Directory.Data
        })
        photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
      }
    }
    setPhotos(photosInPreferences);
  }

  useEffect(() => {
    loadSaved()
  },[])


  return {
    photos,
    takePhoto, 
  };
}
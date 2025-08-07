import { IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonPage, IonRow, useIonViewDidEnter, useIonViewDidLeave, useIonViewWillEnter, useIonViewWillLeave } from '@ionic/react';
import { useAppSelector } from '../store';
import { selectThemeMode } from '../store/features';
import { camera } from 'ionicons/icons';
import { usePhotoGallery } from '../hooks';


const Tab1: React.FC = () => {
  const { takePhoto, photos } = usePhotoGallery();
  const themeMode = useAppSelector(selectThemeMode);
  console.log('Current theme mode:', themeMode);
  
  // This hook runs when the view is entered
  useIonViewDidEnter(() => {
    console.log('Tab 1 view entered');
  })

  useIonViewWillEnter(() => {
    console.log('Tab 1 view will enter');
  });

  useIonViewDidLeave(() => {
    console.log('Tab 1 view leave');
  });

  useIonViewWillLeave(() => {
    console.log('Tab 1 view will leave');
  });

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="flex justify-center h-full w-full bg-white bg-opacity-90 px-4 py-6">
          <div className="bg-white p-4 rounded-xl shadow-md w-full ">
            <div className="flex justify-between gap-4 items-center">
              <div className="">
                <p className='font-medium text-xl text-[#2D3748]'>Our Gallery </p>
                <p className='text-[#A0AEC0] text-xs mt-2'>Explore our curated collection of beautiful moments — captured with heart, crafted with purpose.</p>
              </div>
              <div className="">
                <button className='bg-blue-300 rounded-full size-10 items-center justify-center' onClick={() => takePhoto()}>
                  <IonIcon className='mt-1' icon={camera}></IonIcon>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4">
              {photos.map((photo, index) => (
                  <div key={index} className="w-full rounded-xl hover:shadow-lg transition-shadow duration-300 h-40 overflow-hidden">
                  <img src={photo.webviewPath} alt="Google" className="w-full h-40 object-cover object-center" />
                </div>
                ))}
            </div>
  
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

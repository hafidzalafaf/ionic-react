import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, useIonViewDidLeave, useIonViewWillEnter, useIonViewWillLeave } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  
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
      <IonHeader>
        <div className="w-full bg-[#14A0B9] px-4 py-4">
          <h6 className='text-white font-medium text-xl'>Crypto Gadai</h6>
        </div>
      </IonHeader>
      <IonContent fullscreen>
        <div className="flex justify-center h-screen w-full bg-white bg-opacity-90 px-4 py-6">
          <div className="bg-white p-4 rounded-xl shadow-md w-full ">
            <p className='text-medium text-base text-[#2D3748]'>Sign Up </p>
            <p className='text-[#A0AEC0] text-xs mt-2'>Get full access by ioining Crypto Gadai now and enjoy with ease and convenience</p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

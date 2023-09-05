//? LIBRARY
import SVG from '../../../public/assets/svgs';
import { Toaster } from 'react-hot-toast';
//? APPS
import { RootState } from '../../app/store';
import { useAppSelector } from '../../hooks/hooks';
import { Footer, Header, Chat } from '../../containers';
import useAuth from '../../hooks/userAuth';

export default function DefaultLayout({ children }: any) {
  useAuth();
  const { heart } = useAppSelector((state: RootState) => state.others);
  return (
    <div className="overflow-hidden">
      <Toaster position="top-right" reverseOrder={false} />
      {heart && (
        <div className="fixed z-[100000] flex items-center justify-center animate-[heart_2s_ease_0s_1_normal_forwards] inset-0">
          {SVG.HEART}
        </div>
      )}
      <Header />
      {children}
      <Chat />
      <Footer />
    </div>
  );
}

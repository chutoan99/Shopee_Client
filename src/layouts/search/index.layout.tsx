//? APPS
import SVG from '../../../public/assets/svgs';
import { RootState } from '../../app/store';
import { Footer, Header, Chat } from '../../containers';
import { useAppSelector } from '../../hooks/hooks';
import useAuth from '../../hooks/userAuth';
import { Toaster } from 'react-hot-toast';

export default function SearchLayout({ children }: any) {
  useAuth();
  const { heart } = useAppSelector((state: RootState) => state.others);
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      {heart && (
        <div className="fixed z-[100000] flex items-center justify-center animate-[heart_2s_ease_0s_1_normal_forwards] inset-0">
          {SVG.HEART}
        </div>
      )}
      <Header />
      <div className="mt-[120px]">
        <div className="bg-[#f5f5f5] overflow-hidden py-[24px]">
          <div className="grid wide">{children}</div>
        </div>
      </div>
      <Chat />
      <Footer />
    </>
  );
}

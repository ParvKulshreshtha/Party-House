"use client";
import Link from 'next/link';
import { FC, useState } from 'react';
import { BiParty } from 'react-icons/bi';
import { FaHamburger } from "react-icons/fa";
import DialogTemplate from './DialogTemplate';
import { GiIndiaGate } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Location, selectLocation } from '@/redux/globalSlice';

const locations: Location[] = [
  { city: "Delhi", code: "del" },
  { city: "Mumbai", code: "mmb" },
  { city: "Bengalore", code: "blr" },
  { city: "Gurugram", code: "ggn" },
];

const Navbar: FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setShowMenu(prevShow => !prevShow);
  };

  // const dispatch = useDispatch();
  const location: Location = useSelector((state: RootState) => state.global.location);

  // console.log(location);

  return (
    <nav className="bg-deeppurple p-4 sticky top-0">
      <div className="container mx-auto flex justify-between items-center lg:px-32 px-4">
        <Link href="/">
          <div className="text-white hover:text-accentyellow text-4xl font-bold">
            <BiParty />
          </div>
        </Link>

        <LocationModal location={location} />

        <div className="hidden md:flex space-x-8 font-bold">
          <Link href="/plan-your-party">
            <span className="text-white hover:text-accentyellow">Plan Your Party</span>
          </Link>
          <Link href="/explore-party-services">
            <span className="text-white hover:text-accentyellow">Explore Party Services</span>
          </Link>
          <Link href="/register-party-business">
            <span className="text-white hover:text-accentyellow">Register as Party Business</span>
          </Link>
        </div>

        {/* Mobile Menu Hamburger Icon */}
        <div className="md:hidden text-4xl">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <FaHamburger />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden mt-8">
          <div className="flex flex-col space-y-2">
            <Link href="/plan-your-party">
              <span className="block text-white hover:text-yellow-300">Plan Your Party</span>
            </Link>
            <Link href="/explore-party-services">
              <span className="block text-white hover:text-yellow-300">Explore Party Services</span>
            </Link>
            <Link href="/register-party-business">
              <span className="block text-white hover:text-yellow-300">Register as Party Business</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

interface LocationModalProps {
  location: Location;
}

const LocationModal: FC<LocationModalProps> = ({ location }) => {
  const [open,setOpen] = useState(false)
  const dispatch = useDispatch();

  return (
    <DialogTemplate
      trigger={<button onClick={()=>setOpen(true)} className="bg-accentyellow text-deeppurple font-bold py-2 px-4 rounded hover:bg-yellow-300 transition duration-300 flex">
        <GiIndiaGate className="text-2xl text-deeppurple" />
        {location?.code ? location.city : "Select Location"}
      </button>}
      open={open}
    >
      <div className="flex flex-col space-y-4">
        {locations?.map((city) => (
          <div key={city.code} onClick={() => {
            dispatch(selectLocation(city))
            setOpen(false)
          }} className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md shadow hover:bg-gray-200 transition">
            <GiIndiaGate className="text-2xl text-deeppurple" />
            <div className="font-semibold text-lg">{city.city}</div>
          </div>
        ))}
      </div>
    </DialogTemplate>
  );
};

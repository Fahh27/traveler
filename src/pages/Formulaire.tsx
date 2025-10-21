// import { useLocation } from 'react-router-dom';
import Logo from "../assets/traveler-nobg.png";
import DateComponent from '../components/date';
import NameComponent from '../components/name';
import TravelComponent from '../components/travel';
import Retour from '../components/retour';
import Send from '../components/send';
import EmailComponent from "../components/email";
import TelephoneComponent from "../components/telephone";

function Formulaire () {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-200 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-50 bg-white rounded-full shadow-lg mb-4">
            <img src={Logo}  />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Réservez Votre Voyage</h1>
          <p className="text-blue-50 text-lg">Remplissez le formulaire pour démarrer votre aventure</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="space-y-6">
            <NameComponent />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <EmailComponent />

              <TelephoneComponent />

            </div>

            <TravelComponent />

            <DateComponent />

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Retour />
              
              <Send />

            </div>

          </div>

        </div>

        <p className="text-center text-white text-sm mt-6">
          * Tous les champs sont obligatoires
        </p>
      </div>
    </div>
  );
}

export default Formulaire;
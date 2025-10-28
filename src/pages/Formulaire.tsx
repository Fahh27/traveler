import React, { useState } from "react";
import Logo from "../assets/traveler-nobg.png";
import Field from "../components/champ";
import Date from "../components/date";
import Retour from "../components/retour"
import { Hotel, Mail, MapPin, Phone, Plane, Send, UserPen } from "lucide-react";
import Swal from "sweetalert2";
import "../components/popup"

interface FormData {
  nom: string; prenom: string; email: string; telephone: string;
  destination: string; hotel: string; compagnie: string; room: string;
  dateDebut: string; dateFin: string;
}

function Formulaire () {
  const [formData, setFormData] = useState<FormData>({
    nom: '', prenom: '', email: '', telephone: '', destination: '', hotel: '',
    compagnie: '', room: 'standard', dateDebut: '', dateFin: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleSubmit = () => {
    if (!formData.nom || !formData.prenom || !formData.email || !formData.telephone ||
      !formData.destination || !formData.hotel || !formData.compagnie || !formData.room ||
      !formData.dateDebut || !formData.dateFin) {
        return (
        Swal.fire({
          position: "top",
          icon: "warning",
          iconColor: "#ffff",
          text: "Veuillez remplir tous les champs obligatoires",
          confirmButtonText: "OK",
          customClass: {
            popup: "custom-popup",
            confirmButton: "custom-confirm-button"
          }
        })
      );
      }
      console.log("Données du formulaire:", formData)
      Swal.fire({
        text: "Votre demande de résrvation à été envoyé avec succès !",
        icon: "success",
        iconColor: "#ffff",
        confirmButtonText: "OK",
        allowEscapeKey: false,
        allowOutsideClick: false,
        customClass: {
          popup: "custom-popup",
          text: "custom-text",
          confirmButton: "custom-confirm-button",
        }
      }).then ((result) => {
        if (result.isConfirmed) {
          window.history.back();
        }
      });
  };

  return(
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-200 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-50 bg-white rounded-full shadow-lg mb-4">
                      <img src={Logo}  />
                    </div>
          <h1 className="text-4xl font-bold text-white mb-2">Réservez votre voyage</h1>
          <p className="text-blue-50 text-lg">Remplissez le formulaire pour déémarer votre aventure</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Nom" icon={UserPen} id="nom" name="nom" value={formData.nom} onChange={handleChange} placeholder="Votre nom"/>
              <Field label="Prénom" icon={UserPen} id="prenom" name="prenom" value={formData.prenom} onChange={handleChange} placeholder="Votre prénom"/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="E-Mail" icon={Mail} id="email" name="email" value={formData.email} onChange={handleChange} placeholder="exemple@gamil.com"/>
              <Field label="Téléphone" icon={Phone} id="telephone" name="telephone" value={formData.telephone} onChange={handleChange} placeholder="+261 XX XXX XX" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Destination" icon={MapPin} id="destination" name="destination" value={formData.destination} onChange={handleChange} placeholder="Destination choisie"/>
              <Field label="Hôtel" icon={Hotel} id="hotel" name="hotel" value={formData.hotel} onChange={handleChange} placeholder="Hôtel choisi"/>
              <Field label="Compagnie aérienne" icon={Plane} id="compagnie" name="compagnie" value={formData.compagnie} onChange={handleChange} placeholder="Compagnie aérienne choisie"/>
            
              <div>
                <label htmlFor="room" className="block text-sm font-semibold text-gray-700 mb-2">Type de chambre *</label>
                <select name="room" id="room" value={formData.room} onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors">
                  <option value="standard">Standard</option>
                  <option value="superieur">Supérieur</option>
                  <option value="deluxe">Deluxe</option>
                  <option value="suite">Suite</option>
                  <option value="présidentielle">Présidentielle</option>
                  <option value="simple">Simple</option>
                  <option value="double">Double</option>
                  <option value="triple">Triple</option>
                  <option value="familiale">Familiale</option>
                  </select>
              </div>
            </div>

            <Date dateDebut={formData.dateDebut} dateFin={formData.dateFin} onChange={handleChange}/>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Retour />
              <button type="button" onClick={handleSubmit}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5"/> Envoyer
              </button>
            </div>
          </div>
        </div>
        
        <p className="text-center text-white text-sm mt-6">* Tous les champs obligatoires</p>
      </div>
    </div>
  );
}

export default Formulaire;
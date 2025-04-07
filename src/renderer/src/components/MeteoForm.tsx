import { useState } from 'react';

const MeteoForm = () => {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    rr: '',
    nf: '',
    ht: '',
    gel: false,
    rosee: false,
    tonnerre: false,
    grele: false,
    brouillard: false,
    neige: false,
    commentaire: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données soumises:', formData);
    // Ici, ajoutez le code pour sauvegarder les données
  };

  const handleReset = () => {
    setFormData({
      date: new Date().toISOString().split('T')[0],
      rr: '',
      nf: '',
      ht: '',
      gel: false,
      rosee: false,
      tonnerre: false,
      grele: false,
      brouillard: false,
      neige: false,
      commentaire: ''
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <form onSubmit={handleSubmit}>
        <div className="bg-white p-4 rounded-lg shadow mb-4">
          <div className="flex items-center">
            <label className="font-medium text-slate-800 mr-2">Date :</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md mr-2"
            />
            <button
              type="button"
              className="bg-blue-500 text-white p-2 rounded-md"
              onClick={() => setFormData({...formData, date: new Date().toISOString().split('T')[0]})}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold text-slate-800 mb-2 pb-2 border-b border-gray-300">Précipitations</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-800 mb-1">Hauteur de précipitations (RR):</label>
                <input
                  type="number"
                  step="0.1"
                  name="rr"
                  value={formData.rr}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-800 mb-1">Nombre de jour de gel (NF):</label>
                <input
                  type="number"
                  step="0.1"
                  name="nf"
                  value={formData.nf}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-800 mb-1">Hauteur totale de neige (HT):</label>
                <input
                  type="number"
                  step="0.1"
                  name="ht"
                  value={formData.ht}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold text-slate-800 mb-2 pb-2 border-b border-gray-300">Phénomènes</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center p-6">
                <input
                  type="checkbox"
                  id="tonnerre"
                  name="tonnerre"
                  checked={formData.tonnerre}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label htmlFor="tonnerre" className="ml-2 font-medium text-sm text-slate-800">Tonnerre</label>
              </div>
              <div className="flex items-center p-6">
                <input
                  type="checkbox"
                  id="grele"
                  name="grele"
                  checked={formData.grele}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label htmlFor="grele" className="ml-2 font-medium text-sm text-slate-800">Grêle</label>
              </div>
              <div className="flex items-center p-6">
                <input
                  type="checkbox"
                  id="brouillard"
                  name="brouillard"
                  checked={formData.brouillard}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label htmlFor="brouillard" className="ml-2 font-medium text-sm text-slate-800">Brouillard</label>
              </div>
              <div className="flex items-center p-6">
                <input
                  type="checkbox"
                  id="neige"
                  name="neige"
                  checked={formData.neige}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label htmlFor="neige" className="ml-2 font-medium text-sm text-slate-800">Neige</label>
              </div>
              <div className="flex items-center p-6">
                <input
                  type="checkbox"
                  id="gel"
                  name="gel"
                  checked={formData.gel}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label htmlFor="gel" className="ml-2 font-medium text-sm text-slate-800">Gel</label>
              </div>
              <div className="flex items-center p-6">
                <input
                  type="checkbox"
                  id="rosee"
                  name="rosee"
                  checked={formData.rosee}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label htmlFor="rosee" className="ml-2 font-medium text-sm text-slate-800">Rosée</label>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow mb-4">
          <h2 className="text-lg font-bold text-slate-800 pb-2">Commentaire</h2>
          <textarea
            name="commentaire"
            value={formData.commentaire}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Observations générales sur la journée..."
          />
        </div>

        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={handleReset}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md"
          >
            Effacer
          </button>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md"
          >
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
};

export default MeteoForm;

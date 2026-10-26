import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CalendarRange } from 'lucide-react';

const API_URL = 'http://localhost:5000/api/events';

const AddEvent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: '',
    venue: '',
    totalRegistrations: 0
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, formData);
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Error creating event.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
        <div className="bg-gradient-to-r from-slate-900 to-indigo-950 p-6 text-white flex items-center gap-3">
          <div className="p-2 bg-indigo-500/20 rounded-lg">
            <CalendarRange size={24} className="text-indigo-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Register New Event</h2>
            <p className="text-slate-400 text-xs">Fill out the fields below to create a new event dashboard item.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Event Name *</label>
            <input
              type="text"
              required
              placeholder="e.g., Annual Tech Symposium"
              className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Event Description *</label>
            <textarea
              required
              rows="4"
              placeholder="Provide a breakdown of the planned event."
              className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Event Date *</label>
              <input
                type="text"
                required
                placeholder="e.g., Nov 25, 2026"
                className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Venue *</label>
              <input
                type="text"
                required
                placeholder="e.g., Auditorium Hall C"
                className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.venue}
                onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Initial Registrations (Optional)</label>
            <input
              type="number"
              min="0"
              className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.totalRegistrations}
              onChange={(e) => setFormData({ ...formData, totalRegistrations: parseInt(e.target.value) || 0 })}
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="px-4 py-2.5 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-lg text-sm hover:bg-indigo-700 transition-colors shadow-sm"
            >
              Publish Event Entry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;

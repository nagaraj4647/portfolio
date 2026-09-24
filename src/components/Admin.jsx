import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { motion } from 'framer-motion';
import { projects as defaultProjects } from './Projects';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    id: '', title: '', category: 'Web Apps', tagline: '', description: '',
    tech: '', liveUrl: '', gradient: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
    glowColor: 'rgba(99,102,241,0.3)', accentColor: '#818cf8', icon: '💻', badge: '', highlights: ''
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'nagaraj4647') {
      setIsAuthenticated(true);
      fetchProjects();
    } else {
      alert('Incorrect Password');
    }
  };

  const fetchProjects = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('projects').select('*');
    if (error) {
      console.error('Error fetching projects:', error);
    } else {
      setProjects(data || []);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Parse arrays
    const projectToSave = {
      ...formData,
      id: formData.id || formData.title.toLowerCase().replace(/\s+/g, '-'),
      tech: formData.tech.split(',').map(t => t.trim()),
      highlights: formData.highlights.split('\n').filter(h => h.trim() !== '')
    };

    const { error } = await supabase.from('projects').upsert([projectToSave]);
    
    if (error) {
      alert('Error saving project: ' + error.message);
    } else {
      alert('Project saved successfully!');
      fetchProjects();
      setFormData({
        id: '', title: '', category: 'Web Apps', tagline: '', description: '',
        tech: '', liveUrl: '', gradient: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
        glowColor: 'rgba(99,102,241,0.3)', accentColor: '#818cf8', icon: '💻', badge: '', highlights: ''
      });
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      const { error } = await supabase.from('projects').delete().eq('id', id);
      if (error) {
        alert('Error deleting project');
      } else {
        fetchProjects();
      }
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#030308' }}>
        <form onSubmit={handleLogin} style={{ background: '#0a0a19', padding: '40px', borderRadius: '16px', border: '1px solid #1f1f38' }}>
          <h2 style={{ marginBottom: '20px', color: '#fff' }}>Admin Portal</h2>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '10px', width: '100%', marginBottom: '20px', borderRadius: '8px', background: '#131326', border: '1px solid #2a2a4a', color: '#fff' }}
          />
          <button type="submit" style={{ padding: '10px', width: '100%', background: '#6366f1', color: '#fff', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>Login</button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ padding: '100px 20px', minHeight: '100vh', background: '#030308', color: '#fff' }}>
      <div className="container">
        <h2>Admin Dashboard</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '40px' }}>
          
          {/* Form */}
          <form onSubmit={handleSubmit} style={{ background: '#0a0a19', padding: '30px', borderRadius: '16px', border: '1px solid #1f1f38', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <h3>Add / Edit Project</h3>
            <input placeholder="Project Title" required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="form-input" />
            <input placeholder="Tagline" required value={formData.tagline} onChange={e => setFormData({...formData, tagline: e.target.value})} className="form-input" />
            <textarea placeholder="Description" required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="form-input" />
            <input placeholder="Tech Stack (comma separated)" required value={formData.tech} onChange={e => setFormData({...formData, tech: e.target.value})} className="form-input" />
            <input placeholder="Live URL" required value={formData.liveUrl} onChange={e => setFormData({...formData, liveUrl: e.target.value})} className="form-input" />
            <input placeholder="Badge (Optional)" value={formData.badge} onChange={e => setFormData({...formData, badge: e.target.value})} className="form-input" />
            <input placeholder="Icon (Emoji)" required value={formData.icon} onChange={e => setFormData({...formData, icon: e.target.value})} className="form-input" />
            <textarea placeholder="Highlights (One per line)" value={formData.highlights} onChange={e => setFormData({...formData, highlights: e.target.value})} className="form-input" rows="4" />
            <button type="submit" disabled={loading} style={{ padding: '12px', background: '#6366f1', color: '#fff', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
              {loading ? 'Saving...' : 'Save Project'}
            </button>
          </form>

          {/* List */}
          <div>
            <h3>All Projects</h3>
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {[...projects, ...defaultProjects.filter(p => !projects.find(dp => dp.id === p.id))].map(p => {
                const isDb = projects.find(dp => dp.id === p.id);
                return (
                <div key={p.id} style={{ padding: '15px', background: '#131326', borderRadius: '12px', border: '1px solid #2a2a4a', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h4 style={{ margin: 0 }}>{p.title} {isDb ? <span style={{fontSize: '10px', background: 'rgba(34,197,94,0.2)', color: '#4ade80', padding: '2px 6px', borderRadius: '4px', marginLeft: '6px'}}>In Database</span> : <span style={{fontSize: '10px', background: 'rgba(99,102,241,0.2)', color: '#818cf8', padding: '2px 6px', borderRadius: '4px', marginLeft: '6px'}}>Hardcoded Code</span>}</h4>
                    <p style={{ margin: '5px 0 0 0', fontSize: '12px', color: '#888' }}>{p.tagline}</p>
                  </div>
                  <div>
                    <button onClick={() => setFormData({...p, tech: p.tech.join(', '), highlights: p.highlights.join('\n')})} style={{ padding: '5px 10px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '5px', marginRight: '10px', cursor: 'pointer' }}>Edit</button>
                    {isDb && <button onClick={() => handleDelete(p.id)} style={{ padding: '5px 10px', background: '#ef4444', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Delete</button>}
                  </div>
                </div>
              )})}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

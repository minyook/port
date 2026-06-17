import React, { useState } from 'react';
import { Mail, Phone, Globe, Send } from './LucideIcons';
import MagneticButton from './MagneticButton';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    botcheck: false,
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [resultMessage, setResultMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const formBody = new FormData();
    formBody.append('access_key', 'YOUR_ACCESS_KEY_HERE'); // Web3Forms Access Key
    formBody.append('name', formData.name);
    formBody.append('email', formData.email);
    formBody.append('message', formData.message);
    if (formData.botcheck) {
      formBody.append('botcheck', 'true');
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formBody,
      });
      const data = await response.json();
      if (response.status === 200) {
        setStatus('success');
        setResultMessage('메시지가 성공적으로 전송되었습니다! 곧 연락드리겠습니다.');
        setFormData({ name: '', email: '', message: '', botcheck: false });
      } else {
        setStatus('error');
        setResultMessage(data.message || '오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      }
    } catch (err) {
      setStatus('error');
      setResultMessage('서버 전송 중 오류가 발생했습니다.');
    }

    // Clear status message after 5 seconds
    setTimeout(() => {
      setResultMessage('');
      setStatus('idle');
    }, 5000);
  };

  return (
    <section className="section contact" id="contact" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">CONTACT</span>
          <h2 className="section-title">프로젝트 제안 & 협업 문의</h2>
        </div>
        
        <div className="contact-wrapper" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '64px', alignItems: 'start' }}>
          
          {/* Left Column: Text Info */}
          <div className="contact-info reveal-left">
            <p className="contact-text" style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '40px' }}>
              공동 연구, 프로젝트 협업, 외주 개발 의뢰 등 비즈니스 제안 및 궁금하신 사항이 있으시면 아래 양식을 통해 편하게 메시지를 보내주시기 바랍니다.
            </p>
            
            <div className="contact-details-list" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div className="contact-detail-item" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div className="contact-icon-box" style={{ width: '40px', height: '40px', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                  <Mail size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '2px' }}>Email</h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-primary)', fontWeight: '600' }}>limminyuk0815@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-detail-item" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div className="contact-icon-box" style={{ width: '40px', height: '40px', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                  <Phone size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '2px' }}>Phone</h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-primary)', fontWeight: '600' }}>010-2470-8336</p>
                </div>
              </div>

              <div className="contact-detail-item" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div className="contact-icon-box" style={{ width: '40px', height: '40px', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                  <Globe size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '2px' }}>Office Address</h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-primary)', fontWeight: '600' }}>부산진구 엄광로 176, 동의대학교</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Line Input Form */}
          <div className="contact-form-container reveal-right">
            <form onSubmit={handleSubmit} className="contact-form">
              
              {/* Honey Pot Bot Check */}
              <input 
                type="checkbox" 
                name="botcheck" 
                className="hidden" 
                style={{ display: 'none' }}
                checked={formData.botcheck}
                onChange={handleChange}
              />
              
              {/* Name Input */}
              <div className="contact-form-group">
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  className="contact-input" 
                  placeholder=" " 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="name" className="contact-label">Name</label>
              </div>

              {/* Email Input */}
              <div className="contact-form-group">
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  className="contact-input" 
                  placeholder=" " 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email" className="contact-label">E-mail</label>
              </div>

              {/* Message Input */}
              <div className="contact-form-group">
                <textarea 
                  name="message" 
                  id="message" 
                  className="contact-input" 
                  placeholder=" " 
                  rows="4"
                  style={{ resize: 'none' }}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <label htmlFor="message" className="contact-label">Content</label>
              </div>
              
              {/* Submit Status Notification */}
              {resultMessage && (
                <div 
                  style={{ 
                    padding: '12px', 
                    fontSize: '13px', 
                    marginBottom: '24px', 
                    border: '1px solid',
                    borderColor: status === 'success' ? '#86efac' : '#fca5a5',
                    backgroundColor: status === 'success' ? 'rgba(240, 253, 244, 0.5)' : 'rgba(254, 242, 242, 0.5)',
                    color: status === 'success' ? '#166534' : '#991b1b'
                  }}
                >
                  {resultMessage}
                </div>
              )}

              {/* Submit Button */}
              <MagneticButton 
                type="submit" 
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', gap: '8px' }}
                disabled={status === 'submitting'}
              >
                <span>{status === 'submitting' ? 'SENDING...' : 'SUBMIT REQUEST'}</span>
                <Send size={15} />
              </MagneticButton>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

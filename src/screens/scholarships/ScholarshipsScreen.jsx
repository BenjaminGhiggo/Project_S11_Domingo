// src/screens/scholarships/ScholarshipsScreen.jsx
// import React from 'react';
import AccessSystemIcon from '@/assets/icons/access-system.svg';
import CloseScholarshipsIcon from '@/assets/icons/close-scholarships.svg';
import EnterDataScholarsIcon from '@/assets/icons/enter-data-scholars.svg';
import GuideApplicantsIcon from '@/assets/icons/guide-applicants.svg';
import GuidePostulationIcon from '@/assets/icons/guide-postulation.svg';
import GuideScholarsIcon from '@/assets/icons/guide-scholars.svg';
import InternationalAgreementsIcon from '@/assets/icons/international-agreements.svg';
import ListOfCalledIcon from '@/assets/icons/list-of-called.svg';
import ProjectContestIcon from '@/assets/icons/project-contest.svg';
import ResultAccessIcon from '@/assets/icons/result-access.svg';
import SearchScholarshipsIcon from '@/assets/icons/search-scholarships.svg';
import SignatureAgreementsIcon from '@/assets/icons/signature-agreements.svg';
import './ScholarshipsScreen.scss';

const ScholarshipsScreen = () => {
  const applicantOptions = [
    { icon: AccessSystemIcon, text: 'Acceso de sistema de postulación' },
    { icon: GuideApplicantsIcon, text: 'Guía para postulantes' },
    { icon: ResultAccessIcon, text: 'Acceso de resultado de postulación' },
    { icon: GuidePostulationIcon, text: 'Guía de postulación' },
    { icon: ListOfCalledIcon, text: 'Lista de convocados' },
    { icon: InternationalAgreementsIcon, text: 'Acuerdos internacionales' },
  ];

  const scholarOptions = [
    { icon: GuideScholarsIcon, text: 'Guía para becarios' },
    { icon: SearchScholarshipsIcon, text: 'Buscar mis becas' },
    { icon: EnterDataScholarsIcon, text: 'Ingresar datos de becarios' },
    { icon: SignatureAgreementsIcon, text: 'Firma de convenios' },
    { icon: CloseScholarshipsIcon, text: 'Cierre de becas' },
    { icon: ProjectContestIcon, text: 'Concurso de proyectos' },
  ];

  return (
    <div className="scholarships-container">
      <h2 className="scholarships-title">Info de Becas</h2>
      <div className="scholarships-content">
        <div className="section">
          <div className="section-title">POSTULANTES</div>
          <div className="options-grid">
            {applicantOptions.map((option, index) => (
              <div className="option-card" key={index}>
                <img src={option.icon} alt={option.text} className="option-icon" />
                <span>{option.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="section">
          <div className="section-title">BECARIOS</div>
          <div className="options-grid">
            {scholarOptions.map((option, index) => (
              <div className="option-card" key={index}>
                <img src={option.icon} alt={option.text} className="option-icon" />
                <span>{option.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipsScreen;

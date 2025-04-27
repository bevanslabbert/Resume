import React from 'react';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  location?: string;
}

const TimelineComponent: React.FC = () => {
  const timelineItems: TimelineItem[] = [
    {
      date: "Jan 2023 - Present",
      title: "BSc Hons. Computer Science",
      description: "Specializing in neural networks, self-organizing maps, and advanced algorithmic research.",
      location: "University of Example"
    },
    {
      date: "Dec 2023 - Present",
      title: "Technical Consultant",
      description: "Developing custom full-stack applications for clients, collaborating on large projects, and implementing business solutions.",
      location: "Tech Company Inc."
    },
    {
      date: "Jan 2023 - Nov 2023",
      title: "Technical Consultant Internship",
      description: "Developed internal full-stack applications with SAP UI5 frontend and ExpressJS backend, built CI/CD pipelines.",
      location: "Tech Company Inc."
    },
    {
      date: "Jan 2020 - Dec 2022",
      title: "BSc Computer Science",
      description: "Led development of VoteVault blockchain project, studied AI/ML, and built compilers.",
      location: "University of Example"
    }
  ];

  return (
    <div className="timeline-container">
      {timelineItems.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-content">
            <div className="timeline-date">{item.date}</div>
            <h3 className="timeline-title">{item.title}</h3>
            {item.location && <div className="timeline-location">{item.location}</div>}
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineComponent;